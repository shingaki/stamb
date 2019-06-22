$(document).ready(function() {

    var $newUserName = $("input.new-username");
    var $newFirstInput = $("input.new-first");
    var $newLastInput = $("input.new-last");
    var $newEmailInput = $("input.new-email");
    var $newPasswordInput = $("input.new-password");

    function insertNewRegistration(event) {
        event.prevntDefault();
        var newRegistration = {
            username: $newUserName.val().trim(),
            first: $newFirstInput.val().trim(),
            last: $newLastInput.val().trim(),
            email: $newEmailInput.val().trim(),
            password: $newPasswordInput.val().trim()
        };

        $.post("/api/registration", newRegistration);
        $newUserName.val("");
        $newFirstInput.val("");
        $newLastInput.val("");
        $newEmailInput.val("");
        $newPasswordInput.val("");
    }

})




