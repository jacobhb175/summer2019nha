//Delaring Variables
var job;
var lands;
//Creating a class to hold the name
var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return User;
}());
$(document).ready(function () {
    //Record name
    $(".name").click(function () {
        var firstName = prompt("What is your first name?");
        console.log("first name " + firstName);
        var lastName = prompt("What is your last name?");
        console.log("last name " + lastName);
        var user1 = new User(firstName, lastName);
        console.log("user1 " + user1);
    });
    //Set job
    $(".job").click(function () {
        job = this.id;
        console.log("job " + job);
    });
    //Set lands
    $(".lands").click(function () {
        lands = this.id;
        console.log("lands " + lands);
    });
    //Link to homepage, bring variables in url
    $(".submit").click(function () {
        console.log("job " + job + " lands " + lands);
        location.href = "file:///Users/kimberlybernhardt/Documents/summer2019nha/homeindex.html?job=" + job + "&lands=" + lands;
    });
});
