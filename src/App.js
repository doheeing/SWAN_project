import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Login from "./layout/Login";
import Homepage from "./layout/Homepage";
import MainPage from "./layout/MainPage";
import Chatbot from "./layout/Chatbot";
import SolutionPage from "./layout/SolutionPage";
import Score from "./layout/Score";
import CommentPage from "./layout/CommentPage";
import AgreementPage from "./layout/AgreementPage";
import SolutionDetailPage from "./layout/SolutionDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Chatbot />} />
        <Route path="/score" element={<Score />} />
        <Route path="/solution" element={<SolutionPage />} />
        <Route path="/commentPage" element={<CommentPage />} />
        <Route path="/agreement" element={<AgreementPage />} />
        <Route path="/solutiondetail" element={<SolutionDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;
