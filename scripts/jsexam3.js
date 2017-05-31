var myImage = document.querySelector ('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/C:/Users/bency/Desktop/pitch1.jpeg'){

		myImage.setAttribute ('src','images/C:/Users/bency/Desktop/pitch.jpeg');

	} else {
		myImage.setAttribute('src', 'images/C:/Users/bency/Desktop/pitch1.jpeg');
	}

}