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
import Link from "next/link";
import Image from 'next/image'

// Reusable component for displaying colored guide
const ColourGuide = () => {
  const guideItems = [
    { color: "bg-green-400", text: "Contest is running" },
    { color: "bg-yellow-400", text: "Contest is about to start" },
    { color: "bg-red-400", text: "Contest is over" },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {guideItems.map((item, index) => (
        <div className="flex space-x-2" key={index}>
          <div className={`w-4 h-4 ${item.color} rounded-full`}></div>
          <div>{item.text}</div>
        </div>
      ))}
    </div>
  );
};

// Reusable component for the four buttons
const FourButton = () => {
  const buttonLinks = [
    { href: "/dsa", text: "DSA" },
    { href: "/online-assesments", text: "Online Assessment" },
    { href: "/aptitude", text: "Aptitude" },
    { href: "/operating-system", text: "Operating System" },
  ];

  return (
    <div className="flex flex-wrap gap-y-2 sm:gap-x-2 flex-col py-6 sm:flex-row">
      {buttonLinks.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-gray-900 bg-gray-200 inline-flex hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 font-semibold rounded-lg text-base px-5 py-2.5 text-center dark:focus:ring-gray-500 items-center sm:flex-grow sm:basis-1/3 md:basis-auto">
          <Image src={`./icons/fourbuttons/${link.href.slice(1)}.svg`} alt={link.text} width={24} height={24} className="mr-1.5" />
          {link.text}
        </Link>
      ))}
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
