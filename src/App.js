import GlobalStyle from "./Assets/Styles/GlobalStyle";
import SignUpPage from "./Pages/SignUpPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./Pages/SignInPage";
import RecordsPage from "./Pages/RecordsPage";
import InPage from "./Pages/InPage";
import OutPage from "./Pages/OutPage";
import UserProvider from "./Context/User";

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/records" element={<RecordsPage />} />
          <Route path="/in" element={<InPage />} />
          <Route path="/out" element={<OutPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
