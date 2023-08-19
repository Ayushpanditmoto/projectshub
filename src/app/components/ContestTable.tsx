"use client";
import React, { useState, useEffect } from "react";
import { Contest } from "../../types/contest";

const ContestsList = ({
  apiUrl,
  platformName,
}: {
  apiUrl: string;
  platformName: string;
}) => {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    const fetchContests = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setContests(data);
      } catch (error) {
        console.error(`Error fetching ${platformName} contests:`, error);
      }
    };

    fetchContests();
  }, [apiUrl, platformName]);

  const getCurrentTimestamp = () => Date.now();

  const isContestOngoing = (contest: Contest) => {
    const startTime = new Date(contest.start_time).getTime();
    const endTime = new Date(contest.end_time).getTime();
    const currentTime = getCurrentTimestamp();
    return startTime <= currentTime && currentTime <= endTime;
  };

  const isContestUpcoming = (contest: Contest) => {
    const startTime = new Date(contest.start_time).getTime();
    const currentTime = getCurrentTimestamp();
    return startTime > currentTime;
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold">{platformName} Contests</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mt-4">
          <tbody>
            {contests.map((contest: Contest) => (
              <tr
                key={contest.name}
                className={`${
                  isContestOngoing(contest)
                    ? "bg-green-100"
                    : isContestUpcoming(contest)
                    ? "bg-yellow-100"
                    : "bg-red-100"
                }`}
              >
                <td className="py-2 px-4 border border-gray-300">
                  <a
                    href={contest.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold ${
                      isContestOngoing(contest)
                        ? "text-green-600"
                        : isContestUpcoming(contest)
                        ? "text-yellow-600"
                        : "text-red-600"
                    } hover:underline`}
                  >
                    {contest.name}
                  </a>
                  <div className="text-sm">
                    {new Date(contest.start_time).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                    <br />
                    {new Date(contest.end_time).toLocaleString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContestsList;
