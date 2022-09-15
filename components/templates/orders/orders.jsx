import React from 'react'
import styles from './orders.module.css'
import { TitleBar } from '../../atoms/titleBar/titleBar'
import { Footer } from '../../molecules/footer/footer'
import { DetailsCard } from '../../molecules/detailsCard/detailsCard'
import { compltedOrdersData } from '../../../mocks/mockData'
import plusIcon from '../../../assests/icons/plusPurple.svg'

const Orders = () => {
  return (
    <div className={styles.ordersMainContainer}>
      <TitleBar title='Orders' />

      <section className={styles.dataContainer}>
        <label className={styles.subTitletext}>
          Completed
        </label>

        <section>
          {compltedOrdersData.map((item, key) => {
            return <DetailsCard titleText={item.blackText} greyPrimaryText={item.greyPrimaryText} greyPriceText={item.greyPriceText} greySecondaryText={item.greySecondaryText} rightSideIcon={plusIcon} />
          })}
        </section>
      </section>


      <Footer />
    </div>
  )
}

export default Orders