import React from 'react'
import styles from './slider.module.css'
const Slider = ({items, onClickHandler}) => {
    if(!items.length){
        return 'No Category Available'
    }
  return (
    <div className={styles.items}>
        {items.map((item,i) => {
                return  <a key={`${item.id}_${item.name}`} className={`${styles.item}`} onClick={() => onClickHandler(item.id, i)}>{item.name}</a>
        }
        )}
    </div> 
  )
}

export default Slider