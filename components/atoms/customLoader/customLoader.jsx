import React from "react";
import styles from './customLoader.module.css'

const CustomLoader = () => {
    return (
        <div className={styles.mainOuter}>
            <span className={styles.ringInner}></span>
        </div>
    )
}

export default CustomLoader