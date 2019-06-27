$(".submit-button-100").on("click", function (event) {

    event.preventDefault();

    if ($("#ADK-fullname").val().length == 0) {
        $("#reguser-error").text("Please provide your full name.");
    }

    if ($("#ADK-username").val().length == 0) {
        $("#reguser-error").text("Please provide a unique user name.");
    }

    if ($("#ADK-email").val().length == 0) {
        $("#reguser-error").text("Please provide your email address.");
    }

    if ($("#ADK-password").val().length == 0) {
        $("#reguser-error").text("Please provide a password.");
    }

    var username = $("#ADK-fullname").val().trim();


    var newUser = {
        fullname: $("#ADK-fullname").val().trim(),
        username: $("#ADK-username").val().trim(),
        email: $("#ADK-email").val().trim(),
        password: $("#ADK-password").val().trim(),
        share: 1,
        mystory: "No Where To Go",
    };

    // See if the user name is unique
    $.ajax("/api/register/user/" + username, {
        type: "POST",
        data: newUser
    }).then(
        function (error) {
            console.log("not unique user");
            var regerrmsg = JSON.stringify(error);
            console.log("error " + regerrmsg);
            if (regerrmsg.includes("error")) {
                $("#username-error").text("User Name Must Be Unique.")
                document.getElementById("registration-form").reset();
            } else {
                $.ajax("/api/register/", {
                    type: "POST",
                    data: newUser
                }).then(
                    function (newuser) {
                        console.log("created new user");
                        window.location.replace("/compose" + newuser.id);
                    }
                );

            }
            ;
        }
    );
});