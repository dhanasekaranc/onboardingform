import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import DataProvider from "./components/DataProvider"
import UserDetails from './components/UserDetails';
import WorkspaceDetails from './components/WorkspaceDetails';
import Usage from './components/Usage';
import SuccessPage from "./components/SuccessPage"

function App() {
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UserDetails />} />
            <Route path="/workspace" element={<WorkspaceDetails />} />
            <Route path="/usage" element={<Usage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
