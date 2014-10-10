var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/calculator', function(req, res) {
  res.render('calculator', { name: 'Basic Calculator App' });
});

router.post('/add', function(req, res) {
	  var x = parseInt(req.param("number1"));
	  var y = parseInt(req.param("number2"));
	  
	  console.log("Number 1 is: " + x);
	  console.log("Number 2 is: " + y);
	  
	  var answer = x + y;
	  console.log("Addition is: " + answer);
	  res.send(answer.toString());
	});

router.post('/sub', function(req, res) {
	  var x = parseInt(req.param("number1"));
	  var y = parseInt(req.param("number2"));
	  
	  console.log("Number 1 is: " + x);
	  console.log("Number 2 is: " + y);
	  
	  var answer = x - y;
	  console.log("Substraction is: " + answer);
	  res.send(answer.toString());
	});

router.post('/mul', function(req, res) {
		var x = parseInt(req.param("number1"));
		var y = parseInt(req.param("number2"));
		
		console.log("Number 1 is: " + x);
		console.log("Number 2 is: " + y);
		
		var answer = x * y;
		console.log("Multiplication is: " + answer);
		res.send(answer.toString());
	});

router.post('/div', function(req, res) {
	var x = parseInt(req.param("number1"));
	var y = parseInt(req.param("number2"));
	
	console.log("Number 1 is: " + x);
	console.log("Number 2 is: " + y);
	
	var answer = x / y;
	console.log("Division is: " + answer);
	res.send(answer.toString());
});

module.exports = router;
