

// Play button selection
document.getElementById('play')?.addEventListener('click', async () => {


	console.log("Sound Start")
	// Calling the original loop.
	const player1 = new Tone.Player("./samples/eqm01b.mp3").toDestination();
	player1.autostart = true;
	player1.loop = true;


	// Stopping the original loop
	document.getElementById('stop')?.addEventListener('click', async () => {
		console.log("Sound Stopped")
		player1.stop();
	})

	 var eq1 = new Tone.EQ3({
		low:"8",
		mid:"8",
		high:"8"
	}).toDestination();
	

	// connect the player to the eq
	player1.connect(eq1)


	
	sliderLow.on('change',function(v) {
		
		eq1.low.value = sliderLow.value;
		
		
		console.log(eq1);
	  });

	  sliderMid.on('change',function(v) {
		
		
		eq1.mid.value = sliderMid.value;
		
		
		console.log(eq1);
	  });

	  sliderHigh.on('change',function(v) {
	
		
		eq1.high.value = sliderHigh.value;
		
		console.log(eq1);
	  });

	  

	
	

})
var sliderLow = new Nexus.Slider('#low', {
	'size': [120,20],
    'mode': 'absolute',  // 'relative' or 'absolute'
    'min': 0,
    'max': 10,
    'step': 0,
	'value': 8,
})

var sliderMid = new Nexus.Slider('#mid', {
	'size': [120,20],
    'mode': 'absolute',  // 'relative' or 'absolute'
    'min': 0,
    'max': 10,
    'step': 0,
    'value': 8
})

var sliderHigh = new Nexus.Slider('#high', {
	'size': [120,20],
    'mode': 'absolute',  // 'relative' or 'absolute'
    'min': 0,
    'max': 10,
    'step': 0,
    'value': 8
})








