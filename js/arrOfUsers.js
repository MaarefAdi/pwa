
// Get list of users from localStorage and generate HTML Table
var creatUsersTable = function (divSelector) {
    // Empty users table
    $("tbody").html(null);
    $("#form").hide();
    // get list of users from localStorage
    let users = JSON.parse(localStorage.tabUsers);
    // Generate HTML Table
    let i =0;
    users.forEach(function (e) {
        $(divSelector)
        .append(`<tr>
                   <td><img class="userImg" _index="${i}" src=img/${e.src}></td>
                   <td>${e.utilisateur}</td>
                   <td>${e.mdp}</td>
                </tr>`);
        i++;
    })
    // Add event handlers
    $(".userImg").click(editUser);
    $("#tabUsers").DataTable();
};

var editUser = function () {
    $("#form").show("slow");
    let users = JSON.parse(localStorage.tabUsers);
    currentUserIndex = this.getAttribute("_index");
    $("#user").val(users[currentUserIndex].utilisateur);
    $("#mdp").val(users[currentUserIndex].mdp);
    $("#img").val(users[currentUserIndex].src);
};


var saveUser = function (e) {
    e.preventDefault();
    // Save modified user to localStorage
    let users = JSON.parse(localStorage.tabUsers);
    users[currentUserIndex].utilisateur = $("#user").val();
    users[currentUserIndex].mdp = $("#mdp").val();
    users[currentUserIndex].src = $("#img").val();
    localStorage.tabUsers = JSON.stringify(users);
    // Refresh / re-render HTML users Table
    creatUsersTable(params.TableTarget);
};

var deleteUser = function (e) {
    e.preventDefault();
    // Delete user from localStorage
    let users = JSON.parse(localStorage.tabUsers);
    users.splice(currentUserIndex, 1);
    localStorage.tabUsers = JSON.stringify(users);
    // Refresh / re-render HTML users Table
    creatUsersTable(params.TableTarget);
};

// Document Ready Event handler: initialization
$(document).ready(function () {
    // Create Users HTML Table according to array of users saved in localStorage
    params = {TableTarget : "tbody"};
    creatUsersTable(params.TableTarget);
    // Edit buttons events
    $("#save").click(saveUser);
    $("#sup").click(deleteUser);
})
