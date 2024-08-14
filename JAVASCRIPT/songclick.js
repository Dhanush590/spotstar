   // Variable to keep track of the currently playing audio
   let currentAudio = null;

   // Get all image elements with class 'play-image'
   const playImages = document.querySelectorAll('.play-image');

   playImages.forEach((image) => {
       const audio = image.nextElementSibling; // Get the corresponding audio element

       image.addEventListener('click', function() {
           // If the audio is already playing, pause it
           if (currentAudio && currentAudio === audio) {
               currentAudio.pause();
               currentAudio.currentTime = 0; // Reset the audio to the start
               currentAudio = null; // Reset current audio tracker
           } else {
               // Pause the currently playing audio if it's not the same as the one being clicked
               if (currentAudio) {
                   currentAudio.pause();
                   currentAudio.currentTime = 0; // Optional: reset the audio to the start
               }
               // Play the audio
               audio.play();
               // Set the current audio to the one being played
               currentAudio = audio;
           }
       });
   });