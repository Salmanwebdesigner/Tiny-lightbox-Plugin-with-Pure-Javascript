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
            var currentTitle = this.getAttribute('title');
            lightImg.setAttribute('src',currentImg);
            lightbox.classList.add('open-lightbox');
            lightbox.addEventListener('click', function(e){   
				if (document.querySelector('.lightbox-inner').contains(e.target)){
				    return false;
				} else{
				    lightbox.classList.remove('open-lightbox');
            		setTimeout(function(){ lightImg.setAttribute('src',''); }, 500);
				}
			});
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
