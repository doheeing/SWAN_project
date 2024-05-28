import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./component/MainPage/Homepage";
import Login from "./component/MainPage/Login";
import Chatbot from "./component/Test/Chatbot";
import Score from "./component/Test/Score";
import SolutionPage from "./component/Test/SolutionPage";
import CommentPage from "./component/Test/CommentPage";
import AgreementPage from "./component/Test/AgreementPage";
import SolutionDetailLoadingPage from "./component/Test/SolutionDetailLoadingPage";
import SolutionDetailPage from "./component/Test/SolutionDetailPage";
import AppLayout from "./component/Test/AppLayout";
import FirstPage from "./component/MainPage/FirstPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/score" element={<Score />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/commentPage" element={<CommentPage />} />
        <Route path="/agreement" element={<AgreementPage />} />
        <Route
          path="/solutionLoadingdetail"
          element={<SolutionDetailLoadingPage />}
        />
        <Route path="/solutiondetail" element={<SolutionDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
