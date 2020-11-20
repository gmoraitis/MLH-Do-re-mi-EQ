

// Play button selection
document.getElementById('play')?.addEventListener('click', async () => {


	console.log("Sound Start")
	// Calling the original loop.
	const player1 = new Tone.Player("./samples/eqm01b.mp3").toDestination(eq1);
	player1.autostart = true;
	player1.loop = true;


	// Stopping the original loop
	document.getElementById('stop')?.addEventListener('click', async () => {
		console.log("Sound Stopped")
		player1.stop();
	})

	var eq1 = new Tone.EQ3({
		low: "3",
		mid: "3",
		high: "3"
	}).toDestination();
	


	// connect the player to the eq
	player1.connect(eq1)
	// eq1.connect(player1);




	multislider.on('change', function (v) {
		eq1.low.value = multislider.values[0];
		eq1.mid.value = multislider.values[1];
		eq1.high.value = multislider.values[2];
	});

	multislider.on('change',function(v) {
		console.log(eq1.low.value);
	  })

})


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









