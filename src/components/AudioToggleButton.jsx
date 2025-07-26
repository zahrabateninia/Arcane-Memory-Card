import React from 'react'
import './AudioToggleButton.css'
import soundOnIcon from '../assets/img/icons/audio.png'
import soundOffIcon from '../assets/img/icons/mute.png'

const AudioToggleButton = ({ isMuted, toggleMute }) => {
  return (
    <button className="audio-toggle" onClick={toggleMute} title={isMuted ? 'Unmute' : 'Mute'}>
      <img src={isMuted ? soundOffIcon : soundOnIcon} alt={isMuted ? 'Muted' : 'Sound On'} />
    </button>
  );
};

export default AudioToggleButton;
