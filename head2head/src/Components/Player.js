import React from 'react';
import { Button } from 'react-bootstrap';

const MusicPlayer = () => {
  


  function handleClick() {
    window.location.assign("https://www.spotify.com/us/");
  }

  return(
    <div>
      <Button onClick={handleClick}>PLAY</Button>
    </div>
  )
}

export default MusicPlayer

