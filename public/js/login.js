// $(document).ready(function () {

$(function () {
    $(".login100-form-btn").on("click", function (event) {
        // $(".login100-form-btn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var username = $("#login-username").val().trim();
        var password = $("#login-password").val().trim();
        // var validUser = false;
        
        console.log("username " + username);
        console.log("password " + password);

        var loginUser = {
            username: username,
            password: password
        };

        console.log("loginUser  " + loginUser.username);
        console.log("loginPassword  " + loginUser.password);





        // Send the GET request.
        $.ajax("/api/login/" + username, {
            type: "POST",
            data: loginUser
        }).then(
            function (error) {
                console.log("need to validate the user");
                console.log("error " + error);
                var errmsg = JSON.stringify(error);
                console.log("error " + errmsg);

                if (errmsg.includes("error")) { $("#username-error").text("Invalid Username or Password") }
                else { window.location.replace("/story" );};
                // if (!validUser) { console.log('valid user is false') }
                // Reload the page to get the updated list
                // location.reload();
                // if (statusCode == 404) { console.log("error 404")};
            }
        );
    });
});
