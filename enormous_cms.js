/*******************************************************
        ENORMOUS ADMIN PANEL
            (Add your stuff below.)
            (Check enourmousCMS readme for help)
*******************************************************/

var my_name = "Hunter S Thompson";
var projects = [
    {title: "Main project", description: "Cool one", url: "https://onetius.com"},
    //{title: "Second project", description: "Description", url: "https://"},
];
var social_profiles = [
    {title: "Facebook", url: "https://facebook.com/"},
    //{title: "Twitter", url: "https://twitter.com/"},
];

/*******************************************************
        ENORMOUS MAGIC HAPPENING
            (Do not touch.)
*******************************************************/
document.title = my_name + "'s personal site";
// GREETING
document.getElementById('greetings').innerHTML = my_name + "'s personal site.";
// PROJECTING EGO
for (var i = 0; i < social_profiles.length; i++) document.getElementById('social_profiles').innerHTML += '<li>' + '<a href="' + social_profiles[i].url + '">' + social_profiles[i].title + '</a>' + '</li>';
// PROJECTING IDEAS
for (var i = 0; i < projects.length; i++) document.getElementById('projects').innerHTML += '<li>' + '<a href="' + projects[i].url + '">' + projects[i].title + '</a>' + ' ' + '<small>' + projects[i].description + '</small>' + '</li>';
