import React from 'react'
import './Home.css'
import Header from '../components/Header';

function Home() {
    const handleDownload = () => {
        const downloadUrl = '/Amrutha Ranjakumar Resume.pdf';
        const link = document.createElement('a')
        link.href = downloadUrl;
        link.download = 'my-cv.pdf';
        link.click();
    }
  return (
    <>
 <div className='mb-5 mt-5 p-5'></div>
 <Header/>
 <body>

<div class="wrapper">
  <div class="static-txt">I'm a</div>

  <ul class="dynamic-txts">
    <li><span>Amrutha Ranjakumar</span></li>
  
    <li><span>Full stack developer</span></li>
  </ul>
  {/* <div className='mt-5 mb-5' style={{marginRight:"100px",textAlign:"justify"}}>.?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt quidem omnis nulla voluptatem, dicta consequatur repudiandae perspiciatis nesciunt voluptate ex delectus odio natus quod itaque totam at aut eligendi!</div> */}
  <button class="btn "  style={{marginLeft:"1200px"}} onClick={handleDownload}>DOWNLOAD CV</button>
</div>

</body>


    </>

  )
}

export default Home