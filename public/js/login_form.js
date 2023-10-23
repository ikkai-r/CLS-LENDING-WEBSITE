const loginBtn = document.querySelector("#loginBtn");

loginBtn?.addEventListener("click", async function(e){
	e.preventDefault();
    let email = $("#email-login").val();
    let password = $("#pass-login").val();
    let verified;

    var data = {
        email: email,
        password: password
    }
    console.log(data);

    try {
        const response = await fetch(`/login/verifyLogInCredentials?email=${data.email}&password=${data.password}`, {
            method: "GET"
        });
        verified = await response.json();
        console.log("verified: " + verified);
    } catch(err) {
        console.log(err);
        verified = false;
    }

    if(verified) {
        console.log("Correct credentials");
        window.location.href="/c_dashboard";
        testing();
    } else {
        console.log("Incorrect credentials");
    }

});