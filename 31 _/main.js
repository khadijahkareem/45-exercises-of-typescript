var userName = ["mahad", "ali", "zeshaan", "admin", "usman"];
if (userName.length === 0) {
    console.log("your array is empty we need to find some users!");
}
else {
    userName.forEach(function (oneUser) {
        if (oneUser === "admin") {
            console.log("hello ".concat(oneUser, ", would you like to see status report?"));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logimg again."));
        }
    });
}
