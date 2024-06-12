import { GenHeader, GenTotalBalance } from "@/components/general";
import React from "react";

const Home = () => {
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
      </div>
    </section>
  );
};

export default Home;
