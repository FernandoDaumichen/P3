"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import useFetchBraA1, { TeamStanding } from "../../actions/FetchLeagues";

export default function BraA1() {
  const { data, error } = useFetchBraA1();

  if (error)
    return <div className="text-red-500">Error loading data: {error}</div>;
  if (!data) return <div>Loading...</div>;

  // Correctly access the nested data for rendering
  const standings = data?.response?.[0]?.league?.standings[0];
  console.log(standings);

  if (!standings || !Array.isArray(standings)) {
    return <div>Invalid standings data</div>;
  }
  return (
    <div className="overflow-x-auto mt-6">
      <h1 className="text-2xl font-bold text-center mb-4">
        Brasileirão Série A
      </h1>
 
      {standings && (
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="border border-gray-200 px-4 py-2">Position</th>
              <th className="border border-gray-200 px-4 py-2">Team</th>
              <th className="border border-gray-200 px-4 py-2">Played</th>
              <th className="border border-gray-200 px-4 py-2">Wins</th>
              <th className="border border-gray-200 px-4 py-2">Draws</th>
              <th className="border border-gray-200 px-4 py-2">Losses</th>
              <th className="border border-gray-200 px-4 py-2">Points</th>
              <th className="border border-gray-200 px-4 py-2">Goals For</th>
              <th className="border border-gray-200 px-4 py-2">Goals Against</th>
              <th className="border border-gray-200 px-4 py-2">Goal Difference</th>
            </tr>
          </thead>
          {data && (
            <tbody className="text-gray-700">
              {standings.map((team, index) => (
                <tr key={index}>
                  <td className="border border-gray-200 px-4 py-2">
                    {team.rank}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <Image
                      src={team.team.logo}
                      alt={team.team.name}
                      width={30}
                      height={30}
                      unoptimized={true}
                      
                    />
                    {team.team.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {team.all.played}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {team.all.win}
                  </td>
                  {/* Continue for the rest of the data points */}
                  <td className="border border-gray-200 px-4 py-2">
                    {team.points}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {team.all.goals.for}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {team.all.goals.against}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {team.goalsDiff}
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      )}
    </div>
  );
}
