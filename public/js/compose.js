$(".btn-share").on("click", function (event) {

    event.preventDefault();

    var userid = $("#userid").html();
    var mytitle = $("#ADK-title").val().trim();
    var mystory = $("#ADK-story").val().trim();

    sessionStorage.setItem("userid", userid);
    
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
        function (mycode) {
            console.log("mycode " + mycode);
            window.location.replace("/story" + mycode.id);});
});