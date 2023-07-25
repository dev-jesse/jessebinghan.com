'use client'

import Image from 'next/image'
import { gsap, Expo } from 'gsap'
import { useLayoutEffect, useRef } from 'react'

import styles from './HeroImage.module.css'

const HeroImage = () => {
  const hero = useRef()
  const box = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(box.current, {
        duration: 2.4,
        y: '-100%',
        ease: Expo.easeInOut,
      })
    }, hero)
    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.wrapper_img} ref={hero}>
      <div className={styles.box} ref={box}></div>
      <div>
        <Image
          src='/images/hero-img.jpeg'
          width={600}
          height={-1}
          className={styles.hero_img}
        />
      </div>
    </div>
  )
}
export default HeroImage
