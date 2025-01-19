import '../styles/general_info.css';
import React, { useState } from 'react';
import  Modal  from '../data/modal.jsx';

// Info = {name: "", surname: "", email: "", phone: "", linkedin: "", github: ""}

function GeneralInfro(){

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [generalInfo, setGeneralInfo] = useState([]);

    const handleAddInfo = (event) => {
        event.preventDefault(); // Prevent default form submission

        if (name && surname && email && phone && linkedin && github) {
            const newInfo = { name: name, surname: surname, email: email, phone: phone, linkedin: linkedin, github: github };
            setGeneralInfo([...generalInfo,newInfo]);
            setName('');
            setSurname('');
            setEmail('');
            setPhone('');
            setLinkedin('');
            setGithub('');
            setGeneralInfo([...generalInfo,newInfo]);

            handleTextChange("Data was updated");
        }else{
            handleTextChange("All fields are required");
        }
        
    };

    const CheckInfo = () => {

        if (generalInfo.length === 0) {
            handleTextChange("No data to check");
            return;
        }
        
        setIsModalOpen(true); // Open the modal

    }

    const ClearInfo = () => {
        if (generalInfo.length === 0) {
            handleTextChange("No data to clear");
            return;
        }
        handleTextChange("Data was cleared");
        setGeneralInfo([]);
    }

    const handleTextChange = (txt) =>{
        const element = document.getElementById("error_text");
        element.style.display = 'block';
        element.textContent = txt;
        setTimeout(() => {
            element.style.display = 'none';
        }, 1500);
    }

    return (
        <>
        <div className="form-container-general-info">
            <h1>General Information</h1>
            <form onSubmit={handleAddInfo}>
                <div className="form-group-general-info">
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

export default GeneralInfro;