function calculateTip(e) {
  var bill = document.getElementById("bill").value;
  var percent = document.getElementById("percent").value;

  var total = bill * percent / 100.0; 
	total = total.toFixed(2);

	if (isNaN(total))
		total = 0;
	document.getElementById("tip").innerHTML = total;
}

document.getElementById("calculate").onclick = calculateTip;
