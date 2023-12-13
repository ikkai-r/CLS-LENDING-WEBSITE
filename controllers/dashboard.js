const Loan = require('../server/schema/Loan')
const getDashboard = async function (req, res) {
    try {
        const getSuccessfulLoans = await Loan.aggregate(
            [
                {
                    $match: { 
                        category: 'Complete',
                        approved: 'Approved' 
                    }
                 },
                 {
                    $count: "sLoans"
                }
               
              ]
        )
        // get near deadlines unsure

        const getOverdueLoans = await Loan.aggregate(
            [
                {
                    $match: { 
                        category: 'Overdue',
                        approved: 'Approved' 
                    }
                 },
                 {
                    $count: "oLoans"
                }
               
              ]
        );

        

        const getLoans = await Loan.aggregate(
            [
                {
                  $project: {
                     reference: 1,
                     date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                     category: 1,
                     capital: 1,
                     interest: 1,
                     balance: 1,
                  }
                },
                {
                    $sort : { date : -1 } 
                }
              ]
        );

        const getUnapprovedLoans = await Loan.aggregate(
            [
                {
                    $match: { approved: 'Pending' }
                 },
              
                {
                  $project: {
                     reference: 1,
                     date: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                     category: 1,
                     capital: 1,
                     interest: 1,
                     balance: 1,
                  }
                },
                {
                    $sort : { date : -1 } 
                }
              ]
        );
        if (getSuccessfulLoans.length == 0 && getOverdueLoans.length == 0){
            res.render('dashboard', 
            {
                layout: 'layouts/main', 
                css: '/css/hamburger.css',
                loan: getLoans,
                successful_loans: 0,
                near_deadline_loans: 0,
                overdue_loans: 0,
                unapproved_loan: getUnapprovedLoans
                
            });
        }
        else if (getSuccessfulLoans.length == 0){
            res.render('dashboard', 
            {
                layout: 'layouts/main', 
                css: '/css/hamburger.css',
                loan: getLoans,
                successful_loans: 0,
                near_deadline_loans: 0,
                overdue_loans: getOverdueLoans[0].oLoans,
                unapproved_loan: getUnapprovedLoans
                
            });
        }
        else if (getOverdueLoans.length == 0){
            res.render('dashboard', 
            {
                layout: 'layouts/main', 
                css: '/css/hamburger.css',
                loan: getLoans,
                successful_loans: getSuccessfulLoans[0].sLoans,
                near_deadline_loans: 0,
                overdue_loans: 0,
                unapproved_loan: getUnapprovedLoans
                
            });
        }
        else{
            res.render('dashboard', 
            {
                layout: 'layouts/main', 
                css: '/css/hamburger.css',
                loan: getLoans,
                successful_loans: getSuccessfulLoans[0].sLoans,
                near_deadline_loans: 0,
                overdue_loans: getOverdueLoans[0].oLoans,
                unapproved_loan: getUnapprovedLoans
                
            });
        }
    } catch(err) {
        console.log(err);
    }
    
}

module.exports = {
    getDashboard,
}