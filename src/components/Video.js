import React from 'react';

import { Button } from './Button';
import videos from '../assets/video-1.mp4'
import './VideoStyles.css';

export default function Video() {
  return (
    <div className='hero-container'>
     <video autoPlay loop muted id='video'>
                <source src={videos} type='video/mp4' />
            </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

