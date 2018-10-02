AFRAME.registerComponent('markerhandler', {
    tick: function () {
	   const animatedMarker = document.querySelector("#animated-marker");
           var entity = document.querySelector('[sound]');
         if (animatedMarker.object3D.visible == true) {
            entity.components.sound.playSound();
        } else {
            entity.components.sound.pauseSound();
        }

     }
});
