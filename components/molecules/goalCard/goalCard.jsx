import React from "react";
import styles from "./goalCard.module.css";
import Image from "next/image";

export const GoalCard = ({ imgUrl, title, timeLimit }) => {
    return (
        <div className={styles.mainGoalCard}>
            <Image
                src={imgUrl}
                alt=""
                className={styles.goalImgStyle}
                loading="lazy"
            />
            <p className={styles.title}>{title}</p>
            <p className={styles.time}>{timeLimit}</p>
        </div>
    );
};
