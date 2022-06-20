import ScrollToTop from "@/base-components/scroll-to-top/Main";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Router from "./router";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {  getFirestore,  onSnapshot,  query,  collection,  getDocs,  addDoc,  updateDoc,  deleteDoc,  doc,  getDoc,} from "firebase/firestore";
import { fnHashRate, fnBTCMined, fnInvestmentValue, fnInitInvestment, fnTokens } from "./firestoreData";


function App() {
  const [hashRate, setHashRate] = useState("");
  const [BTCMined, setBTCMined] = useState("");
  const [InvestmentValue, setInvestmentValue] = useState("");
  const [InitInvestment, setInitInvestment] = useState("");
 

  useEffect(() => {
    const getHashRate = async () => {
      const hashRateValue = await fnHashRate();
      setHashRate(hashRateValue);
   };

    const getBTCMined = async () => {
      const btcValue = await fnBTCMined();
      setBTCMined(btcValue);};
      
    const getInvestmentValue = async () => {
      const value = await fnInvestmentValue();
      setInvestmentValue(value);};

      const getInitInvestment = async () => {
        const value = await fnInitInvestment();
        setInitInvestment(value);};

    getHashRate();
    getBTCMined();
    getInvestmentValue();
    getInitInvestment();
  }, []);
 

  return (
    <RecoilRoot>
      <BrowserRouter>
        <Router />
        <ScrollToTop />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
