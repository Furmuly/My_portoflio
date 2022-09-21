import React from 'react';
import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/skills.css";
import CodeOffIcon from '@mui/icons-material/CodeOff';




function Skills() {
    return (
        <div className='experience'>
            <h1>Skills</h1>
            <VerticalTimeline lineColor="#800080">
                <VerticalTimelineElement className='vertical-timeline-element-education' date='see the site'
                    iconStyle={{ background: "#800080", color: "#fff" }}
                    icon={<CodeOffIcon />}>
                    <h3 className='vertical-timeline-element-titile'>
                        My first HTML CSS website
                    </h3>
                    <p>It's tthe first web site that i have coded and since i love butterflies and was locking for an insprition, I have made it about butterflies </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-timeline-element-education' date='20100-2014'
                    iconStyle={{ background: "#800080", color: "#fff" }}
                    icon={<CodeOffIcon />}>
                    <h3 className='vertical-timeline-element-titile'>
                        My first HTML CSS website
                    </h3>
                    <p>It's tthe first web site that i have coded and since i love butterflies and was locking for an insprition, I have made it about butterflies </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element-education' date='20100-2014'
                    iconStyle={{ background: "#800080", color: "#fff" }}
                    icon={<CodeOffIcon />}>
                    <h3 className='vertical-timeline-element-titile'>
                        My first HTML CSS website
                    </h3>
                    <p>It's tthe first web site that i have coded and since i love butterflies and was locking for an insprition, I have made it about butterflies </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className='vertical-timeline-element-education' date='20100-2014'
                    iconStyle={{ background: "#800080", color: "#fff" }}
                    icon={<CodeOffIcon />}>
                    <h3 className='vertical-timeline-element-titile'>
                        My first HTML CSS website
                    </h3>
                    <p>It's tthe first web site that i have coded and since i love butterflies and was locking for an insprition, I have made it about butterflies </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
}

export default Skills;