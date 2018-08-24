window.onload = function () {
	var lightbox = document.createElement("div");
	lightbox.setAttribute('class', 'img-lightbox'); 
	lightbox.innerHTML = '<div class="lightbox-inner"><img src=""><span class="close-lightbox">x</span></div>';
	document.body.appendChild(lightbox);
	var lightImg = document.querySelector('.img-lightbox img');
	var closelightbox = document.querySelector('.close-lightbox');
	var anchors = document.getElementsByClassName('lightbox-img');
	for(var i = 0; i < anchors.length; i++) {
        var anchor = anchors[i];
        anchor.onclick = function() {
            var currentImg = this.getAttribute('src');
            lightImg.setAttribute('src',currentImg);
            lightbox.classList.add('open-lightbox');
        }
        closelightbox.onclick = function() {
            lightbox.classList.remove('open-lightbox');
            setTimeout(function(){ lightImg.setAttribute('src',''); }, 500);
        }
        document.onkeydown = function() {
		    if (event.keyCode == 27) {
		        lightbox.classList.remove('open-lightbox');
				setTimeout(function(){ lightImg.setAttribute('src',''); }, 500);
		    }
		}
    }
}
