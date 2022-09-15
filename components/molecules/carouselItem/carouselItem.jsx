import React from "react";
import styles from './carouselItem.module.css'
import Image from "next/image";
import Button from "../../atoms/button/button";

export const CarouselItem = ({ imgUrl, newText, challengeText }) => {
    return (
        <div className={styles.carouselContainer}>
            <div className={styles.textBtnSection}>
                <p className={styles.orangeText}>{newText}</p>
                <p className={styles.mainText}>{challengeText}</p>
                <Button
                    className={styles.joinBtn}
                    onClickHandler={() => { }}
                    text='Join Now' />
            </div>
            <Image src={imgUrl} loading='lazy' className={styles.rightImg} />
        </div>
    );
};
