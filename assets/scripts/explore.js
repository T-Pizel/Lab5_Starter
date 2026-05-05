// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textToSpeak = document.getElementById('text-to-speak');
  const faceImage = document.querySelector('#explore img');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');

  let voices = [];

  function getVoiceList(){
    voices = speechSynthesis.getVoices();
    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;

      voiceSelect.appendChild(option);
    });
  }

  if(speechSynthesis.onvoiceschanged !== undefined){
    speechSynthesis.onvoiceschanged = getVoiceList;
  }
  else{
    getVoiceList();
  }

  talkButton.addEventListener('click', function(){
    const text = textToSpeak.value.trim();
    if(text === ''){
      console.log('Enter some text');
      return;
    }
    const selectedVoice = voiceSelect.value;
    if(selectedVoice === 'select'){
      console.log('Select a voice');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const currVoice = voices[parseInt(selectedVoice)];
    if(currVoice){
      utterance.voice = currVoice;
    }

    function startSpeaking(){
      faceImage.src = 'assets/images/smiling-open.png';
    }

    function endSpeaking(){
      faceImage.src = 'assets/images/smiling.png';
    }

    utterance.addEventListener('start', startSpeaking);
    utterance.addEventListener('end', endSpeaking);
    utterance.addEventListener('error', endSpeaking);
    speechSynthesis.speak(utterance);
  });
}