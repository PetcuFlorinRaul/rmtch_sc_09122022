import { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';

import AppContainer from "./components/AppComponents/AppContainer";
import AppLoadingPlaceholder from "./components/AppComponents/AppLoadingPlaceholder";
import MainPage from "./components/AppComponents/MainPage";
import HomePage from "./components/HomePage/HomePage";
import PagesManagerPage from "./components/PagesManagerPage/PagesManagerPage";
import SubPagesPage from "./components/SubPagesPage/SubPagesPage";
import PageManagerHomePage from "./components/PagesManagerPage/PageManagerHomePage/PageManagerHomePage";
import PageManagerCreatePage from "./components/PagesManagerPage/PageManagerCreatePage/PageManagerCreatePage";
import EditPage from "./components/EditPage/EditPage";
import PagePresentation from "./components/PagesManagerPage/PagePresentation/PagePresentation";
import SubPagesHomePage from "./components/SubPagesPage/SubPagesPageComponents/SubPagesHomePage";
import CreateSubpage from "./components/SubPagesPage/CreateSubpage/CreateSubpage";
import ImagesPage from "./components/ImagesPage/ImagesPage";
import ImagesPageHomepage from "./components/ImagesPage/ImagesPageComponents/ImagesPageHomepage";
import PDFPage from "./components/PDFPage/PDFPage";
import PDFHomePage from "./components/PDFPage/PDFPageComponents/PDFHomePage";
import EditSubpage from "./components/EditSubpage/EditSubpage";

function App() {

  const [loading, setLoading] = useState<boolean>(true);
  const [wsConnected, setWSConnected] = useState<boolean>(false);

  const socket = io('http://localhost:5000');



  useEffect(() => {

    socket.on("connect", () => {
      console.log("Connected to ws");
      setTimeout(() => {
        setLoading(false);
        setWSConnected(true);
      }, 5000);
    })

  }, []);

  socket.on("disconnect", () => {
    console.log('Disconnected from ws')
    setWSConnected(false);
  })

  return (
    <AppContainer>
      <AnimatePresence>
        {
          loading && (
            <AppLoadingPlaceholder />
          )
        }
        {
          !loading && (
            <Router>
              <Routes>
                <Route path="/" element={<MainPage />}>
                  <Route path="" element={<HomePage serverStatus={wsConnected} />} />
                  <Route path="pages" element={<PagesManagerPage />}>
                    <Route path="" element={<PageManagerHomePage />} />
                    <Route path="create_page" element={<PageManagerCreatePage />} />
                    <Route path=":pageID" element={<PagePresentation />} />
                  </Route>
                  <Route path="edit_page/:pageID" element={<EditPage />} />
                  <Route path="subpages" element={<SubPagesPage />}>
                    <Route path="" element={<SubPagesHomePage />} />
                    <Route path="create_subpage" element={<CreateSubpage />} />
                  </Route>
                  <Route path="edit_subpage/:subpageID" element={<EditSubpage />} />
                  <Route path="images" element={<ImagesPage />}>
                    <Route path="" element={<ImagesPageHomepage />} />
                  </Route>
                  <Route path="pdf_files" element={<PDFPage />}>
                    <Route path="" element={<PDFHomePage />} />
                  </Route>
                </Route>
              </Routes>
            </Router>
          )
      }
      </AnimatePresence>
    </AppContainer>
  );
}

export default App;
