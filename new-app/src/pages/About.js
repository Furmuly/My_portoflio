import React from 'react';
import "../styles/About.css";
import Myimg from '../photos/MyImg.jpg';


function About() {
    return (
        //just an image and some texte about me css in about.css
        <div className='container'>
            <div className='title'>
                <h1>About Me</h1>
                <div className='About-grid text-center'>
                    <div className='col'>
                        <img src={Myimg} className="img-thumbnail" alt="my img" />
                    </div>
                    <div className='col'>
                        <h2> I'am Nabila </h2>
                        <p>Thank you for your time and interest!
                            Curiosity (the desire to Know) is the search engine that brings us to wonderful and unimaginable places,
                            The sense of curiosity in me was strong from childhood and always brought me to wonder how modern technology functions,
                            coming from a third-world country I didn’t have the chance/opportunity to discover more and go far in this adventure,
                            being here in Switzerland was the perfect chance for me to feed my curiosity and passion for coding and technology,
                            nd so I decided to do an IT application development apprenticeship.</p>
                    </div>
                </div >

                <div className='About-me text-center'>
                    <div className='col'>
                        <h1>Qualities</h1>
                        <div className='col'>
                            <h4>Resilience</h4>
                            <p>This word has a lot to say and a lot to mean, for me it's faily but not falling,
                                like climbing a mountain you may get tierd, hurt or unmotivated but the importance is that you get back up and containue to get to the top. </p>
                        </div>
                        <div className='col'>
                            <h4>Autonome</h4>
                            <p>From childhood I have always loved being autonome and self-grovening personne,
                                but also when in need would ask for help of others.</p>
                        </div>
                        <div className='col'>
                            <h4>Curious</h4>
                            <p>Curiosity is the reason that has brought me to coding and wanting to beacome a developer</p>
                        </div>
                    </div>

                    <div className='col'>
                        <h1> Defects </h1>
                        <div className='col'>
                            <h4>punctuality</h4>
                            <p>Not being a morning personne I may be late once in a while, but it’s something that I am working on,
                                and am always happy to compensate those few minutes at the end of the day.</p>
                        </div>
                        <div className='col'>
                            <h4>Impatient</h4>
                            <p>I can go over things very briefly,
                                and be impatient but everyone has that kind of days but will take time to come back and do things patiently.</p>
                        </div>
                        <div className='col'>
                            <h4>Stubborn</h4>
                            <p>Being someone stubborn, I somtimes attend to try too hard even if I don't see imidiate resaults, which sometimes can take time. </p>
                        </div>
                    </div >
                </div>
            </div>
        </div>

    );
}

export default About;