angular.module('jemaat').service("SigUtility", function(){
	
	this.getBaseUrl = function() {
		return window.location.origin?window.location.origin+'/':window.location.protocol+'/'+window.location.host+'/';
	}
});