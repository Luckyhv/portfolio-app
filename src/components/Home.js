import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import './Home.css'

function Home() {
  return (
    <div className='home'>
      <div className="a">
        <p className='p1'>Hi, my name is</p>
        <h1 className='h11'>Harshavardhan Reddy</h1>
        <h2 className='h21'>I'm a Full Stack Developer.</h2>
        <p className='p2'>I'm a Developer specialized in developing Web based Applications,
          Using Html,CSS,Javascript and React js.
        </p>
        <div className="btn">
          <button className='viewbtn'>View Work
            <HiArrowNarrowRight className='arrspan' />
          </button>
        </div>
      </div>
      <div className="socialicons">
        <button className='buton'>hello</button>
      </div>
    </div>
  )
}

export default Home
