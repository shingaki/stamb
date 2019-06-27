$(".btn-share").on("click", function (event) {

    event.preventDefault();

    var userid = $("#userid").html();
    var mytitle = $("#ADK-title").val().trim();
    var mystory = $("#ADK-story").val().trim();

    console.log("myuser id " + userid);

    var mytitleandstory = {
        title: mytitle,
        mystory: mystory,
        id: userid
    };


    // Send the GET request.
    $.ajax("/api/update/" + userid, {
        type: "PUT",
        data: mytitleandstory
    }).then(
        function (error) {
            var errmsg = JSON.stringify(error);

            if (errmsg.includes("error")) { $("#username-error").text("Invalid Username or Password") }
            else { window.location.replace("/compose" + error.id );};
            // if (!validUser) { console.log('valid user is false') }
            // Reload the page to get the updated list
            // location.reload();
            // if (statusCode == 404) { console.log("error 404")};
        }
    );



});