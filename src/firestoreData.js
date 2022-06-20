import { db } from "./firebase-config";
import {
  getFirestore,
  onSnapshot,
  query,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
} from "firebase/firestore";

 

  export const fnHashRate = async () => {
    const docRef = doc(db, "hashrate", 'hashrate');
    const sn = await getDoc(docRef);
    // console.log('Hash Rate: '   + sn.data().hashrate);
    return sn.data().hashrate;
  };

  export const fnBTCMined = async () => {
    const docRef = doc(db, "totalEarnings", 'totalEarnings');
    const sn = await getDoc(docRef);
    // console.log('BTC Mined: '   + sn.data().totalEarnings);
    return sn.data().totalEarnings;
  };

  export const fnInvestmentValue = async () => {
    const docRef = doc(db, "dashboard", 'investmentValue');
    const sn = await getDoc(docRef);
    // console.log('Investment Value: '   + sn.data().value);
    return sn.data().value;
  };

  export const fnInitInvestment = async () => {
    const docRef = doc(db, "dashboard", 'initialInvestment');
    const sn = await getDoc(docRef);
    // console.log('Initial Investment: '   + sn.data().value);
    return sn.data().value;
  };

  export const fnTokens = async () => {
    const docRef = doc(db, "totalNFTs", 'totalNFTs');
    const sn = await getDoc(docRef);
    // console.log('Total NFTs: '   + sn.data().totalNFTs);
    return sn.data().totalNFTs;
  };