
angular.module('conference').controller('NewSpeakerController', function ($scope, $location, locationParser, flash, SpeakerResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.speaker = $scope.speaker || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            flash.setMessage({'type':'success','text':'The speaker was created successfully.'});
            $location.path('/Speakers');
        };
        var errorCallback = function(response) {
            if(response && response.data) {
                flash.setMessage({'type': 'error', 'text': response.data.message || response.data}, true);
            } else {
                flash.setMessage({'type': 'error', 'text': 'Something broke. Retry, or cancel and start afresh.'}, true);
            }
        };
        SpeakerResource.save($scope.speaker, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Speakers");
    };
});