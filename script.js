function calculateMinCost() {
  //your code here
  var inputData = document.querySelector("#rope-lengths").value;

	var inputArr = inputData.split(",");
    // alert(inputArr);

	// Now convert array of string to array of number
	for (var i=0; i<inputArr.length; i++) {
		inputArr[i] = Number(inputArr[i]);
	}

	if (inputArr.length ==1) cost = inputArr[0];

	// Now sort the array
	inputArr.sort(function(a,b) {return a-b});

	var cost = 0;
    while (inputArr.length > 1) {
		var rope = inputArr[0] + inputArr[1];
		cost += rope;

		// now delete 1st 2 Ele from input array
		inputArr.splice(0,2,rope);

		inputArr.sort(function(a,b) {return a-b});
	}

	//alert(inputArr);
	// Now show result on screen
	document.querySelector("#result").textContent = cost;
}  
