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
import Signup from "./component/MainPage/Singup";
import AddressPage from "./component/Test/AddressPage";
import ConfirmationPage from "./component/Test/ConfirmationPage";
import SleepCoachPage from "./component/Test/SleepCoachPage";
import SleepContentPage from "./component/Test/SleepContentPage";
import SleepModePage from "./component/MainPage/SleepModePage";
import SettingsPage from "./component/MainPage/SettingsPage";
import ProfilePage from "./component/MainPage/ProfilePage";
import AlarmSettingPage from "./component/MainPage/AlarmSettingPage";
import SubmitDataPage from "./component/Test/SubmitDataPage";
import DataAnalysisPage from "./component/Test/DataAnalysisPage";
import DataAnalysisPage2 from "./component/Test/DataAnalysisPage2";
import DataAnalysisPage3 from "./component/Test/DataAnalysisPage3";
import WorkSchedulePage from "./component/Test/WorkSchedulePage";

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
        <Route path="/address" element={<AddressPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/sleep-coach" element={<SleepCoachPage />} />
        <Route path="/sleep-content" element={<SleepContentPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/sleep-mode" element={<SleepModePage />} />
        <Route path="/day-mode" element={<AlarmSettingPage />} />
        <Route path="/evening-mode" element={<AlarmSettingPage />} />
        <Route path="/night-mode" element={<AlarmSettingPage />} />
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
