(function(){
    angular
        .module('LamaApp')
        .controller('InstaCtrl', InstaCtrl);        

    function InstaCtrl (membersVk, membersInstagram, photosInstagram) {
        var vm = this;

        vm.countVk = membersVk.getMembersVk();
        vm.countInstagram = membersInstagram.getMembersInstagram();
        vm.photos = photosInstagram.getPhotosInstagram();
    } 
})();