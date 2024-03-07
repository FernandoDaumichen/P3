'use client'
import React from 'react';
import useFetchTransfers from '../actions/FetchTransfers';
interface TransferFee {
  value: string;
  currency: string;
  progression: null | string;
}

interface Transfer {
  id: string;
  playerID: string;
  fromClubID: string;
  toClubID: string;
  transferredAt: number;
  isLoan: null | boolean;
  wasLoan: null | boolean;
  season: string;
  fromCompetitionID: string;
  toCompetitionID: string;
  transferFee: TransferFee;
  transferMarketValue: TransferFee;
}

// Assuming transfers is an array of Transfer and is passed as a prop or fetched from an API
const TransfersComponent = () => {
    const { transfers, error } = useFetchTransfers();
  
    // Helper function to convert timestamp to date string
    const formatDate = (timestamp: number): string => {
      return new Date(timestamp * 1000).toLocaleDateString('en-US');
    };
  
    // Handle loading and error states
    if (error) return <div>Error: {error}</div>;
    if (transfers === null) return <div>Loading...</div>;
  
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
    }
  
  export default TransfersComponent;
  
