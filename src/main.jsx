import React from 'react'
import ReactDOM from 'react-dom/client'

//import App from './components/eduction.jsx'
import Languages from './components/languages.jsx'
import GeneralInfro from './components/general_info.jsx'
import JobExp from './components/job_exp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <GeneralInfro />
        <Languages />
        <JobExp />
    </React.StrictMode>,
)