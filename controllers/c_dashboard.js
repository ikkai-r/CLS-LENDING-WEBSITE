const Client = require('../server/schema/Client');
const Loan = require('../server/schema/Loan');
const mongoose = require('mongoose')
const hbs = require('hbs');

hbs.registerHelper('ifEquals', function (a, b, options) {
    if (a == b) { return options.fn(this); }
    return options.inverse(this);
});

const clientDashboardRedirect = async(req, res) =>{
    res.redirect('/');
}

const getClientDashboard = async (req, res) => {
    try {
        const clientId = req.params.id

        const getClient = await Client.aggregate(
            [
                {
                    $match: { $expr : { $eq: [ '$_id' , { $toObjectId: clientId} ] } } 
                },
                {
                  $project: {
                     first_name: 1,
                     middle_name: 1,
                     last_name: 1,
                     date_creation: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                     gender: 1,
                     email: 1,
                     contact_num: 1,
                     addtl_address: 1,
                     city: 1,
                     province: 1,
                     region: 1,
                     fb_link: 1,
                  }
                }
            ]
        );

        const totalAccepted = await Loan.aggregate(
            [
                {
                    $match: { 
                        approved: 'Approved',
                        $expr : { $eq: [ '$client' , { $toObjectId: clientId} ] } 
                    } 
                },
              {
                $group:
                  {
                    _id : null,
                    totalAmount: { $sum: "$balance" } ,
                    count: { $sum: 1 }
                  }
                },
                
            ]
         );
         console.log(totalAccepted)
         const totalPending = await Loan.aggregate(
            [
                {
                    $match: { 
                        approved: 'Pending',
                        $expr : { $eq: [ '$client' , { $toObjectId: clientId} ] } 

                    }
                },
                {
                    $group:
                      {
                        _id : null,
                        totalAmount: { $sum: "$balance" } ,
                        count: { $sum: 1 }
                      }
                    },
                
            ]
         );

         const totalOverdue = await Loan.aggregate(
            [
                {
                    $match: { 
                        approved: 'Overdue',
                        $expr : { $eq: [ '$client' , { $toObjectId: clientId} ] } 

                    }
                },
                {
                    $group:
                      {
                        _id : null,
                        totalAmount: { $sum: "$balance" } ,
                        count: { $sum: 1 }
                      }
                    },
                
            ]
         );

         const totalComplete = await Loan.aggregate(
            [
                {
                    $match: { 
                        approved: 'Approved',
                        status: 'Paid',
                        $expr : { $eq: [ '$client' , { $toObjectId: clientId} ] } 

                    }
                },
                {
                    $group:
                      {
                        _id : null,
                        totalAmount: { $sum: "$balance" } ,
                        count: { $sum: 1 }
                      }
                    },
                
            ]
         );
         const totalRejected = await Loan.aggregate(
            [
                {
                    $match: { 
                        approved: 'Rejected',
                        $expr : { $eq: [ '$client' , { $toObjectId: clientId} ] } 

                    }
                },
                {
                    $group:
                      {
                        _id : null,
                        count: { $sum: 1 }
                      }
                    },
                
            ]
         );

         const totalLoans = await Loan.aggregate(
            [
                {
                    $match: { 
                        $expr : { $eq: [ '$client' , { $toObjectId: clientId} ] } 
                    }
                },
                {
                    $project: {
                       approved: 1,
                       reference: 1,
                       date_applied: { $dateToString: { format: "%Y-%m-%d", date: "$date_applied" } },
                       category: 1,
                       capital: 1,
                       interest: 1,
                       balance: 1,
                    }
                },
                {
                    $sort: {date: -1}
                },
            ]
         );
        
        const getClientDetails = getClient[0]
        let totalEstimates = 0
        let totalAcceptedNum = 0
        let totalAcceptedMoney = 0.00
        let totalPendingNum = 0
        let totalPendingMoney = 0.00
        let totalLoanInvoices = 0
        let totalPaidNum = 0
        let totalPaidMoney = 0.00
        let totalOverdueNum = 0
        let totalOverdueMoney = 0
        let approvalRate = 0.00
        let completionRate = 0.00

        if(totalAccepted.length > 0) {
            totalEstimates += totalAccepted[0].count
            totalAcceptedNum = totalAccepted[0].count
            totalAcceptedMoney += totalAccepted[0].totalAmount
        }
        if (totalPending.length > 0){
            totalLoanInvoices += totalPending[0].count
            totalEstimates += totalPending[0].count
            totalPendingNum = totalPending[0].count
            totalPendingMoney += totalPending[0].totalAmount
        }
        if(totalOverdue.length > 0) {
            totalLoanInvoices += totalOverdue[0].count
            totalOverdueNum = totalOverdue[0].count
            totalOverdueMoney += totalOverdue[0].totalAmount
        }
        if (totalComplete.length > 0){
            totalLoanInvoices += totalComplete[0].count
            totalPaidNum = totalComplete[0].count
            totalPaidMoney += totalComplete[0].totalAmount
        }

        if (totalRejected.length > 0 && totalAccepted.length > 0){
            approvalRate = ((totalAccepted[0].count)/ (totalRejected[0].count+totalAccepted[0].count)) * 100
        }
        else if (totalRejected.length == 0 && totalAccepted.length > 0){
            approvalRate = 100.00
        }
        
        if (totalComplete.length > 0 && totalOverdue.length > 0){
            completionRate = ((totalComplete[0].count) / (totalComplete[0].count+totalOverdue[0].count)) * 100
        }
        else if (totalComplete.length > 0 && totalOverdue.length == 0){
            completionRate = 100.00
        }


        res.render('client_dashboard', {
            layout: 'layouts/main_no', 
            css: '/css/client_profile.css',
            first_name: getClientDetails.first_name,
            middle_name: getClientDetails.middle_name,
            last_name: getClientDetails.last_name,
            date_creation: getClientDetails.date_creation,
            gender: getClientDetails.gender,
            email: getClientDetails.email,
            contact_num: getClientDetails.contact_num,
            addtl_address: getClientDetails.addtl_address,
            city: getClientDetails.city,
            province: getClientDetails.province,
            region: getClientDetails.region,
            fb_link: getClientDetails.fb_link,

            total_estimates: totalEstimates,
            accepted_num: totalAcceptedNum,
            accepted_money: totalAcceptedMoney,
            pending_num: totalPendingNum,
            pending_money: totalPendingMoney,
            total_loan_invoices: totalLoanInvoices,
            paid_num: totalPaidNum,
            paid_money: totalPaidMoney,
            overdue_num: totalOverdueNum,
            overdue_money: totalOverdueMoney,
            approval_rate: approvalRate,
            completion_rate: completionRate,
            loans: totalLoans


        })
    }
    catch(err){
        console.log(err);
    }
}

module.exports = {
    clientDashboardRedirect,
    getClientDashboard,
}