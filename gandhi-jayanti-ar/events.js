//To avoid playing from start if the marker flickers, not sure if needed, but it might be a failsafe when you have mutiple markers and want to make sure the first finishes before launching the second
var playing = false;

//HTML5 audio, will need user touch input to start on mobile
var intro = new Audio("https://raw.githubusercontent.com/imaadmkhan1/imaadmkhan1.github.io/master/gandhi-jayanti-ar/Gandhi.mp3");

//Detect end of audio
intro.addEventListener("ended", function() {
	intro.currentTime = 0;
	playing = false;
});


AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");

        // every click, we make our model grow in size
        animatedMarker.addEventListener('click', function(ev, target){
            if (animatedMarker.object3D.visible == true && ev.detail.cursorEl && playing == false) {
                const entity = document.querySelector('#animated-model');
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                entity.setAttribute('scale', scale);
                intro.play();
			    playing = true;
            }
        });
}});

