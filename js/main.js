function initAnim(){

	var site = $('body');

	function animate(){

		site
			.velocity(
				{ opacity:1 },
				{ duration:1250, delay:250 }
			);
	};

//Call function to sart animation

	animate();

};