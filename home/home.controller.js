(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['UserService', '$rootScope'];
    function HomeController(UserService, $rootScope) {
        var vm = this;

        vm.user = null;
        vm.allUsers = [];
        $http.post('https://idtvoip.in/api/auth', data, config)
            //$http.post('https://183.82.106.207/api/Values/Login', data, config)
        .success(function (data) {
            console.log( data );
        })
        .error( function(error){ console.log("authentication failed :"+error ) });
        
        vm.username = 'Vijay Vijay';
        vm.organization = 'Harish Raja';
        vm.extcount = 3;
        vm.lpresense = [{"status":"Available","Name":"Vikas Ravindran","Ext":"000502001","Label":"Harish"},{"status":"Disconnected","Name":"Zali Ritholtz","Ext":"000502002","Label":"Zali"},{"status":"Disconnected","Name":"Vijay Vijay","Ext":"000502003","Label":"Vijay"}];

        vm.deleteUser = deleteUser;

        initController();

        function initController() {
            loadCurrentUser();
            loadAllUsers();
        }

        function loadCurrentUser() {
            UserService.GetByUsername($rootScope.globals.currentUser.username)
                .then(function (user) {
                    vm.user = user;
                });
        }

        function loadAllUsers() {
            UserService.GetAll()
                .then(function (users) {
                    vm.allUsers = users;
                });
        }

        function deleteUser(id) {
            UserService.Delete(id)
            .then(function () {
                loadAllUsers();
            });
        }
    }

})();