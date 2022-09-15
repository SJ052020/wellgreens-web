import Image from 'next/image'
import React from 'react'
import { TitleBar } from '../../atoms/titleBar/titleBar'
import { Footer } from '../../molecules/footer/footer'
import styles from './rewards.module.css'
import medalIcon from '../../../assests/icons/medal.svg'
import { rewardsMedalData } from '../../../mocks/mockData'

const Rewards = () => {
  return (
    <div className={styles.rewardsMainContainer}>

      <TitleBar title='Rewards' />
      <section className={styles.dataContainer}>
        <label className={styles.subTitletext}>
          Recent
        </label>

        <section className={styles.medalSection}>
          {rewardsMedalData.map((item, key) => {
            return (<div className={styles.medalCard}>
              <Image src={item.imgUrl} className={styles.medalImg} loading="lazy" />
              <p className={styles.challengeText}>{item.challengeMonth}</p>
              <p className={styles.yearText}>{item.year}</p>
            </div>)
          })}



        </section>

      </section>
      <Footer />
    </div>
  )
}

export default Rewards