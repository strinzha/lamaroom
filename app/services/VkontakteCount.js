(function(){
    angular
        .module('LamaApp')
        .factory('membersVk', membersVk)

    function membersVk($http) {

        var getMembersVk = function() {
            var response = [],
                methodName = 'groups.getMembers',
                groupId = 76922753;

            $http.jsonp('https://api.vk.com/method/'+methodName+'?group_id='+groupId+'&callback=JSON_CALLBACK')
                .success(dataSuccess);

            function dataSuccess(data) {                     
                response.push(data);                             
            }

            return response;
        }
        
        return {
            getMembersVk: getMembersVk
        };
    }
})();