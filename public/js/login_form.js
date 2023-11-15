const loginBtn = document.querySelector("#login-button");
const emailLbl = document.querySelector("#email-label");
const passwordLbl = document.querySelector("#password-label");

loginBtn?.addEventListener("click", async function(e){
	e.preventDefault();
    let email = $("#email-login").val();
    let password = $("#pass-login").val();
    let verified = false;
    let email_exists = false;

    // Default Values
    emailLbl.textContent = "Your email";
    passwordLbl.textContent = "Password";

    var data = {
        email: email,
        password: password
    }
    console.log(data);

    // Check Employee DB first
    try {
        const response = await fetch(`/login/verifyEmployeeEmail?email=${data.email}`, {
            method: "GET"
        });
        email_exists = await response.json();
    } catch(err) {
        console.log(err);
    }

    // Check Employee's Password in DB
    if(email_exists) {
        try {
            const response = await fetch(`/login/employeeLogIn?email=${data.email}&password=${data.password}`, {
                method: "GET"
            });
            verified = await response.json();
            console.log("verified: " + verified);
        } catch(err) {
            console.log(err);
        }
    
        if(verified) {
            console.log("Correct credentials");
            window.location.href="/dashboard";
        } else {
            console.log("Incorrect credentials");
            passwordLbl.textContent = "Password (Incorrect)";
        }
    }

    // Check Client DB if email not found in Employee DB
    else {
        try {
            const response = await fetch(`/login/verifyClientEmail?email=${data.email}`, {
                method: "GET"
            });
            email_exists = await response.json();
        } catch(err) {
            console.log(err);
        }
    
        if(email_exists) {
            try {
                const response = await fetch(`/login/clientLogIn?email=${data.email}&password=${data.password}`, {
                    method: "GET"
                });
                verified = await response.json();
                console.log("verified: " + verified);
            } catch(err) {
                console.log(err);
            }
        
            if(verified) {
                console.log("Correct credentials");
                window.location.href="/c_dashboard";
            } else {
                console.log("Incorrect credentials");
                passwordLbl.textContent = "Password (Incorrect)";
            }
        } else {
            console.log("Not Exists");
            emailLbl.textContent = "Your email (Incorrect)";
        }

    }

});