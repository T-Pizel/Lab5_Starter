// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  //get element
  const hornSelect = document.getElementById('horn-select');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audio = document.querySelector('audio');
  const hornIcon = document.querySelector('#expose img');
  const playButton = document.querySelector('button');

  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function(){
    const currHorn = hornSelect.value;
    if(currHorn === 'select'){
      return;
    }

    hornIcon.src = `assets/images/${currHorn}.svg`;
    audio.src = `assets/audio/${currHorn}.mp3`;
  });

  volumeSlider.addEventListener('input', function(){
    const volumeValue = parseInt(volumeSlider.value);
    audio.volume = volumeValue/100;

    if(volumeValue === 0){
      volumeIcon.src = "./assets/icons/volume-level-0.svg";
    }
    else if(volumeValue >= 1 && volumeValue < 33){
      volumeIcon.src = "./assets/icons/volume-level-1.svg";
    }
    else if(volumeValue >= 33 && volumeValue <67){
      volumeIcon.src = "./assets/icons/volume-level-2.svg";
    }
    else if(volumeValue >= 67){
      volumeIcon.src = "./assets/icons/volume-level-3.svg";
    }
  });

  playButton.addEventListener('click', function(){
    const currHorn = hornSelect.value;
    if(currHorn === 'select'){
      console.log('Please select a horn first');
      return;
    }

    audio.play().catch(error =>{
      console.log('error:', error);
    });

    if(currHorn === 'party-horn'){
      jsConfetti.addConfetti();
    }
  });

  volumeIcon.src = "./assets/icons/volume-level-2.svg";
  audio.volume = 0.5;
}