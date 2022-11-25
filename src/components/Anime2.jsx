import React from 'react'
import Spline from '@splinetool/react-spline';
import {stars} from '../assets/index'
import { Parallax } from 'react-parallax';
import Star from '../assets/stars.jpg'

const Anime2 = () => {
  return (
    <Parallax bgImage="https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RhcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" bgImageAlt="the cat" strength={800}>
    <div className="anime_2">
        <div className="earth">
          <Spline scene="https://prod.spline.design/V40QXj4dsgNhxh8V/scene.splinecode" />
        </div>
    </div>
    </Parallax>
  )
}

export default Anime2

