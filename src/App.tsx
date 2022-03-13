import { FC } from 'react';
import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import MainSection from 'components/mainSection/MainSection';
import { ProjectsProvider } from 'contexts/ProjectsContext';
import { ModalProvider } from 'contexts/ModalContext';

const App: FC = () => {
  return (
    <ModalProvider>
      <ProjectsProvider>
        <Layout>
          <Header />
          <MainSection />
        </Layout>
      </ProjectsProvider>
    </ModalProvider>
  );
};

export default App;
