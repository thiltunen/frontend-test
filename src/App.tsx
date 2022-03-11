import { FC } from "react";
import Layout from "components/layout/Layout";
import Header from "components/header/Header";
import MainSection from "components/mainSection/MainSection";
import { ProjectsProvider } from "contexts/ProjectsContext";

const App: FC = () => {
  return (
    <Layout>
      <Header />
      <ProjectsProvider>
        <MainSection />
      </ProjectsProvider>
    </Layout>
  );
};

export default App;
