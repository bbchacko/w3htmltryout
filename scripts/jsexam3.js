var myImage = document.querySelector ('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'pitch1.jpeg'){

		myImage.setAttribute ('src','pitch.jpeg');

	} else {
		myImage.setAttribute('src', 'pitch1.jpeg');
	}

}