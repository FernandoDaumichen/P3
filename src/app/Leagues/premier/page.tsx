"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFetchPremier, TeamStanding } from "../../actions/FetchLeagues";

export default function Premier() {
  const { data, error } = useFetchPremier();

  if (error) return <div className="text-red-500">Error loading data: {error}</div>;
  if (!data) return <div>Loading...</div>;

  const standings = data?.response?.[0]?.league?.standings[0];
  console.log(standings);

  if (!standings || !Array.isArray(standings)) {
    return <div>Invalid standings data</div>;
  }

  return (
    <div className="overflow-x-auto mt-6">
        <div className="flex justify-center">
            <Image src="/images/leagues/PremierLogo.png" alt="premierleague" width={150} height={150} />
      <h1 className="text-8xl md:text-4xl text-white text-bold ">
        Premier League Standings
      </h1>
        </div>
      {standings && (
        <div className="max-w-screen-lg mx-auto">
          <table className="w-full table-auto border-collapse bg-white shadow-lg">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-2 py-1 text-center text-sm">Pos</th>
                <th className="px-2 py-1 text-center text-sm">Team</th>
                <th className="px-2 py-1 text-center text-sm">P</th>
                <th className="px-2 py-1 text-center text-sm">W</th>
                <th className="px-2 py-1 text-center text-sm">D</th>
                <th className="px-2 py-1 text-center text-sm">L</th>
                <th className="px-2 py-1 text-center text-sm">PTS</th>
                <th className="px-2 py-1 text-center text-sm">GF</th>
                <th className="px-2 py-1 text-center text-sm">GA</th>
                <th className="px-2 py-1 text-center text-sm">+/-</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {standings.map((team, index) => (
                <tr key={index} className="text-xs md:text-sm border-b">
                  <td className="px-2 py-1 text-center">{team.rank}</td>
                  <td className="px-2 py-1 text-center flex items-center space-x-2">
                    <Image src={team.team.logo} alt={team.team.name} width={24} height={24} unoptimized={true} />
                    <span>{team.team.name}</span>
                  </td>
                  <td className="px-2 py-1 text-center">{team.all.played}</td>
                  <td className="px-2 py-1 text-center">{team.all.win}</td>
                  <td className="px-2 py-1 text-center">{team.all.draw}</td>
                  <td className="px-2 py-1 text-center">{team.all.lose}</td>
                  <td className="px-2 py-1 text-center">{team.points}</td>
                  <td className="px-2 py-1 text-center">{team.all.goals.for}</td>
                  <td className="px-2 py-1 text-center">{team.all.goals.against}</td>
                  <td className="px-2 py-1 text-center">{team.goalsDiff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}