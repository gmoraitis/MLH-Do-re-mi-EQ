

// Tonejs Sample player creation
const player1 = new Tone.Player("./samples/eqm01b.mp3").toDestination();


// Multislider Nexus Creation
var multislider = new Nexus.Multislider('#multi', {
	'size': [200, 100],
	'numberOfSliders': 3,
	'min': -18,
	'max': 18,
	'step': 0,
	'candycane': 2,
	'values': [3, 3, 3],
	'smoothing': 0,
	'mode': 'bar'  // 'bar' or 'line'
})


// Button Start / Stop Nexus Creation
var button = new Nexus.TextButton('#button', {
	'size': [150, 50],
	'state': false,
	'text': 'Play',
	'alternateText': 'Stop'
})


// Button Start / Stop behaviour
button.on('click', function () {

	if (button.state === true) {

		player1.start();
		player1.loop = true;
	}
	else {
		player1.stop();
	}
});


// Tonejs EQ Creation
var eq1 = new Tone.EQ3({
	low: "3",
	mid: "3",
	high: "3"
}).toDestination();


// Tonejs Connection of Player to the EQ
player1.connect(eq1)


// Nexus multislider values connection to Eq values
multislider.on('change', function (v) {
	eq1.low.value = multislider.values[0];
	eq1.mid.value = multislider.values[1];
	eq1.high.value = multislider.values[2];
});


// Monitoring values of EQ as changed from the multislider
multislider.on('change', function (v) {
	console.log(eq1.low.value);
	console.log(eq1.mid.value);
	console.log(eq1.high.value);
})












