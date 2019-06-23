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
        
        
        // Send the GET request.
        $.ajax("/api/login/" + username, {
            type: "GET",
            data: username
        }).then(
            function (error) {
                console.log("need to validate the user");
                if (error) { $("#username-error").text("I am changed") };
                // if (!validUser) { console.log('valid user is false') }
                // Reload the page to get the updated list
                // location.reload();
                // if (statusCode == 404) { console.log("error 404")};
            }
        );
    });
});
