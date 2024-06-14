import {
  GenHeader,
  GenRightSidebar,
  GenTotalBalance,
} from "@/components/general";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
  const user = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <GenHeader
            subtext="Access and manage your account and transaction efficiently."
            title="Welcome"
            type="greeting"
            user="Guest"
          />

          <GenTotalBalance
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTION
      </div>

      <GenRightSidebar
        user={user as any}
        transactions={[]}
        banks={[{ currentBalance: 123.35 }, { currentBalance: 3000 }]}
      />
    </section>
  );
};

export default Home;
