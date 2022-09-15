import React, { useState, useEffect } from "react";
import styles from "./productCard.module.css";
import { useAppContext } from "../../../context";
import {
  updateCartDetails,
  updateIndridentsInfo,
} from "../../../context/actions";

const ProductCard = (props) => {
  const {
    description,
    imgAltTxt,
    imageUrl,
    name,
    nutritionalInfo: { calories: cal },
  } = props;
  const { state, dispatch } = useAppContext();
  const { cartDetails, ingridentsInfo } = state;

  let currentCount = 0;
  const [totalQuantity, settotalQuantity] = useState(0);
  let InitalIngridentsInfo = {
    nutritionalInfo: {
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
    },
  };
  const [IngridentsInfo, setIngridentsInfo] = useState(InitalIngridentsInfo);

  useEffect(() => {
    if(totalQuantity > 0){
      settotalQuantity(0)
    }
  }, [])
  useEffect(() => {
    if (IngridentsInfo !== InitalIngridentsInfo) {
      dispatch(updateIndridentsInfo(IngridentsInfo));
    }
  }, [IngridentsInfo]);
  useEffect(() => {
    if (cartDetails.length) {
      const getProd = cartDetails.filter((item) => item.name === name);
      if (getProd.length) {
        settotalQuantity(getProd[0].orderQuantity);
      }
    }
  }, [cartDetails]);
  const addSingleProd = (currentCount) => {
    let updatedCart = [
      ...cartDetails,
      { ...props, orderQuantity: currentCount },
    ];
    dispatch(updateCartDetails(updatedCart));
    const {
      carbs = 0,
      calories = 0,
      fat = 0,
      protein = 0,
    } = props.nutritionalInfo;
    if (Object.keys(ingridentsInfo).length) {
      setIngridentsInfo({
        nutritionalInfo: {
          calories:
            parseInt(ingridentsInfo?.nutritionalInfo.calories) +
            parseInt(calories),
          carbs:
            parseInt(ingridentsInfo?.nutritionalInfo.carbs) + parseInt(carbs),
          fat: parseInt(ingridentsInfo?.nutritionalInfo.fat) + parseInt(fat),
          protein:
            parseInt(ingridentsInfo?.nutritionalInfo.protein) +
            parseInt(protein),
        },
      });
    } else {
      console.log(props.nutritionalInfo, 'props.nutritionalInfo')
      setIngridentsInfo({
        nutritionalInfo: {
          calories: parseInt(calories),
          carbs: parseInt(carbs),
          fat: parseInt(fat),
          protein: parseInt(protein),
        },
      });
    }
  }
  const addProduct = () => {
    settotalQuantity((totalQuantity) => totalQuantity + 1);
    currentCount = totalQuantity + 1;
    const index = cartDetails.findIndex((item) => item.name === name);
    // dispatch(updateIndridentsInfo(props));
    if (index >= 0) {
      cartDetails[index].orderQuantity = totalQuantity + 1;
      dispatch(updateCartDetails(cartDetails));
      const {
        carbs = 0,
        calories = 0,
        fat = 0,
        protein = 0,
      } = cartDetails[index].nutritionalInfo;
      setIngridentsInfo({
        nutritionalInfo: {
          calories:
            parseInt(ingridentsInfo?.nutritionalInfo.calories) +
            parseInt(calories),
          carbs:
            parseInt(ingridentsInfo?.nutritionalInfo.carbs) + parseInt(carbs),
          fat: parseInt(ingridentsInfo?.nutritionalInfo.fat) + parseInt(fat),
          protein:
            parseInt(ingridentsInfo?.nutritionalInfo.protein) +
            parseInt(protein),
        },
      });
    } else {
      addSingleProd(currentCount)
  };
 
  }
  const reduceProduct = () => {
    if (totalQuantity >= 0) {
      currentCount = totalQuantity - 1;
      settotalQuantity((totalQuantity) => totalQuantity - 1);
      const index = cartDetails.findIndex((item) => item.name === name);
      const {
        carbs = 0,
        calories = 0,
        fat = 0,
        protein = 0,
      } = cartDetails[index].nutritionalInfo;
      if (currentCount >= 1) {
        if (index >= 0) {
          cartDetails[index].orderQuantity = totalQuantity - 1;
          dispatch(updateCartDetails(cartDetails));
          setIngridentsInfo({
            nutritionalInfo: {
              calories:
                parseInt(ingridentsInfo?.nutritionalInfo.calories) -
                parseInt(calories),
              carbs:
                parseInt(ingridentsInfo?.nutritionalInfo.carbs) - parseInt(carbs),
              fat: parseInt(ingridentsInfo?.nutritionalInfo.fat) - parseInt(fat),
              protein:
                parseInt(ingridentsInfo?.nutritionalInfo.protein) -
                parseInt(protein),
            },
          });
        } else {
          dispatch(
            updateCartDetails([
              ...cartDetails,
              { ...props, orderQuantity: currentCount },
            ])
          );
        }
      } else {
        let filteredCartList = cartDetails.filter((item) => item.name !== name);
        dispatch(updateCartDetails(filteredCartList));
        if (!filteredCartList.length) {
          dispatch(updateIndridentsInfo({}));
        }else{
          setIngridentsInfo({
            nutritionalInfo: {
              calories:
                parseInt(ingridentsInfo?.nutritionalInfo.calories) -
                parseInt(calories),
              carbs:
                parseInt(ingridentsInfo?.nutritionalInfo.carbs) - parseInt(carbs),
              fat: parseInt(ingridentsInfo?.nutritionalInfo.fat) - parseInt(fat),
              protein:
                parseInt(ingridentsInfo?.nutritionalInfo.protein) -
                parseInt(protein),
            },
          });
        }
      }
    }
  };
  return (
    <div className={styles.ProductCard} role="button" >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          styles.btn_sec +
          " " +
          (totalQuantity === 0 ? styles.totalCountRightPosition : "")
        }
      >
          {console.log(totalQuantity, 'totalQuantity')}
        {totalQuantity >= 1 && (
          <>
            <div className={styles.totalCount} onClick={reduceProduct}>
              -
            </div>
            <div className={styles.addBtnIcon}>{totalQuantity}</div>
          </>
        )}
        <div className={styles.totalCount} onClick={addProduct}>
          +
        </div>
      </div>
      <div className={styles.imgSection}>
        <img
          src={imageUrl}
          alt={imgAltTxt}
          className={styles.productImg}
        />
      </div>
      <span>
        <p className={styles.title}>{name}</p>
        <p className={styles.des}>{`${cal} cal, ${description}`}</p>
      </span>
    </div>
  );
};

export default ProductCard;
