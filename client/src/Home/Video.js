import React from 'react'
import { useMediaQuery } from '@mui/material'
import MyMovie from '../Media/MyMovie1.mp4'

function Video() {
  
  const isMobile = useMediaQuery('(max-width: 1295px)');
  const newMovie = MyMovie
  
  return (
    <main
      style={{
        position: 'relative',
        width: '100%',
        height: isMobile ? '80vh' : '80vh',
        overflow: 'hidden',

      }}
    >
      <video 
        autoPlay
        loop
        muted
        playsInline 
        preload="auto" 
        style={{
          position: 'absolute',
          top: isMobile ? '-4.5%' : '0', 
          left: '0',
          width: '100%',
          height:  isMobile ? '100vh' : '80vh',
          objectFit:  'cover',
        }}
      >
        <source src={newMovie} type="video/mp4" />
      </video>
      <div
        style={{
          position: 'absolute',
          top: isMobile ? '50%' : '37%',
          left: '50%',
          transform: 'translate(-60%, -50%)',
          textAlign: isMobile ? 'center' : '',
          color: 'white', 
          textShadow: '2px 2px 3px rgba(0, 0, 0, 0.3)' ,
          width: '80%'
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? '4rem' : '5vw',
            marginLeft: isMobile ? '3rem' : '7rem',
            marginRight: isMobile ? '-2.5rem' : '20rem',
            fontFamily: 'Kanit' 
          }}
        >
          GET AHEAD WITH JOBIFY
        </h1>
        <h4
          style={{
            fontSize: isMobile ? '2rem' : '2.5rem',
            marginLeft: isMobile ? '2rem' : '7rem' ,
            marginRight: isMobile ? '-4rem' : '35rem',
            marginTop: isMobile ? '5rem' : '',
            fontFamily: 'Kanit'
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