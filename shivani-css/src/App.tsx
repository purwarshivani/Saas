import React from "react";
import "./assets/scss/main.scss";

import Dashboard from "./components/mainboard/mainBord";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Landing from "./components/LandingPage/Landing";
import FeaturesProduct from "./components/FeatureProduct/Featured";
import Categories from "./components/Categories/Categories";
import OFProduct from "./components/OffProdcut/OffersProduct";
import PList from "./components/PList/PList";
import Subscribe from "./components/EmailConatct/emailConatct";
import Brand from "./components/Vendor/Vendor";
function App() {
  return (
    <>
      <Header />
      <Landing/>

      <main>
        <Dashboard />
        <FeaturesProduct/>
         <Categories />
         <OFProduct/>
         <PList title={"Trendy Products"} />
      <Subscribe />
      <PList title={"Just Arrived"} />
      <Brand/>
      </main>
      <Footer />
    </>
  );
}

export default App;
