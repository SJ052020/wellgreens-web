import { useEffect, useState } from "react";
import { useAppContext } from "../../../context";
import {  updateIsAuthorised } from "../../../context/actions";
import CustomLoader from "../../atoms/customLoader/customLoader";
import { Footer } from "../../molecules/footer/footer";

export default function Layout({ children }) {
  const {state: {isAuthorised,isLoading},dispatch} = useAppContext()
  useEffect(() =>{
    if(typeof window != undefined){
      if(sessionStorage.getItem('AccessToken')){
        dispatch(updateIsAuthorised(true))
      }
    }
  }, [] 
  )

  return (
    <>
      <main>{children}</main>
      {
        isAuthorised && (
          <Footer />
        )
      }
      {isLoading &&
        <CustomLoader/>
      }
    </>
  );
}
