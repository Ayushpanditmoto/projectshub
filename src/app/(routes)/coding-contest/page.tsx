"use client";
import { AppDispatch, useAppSelector } from "@/redux/store";
import CenterLayout from "../../components/CenterLayout";
import ContestsList from "../../components/ContestTable";
import {
  fetchCodechefContest,
  fetchLeeCodeContest,
  fetchCodeforceContest,
} from "@/redux/features/coding contest/codingSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ColourGuide = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-green-400 rounded-full"></div>
        <div>Contest is running</div>
      </div>
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
        <div>Contest is about to start</div>
      </div>
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-red-400 rounded-full"></div>
        <div>Contest is over</div>
      </div>
    </div>
  );
};

const FourButton = () => {
  // here create a button for dsa , online assement , apptitude , operating system
  return (
    <div className="flex flex-row py-4 space-x-2">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        DSA
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Online Assement
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Apptitude
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Operating System
      </button>
    </div>
  );
};

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { Codechef, Codeforces, Leetcode } = useAppSelector(
    (state) => state.codingReducer
  );

  useEffect(() => {
    dispatch(fetchCodechefContest());
    dispatch(fetchLeeCodeContest());
    dispatch(fetchCodeforceContest());
  }, []);

  return (
    <CenterLayout>
      <FourButton />
      <ColourGuide />

      <div className="container mx-auto px-4 sm:px-8">
        <ContestsList platformName="LeetCode" data={Leetcode} />
        <ContestsList platformName="CodeChef" data={Codechef} />
        <ContestsList platformName="Codeforces" data={Codeforces} />
      </div>
    </CenterLayout>
  );
};

export default App;
