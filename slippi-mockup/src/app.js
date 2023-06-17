var app = angular.module("Slippi-Homepage", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "views/about.html",
            controller: "AboutController"
        })
        .when("/downloads", {
            templateUrl: "views/downloads.html",
            controller: "DownloadsController"
        })
        .when("/leaderboards", {
            templateUrl: "views/leaderboards.html",
            controller: "LeaderboardsController"
        })
        .otherwise({
            redirectTo: "/about"
        });
});

