import '../styles/languages.css';
import React, { useState } from 'react';
import { DeleteBTN } from '../data/delete_btn.jsx';

const lang_list = [];


export function Languages({onDataChange}) {

    const [languages, setLanguages] = useState(lang_list);
    const [newLanguage, setNewLanguage] = useState('');
    const [newLevel, setNewLevel] = useState('Basic');

    const handleDeleteLanguage = (id) => {
        const updatedLanguages = languages.filter(lang => lang.id !== id);
        setLanguages(updatedLanguages); // Update local state
        onDataChange(updatedLanguages);
    };

    const handleTextChange = (txt) =>{
        const element = document.getElementById("error_text_languages");
        element.style.display = 'block';
        element.textContent = txt;
        setTimeout(() => {
            element.style.display = 'none';
        }, 1500);
    }

    const handleAddLanguage = (event) => {
        event.preventDefault(); // Prevent default form submission

        if (newLanguage && newLevel) {
            const newLang = { id: crypto.randomUUID(), language: newLanguage, level: newLevel };
            setLanguages([...languages, newLang]);
            onDataChange([...languages, newLang]);
            setNewLanguage('');
            setNewLevel('Basic');
        }else{
            handleTextChange("Input the language");
        }
    };


    return (
        <>
        <div className="form-container-languages">
            <h1>Languages</h1>
            <form onSubmit={handleAddLanguage}>
                <div className="form-group-languages">
                <input type="text" name="language" placeholder="Spanish" required value={newLanguage} onChange={(e) => setNewLanguage(e.target.value)}/>
                <select className="level" name="level" id="level" required value={newLevel} onChange={(e) => setNewLevel(e.target.value)}>
                    <option value="Basic">Basic</option>
                    <option value="Advanced">Advanced</option>
                    <option value="Native">Native</option>
                </select>
                </div>
                <button type="button" onClick={handleAddLanguage}>Add New Language</button>
                <p id="error_text_languages" className="error_text_languages"></p>
            </form>
            {languages.map(lang => (

                <div className="list-languages"key={lang.id}>
                    <p>{lang.language} - {lang.level}</p>
                    <DeleteBTN className="lang-delete-btn" onClick={() => handleDeleteLanguage(lang.id)}/>
                </div>
            ))}
        </div>

        </>
    );
}


export default Languages;