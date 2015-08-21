/// <reference path="../App.js" />
/*global app*/
(function() {
    'use strict';

    // The Office initialize function must be run each time a new page is loaded
    Office.initialize = function(reason) {
        $(document).ready(function() {
            app.initialize();
            getDoorayTaskRef();

        });
    };
})();

function getDoorayTaskRef() {
	var regEx = /#([\w\-]+)\/([\d]+)/g;
	
	var content = "";
	
	var matches = Office.context.mailbox.item.getRegExMatchesByName("BodyFilter");
	for(var i = 0; i < matches.length; i++) {
		var arrResult = regEx.exec(matches[i]);
		var url = "http://nhnent.dooray.com/popup/task/projects/" + arrResult[1] + "/" + arrResult[2];
		
		content += "<a href='" + url + "' target='_blank'>Open Dooray Task: " + arrResult[0] + "</a><br />";
	}
	
	$('#doorayArea').empty();
	$('#doorayArea').append($(content));
}
