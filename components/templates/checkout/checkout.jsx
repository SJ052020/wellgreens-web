import Image from 'next/image'
import React from 'react'
import { Header } from '../../molecules/header/header'
import styles from './checkout.module.css'
import mapImg from '../../../assests/images/staticMap.svg'
import { DetailsCard } from '../../molecules/detailsCard/detailsCard'
import { orderDetailsData } from '../../../mocks/mockData'
import Button from '../../atoms/button/button'
import { useRouter } from 'next/router'

const Checkout = () => {
    const router = useRouter()
    return (
        <div className={styles.checkoutMainContainer}>
            <Header pageTitle='Checkout' />
            <div className={styles.checkoutSecContainer}>
                <section className={styles.mapSec}>
                    <Image src={mapImg} alt="map" loading='lazy' objectFit='cover' />
                </section>
                <section className={styles.locationDetailsSec}>
                    <p className={styles.orderSubTitle}>This order will be fulfilled by</p>
                    <div className={styles.deliverySec}>
                        <p className={styles.cant00eenTitle}>The Bombay Canteen - <span>₹231.39</span></p>
                        <p className={styles.deliveryText}>Delivery ₹31.39 </p>
                        <p className={styles.etaText}><b>ETA:</b> 24 - 36mins</p>
                    </div>

                    <p className={styles.balenceTitle}>Wallet balance: <b>₹ 1000</b> </p>
                </section>
                <section className={styles.orderDetailsSec}>
                    <p className={styles.orderTitle}>Order Details</p>

                    <div>
                        {orderDetailsData.map((item, key) => {
                            return <DetailsCard
                                key={key}
                                titleText={item.blackText}
                                greySecondaryText={item.greyText}
                                leftIcon={item.leftIcon}
                                rightIcon={item.rightIcon}
                            />
                        })}
                    </div>
                </section>
            </div>
            <section className={styles.placeOrderSec}>
                <Button
                    onClickHandler={() => router.push('/orders')}
                    className={styles.placeOrderStyle}
                    text='Place order - ₹262.78'
                />
            </section>
        </div>
    )
}

export default Checkout