import { createContext, useReducer } from "react";
import Layout from "../components/templates/layout/layout";
import RootContext from "../context";
import "../styles/globals.css";
import GrapQlClient from "../graphql-client";

function MyApp({ Component, pageProps }) {

  return (
    <RootContext>
    <Layout>
      <GrapQlClient>
      <Component {...pageProps} />
      </GrapQlClient>
    </Layout> 
    </RootContext>

  );
}

export default MyApp;
