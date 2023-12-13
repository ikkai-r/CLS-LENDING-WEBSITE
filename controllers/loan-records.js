const Loan = require('../server/schema/Loan');
const getLoanRecords = async function (req, res) {
    try {
        const getLoans = await Loan.aggregate(
            [
                {
                  $project: {
                     reference: 1,
                     date_applied: { $dateToString: { format: "%Y-%m-%d", date: "$date_applied" } },
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
                     date_applied: { $dateToString: { format: "%Y-%m-%d", date: "$date_applied" } },
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
        res.render('loan-records', {
            layout: 'layouts/main', 
            css: '/css/hamburger.css',
            loan: getLoans,
            unapproved_loan: getUnapprovedLoans
        });
    
    } catch(err) {
        console.log(err);
    }
    
}
module.exports = {
    getLoanRecords,
}