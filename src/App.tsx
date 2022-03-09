import { FC } from "react";
import Layout from "components/layout/Layout";
import Header from "components/header/Header";
import MainSection from "components/mainSection/MainSection";

const App: FC = () => {
  return (
    <Layout>
      <Header />
      <MainSection />
    </Layout>
  );
};

export default App;
