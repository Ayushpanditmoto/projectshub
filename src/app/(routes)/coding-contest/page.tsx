"use client"
import { AppDispatch, RootState, useAppSelector } from '@/redux/store';
import CenterLayout from '../../components/CenterLayout';
import ContestsList from '../../components/ContestTable';
import { useDispatch ,useSelector} from 'react-redux';
import { use, useEffect } from 'react';
const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {Codechef,Codeforces,Leetcode} = useAppSelector((state) => state.codingReducer);
  console.log(Codechef);
  console.log(Codeforces);
  console.log(Leetcode);
  
  useEffect(() => {
    dispatch({type:"coding/fetchCodeforceContest"});
    dispatch({type:"coding/fetchCodechefContest"});
    dispatch({type:"coding/fetchLeeCodeContest"});
  }, []);


  return (
    <CenterLayout>
    <div className="container mx-auto px-4 sm:px-8">
      <ContestsList apiUrl="https://kontests.net/api/v1/leet_code" platformName="LeetCode" />
      <ContestsList apiUrl="https://kontests.net/api/v1/code_chef" platformName="CodeChef" />
      <ContestsList apiUrl="https://kontests.net/api/v1/codeforces" platformName="Codeforces" />
    </div>
    </CenterLayout>
  );
};

export default App;
