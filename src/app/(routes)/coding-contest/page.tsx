"use client"
import { AppDispatch, useAppSelector } from '@/redux/store';
import CenterLayout from '../../components/CenterLayout';
import ContestsList from '../../components/ContestTable';
import { fetchCodechefContest,fetchLeeCodeContest,fetchCodeforceContest} from '@/redux/features/coding contest/codingSlice';
import { useDispatch} from 'react-redux';
import {  useEffect } from 'react';


const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {Codechef,Codeforces,Leetcode} = useAppSelector((state) => state.codingReducer);
 
  
  useEffect(() => {
   
      dispatch(fetchCodechefContest());
      dispatch(fetchLeeCodeContest());
      dispatch(fetchCodeforceContest());
   
   
  }, []);


  return (
    <CenterLayout>
    <div className="container mx-auto px-4 sm:px-8">
      <ContestsList  platformName="LeetCode" data={Leetcode} />
      <ContestsList  platformName="CodeChef" data={Codechef} />
      <ContestsList  platformName="Codeforces" data={Codeforces} />
    </div>
    </CenterLayout>
  );
};

export default App;
