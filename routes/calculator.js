var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/calculator', function(req, res) {
	res.render('calculator', {
		name : 'Basic Calculator App'
	});
});

router.post('/add', function(req, res) {
	var x = (req.param("number1"));
	var y = (req.param("number2"));
	
	if (x === "" || y === "" || !x || !y) {
		
		res.send("Null inputs are not supported");
	} else if (!isNumber(x) || !isNumber(y)) {
		console.log("here");
		res.send("Please enter digits only");
	} else {
		console.log("Number 1 is: " + x);
		console.log("Number 2 is: " + y);

		var answer = parseFloat(x) + parseFloat(y);
		console.log("Addition is: " + answer);
		res.send(answer.toString());
	}
	
	
	function isNumber(n) {
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}
});

router.post('/sub', function(req, res) {
	var x = (req.param("number1"));
	var y = (req.param("number2"));
	
	if (x === "" || y === "" || !x || !y) {
		
		res.send("Null inputs are not supported");
	} else if (!isNumber(x) || !isNumber(y)) {
		console.log("here");
		res.send("Please enter digits only");
	} else {
		console.log("Number 1 is: " + x);
		console.log("Number 2 is: " + y);

		var answer = parseFloat(x) - parseFloat(y);
		console.log("Substraction is: " + answer);
		res.send(answer.toString());
	}
	
	
	function isNumber(n) {
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}
});

router.post('/mul', function(req, res) {
	var x = (req.param("number1"));
	var y = (req.param("number2"));
	
	if (x === "" || y === "" || !x || !y) {
		
		res.send("Null inputs are not supported");
	} else if (!isNumber(x) || !isNumber(y)) {
		console.log("here");
		res.send("Please enter digits only");
	} else {
		console.log("Number 1 is: " + x);
		console.log("Number 2 is: " + y);

		var answer = parseFloat(x) * parseFloat(y);
		console.log("Multiplication is: " + answer);
		res.send(answer.toString());
	}
	
	
	function isNumber(n) {
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}
});

router.post('/div', function(req, res) {
	var x = (req.param("number1"));
	var y = (req.param("number2"));
	
	if (x === "" || y === "" || !x || !y) {
		
		res.send("Null inputs are not supported");
	}
	else if(isNumber(x) && parseFloat(x) == 0){
		res.send("0");
	}else if(isNumber(y) && parseFloat(y) == 0){
		res.send("Cannot Divide by 0");
	}else if (!isNumber(x) || !isNumber(y)) {
		// console.log("here");
		res.send("Please enter digits only");
	} else {
		console.log("Number 1 is: " + x);
		console.log("Number 2 is: " + y);

		var answer = parseFloat(x) / parseFloat(y);
		console.log("Division is: " + answer);
		res.send(answer.toString());
	}
	
	
	function isNumber(n) {
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}
});
module.exports = router;
