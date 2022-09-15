import Image from "next/image";
import React, { useEffect, useState } from "react";
import CaraouselScroller from "../../molecules/slider/slider";
import styles from "./myPlate.module.css";
import orange from "../../../assests/images/orange.svg";
import pomegranate from "../../../assests/images/pomegranate.svg";
import banana from "../../../assests/images/banana.svg";
import ProductCard from "../../molecules/productCard/productCard";
import dynamic from "next/dynamic";
import { plateImgValues } from "../../../mocks/mockData";
import DynamicPlate from "../../molecules/dynamicPlate/dynamicPlate";
import { useAppContext } from "../../../context";
import { getCategoryList, getProductList, getSelectedProductList, setLoaderState, updateCartDetails, updateIndridentsInfo } from "../../../context/actions";
import CategoryData from '../../../mockJson/getCategories.json'
import CustomLoader from "../../atoms/customLoader/customLoader";
import { Header } from "../../molecules/header/header";
import { useRouter } from "next/router";
// import { useMutation } from 'graphql-hooks'
import { useQuery, gql } from '@apollo/client';


const GetAllProducts = gql`query {
  getCategories {
      categories{
      id
      name
           items{
        id
        name
        description
        imgAltTxt
        imageUrl
        nutritionalInfo{
          id
          carbs
          calories
          fat
          protein
        }
      }   
    }  
  }
  }`
  const GetAllCategories = gql`query {
    getCategories {
        categories{
        id
        name   
      }  
    }
    }`

const IngridentsPopupInfo = dynamic(
  import("../../molecules/ingridentsPopup/ingridentsPopup"),
  { ssr: false }
);
const MyPlate = () => {
  const { state, dispatch } = useAppContext();
  const { productList = [], categoryList = [],  ingridentsInfo } = state;
  const router = useRouter();
  const [productsDetails ,setProductsDetails] = useState([]);
  const { loading:categoryLoading, error:categoryQueryError, data:categories } = useQuery(GetAllCategories);
  const { loading:productsLoading, error:productsQueryError, data:products } = useQuery(GetAllProducts, {
    fetchPolicy: "no-cache" 
  });
  
  // useEffect(() => {
  //     dispatch(getProductList({ items: mockData.categories }));
  //     dispatch(getCategoryList({ items: CategoryData.categories }));
  // }, []);
  
  useEffect(() => {
    if (categories?.getCategories.categories && products?.getCategories.categories) {
      dispatch(setLoaderState(false))
      dispatch(updateCartDetails([]))
      dispatch(updateIndridentsInfo({}))
      dispatch(getCategoryList({ items: categories.getCategories.categories   }));
      dispatch(getProductList({ items: products.getCategories.categories }));
    }else{
    dispatch(setLoaderState(true))
    }
  }, [categories?.getCategories.categories,products?.getCategories.categories]);

  
  useEffect(() => {
    if (productList.length) {
    setProductsDetails(productList[0].items)
    }
  }, [productList])
  if (!categoryList.length && !productsDetails.length) {
    return <CustomLoader />
  }
  const getSelectedCategory = (id, i) => {
    const selectedProduct = productList.filter((item) => item.id === id)
    if(selectedProduct.length){
      setProductsDetails([...selectedProduct[0].items])
    }else{
      setProductsDetails([])
    }
  }
  const onLogSummary = () => {
    router.push('/platesummary')
  }
  return (
    <div className={styles.plateMainContainer}>
      <Header pageTitle='Make a plate' />
      <div className={styles.plateDataContainer}>
        <DynamicPlate plateImgValues={plateImgValues} />
        <div className={styles.category_prod_container}>
          <CaraouselScroller items={categoryList} onClickHandler={getSelectedCategory} />
          <section className={styles.productSection}>
            <p className={styles.productTitle}>Seasonal favorites</p>
            <div className={styles.productCard}>
              {console.log(productsDetails, 'productDetails')}
              {productsDetails.length ? productsDetails?.map((item, key) =>  <ProductCard key={`${item.name}_${key}`} {...item} />
              ) : <h3 className={styles.no_data}>No Product Found Related to Selected Category</h3>}
            </div>
          </section>
        </div>
        {Object.keys(ingridentsInfo).length > 0 && (
          <>
            <IngridentsPopupInfo onLogMyPlate={onLogSummary} isSummaryPage={false} ingridentsInfo={ingridentsInfo} />
          </>
        )}
      </div>
    </div>
  );
};

export default MyPlate;
