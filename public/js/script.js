var sitePages = [
    {
        keyword: "home",
        link: '/home'
    },
    {
        keyword: "beginner",
        link: '/beginner'
    },
    {
        keyword: "basic",
        link: '/basic'
    },
    {
        keyword: "elliptical",
        link: '/elliptical'
    },
    {
        keyword: "bikes",
        link: '/bikes'
    },
    {
        keyword: "killer",
        link: '/killer'
    },
    {
        keyword: "calendar",
        link: '/calendar'
    },
    {
        keyword: "cardio",
        link: '/cardio'
    },
    {
        keyword: "profile",
        link: '/profile'
    },
    {
        keyword: "treadmill",
        link: '/treadmill'
    },
    {
        keyword: "weight",
        link: '/weightlift'
    },
    {
        keyword: "leg",
        link: '/leg'
    }
]

function searchWebsite(){
    var searchInput = document.getElementById("search").value;
    for (i = 0; i < sitePages.length; i++ ){
        if( 0 == searchInput.localeCompare(sitePages[i].keyword)){
            window.location = sitePages[i].link;
            console.log(window.location);
            return;
        }
    }
    alert("No webpages match. Try searching again.");
}

function checkLogin(){
    var email = document.getElementById("username").value;
    var password = document.getElementById("password").value;
}

// //to make enter do something in input field
// var input = document.getElementById("search");
// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
// //    document.getElementById("button").click();
//    searchWebsite();
//   }
// });