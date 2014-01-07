var fs = require('fs');

handleFile = function(err, data) {
	if(!err){
		var newLineArray = data.split("\n");
		console.log(+newLineArray.length - 1);
	} else {
		console.log(err);
	}
};

fs.readFile(process.argv[2], 'utf8', handleFile);
