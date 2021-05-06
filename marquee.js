// Marquee 

	const px = "px";

	const [marqueeWindow] = document.getElementsByClassName("marqueeWindow");
	// console.log(marqueeWindow);

	const marqueeWindowWidth = marqueeWindow.offsetWidth;

	let [marqueeSlider] = document.getElementsByClassName("marqueeSlider");
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
	
	let marqueeCollection = document.getElementsByClassName("marqueeSlider")
	// console.log(marqueeCollection);

	let marqueeCollectionPositions = [];

	function printMarqueeCollectionPositions(array) {
		for (let index = 0; index < array.length; index++) {
			// console.log(array[index].offsetLeft);
			marqueeCollectionPositions.push(array[index].offsetLeft);
		}
		// console.log(marqueeCollectionPositions);
	}

	printMarqueeCollectionPositions(marqueeCollection);
	
	function moveMarqueeCollectionPositions() {

		const marqueeLastContentPosition = marqueeCollection[marqueeCollection.length - 1].offsetLeft + px;
		// console.log(marqueeLastContentPosition);

		for (let index = 0; index < marqueeCollectionPositions.length; index++) {
			marqueeCollection[index].style.left = marqueeCollectionPositions[index] + px;
			marqueeCollection[index].style.position = "absolute";

			setInterval(function(){ 
				if (marqueeCollection[index].offsetLeft == - marqueeSliderWidth) {
					// console.log("stop");
					marqueeCollection[index].style.left = marqueeLastContentPosition;
				}
				marqueeCollection[index].style.left = (marqueeCollection[index].style.left.replace("px", "") - 1) + px;
			}, 10);

		}

	}

	moveMarqueeCollectionPositions();
