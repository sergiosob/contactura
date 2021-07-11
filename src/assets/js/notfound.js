var sound = new Howl({
    src: ["../../../assets/audio/stranger-things-theme-song.mp3"],
     preload: true,
    autoplay: false,
    onload: function() {
        console.log("LOADED");
    },
   onend: function() {
          console.log("ONEND");  
    }
});