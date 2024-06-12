import React from "react";
import GenAnimatedCounter from "../animated-counter";
import GenDoughnutChart from "../doughnut-chart";

const GenTotalBalance: React.FC<TotalBalanceBoxProps> = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <GenDoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2"> Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>
          <div className="total-balance-amount flex-center gap-2">
            <GenAnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenTotalBalance;
