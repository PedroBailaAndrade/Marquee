// Marquee 

	const px = "px";

	const [marqueeWindow] = document.getElementsByClassName("marqueeWindow");
	// console.log(marqueeWindow);

	const marqueeWindowWidth = marqueeWindow.offsetWidth;

	let marqueeSlider = document.getElementsByClassName("marqueeSlider")[0];
	// console.log(marqueeSlider)
	const marqueeSliderWidth = marqueeSlider.offsetWidth;

	let [marqueeContent] = document.getElementsByClassName("marqueeContent");
	// console.log(marqueeContent)
	const marqueeContentWidth = marqueeContent.offsetWidth;

	function copyMarqueeContent() {
		const timesToCopy =  Math.round(marqueeWindowWidth / marqueeContentWidth) + 1;
		// console.log("times to compy: ", timesToCopy);
		for (let i = 1; i <= timesToCopy; i++) {
			marqueeContentClone = marqueeContent.cloneNode(true);
			// console.log('content copied');
			// console.log(marqueeContentClone);
			marqueeSlider.appendChild(marqueeContentClone);
			}
	}

	copyMarqueeContent();

	function animateMarqueeSlider() {

		setInterval(function(){ 
			if (marqueeSlider.offsetLeft <= - marqueeContentWidth) {
				marqueeSlider.classList.remove("animation");
			}

			if (marqueeSlider.offsetLeft == 0) {
				marqueeSlider.classList.add("animation");
			}
			// marqueeSlider.style.left = (marqueeSlider.style.left.replace("px", "") - 1) + px;
		}, 10);


	}

	animateMarqueeSlider();
