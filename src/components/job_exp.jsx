import React from 'react';
import '../styles/job_exp.css';
import { useState } from 'react';
import { DeleteBTN } from '../data/delete_btn.jsx';

const job_list = [];

function JobExp(){

    const [name_of_the_company, setCompanyName] = useState('');
    const [position, setPosition] = useState('');
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [description, setDescription] = useState('');
    const [jobExp, setJobExp] = useState(job_list);

    const checkDate = (start_date, end_date) => {
        const startDate = new Date(start_date);
        const endDate = new Date(end_date);
        return startDate <= endDate && endDate <= new Date();
    };

    const handleAddInfo = (event) => {
        event.preventDefault(); // Prevent default form submission

        if (name_of_the_company && position && start_date && end_date && description) {

            if (!checkDate(start_date, end_date)) {
                handleTextChange("Invalid dates");
                return;
            }

            const newJob = {id: crypto.randomUUID(), name: name_of_the_company, position: position, start_date: start_date, end_date: end_date, description: description };
            setJobExp([...jobExp,newJob]);
            setCompanyName('');
            setPosition('');
            setStartDate('');
            setEndDate('');
            setDescription('');
        }else{
            handleTextChange("All fields are required");
            return;
        }
        
    };

    const handleDeleteJob = (id) => {
        setJobExp(jobExp.filter(job => job.id !== id))
    };

    const handleTextChange = (txt) =>{
        const element = document.getElementById("error_text_job_exp");
        element.style.display = 'block';
        element.textContent = txt;
        setTimeout(() => {
            element.style.display = 'none';
        }, 1500);
    }

    return (
        <>
        <div className="form-container-job-exp">
            <h1>Job Experience</h1>
            <form onSubmit={handleAddInfo}>
                <div className="form-group-job-exp">
                <input type="text" name="name" placeholder="Company Name" required value={name_of_the_company} onChange={(e) => setCompanyName(e.target.value)}/>
                <input type="text" name="position" placeholder="Position" required value={position} onChange={(e) => setPosition(e.target.value)}/>
                <input type="date" name="start_date" placeholder="Start Date" required value={start_date} onChange={(e) => setStartDate(e.target.value)}/>
                <input type="date" name="end_date" placeholder="End Date" required value={end_date} onChange={(e) => setEndDate(e.target.value)}/>
                <textarea name="description" placeholder="Description of the job" required value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button type="button" onClick={handleAddInfo}>Add Experience</button>
                <p id="error_text_job_exp" className="error_text"></p>
                
                    {jobExp.map((job) => (
                        <div className='list_job_exp' key={job.id}>
                            <p>Company: {job.name}</p>
                            <p>Position: {job.position}</p>
                            <p>Dates: {job.start_date} - {job.end_date}</p>
                            <p>Description: {job.description}</p>
                            <DeleteBTN onClick={() => handleDeleteJob(job.id)} />
                        </div>
                    ))}
            </form>
        </div>
        </>
    );

}

export default JobExp;