import '../styles/languages.css';
import deleteIcon from '../data/delete.svg';
import React, { useState } from 'react';
import { DeleteBTN } from '../data/delete_btn.jsx';

const lang_list = [
    {id:crypto.randomUUID(), language: "Spanish", level: "Native"},
    {id:crypto.randomUUID(), language: "English", level: "Advanced"},
    {id:crypto.randomUUID(), language: "French", level: "Basic"}
];

function handleDeleteLanguage(id) {
    setLanguages(languages.filter(lang => lang.id !== id));
}

function handleAddLanguage() {
    if (newLanguage && newLevel) {
        const newLang = { id: crypto.randomUUID(), language: newLanguage, level: newLevel };
        setLanguages([...languages, newLang]);
        setNewLanguage('');
        setNewLevel('');
    }
}

function Languages() {

    const [languages, setLanguages] = useState(lang_list);
    const [newLanguage, setNewLanguage] = useState('');
    const [newLevel, setNewLevel] = useState('');


    return (
        <>
        <div class="form-container">
            <h1>Languages</h1>
            <form>
                <div class="form-group">
                <input type="language" name="language" placeholder="Spanish" required />
                <select id="level" required>
                    <option value="basic">Basic</option>
                    <option value="advanced">Advanced</option>
                    <option value="native">Native</option>
                </select>
                </div>
                <button type="button" onClick={handleAddLanguage}>Add New Language</button>
            </form>
        </div>
        <div className="form-container">
                {languages.map(lang => (

                    <div className="list"key={lang.id}>
                        <p1>{lang.language} - {lang.level}</p1>
                        <DeleteBTN onClick={() => handleDeleteLanguage(lang.id)}/>
                    </div>
                
                ))}
        </div>
        </>
    );
}


export default Languages;