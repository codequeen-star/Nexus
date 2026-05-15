import React, { useState } from 'react';
import { Wallet, ArrowUpRight, ArrowDownLeft, RefreshCcw, DollarSign } from 'lucide-react';

// Transactions ke liye Type
 type Transaction = {
  id: string;
  type: 'Deposit' | 'Transfer' | 'Withdraw';
  amount: number;
  party: string;
  date: string;
  status: 'Completed' | 'Pending';
};

export const PaymentDashboard: React.FC = () => {
  const [balance] = useState(125000); // Mock Balance
  
  // Farzi (Mock) Transaction History
  const [transactions] = useState<Transaction[]>([
    { id: 'TRX-9921', type: 'Deposit', amount: 50000, party: 'Self Funding', date: 'May 12, 2026', status: 'Completed' },
    { id: 'TRX-9922', type: 'Transfer', amount: 15000, party: 'TechCorp Startup', date: 'May 14, 2026', status: 'Completed' },
    { id: 'TRX-9923', type: 'Withdraw', amount: 5000, party: 'Bank Account (Ending 4412)', date: 'May 15, 2026', status: 'Pending' },
  ]);

  const handleAction = (action: string) => {
    alert(`Mock ${action} flow initiated! In a real app, this would open Stripe/PayPal.`);
  };

  return (
    <div className="card-base p-6 bg-white rounded-lg shadow-md border border-neutral-200 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-primary-700">Financial Hub</h2>

      {/* Top Section: Wallet Balance & Buttons */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        
        {/* Wallet Balance Card */}
        <div className="bg-primary-900 text-white p-6 rounded-xl w-full md:w-1/3 shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-primary-200 text-sm font-medium mb-1">Available Balance</p>
            <h3 className="text-4xl font-bold mb-4">${balance.toLocaleString()}</h3>
            <p className="text-xs text-primary-300 flex items-center gap-1">
              <DollarSign size={14} /> USD Wallet
            </p>
          </div>
          <Wallet size={120} className="absolute -bottom-6 -right-6 text-primary-800 opacity-50" />
        </div>

        {/* Action Buttons */}
        <div className="w-full md:w-2/3 grid grid-cols-3 gap-4">
          <button onClick={() => handleAction('Deposit')} className="flex flex-col items-center justify-center p-4 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-primary-50 hover:border-primary-300 transition group">
            <div className="bg-primary-100 p-3 rounded-full text-primary-600 mb-2 group-hover:scale-110 transition">
              <ArrowDownLeft size={24} />
            </div>
            <span className="font-medium text-neutral-700">Deposit</span>
          </button>
          
          <button onClick={() => handleAction('Transfer (Fund Deal)')} className="flex flex-col items-center justify-center p-4 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-accent-50 hover:border-accent-300 transition group">
            <div className="bg-accent-100 p-3 rounded-full text-accent-600 mb-2 group-hover:scale-110 transition">
              <RefreshCcw size={24} />
            </div>
            <span className="font-medium text-neutral-700">Transfer</span>
          </button>

          <button onClick={() => handleAction('Withdraw')} className="flex flex-col items-center justify-center p-4 bg-neutral-50 border border-neutral-200 rounded-xl hover:bg-error-50 hover:border-error-300 transition group">
            <div className="bg-error-100 p-3 rounded-full text-error-600 mb-2 group-hover:scale-110 transition">
              <ArrowUpRight size={24} />
            </div>
            <span className="font-medium text-neutral-700">Withdraw</span>
          </button>
        </div>
      </div>

      {/* Transaction History Table */}
      <div>
        <h3 className="text-lg font-bold text-neutral-800 mb-4">Recent Transactions</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-neutral-100 text-neutral-600 text-sm">
                <th className="p-3 rounded-tl-lg">Transaction ID</th>
                <th className="p-3">Type</th>
                <th className="p-3">Party</th>
                <th className="p-3">Date</th>
                <th className="p-3">Amount</th>
                <th className="p-3 rounded-tr-lg">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((trx) => (
                <tr key={trx.id} className="border-b border-neutral-200 hover:bg-neutral-50">
                  <td className="p-3 text-sm text-neutral-500 font-medium">{trx.id}</td>
                  <td className="p-3 text-sm text-neutral-800">{trx.type}</td>
                  <td className="p-3 text-sm text-neutral-600">{trx.party}</td>
                  <td className="p-3 text-sm text-neutral-500">{trx.date}</td>
                  <td className={`p-3 font-bold ${trx.type === 'Withdraw' || trx.type === 'Transfer' ? 'text-error-600' : 'text-success-600'}`}>
                    {trx.type === 'Withdraw' || trx.type === 'Transfer' ? '-' : '+'}${trx.amount.toLocaleString()}
                  </td>
                  <td className="p-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                      trx.status === 'Completed' ? 'bg-success-100 text-success-700' : 'bg-accent-100 text-accent-700'
                    }`}>
                      {trx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
