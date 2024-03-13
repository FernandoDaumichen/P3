"use client";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useFetchMatches from "../actions/FetchMatches";
import { BeatLoader } from 'react-spinners';



interface Match {
  infoOf: string;
  teamA: string;
  teamB: string;
  teamAResult: string;
  teamBResult: string;
  teamALogo: string;
  teamBLogo: string;
  liveStatus: string;
  over: boolean;
  live: boolean;
  startIn: string;
  matchId: string;
}

interface Competition {
  competition: string;
  competitionLogo: string;
  matchDay: string;
  match: Match[];
  id: string;
}

export default function MatchesList() {
  const { data, error } = useFetchMatches();

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }
  if (!data || data.length === 0) {

    return  <div className="flex justify-center items-center h-[50vh]">
    <BeatLoader color="#2e8ed7" loading={true} size={10} />
</div>
  }

  return (
    <div className="max-h-[50vh] overflow-auto no-scrollbar space-y-4 p-4 shadow-inner bg-custom-white-100 dark:bg-custom-black-100 rounded-xl  dark:shadow-inner">
      {data.map((competition: Competition) => (
        <div key={competition.id} className="space-y-2 ">
          <div className="flex items-center space-x-2 mb-2  ">
            <Image
              src={competition.competitionLogo}
              alt={`${competition.competition} logo`}
              width={40}
              height={40}
              unoptimized={true}
              className="dark:bg-white rounded-xl"
            />
            <h2 className="text-xl font-semibold text dark:text-white">
              {competition.competition}
            </h2>
          </div>
          <hr className=" mr-6 w-3/4 p-2  border-gray-300 " />
          <div className="flex flex-col space-y-1">
            {competition.match.map((match: Match) => (
              <div
                key={match.matchId}
                className="flex justify-between items-center bg-slate-200 shadow rounded-xl p-4"
              >
                <div className="flex items-center space-x-2">
                  <Image
                    src={match.teamALogo}
                    alt={`${match.teamA} logo`}
                    width={24}
                    height={24}
                    unoptimized={true}
                  />
                  <span className="text-md">{match.teamA}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-md font-medium">
                    {match.live || match.over
                      ? `${match.teamAResult} - ${match.teamBResult}`
                      : match.startIn}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-md">{match.teamB}</span>
                  <Image
                    src={match.teamBLogo}
                    alt={`${match.teamB} logo`}
                    width={24}
                    height={24}
                    unoptimized={true}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
