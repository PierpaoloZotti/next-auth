"use client";

import Header from "@/app/components/Header";

const Dashboard = () => {
   return (
      <div>
         <Header />
         <div className="flex justify-center flex-col items-center gap-8">
            <h1>Congrats, you logged in</h1>
         </div>
      </div>
   );
};

export default Dashboard;
