(function(){
    angular
        .module('LamaApp')
        .factory('membersInstagram', membersInstagram)

    function membersInstagram($http) {

        var getMembersInstagram = function() {
            var response = [],
                accessToken = '217533122.019b10e.84706d9c410c49b49f4a80892cfe88f3',
                userId = 1772246652;

            $http.jsonp('https://api.instagram.com/v1/users/'+userId+'/?access_token='+accessToken+'&callback=JSON_CALLBACK')
                .success(dataSuccess);

            function dataSuccess(data) {                     
                response.push(data.data);                             
            }

            return response;
        }
        
        return {
            getMembersInstagram: getMembersInstagram
        };
    }
})();