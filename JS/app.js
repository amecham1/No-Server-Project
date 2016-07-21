angular.module("getInfo", [ui.router])
    .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider

                .state('home', {
                    url: '/',
                    templateUrl: "HTML/main.html"
                }),

                .state('quotes',{
                    url: '/quotes',
                    templateUrl:"HTML/quotes.html"
                }),

                .state('weather',{
                    url: '/weather',
                    templateUrl:"HTML/weather.html"
                }),

                .state('info',{
                    url: '/info',
                    templateUrl:"HTML/info.html"
                })

                $urlRouterProvider
            .otherwise('/');
