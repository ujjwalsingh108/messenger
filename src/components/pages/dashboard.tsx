import * as React from "react";
import Header from "../organisms/header";
import CreateExpense from "../templates/createexpense";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <CreateExpense />
    </React.Fragment>
  );
};

export default Dashboard;
