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
            <div className="wrapper">
                <div className="static-txt">I'm a</div>

                <ul className="dynamic-txts">
                    <li><span>Amrutha Ranjakumar</span></li>
                    <li><span>Full stack developer</span></li>
                </ul>

                <button className="btn" onClick={handleDownload}>DOWNLOAD CV</button>
            </div>
        </div>
    );
}

export default Home;
