import React, { useEffect, useState } from "react";
import { TitleBar } from "../../atoms/titleBar/titleBar";
import { Header } from "../../molecules/header/header";
import styles from './plateSummary.module.css'
import { goalProgressBarData, plateImgValues } from '../../../mocks/mockData'
import DynamicPlate from '../../molecules/dynamicPlate/dynamicPlate'
import { GoalsProgressBar } from "../../molecules/goalsProgressBar/goalsProgressBar";
import dynamic from "next/dynamic";
import { DetailsCard } from "../../molecules/detailsCard/detailsCard";
import noIcon from '../../../assests/images/1Icon.svg'
import { useAppContext } from "../../../context";
import { useRouter } from "next/router";

const IngridentsPopupInfo = dynamic(
    import("../../molecules/ingridentsPopup/ingridentsPopup"),
    { ssr: false }
)
const PlateSummary = () => {
    const { dispatch, state: { cartDetails } } = useAppContext()
  const router = useRouter()

    const [indridentsInfo, setIndridentsInfo] = useState({
        nutritionalInfo: {
            calories: 0,
            carbs: 0,
            fat: 0,
            protein: 0,
        }
    }
    )
    useEffect(() => {
        if (cartDetails.length) {
            cartDetails.forEach(element => {
                const { carbs = 0, calories = 0, fat = 0, protein = 0 } = element.nutritionalInfo
                setIndridentsInfo((previousState) => ({
                    nutritionalInfo: {
                        calories: previousState.nutritionalInfo.calories + (parseInt(calories) * element.orderQuantity),
                        carbs: previousState.nutritionalInfo.carbs + (parseInt(carbs) * element.orderQuantity),
                        fat: previousState.nutritionalInfo.fat + (parseInt(fat) * element.orderQuantity),
                        protein: previousState.nutritionalInfo.protein + (parseInt(protein) * element.orderQuantity),
                    }
                }))
            });

        }
    }, [cartDetails])

    if (!cartDetails.length) {
        return <h3>Plate Summary is Loading</h3>
    }
    return (
        <div className={styles.plateSummaryMainContainer}>
            <Header pageTitle='Make a plate' />
            <div className={styles.mainPageContainer}>
                <section className={styles.plateContainer}>
                    <DynamicPlate plateImgValues={plateImgValues} />
                </section>
                <section className={styles.progressBarSection}>
                    <label className={styles.progressBarTitle}>Percent of Daily Goals</label>
                    <div className={styles.progressBarList}>
                        {goalProgressBarData.map((item, key) => {
                            return <GoalsProgressBar key={key} percentageValue={item.percentageValue} textValue={item.textValue} colorHexValue={item.colorHexValue} />
                        })}
                    </div>
                </section>
                <section className={styles.plateMainSection}>
                    <label className={styles.plateSectionTitle}>In this plate</label>
                    {cartDetails.map((item) => <DetailsCard titleText={item.name} greySecondaryText={`${item.nutritionalInfo.calories} cal, ${item.orderQuantity} medium`} rightSideText={item.orderQuantity} />)}
                </section>
                <IngridentsPopupInfo isSummaryPage={true} onLogMyPlate={() => router.push('/checkout')} onOrderPlate={() => router.push('/plate')} ingridentsInfo={indridentsInfo} />
            </div>
        </div>
    )
}

export default PlateSummary