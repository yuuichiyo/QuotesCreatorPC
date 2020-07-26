function writeFooter(rootDir){

	$.ajax({
		url: rootDir + "parts/footer.html", 
		cache: false,
		async: false, 
		success: function(html){

			html = html.replace(/\{\$root\}/g, rootDir);
			document.write(html);
		}
	});

}