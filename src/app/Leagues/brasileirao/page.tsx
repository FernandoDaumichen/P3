"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFetchBraA1, TeamStanding } from "../../actions/FetchLeagues";
import useFetchNewsDataBraA1 from "../../actions/FetchDataLeagues";
import BeatLoader from "react-spinners/BeatLoader";
import { Article } from "../../actions/FetchDataLeagues";
import { useFetchBraA1TopScores } from "@/app/actions/FetchTopScores";
import Collapsible from "react-collapsible";

export default function BraA1() {
  const { data, error } = useFetchBraA1();
  const { data2, error2 } = useFetchNewsDataBraA1();
  const { data3, error3 } = useFetchBraA1TopScores();
  console.log(data3);
  if (error)
    return <div className="text-red-500">Error loading data: {error}</div>;
  if (!data)
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <BeatLoader color="#2e8ed7" loading={true} size={10} />
      </div>
    );

  const standings = data?.response?.[0]?.league?.standings[0];
  // console.log(standings);
  // console.log(data2);

  if (!standings || !Array.isArray(standings)) {
    return <div>Invalid standings data</div>;
  }

  if (error2) return <div>Error fetching news: {error2}</div>;
  if (!data2) return <div>Loading news...</div>;
  if (!data3) return <div>Loading top scores...</div>;

  return (
    <div className="overflow-x-auto mt-6">
      <div className="flex justify-center">
        <div className="dark:bg-white rounded-xl p-4">
          <Image
            src="/images/leagues/Brasileirao.png"
            alt="Brasileirao Serie A"
            width={150}
            height={150}
          />
        </div>
        <h1 className="text-8xl md:text-4xl text-black text-bold dark:text-white p-4 ">
          Brasileirão Serie A
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
                    <Image
                      src={team.team.logo}
                      alt={team.team.name}
                      width={24}
                      height={24}
                      unoptimized={true}
                    />
                    <span>{team.team.name}</span>
                  </td>
                  <td className="px-2 py-1 text-center">{team.all.played}</td>
                  <td className="px-2 py-1 text-center">{team.all.win}</td>
                  <td className="px-2 py-1 text-center">{team.all.draw}</td>
                  <td className="px-2 py-1 text-center">{team.all.lose}</td>
                  <td className="px-2 py-1 text-center">{team.points}</td>
                  <td className="px-2 py-1 text-center">
                    {team.all.goals.for}
                  </td>
                  <td className="px-2 py-1 text-center">
                    {team.all.goals.against}
                  </td>
                  <td className="px-2 py-1 text-center">{team.goalsDiff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex  mt-4 flex-wrap">
        <h2 className="text-2xl text-black dark:text-white w-full text-center mb-4 ">
          Brasileirão Serie A News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  xl mx-auto">
          {data2?.articles.map((article: Article, index: number) => (
            <div
              key={index}
              className="transition-shadow hover:shadow-md p-4 rounded-lg bg-white dark:bg-gray-800"
            >
              <h3 className="text-lg font-semibold dark:text-white mb-2">
                {article.headline}
              </h3>
              {article.images && article.images.length > 0 && (
                <div className="mb-2">
                  <Image
                    src={article.images[0].url}
                    alt={article.images[0].caption || article.headline}
                    width={article.images[0].width}
                    height={article.images[0].height}
                    layout="responsive"
                    unoptimized={true}
                    className="rounded-lg"
                  />
                </div>
              )}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {article.description}
              </p>
              <Link
                href={article.links.web.href}
                passHref
                className="inline-block px-6 py-2 border rounded text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition-colors dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Top Scorers</h2>
          {data3.response.slice(0, 10).map((player, index) => (
            <Collapsible
              key={index}
              trigger={
                <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={player.player.photo}
                      alt={player.player.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                      unoptimized={true}
                    />
                    <div>
                      <p className="font-semibold">{player.player.name}</p>
                      <p className="text-sm">{player.player.nationality}</p>
                      <p className="text-sm">
                        {player.statistics[0].team.name}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p>Position:{player.statistics[0].games.position}</p>
                    <p className="font-semibold">
                      {player.statistics[0].goals.total} Goals
                    </p>
                  </div>
                </div>
              }
              className="mb-4"
            >
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100 rounded-lg">
                <h2> Player Info </h2> 
                <hr />
                <p>Full Name:{player.player.firstname}{player.player.lastname}</p>
                <p>Birthday: {player.player.birth.date}</p>
                <p>Age: {player.player.age}</p>
                <p>Birth Place: {player.player.birth.place}</p>
                <p>Height: {player.player.height}</p>
                <p>Weight: {player.player.weight}</p>
                
                <h2> Player Stats </h2>
                <hr />
                <p>Matches: {player.statistics[0].games.appearences}</p>
                <p>Minutes Played: {player.statistics[0].games.minutes}</p>
                <p>Shots: {player.statistics[0].shots.total}</p>
                <p>Yellow Cards: {player.statistics[0].cards.yellow}</p>
                <p>Red Cards: {player.statistics[0].cards.red}</p>
                <p>Fouls Committed: {player.statistics[0].fouls.committed}</p>
                <p>Passes: {player.statistics[0].passes.total}</p>

              </div>
            </Collapsible>
          ))}
        </div>
      </div>
    </div>
  );
}
