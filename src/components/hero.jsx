/* eslint-disable no-undef */
import React from 'react'
import Link from 'next/link'

import Wave from './wave'
import CardGroup from './card-group'
import Section from './section'
import styles from '../styles/hero.module.css'

const Hero = () => (
  <div className={styles.heroBackground}>
    <div className={styles.heroGroup}>
      <h1>
        Learn to
        <br />
        design and code React apps
      </h1>
      <p>
        Complete courses about the best tools and design systems. Prototype and
        build apps with React and Swift.
      </p>
      <Link href="/">
        <a>Watch the video</a>
      </Link>
      <div className={styles.heroLogos}>
        <img src="/logo-figma.png" width="50" />
        <img src="/logo-framer.png" width="50" />
        <img src="/logo-react.png" width="50" />
        <img src="/logo-sketch.png" width="50" />
        <img src="/logo-studio.png" width="50" />
        <img src="/logo-xcode.png" width="50" />
      </div>
      <Wave />
    </div>
    <CardGroup />
    <Section />
  </div>
)

export default Hero
