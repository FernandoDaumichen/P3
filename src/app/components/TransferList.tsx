'use client';
import React from 'react';
import useFetchTransfers from '../actions/FetchTransfers';
import useFetchImages from '../actions/FetchPlayersImage'; // Assuming you have a similar hook for fetching images
import Image from 'next/image';
import { BeatLoader } from 'react-spinners';


const TransfersComponent = () => {
  const { transfers, error: transferError } = useFetchTransfers();
  const { images, error: imagesError } = useFetchImages(); // Fetch images similarly

  // Helper function to convert timestamp to date string
  const formatDate = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleDateString('en-US');
  };

  // Function to get image URL by playerID
  const getImageUrlByPlayerId = (playerID: string): string | undefined => {
    return images?.find((image) => image.id === playerID)?.image;
  };

  // Handle loading and error states
  if (transferError || imagesError) return <div>Error: {transferError || imagesError}</div>;
  if (transfers === null || images === null) return <div className="flex justify-center items-center h-[50vh]">
  <BeatLoader color="#2e8ed7" loading={true} size={10} />
</div>

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-wrap -mx-2">
        {transfers.map((transfer) => (
          <div key={transfer.id} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
            <div className="bg-gray-900 text-white rounded-lg shadow-md p-6">
              <div>

                <h3 className="text-lg font-bold">Player ID: {transfer.playerID}</h3>
                <p className="text-sm">From Club ID: {transfer.fromClubID}</p>
                <p className="text-sm">To Club ID: {transfer.toClubID}</p>
                <p className="text-sm">Transferred At: {formatDate(transfer.transferredAt)}</p>
                <p className="text-sm">Season: {transfer.season}</p>
              </div>
              <div>
                <p className="text-lg font-bold">Transfer Fee: {transfer.transferFee.value} {transfer.transferFee.currency}</p>
                <p className="text-sm">Market Value: {transfer.transferMarketValue.value} {transfer.transferMarketValue.currency}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransfersComponent;
