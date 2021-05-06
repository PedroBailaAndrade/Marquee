// Marquee 

	const px = "px";

	const [marqueeWindow] = document.getElementsByClassName("marqueeWindow");
	// console.log(marqueeWindow);

	const marqueeWindowWidth = marqueeWindow.offsetWidth;

	let [marqueeContent] = document.getElementsByClassName("marqueeContent");
	// console.log(marqueeContent)
	const marqueeContentWidth = marqueeContent.offsetWidth;

	let [marqueeContentChild] = document.getElementsByClassName("marqueeContentChild");
	// console.log(marqueeContentChild)
	const marqueeContentChildWidth = marqueeContentChild.offsetWidth;

	function copyMarqueeContent() {
		const timesToCopy =  Math.round(marqueeWindowWidth / marqueeContentChildWidth);
		// console.log("times to compy: ", timesToCopy);
		for (let i = 1; i <= timesToCopy; i++) {
			marqueeContentChildClone = marqueeContentChild.cloneNode(true);
			// console.log('content copied');
			// console.log(marqueeContentChildClone);
			marqueeContent.appendChild(marqueeContentChildClone);
			}
	}

	copyMarqueeContent();
	
	let marqueeCollection = document.getElementsByClassName("marqueeContent")
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
				if (marqueeCollection[index].offsetLeft == - marqueeContentWidth) {
					// console.log("stop");
					marqueeCollection[index].style.left = marqueeLastContentPosition;
				}
				marqueeCollection[index].style.left = (marqueeCollection[index].style.left.replace("px", "") - 1) + px;
			}, 10);

		}

	}

	moveMarqueeCollectionPositions();
