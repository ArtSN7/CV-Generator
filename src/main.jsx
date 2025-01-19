import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/main.css';
import Languages from './components/languages.jsx';
import GeneralInfro from './components/general_info.jsx';
import JobExp from './components/job_exp.jsx';
import CVGenerator from './components/CVGenerator';
import { useNavigate } from 'react-router-dom';

const App = ({ languagesData, setLanguagesData, generalInfoData, setGeneralInfoData, jobExpData, setJobExpData }) => {
    const navigate = useNavigate(); // useNavigate is valid here

    const generateCV = () => {
        navigate("/cv"); // Navigate to the CV page
    };

    return (
        <div className='main-with-btn'>
            <div className="container-main">
                <GeneralInfro onDataChange={setGeneralInfoData} />
                <JobExp className="job-exp" onDataChange={setJobExpData} />
                <Languages className="languages" onDataChange={setLanguagesData} />
            </div>
            <button className="main-btn" onClick={generateCV} disabled={!languagesData || !generalInfoData || !jobExpData}>Generate CV</button>
        </div>
    );
};

const Root = () => {
    const [languagesData, setLanguagesData] = useState(null);
    const [generalInfoData, setGeneralInfoData] = useState(null);
    const [jobExpData, setJobExpData] = useState(null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <App 
                        languagesData={languagesData}
                        setLanguagesData={setLanguagesData}
                        generalInfoData={generalInfoData}
                        setGeneralInfoData={setGeneralInfoData}
                        jobExpData={jobExpData}
                        setJobExpData={setJobExpData}
                    />
                } />
                <Route path="/cv" element={<CVGenerator languages={languagesData} generalInfo={generalInfoData} jobExp={jobExpData} />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);