window.onload = function(){
	$("textarea,input[type='text']").focus(function() { $(this).select(); } );
}


function replace(){
	
	// Get Configuration
	let separatedBy = new RegExp( $("#separatedBy").val() );
	let useRegex = $("#useRegex").prop("checked");
	let isCaseSensitive = $("#caseSensitive").prop("checked") ? "" : "i";
	
	// Get 'Find' and 'Replace'
	let find = $('#find').val().split(separatedBy);
	let replace = $('#replace').val().split(separatedBy);
	
	// Make result equal origin
	$("#result").val($("#original").val());
	
	// Run in each 'find' item
	for(i=0; i<find.length; i++){
		// check if not use Regex to escape the regex
		find[i] = useRegex ? find[i] : find[i].replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		
		// Replace
		$("#result").val($("#result").val().replace(new RegExp(find[i],"gm"+isCaseSensitive), replace[i]));
	}
	
}