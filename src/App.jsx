import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Sidebar from './Components/Sidebar'
import AuthButton from './Components/AuthButton';
import Community from './Pages/Community'
import Lab from './Pages/Lab'
import History from './Pages/History';
import GetHelp from './Pages/GetHelp';

function App() {
    return (<>
        <Router>
            <div className="app-container flex-row">
                <Sidebar />
                <AuthButton />
                <div className="content-container">
                    <Routes>
                        <Route path="/" element={<Community />} />
                        <Route path="/lab" element={<Lab />} />
                        <Route path="/history" element={<History />} />
                        <Route path="/gethelp" element={<GetHelp />} />
                    </Routes>
                </div>
            </div>
		</Router>
    </>)
}

export default App
