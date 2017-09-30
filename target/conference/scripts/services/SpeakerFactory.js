angular.module('conference').factory('SpeakerResource', function($resource){
    var resource = $resource('rest/speakers/:SpeakerId',{SpeakerId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});