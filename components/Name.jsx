'use client'

import { gsap, Expo } from 'gsap'
import { useLayoutEffect, useRef } from 'react'

import styles from './Name.module.css'

const Name = () => {
  const name_comp = useRef()
  const block_1 = useRef()
  const block_2 = useRef()
  const block_3 = useRef()
  const block_4 = useRef()
  const block_5 = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(block_1.current, {
        duration: 2,
        x: '-180',
        y: '-100',
        scale: '2.4',
        ease: Expo.easeInOut,
      })
      gsap.to(block_2.current, {
        duration: 2,
        x: '-180',
        y: '200',
        scale: '1.2',
        ease: Expo.easeInOut,
      })
      gsap.to(block_3.current, {
        duration: 2,
        x: '180',
        y: '-240',
        scale: '1.6',
        ease: Expo.easeInOut,
      })
      gsap.to(block_4.current, {
        duration: 2,
        x: '80',
        y: '300',
        scale: '0.6',
        ease: Expo.easeInOut,
      })
      gsap.to(block_5.current, {
        duration: 2,
        x: '280',
        y: '240',
        scale: '0.8',
        ease: Expo.easeInOut,
      })
    }, name_comp)

    return () => ctx.revert()
  }, [])

  return (
    <div className={styles.blocks} ref={name_comp}>
      <div className={`${styles.block_1} ${styles.block}`} ref={block_1}>
        J
      </div>
      <div className={`${styles.block_2} ${styles.block}`} ref={block_2}>
        E
      </div>
      <div className={`${styles.block_3} ${styles.block}`} ref={block_3}>
        S
      </div>
      <div className={`${styles.block_4} ${styles.block}`} ref={block_4}>
        S
      </div>
      <div className={`${styles.block_5} ${styles.block}`} ref={block_5}>
        E
      </div>
    </div>
  )
}
export default Name
