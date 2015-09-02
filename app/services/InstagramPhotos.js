(function(){
    angular
        .module('LamaApp')
        .factory('photosInstagram', photosInstagram)


    function photosInstagram($http) {

        var getPhotosInstagram = function() {
            var response = [],
                accessToken = '217533122.019b10e.84706d9c410c49b49f4a80892cfe88f3',
                hashtag = 'lamaroom';

            $http.jsonp('https://api.instagram.com/v1/tags/'+hashtag+'/media/recent?client_id='+accessToken+'&access_token='+accessToken+'&callback=JSON_CALLBACK')
                .success(dataSuccess);

            function dataSuccess(data) {
                for(var i=0; i < 10; i++) {
                    response.push(data.data[i]);
                } 
                console.log(response);                                                                   
            }

            return response;
        }
        
        return {
            getPhotosInstagram: getPhotosInstagram
        };
    }
})();