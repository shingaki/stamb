
    $(".submit-button-100").on("click", function (event) {

        event.preventDefault();

        console.log("here");

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
            type: "POST",
            data: newUser
        }).then(
            function () {
                console.log("created new user");
                window.location.replace("/thankyou");
            }
        );
});