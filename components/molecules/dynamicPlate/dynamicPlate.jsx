import React, { useEffect, useState } from "react";
import Image from 'next/image'
import styles from './dynamicPlate.module.css'
import EmptyPlate from '../../../assests/images/emptyCenterPlate.svg'
import { useAppContext } from "../../../context";

const DynamicPlate = ({ plateImgValues }) => {
    const { state: { cartDetails
    }, dispatch } = useAppContext();
    const [imagesDetails, setImagesDetails] = useState([])

    useEffect(() => {
            let getValue = cartDetails.slice(0, 5).map((element, i) => ({ ...element, ...plateImgValues[i] }))
            setImagesDetails(getValue)
    }, [cartDetails])

    return (
        <div className={styles.plat_section}>
            <Image
                className={styles.plate_icon}
                src={EmptyPlate}
                alt={'plate'}
                objectFit="cover" />
            <div className={styles.itemImgSection}>
                {imagesDetails && imagesDetails.map((item) => {
                    return (
                        <div style={{ top: `${item.topValue}`, left: `${item.leftValue}` }}>
                            <img
                                className={styles.item_img}
                                src={item.imageUrl}
                                alt="items"
                                objectFit="cover"
                                height={item.imageUrl.height / 1.5}
                                width={item.imageUrl.width / 1.5}
                            />
                        </div>)
                })}
            </div>
        </div >
    )
}

export default DynamicPlate