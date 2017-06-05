var myImage = document.querySelector('img');

myImage.onclick = function() {

	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'C:/image/pic1.jpg') {
		myImage.setAttribute('src','C:/image/pic2.jpg');
	}else {
		myImage.setAttribute ('src','C:/image/pic1.jpg');
		}
	}


