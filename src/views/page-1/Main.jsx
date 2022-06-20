import {Lucide, Tippy, Dropdown, DropdownToggle, DropdownMenu, DropdownContent, DropdownItem, PreviewComponent, Preview, Source, Highlight, } from "@/base-components";
import ReportLineChart from "@/components/report-line-chart/Main";
import VerticalBarChart from "@/components/vertical-bar-chart/Main";
import { faker as $f } from "@/utils";
import logoUrl from "@/assets/images/logo-icon.png";
import { useState, useEffect } from "react";
import { db } from "@/firebase-config";
import {  getFirestore,  onSnapshot,  query,  collection,  getDocs,  addDoc,  updateDoc,  deleteDoc,  doc,  getDoc,} from "firebase/firestore";
import { fnHashRate, fnBTCMined, fnInvestmentValue, fnInitInvestment, fnTokens } from "@/firestoreData";

import Analytics from "@/components/Analytics";
import { IoMdArrowDropup } from "react-icons/io"
import CircleProgress from "@/components/CircleProgress";
import TinyLineChart from "@/components/LineChart";
import CustomBarChart from "@/components/CustomBarChart";


function Main() {

  const [hashRate, setHashRate] = useState("");
  const [BTCMined, setBTCMined] = useState("");
  const [InvestmentValue, setInvestmentValue] = useState("");
  const [InitInvestment, setInitInvestment] = useState("");
  const [tokens, setTokens] = useState("");


  useEffect(() => {
    const getHashRate = async () => {
      const hashRateValue = await fnHashRate();
      setHashRate(hashRateValue);
  };

    const getBTCMined = async () => {
      const btcValue = await fnBTCMined();
      setBTCMined(btcValue);};
      
    const getTokens = async () => {
        const tokens = await fnTokens();
        setTokens(tokens);};

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
    getTokens();
  }, []);

  return (
    <>
    <div className="grid grid-cols-12 gap-6" style={{minWidth: "380px"}}>
      <div className="col-span-12 lg:col-span-9 2xl:col-span-9">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* ----------------- First Card Start ----------------- */}
          <div className="intro-y w-full h-full"> 
            <div className="report-box zoom-in w-full h-full">  
              <div className="min-w-fit h-full box rounded-lg py-4 px-6 text-white"> <span className=" text-gray-300 font-neuePlak">Total earning</span>
                <div className="flex space-x-1">
                  <h2 className="text-xl font-bold text-white py-1 m-0">{ '$'+InvestmentValue }</h2>
                  <div className="text-slate-500 flex items-end py-1">
                    <IoMdArrowDropup size="20px" />
                    <span>10%</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400 ">Compared to $21,490 last year</span>
              </div>
            </div>
          </div>
          {/* ----------------- First Card End ----------------- */}
          {/* ----------------- Second Card Start ----------------- */}
          <div className="intro-y w-full h-full">
            <div className="report-box zoom-in w-full h-full">
              <div className="min-w-fit h-full box rounded-lg py-4 px-6 text-white">
                <span className=" text-gray-300 font-neuePlak">Total BTC Mined</span>
                <div className="flex space-x-1">
                  <h2 className="text-xl font-bold text-white py-1 m-0">{ BTCMined } </h2>
                  <div className="text-slate-500 flex items-end py-1">
                    <IoMdArrowDropup size="20px" />
                    <span>10%</span>
                  </div>
                </div>
                <span className="text-xs text-gray-400">Compared to $21,490 last year</span>
              </div>
            </div>
          </div>
          {/* ----------------- Second Card End ----------------- */}
          {/* ----------------- Third Card Start ----------------- */}
          <div className="intro-y w-full h-full"> 
            <div className="report-box zoom-in w-full h-full">
              <div className="min-w-fit h-full box pt-5 pb-2 px-5 text-white">
                <div className="flex justify-between">
                  <p className="m-0 font-thin font-neuePlak">Live Hash Rate</p>
                </div>
                <div className="flex items-end ">
                  <h4 className="-mb-1 -mr-3 text-white text-xl py-1 font-bold">{ hashRate }</h4>
                  <div className="w-8/12 pl-4 pr-2 h-10">
                    <TinyLineChart />
                  </div>
                  <span className="-mb-1 -ml-1.5">0</span>
                </div>
              </div>
            </div>
          </div>
          {/* ----------------- Third Card End ----------------- */}
          {/* ----------------- Fourth Card Start ----------------- */}
          <div className="intro-y w-full h-full"> {/* Card Stat One */}
            <div className="report-box zoom-in w-full h-full">
              <div className="min-w-fit h-full box rounded-lg py-4 px-6 text-white flex items-center space-x-4">
                <div>
                  <CircleProgress />
                </div>
                <div className="flex flex-col text-xl font-thin">
                  <span>{tokens+'/9999'}</span>
                  <span>NFTs Sold</span>
                </div>
              </div>
            </div>  
          </div>
          {/* ----------------- Fourth Card End ----------------- */}
          {/* ----------------- Quick Info Cards End ----------------- */}
        </div>

          {/* < Tracker /> */}



      {/* ----------------- Chart 1 start ----------------- */}
      <div className="col-span-12 lg:col-span-6 mt-8">
        <div className="intro-y box p-5 mt-12 sm:mt-5">  
          <div className="flex items-center justify-center">
            <Analytics />
          </div>
        </div>     
      </div>  
      {/* ----------------- Chart 1 End ----------------- */}
      {/* ----------------- Chart 2 Start ----------------- */}
      <div className="col-span-12 lg:col-span-6 mt-8">
        <div className="intro-y box p-5 mt-12 sm:mt-5">  
          <div className="py-10">
            <CustomBarChart />
          </div>
        </div>     
      </div>  
    </div>    
      {/* BEGIN: Recent Activities */}
          <div className="hidden lg:block col-span-3 md:col-span-3 xl:col-span-3 2xl:col-span-3">
              <div className="relative before:block before:absolute before:w-px before:h-[85%] before:bg-slate-200 before:dark:bg-darkmode-400 before:ml-5 before:mt-5">
                <div className="intro-x relative flex items-center mb-3">
                  <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img
                        alt=""
                        src={logoUrl}
                      />
                    </div>
                  </div>
                  <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">HWMC Release </div>
                      <div className="text-xs text-slate-500 ml-auto">
                        0:00 PM
                      </div>
                    </div>
                    <div className="text-slate-500 mt-1">
                      HWMC Soft Release v1.0.1
                    </div>
                  </div>
                </div>
                <div className="intro-x relative flex items-center mb-3">
                  <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={logoUrl}
                      />
                    </div>
                  </div>
                  <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">Next Updates</div>
                      <div className="text-xs text-slate-500 ml-auto">
                      
                      </div>
                    </div>
                    <div className="text-slate-500">
                      <div className="mt-1">
                        Overview dashboard API Intergrations for charts.
                      </div>
                      <div className="flex mt-2">
                      
                      Live Crypto Market Widget
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intro-x relative flex items-center mb-3">
                  <div className="before:block before:absolute before:w-20 before:h-px before:bg-slate-200 before:dark:bg-darkmode-400 before:mt-5 before:ml-5">
                    <div className="w-10 h-10 flex-none image-fit rounded-full overflow-hidden">
                      <img
                        alt="Midone Tailwind HTML Admin Template"
                        src={logoUrl}
                      />
                    </div>
                  </div>
                  <div className="box px-5 py-3 ml-4 flex-1 zoom-in">
                    <div className="flex items-center">
                      <div className="font-medium">Pipe Line</div>
                      <div className="text-xs text-slate-500 ml-auto">
                        
                      </div>
                    </div>
                    <div className="text-slate-500 mt-1">
                      TBA
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END: Recent Activities */}
      </div>
    </>
  );
}

export default Main;
