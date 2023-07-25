'use client'

import { gsap, Expo } from 'gsap'
import { useLayoutEffect, useRef } from 'react'

import styles from './Circles.module.css'

const Circles = () => {
  const circles = useRef()
  const circle = useRef()
  const circle_1 = useRef()
  const circle_2 = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(circle.current, {
        duration: 2.4,
        scale: 0,
        ease: Expo.easeInOut,
      })
      gsap.from(circle_1.current, {
        duration: 2.4,
        scale: 0,
        ease: Expo.easeInOut,
      })
      gsap.from(circle_2.current, {
        duration: 2.4,
        scale: 0,
        ease: Expo.easeInOut,
      })
    }, circles)
    return () => ctx.revert()
  }, [])
  return (
    <div ref={circles}>
      <div className={styles.circle_shape} ref={circle}></div>
      <div className={styles.circle_shape_2} ref={circle_1}></div>
      <div className={styles.circle_shape_3} ref={circle_2}></div>
    </div>
  )
}
export default Circles
