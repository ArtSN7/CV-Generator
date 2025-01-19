import React from 'react';
import { jsPDF } from 'jspdf';

const CVGenerator = ({ languages, generalInfo, jobExp }) => {
    const handleGenerateCV = () => {
        const doc = new jsPDF();

        // Add Title
        doc.setFontSize(22);
        doc.text("CV", 20, 20);

        // Add General Information
        doc.setFontSize(16);
        doc.text("General Information", 20, 30);
        doc.setFontSize(12);
        doc.text(`Name: ${generalInfo.name}`, 20, 40);
        doc.text(`Surname: ${generalInfo.surname}`, 20, 50);
        doc.text(`Email: ${generalInfo.email}`, 20, 60);
        doc.text(`Phone: ${generalInfo.phone}`, 20, 70);
        doc.text(`LinkedIn: ${generalInfo.linkedin}`, 20, 80);
        doc.text(`GitHub: ${generalInfo.github}`, 20, 90);

        // Add Languages
        doc.setFontSize(16);
        doc.text("Languages", 20, 110);
        doc.setFontSize(12);
        languages.forEach((lang, index) => {
            doc.text(`${lang.language} - ${lang.level}`, 20, 120 + (index * 10));
        });

        // Add Job Experience
        doc.setFontSize(16);
        doc.text("Job Experience", 20, 130 + (languages.length * 10));
        doc.setFontSize(12);
        jobExp.forEach((job, index) => {
            const jobText = `${job.position} at ${job.name} (${job.start_date} - ${job.end_date})`;
            doc.text(jobText, 20, 140 + (languages.length * 10) + (index * 10));
            doc.text(job.description, 20, 150 + (languages.length * 10) + (index * 10));
        });

        // Save the PDF
        doc.save("CV.pdf");
    };

    return (
        <div className="cv-generator">
            <h2>Generated CV</h2>
            <button onClick={handleGenerateCV}>Download CV as PDF</button>
        </div>
    );
};

export default CVGenerator;