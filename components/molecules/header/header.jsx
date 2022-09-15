import React from "react";
import { useRouter } from "next/router";
import styles from './header.module.css'
import BackIcon from '../../../assests/icons/Vector.svg'
import Image from "next/image";


export const Header = ({ pageTitle }) => {
  const router = useRouter();
  return (
    <div className={styles.mainContainer}>
      <button onClick={() => router.back()} className={styles.leftArrow}>
        <Image className={styles.backIcon} src={BackIcon} alt={'back'} />
      </button>
      <p className={styles.title}>{pageTitle}</p>
    </div>
  );
};
