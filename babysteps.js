var total = 0;

for (var i in process.argv){
	if(i == 0 || i == 1){
		continue;
	}

	total += +process.argv[i];
}

console.log(total);
