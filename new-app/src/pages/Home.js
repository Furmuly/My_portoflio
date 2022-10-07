import React from 'react';
//import ReactDOM from 'react-dom/client';
import SignLanguageOutlinedIcon from '@mui/icons-material/SignLanguageOutlined';
import "../styles/Home.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DSC00706 from '../photos/DSC00706.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { ReactComponent as White } from '../photos/white.svg';
import CV from '../photos/Nabila_Furmuly_CV_Informaticienne .pdf';


//function Logo(props) {
// return (
//   <div className='grid'>
//    <div className='cols'>
//    <icon>{props.icon} </icon>
//   <a href={props.herf} alt={props.alt}> {props.text} </a>
//   </div>
//   </div>
//   );
// }

function Home() {
    return (
        // My photo and then the icons with a link to my cv and social networks 
        <div className='home' >
            <div className='about'>
                <div className='about-grid'>
                    <div className='col'>
                        <img className="rounded-circle" src={DSC00706} alt="myPhoto" />
                    </div>
                    <div className='col'>
                        <h2>Hello <SignLanguageOutlinedIcon color="red" /> My name is Nabila</h2>
                    </div>
                    <div className='prompt'>
                        <p>I am an IT(application development) apprentice. </p>
                    </div>
                </div>

                <div className='grid'>
                    <div className='col'>
                        <GitHubIcon className='icon' fontSize='large' />
                    </div>

                    <div className='col'>
                        <LinkedInIcon className='icon' fontSize='large' />
                    </div>

                    <div className='col'>
                        <FileOpenIcon className='icon' fontSize='large' />
                    </div>

                    <div className='col'>
                        <White className="icon" fontSize='large' />
                    </div>


                    <div className='title-grid' >
                        <div className='col'>
                            <a href='https://github.com/Furmuly' > GitHub </a></div>
                    </div>

                    <div className='col'>
                        <a href="https://www.linkedin.com/in/nabila-furmuly"> LinkedIn </a>
                    </div>

                    <div className='col'>
                        <a href={CV} >view CV</a>
                    </div>

                    <div className='col'>
                        <a href="https://jobtrek.ch/">Jobtrek</a>
                    </div>

                </div>
            </div>
        </div >



    )
}



export default Home;