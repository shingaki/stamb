// Get references to page elements
var $user = $("#user");
var $email = $("#email");
var $password = $("#password");
var $last = $("#last");
var $first = $("#first");
var confirmPassword = $("#confirm_password");


console.log("register.handlebars.js")


// The API object contains methods for each kind of request we'll make
var API = {
    saveUser: function(user) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/user",
            data: JSON.stringify(user)
        });
    },
    getUsers: function() {
        return $.ajax({
            url: "api/user",
            type: "GET"
        });
    },
    deleteUser: function(id) {
        return $.ajax({
            url: "api/user/" + id,
            type: "DELETE"
        });
    }
};

// refreshUsers gets new users from the db and repopulates the list
var refreshUsers = function() {
    API.getUsers().then(function(data) {
        var $users = data.map(function(user) {
            var $a = $("<a>")
                .text(user.text)
                .attr("href", "/user/" + user.id);

            var $li = $("<li>")
                .attr({
                    class: "list-group-item",
                    "data-id": user.id
                })
                .append($a);

            var $button = $("<button>")
                .addClass("btn btn-danger float-right delete")
                .text("ｘ");

            $li.append($button);

            return $li;
        });

        $userList.empty();
        $userList.append(users);
    });
};

// handleFormSubmit is called whenever we submit a new user
// Save the new user to the db and refresh the list
var handleFormSubmit = function(event) {
    event.preventDefault();

    var user = {
        text: $userText.val().trim(),
        description: $userDescription.val().trim()
    };

    if (!(user.text && user.description)) {
        alert("You must enter an user!");
        return;
    }

    API.saveUser(user).then(function() {
        refreshUsers();
    });

    $userText.val("");
    $userDescription.val("");
};

// handleDeleteBtnClick is called when an user's delete button is clicked
// Remove the user from the db and refresh the list
var handleDeleteBtnClick = function() {
    var idToDelete = $(this)
        .parent()
        .attr("data-id");

    API.deleteUser(idToUser).then(function() {
        refreshUser();
    });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$userList.on("click", ".delete", handleDeleteBtnClick);


// Now