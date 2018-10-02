AFRAME.registerComponent('markerhandler', {

    init: function() {
        const animatedMarker = document.querySelector("#animated-marker");
	var soundEntity = document.querySelector('[sound]');
        // every click, we make our model grow in size
        animatedMarker.addEventListener('click', function(ev, target){
            if (animatedMarker.object3D.visible == true && ev.detail.cursorEl) {
                const entity = document.querySelector('#animated-model');
		soundEntity.components.sound.playSound();
                const scale = entity.getAttribute('scale');
                Object.keys(scale).forEach((key) => scale[key] = scale[key] + 1);
                entity.setAttribute('scale', scale);
            }
        });
}});
