import React from 'react';
import '../styles/job_exp.css';

function JobExp(){


    return (
        <>
        <div className="form-container-job-exp">
            <h1>Job Experience</h1>
            <form onSubmit={handleAddInfo}>
                <div className="form-group-job-exp">
                <input type="text" name="name" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="text" name="surname" placeholder="Surname" required value={surname} onChange={(e) => setSurname(e.target.value)}/>
                <input type="email" name="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="tel" name="phone" placeholder="Phone" required value={phone} onChange={(e) => setPhone(e.target.value)}/>
                <input type="url" name="linkedin" placeholder="LinkedIn" required value={linkedin} onChange={(e) => setLinkedin(e.target.value)}/>
                <input type="url" name="github" placeholder="GitHub" required value={github} onChange={(e) => setGithub(e.target.value)}/>
                </div>
                <button type="button" onClick={handleAddInfo}>Update Data</button>
                <button type="button" onClick={CheckInfo}>Check Data</button>
                <button type="button" onClick={ClearInfo}>Clear Data</button>
                <p id="error_text" className="error_text"></p>
            </form>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} data={generalInfo[generalInfo.length - 1]} />
        </div>
        </>
    );

}

export default JobExp;