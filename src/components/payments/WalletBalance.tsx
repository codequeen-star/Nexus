import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card, CardBody, CardFooter, CardHeader } from '../ui/Card';
import { useAuth } from '../../context/AuthContext';

export const WalletBalance: React.FC = () => {
  const { user } = useAuth();
  const isInvestor = user?.role === 'investor';

  const balance = isInvestor ? 15820.5 : 0;
  const available = isInvestor ? 12450.75 : 0;
  const pending = isInvestor ? balance - available : 0;

  return (
    <Card className="border border-slate-200 bg-slate-50">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-slate-500">Wallet Balance</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">
              ${balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </h2>
          </div>
          <Badge variant="success">Investor Wallet</Badge>
        </div>
      </CardHeader>

      <CardBody className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Available to invest</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              ${available.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Pending allocation</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">
              ${pending.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </p>
          </div>

          <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Last updated</p>
            <p className="mt-2 text-xl font-semibold text-slate-900">Just now</p>
          </div>
        </div>

        <p className="text-sm text-slate-600">
          Manage your wallet balance and review available funds before making a new investment.
        </p>
      </CardBody>

      <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <Button variant="outline" size="md" disabled>
          Deposit
        </Button>
        <Button variant="secondary" size="md" disabled>
          Withdraw
        </Button>
      </CardFooter>
    </Card>
  );
};