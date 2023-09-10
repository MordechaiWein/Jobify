import React from 'react'
import { useMediaQuery } from '@mui/material'
import JobifyMovie from '../Media/JobifyMovie.mp4'


function Video() {
  
  const isMobile = useMediaQuery('(max-width: 800px)');
  const movie = JobifyMovie;
  
  return (
    <main
      style={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        overflow: 'hidden',

      }}
    >
      <video 
        autoPlay
        loop
        muted
        playsInline 
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height:   '80vh',
          objectFit:  'cover',
        }}
      >
        <source src={movie} type="video/mp4" />
      </video>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-60%, -50%)',
          textAlign: isMobile ? 'center' : '',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          width: '80%',
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? '4rem' : '7vw',
            marginLeft: isMobile ? '3rem' : '7rem',
            marginRight: isMobile ? '-2.5rem' : '5rem',
            fontFamily: 'Merriweather Sans'
          }}
        >
          Get ahead with Jobify
        </h1>
        <h4
          style={{
            fontSize: isMobile ? '2rem' : '3rem',
            marginLeft: isMobile ? '2rem' : '7rem' ,
            marginRight: isMobile ? '-4rem' : '10rem',
            marginTop: isMobile ? '5rem' : '',
            fontFamily: 'Merriweather Sans'
          }}
        >
          We're serving up trusted insights and anonymous conversation, so
          you'll have the goods you need to succeed.
        </h4>
      </div>
    </main>

  )
}
export default Video