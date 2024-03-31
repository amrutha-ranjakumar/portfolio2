import React from 'react';
import './Home.css';
import Header from '../components/Header';

function Home() {
    const handleDownload = () => {
        const downloadUrl = '/Amrutha Ranjakumar Resume.pdf';
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'my-cv.pdf';
        link.click();
    };

    return (
        <div className="home-container">
            <Header />
            <div className="content">
                <h1 className="title">Hi, I'm Amrutha Ranjakumar</h1>
                <p className="subtitle">Full Stack Developer</p>
                <p className="intro-paragraph">Welcome to my portfolio! I'm passionate about creating meaningful applications.</p>
                <button className="btn" onClick={handleDownload}>DOWNLOAD CV</button>
            </div>
        </div>
    );
}

export default Home;
