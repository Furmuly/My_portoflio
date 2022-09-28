import React from 'react';
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/skills.css";
import CodeOffIcon from '@mui/icons-material/CodeOff';
import PhpIcon from '@mui/icons-material/Php';
import JavascriptIcon from '@mui/icons-material/Javascript';
//import html from '../logo/html.png';




function Skills() {
    return (
        <div className='experience'>
            <h1>Skills</h1>
            <VerticalTimeline lineColor="#800080">
                <VerticalTimelineElement className='vertical-timeline-element'
                    iconStyle={{ background: "#800080", color: "#fff" }}
                    icon={< CodeOffIcon />}>
                    <h3 className='vertical-timeline-element-titile'>
                        < a href="https://github.com/Furmuly/Anthocharis-angelinas" > My first HTML CSS website </a>
                    </h3>
                    <p>It's the first web site that i have coded and since i love butterflies and was locking for an insprition, so I decided to make it about butterflies. </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element'
                    iconStyle={{ background: "#800080", color: "#fff" }}
                    icon={<PhpIcon />}>
                    <h3 className='vertical-timeline-element-titile'>
                        <a href="https://github.com/Furmuly/form_php" > Event maker Project </a>
                    </h3>
                    <p>It's a website where you can create an event add title, description and photo, the viwers can participate the evant by simpaly clicking on the participate button and then adding some personnale info,
                        the added info and the event title is then registered in a database, and only the members can have access to see the list, add a new event, add a new member,
                        there is only one admin user who can create modifie or delete a member or event.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element'
                    iconStyle={{ background: "#800080", color: "#fff" }}
                    icon={<JavascriptIcon />}>
                    <h3 className='vertical-timeline-element-titile'>
                        <a href="https://github.com/Furmuly/projet-javascript"> Grade calculator </a>
                    </h3>
                    <p>I have build a grade calculator that alows to calculate the grades during the four years of apprenticeship,
                        it's for the IT students and is made for the EPSIC notation system, so maybe not useful for other brunches students.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element'
                    iconStyle={{ background: "#800080", color: "#fff" }}
                    icon={<CodeOffIcon />}>
                    <h3 className='vertical-timeline-element-titile' >
                        < a href="https://github.com/Furmuly/My_portoflio" > My personnale portoflio </a>
                    </h3>
                    <p>it's my first react.js project, and I have created a personnale portoflio, which i am asuming your loocking at right now,
                        it's just a simple portoflio site where you can learn more about me and know me better.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div >
    );
}

export default Skills;