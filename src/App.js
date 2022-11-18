import GlobalStyle from "./Assets/Styles/GlobalStyle";
import SignUpPage from "./Pages/SignUpPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import RecordPage from "./Pages/RecordPage";
import InPage from "./Pages/InPage";
import OutPage from "./Pages/OutPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/record" element={<RecordPage />} />
          <Route path="/in" element={<InPage />} />
          <Route path="/out" element={<OutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
