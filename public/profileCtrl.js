angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
	$scope.getProfile = function() {
		friendService.getFriends().then(function(response){
			console.log(response);
			$scope.currentUser = response.currentUser;
			$scope.friends = response.friends;
		})
	}();
});
