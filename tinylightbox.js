/*
 Tiny Lightbox for Gallery originally written by Mohd Salman (salman.cse007@gmail.com)
 Very Simple Logic
 Please contribute If you see any error or modification
 Thanks
*/

    /* Create Lightbox and append it in the End of body tag */
    var lightbox = document.createElement("div");
    lightbox.setAttribute('class', 'img-lightbox'); 
    lightbox.innerHTML = '<div class="lightbox-inner"><img src=""><h4 class="lightbox-caption"></h4><span class="close-lightbox">x</span><ul class="lightnav"><li class="prev"><</i></li><li class="next">></li></ul></div>';
    document.body.appendChild(lightbox);
    
    var closelightbox = document.querySelector('.close-lightbox');
    var prev = document.querySelector('.prev');
    var next = document.querySelector('.next');
    var lightcaption = document.querySelector('.lightbox-caption');
    var lightImg = document.querySelector('.lightbox-inner img');
    var single = document.getElementsByClassName('custom-gallery-item');
    var gal_item = document.querySelector('.custom-gallery').children.length;
    for(var i=0; i<single.length; i++)
    {
        single[i].pnum=i;
        single[i].onclick=function()
        {
            var index = this.pnum;
            var currentImg = single[index].children[0].getAttribute('src');
            var currentImgTitle = single[index].children[0].getAttribute('title');
            lightImg.setAttribute('src',currentImg);
            lightcaption.innerHTML = currentImgTitle;
            lightbox.classList.add('open-lightbox');
            console.log(index);
            function showLightbox() {
                currentImg = single[index].children[0].getAttribute('src');
                currentImgTitle = single[index].children[0].getAttribute('title');
                lightImg.setAttribute('src',currentImg);
                lightcaption.innerHTML = currentImgTitle;
            }
            next.onclick = function(){
                index++;
                if(index>gal_item-1){ index=0; }
                showLightbox();
            }
            prev.onclick = function(){
                index--;
                if(index<0){ index=gal_item-1; }
                showLightbox();
            }
            lightbox.addEventListener('click', function(e){   
                if (document.querySelector('.lightbox-inner').contains(e.target)){
                    return false;
                } else{
                    lightbox.classList.remove('open-lightbox');
                    setTimeout(function(){ lightImg.setAttribute('src',''); }, 500);
                }
            });
        }
    }
    function closeLightbox() {
        lightbox.classList.remove('open-lightbox');
        setTimeout(function(){ lightImg.setAttribute('src',''); }, 500);
    }
    closelightbox.onclick = function() {
        closeLightbox();
    }
    document.onkeydown = function() {
        if (event.keyCode == 27) {
            closeLightbox();
        }
    }

/* My Custom Lightbox for Gallery End Here */
