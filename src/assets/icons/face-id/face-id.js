evenPicServices.directive('faceIdIcon', function() {
    return {
        restrict: 'E',
        require: 'cy',
        replace: true,
        templateUrl: 'src/assets/icons/face-id/face-id.html',
    };
});
