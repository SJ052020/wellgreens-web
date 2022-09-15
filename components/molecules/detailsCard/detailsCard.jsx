import Image from "next/image";
import React from "react";
import styles from './detailsCard.module.css'

export const DetailsCard = ({ titleText, greyPrimaryText, greyPriceText, greySecondaryText, rightSideText = '', rightIcon, leftIcon }) => {
    return (
        <div className={styles.mainDetailsCard}>
            <div className={styles.leftSide}>
                {leftIcon &&
                    <div className={styles.leftIconContainer}>
                        <Image src={leftIcon} alt="leftIcon" loading="lazy" objectFit="contain" />
                    </div>
                }
                <div className={styles.leftTextSection}>
                    <p className={styles.blackBoldText}>{titleText}</p>
                    {greyPrimaryText && greyPriceText && <p className={styles.greyText}><span>{greyPrimaryText}</span> · <span>{greyPriceText}</span></p>}
                    <p className={styles.greyText + ' ' + styles.greyBottomText}>{greySecondaryText}</p>
                </div>
            </div>

            {rightSideText && <p
                className={styles.rightText}
            >
                {rightSideText}
            </p>}
            {rightIcon &&
                <Image src={rightIcon} alt="rightIcon" loading="lazy" />
            }
        </div>
    );
};
