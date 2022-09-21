import React from 'react';
import ReactDOM from 'react-dom/client';
import SignLanguageOutlinedIcon from '@mui/icons-material/SignLanguageOutlined';
import "../styles/Home.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DSC00706 from '../logo/DSC00706.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import { ReactComponent as White } from '../logo/white.svg';


function Logo(props) {
    return (
        <div className='grid'>
            <div className='cols'>
                <icon>{props.icon} </icon>
                <a href={props.herf} alt={props.alt}> {props.text} </a>
            </div>
        </div>
    );
}

function Home() {
    const GitHub = { icon: "GitHubIcon", href: "https://stackoverflow.com/questions/42914666/react-router-external-link", alt: "gitlogo", text: "GitHub" };
    return (
        <div className='home' >
            <div className='about'>
                <img className="rounded-circle" src={DSC00706} alt="myPhoto" />
                <h2>Hello <SignLanguageOutlinedIcon color="yellow" /> My name is Nabila</h2>
                <div className='prompt'>
                    <p>I am  an IT(application development) apprentice. </p>
                </div>

                <div className='grid text-center'>
                    <div className='col'>
                        <GitHubIcon className='icon' fontSize='large' />
                        <div className='col'><p>GitHub</p></div>
                    </div>

                    <div className='col'>
                        <LinkedInIcon color="primary" className='icon' fontSize='large' />
                        <div className='col'><p>LinkedIn</p></div>
                    </div>

                    <div className='col'>
                        <FileOpenIcon className='icon' fontSize='large' />
                        <div className='col'><p>view CV</p></div>
                    </div>

                    <div className='col'>
                        <White className="icon" />
                        <div className='col'><p>Jobtrek</p></div>
                    </div>
                </div>
            </div>
        </div>



    )
}



export default Home;