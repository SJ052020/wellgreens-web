import React from 'react'
import styles from './titleBar.module.css'

export const TitleBar = ({ title = '' }) => {

    return (
        <div className={styles.mainTitleContainer}>
            <label className={styles.titleText}>{title}</label>
        </div>
    )
}