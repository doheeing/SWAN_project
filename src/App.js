import "./App.css";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/MainPage/Homepage/Homepage";
import Login from "./pages/MainPage/Auth/Login";
import Signup from "./pages/MainPage/Singup/Singup";
import FirstPage from "./pages/MainPage/Homepage/FirstPage";
import Chatbot from "./pages/Test/Chatbot/Chatbot";
import Score from './pages/Test/Score/Score';
import SolutionPage from './pages/Test/SolutionPage/SolutionPage';
import CommentPage from './pages/Test/CommentPage/CommentPage';
import AgreementPage from './pages/Test/AgreementPage/AgreementPage';
import SolutionDetailLoadingPage from './pages/Test/SolutionDetailLoadingPage/SolutionDetailLoadingPage';
import SolutionDetailPage from './pages/Test/SolutionDetailPage/SolutionDetailPage';
import AddressPage from './pages/Test/AddressPage/AddressPage';
import ConfirmationPage from './pages/Test/ConfirmationPage/ConfirmationPage';
import SleepCoachPage from './pages/Test/SleepCoachPage/SleepCoachPage';
import SleepContentPage from './pages/Test/SleepContentPage/SleepContentPage';
import ProfilePage from './pages/MainPage/ProfilePage/ProfilePage';
import SettingsPage from './pages/MainPage/SettingsPage/SettingsPage';
import SleepModePage from './pages/MainPage/SleepModePage/SleepModePage';
import AlarmSettingPage from './pages/MainPage/AlarmSettingPage/AlarmSettingPage';
import SubmitDataPage from './pages/Test/SubmitDataPage/SubmitDataPage';
import DataAnalysisPage from './pages/Test/DataAnalysisPage/DataAnalysisPage';
import DataAnalysisPage2 from './pages/Test/DataAnalysisPage/DataAnalysisPage2';
import DataAnalysisPage3 from './pages/Test/DataAnalysisPage/DataAnalysisPage3';
import WorkSchedulePage from './pages/Test/WorkSchedulePage/WorkSchedulePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
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
        <Route path="/address" element={<AddressPage/>} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/sleep-coach" element={<SleepCoachPage />} />
        <Route path="/sleep-content" element={<SleepContentPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/sleep-mode" element={<SleepModePage />} />
        <Route path="/day-mode" element={<AlarmSettingPage />} />
        <Route path="/evening-mode" element={<AlarmSettingPage />} />
        <Route path="/night-mode" element={<AlarmSettingPage/>} />
        <Route path="/submit-data" element={<SubmitDataPage />} />
        <Route path="/data-analysis" element={<DataAnalysisPage />} />
        <Route path="/data-analysis-2" element={<DataAnalysisPage2 />} />
        <Route path="/data-analysis-3" element={<DataAnalysisPage3 />} />
        <Route path="/work-schedule" element={<WorkSchedulePage />} />
      </Route>
    </Routes>
  );
}

export default App;
