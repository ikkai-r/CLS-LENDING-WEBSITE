const Loan = require('../server/schema/Loan')
const controller = {

    getIndex: function(req, res) {
        // your code here
        res.render('login', {header: 'test', layout: 'layouts/main_no', css: '/css/login2.css'}); // This is to load the page initially
    }, 
    getRegister: function(req, res) {
        res.render('register', {layout: 'layouts/main_no', css: '/css/register.css'})
    },
    getDashboard: async function (req, res) {
        try {
            const getSuccessfulLoans = await Loan.aggregate(
                [
                    {
                        $match: { 
                            category: 'Complete',
                            approved: true 
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
                            approved: true 
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
                        $match: { approved: false }
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
        } catch(err) {
            console.log(err);
        }
        
    },
    getClientDashboard: function (req, res) {
        res.render('client_dashboard', {layout: 'layouts/main_no', css: '/css/client_profile.css'});
    },
    getClientProfile: function (req, res) {
        res.render('client_profile', {layout: 'layouts/main', css: '/css/client_profile.css'});
    } ,
    getLoanRecords: async function (req, res) {
        try {
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
                        $match: { approved: false }
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

}

module.exports = controller;