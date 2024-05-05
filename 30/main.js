// creating a array
var UserNames = ["mahad", "ali", "zeshan", "admin", "usman"];
// using on each loop on array
UserNames.forEach(function (OneUser) {
    if (OneUser === "admin") {
        console.log("hello ".concat(OneUser, ", would you like to see status report?"));
    }
    else {
        console.log("hello ".concat(OneUser, ", thank you for loging again."));
    }
});
