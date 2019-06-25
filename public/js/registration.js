$(function () {
    $(".submit-button-100").on("click", function (event) {
        // $(".login100-form-btn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.

        var newUser = {
            fullname: $("#ADK-fullname").val().trim(),
            username: $("#ADK-username").val().trim(),
            email: $("#ADK-email").val().trim(),
            password: $("#ADK-password").val().trim(),
            share: 1,
            story: "No Where To Go",


        };


        // Send the GET request.
        $.ajax("/api/register/", {
            type: "PUT",
            data: newUser
        }).then(
            function () {
                console.log("created new user");
                // if (!validUser) { console.log('valid user is false') }
                // Reload the page to get the updated list
                // location.reload();
                // if (statusCode == 404) { console.log("error 404")};
            }
        );
    });
});