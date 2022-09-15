import React from "react";
import Button from "../../atoms/button/button";
import styles from './discoverFoodCard.module.css'

export const DiscoverFoodCard = () => {
    return (
        <div className={styles.mainfoodCard}>
            <p className={styles.discoverText}>Discover healthy food options in your area!</p>
            <Button
                className={styles.viewBtn}
                onClickHandler={() => { }}
                text='View Now' />
        </div>
    );
};
