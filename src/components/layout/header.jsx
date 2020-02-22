import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import styles from '../../styles/header.module.css'

const Header = () => {
  const [hasScroll, setHasScroll] = useState(false)
  const handleScroll = () => {
    const scrollTop = window.pageYOffset
    // check if the user has scroll 50px away from the top of the page
    if (scrollTop > 50) {
      return setHasScroll(true)
    }
    return setHasScroll(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={
        hasScroll
          ? `${styles.headerScroll} ${styles.headerMain}`
          : styles.headerMain
      }
    >
      <div className={styles.headerGroup}>
        <Link href="/">
          <a>
            <img src="/logo-designcode.svg" />
          </a>
        </Link>
        <Link href="/courses">
          <a>Courses</a>
        </Link>
        <Link href="/downloads">
          <a>Downloads</a>
        </Link>
        <Link href="/workshops">
          <a>Workshops</a>
        </Link>
        <Link href="/buy">
          <button>Buy</button>
        </Link>
      </div>
    </div>
  )
}

export default Header
