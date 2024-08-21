import React from 'react'
import {BsClipboardData} from "react-icons/bs";
import {DiCodeigniter} from "react-icons/di";
import {GiCommercialAirplane} from "react-icons/gi";
import {FaMobileAlt} from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Somin Ramchiary</strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Engineer",
        "An Open Source Contributor",
        "An Indian"
    ],
    about: {
        start: "A Data Scientist with hands on experience in Machine Learning, Data Analytics, Statistical Modeling and Quantitative Analysis.",
        exit: "I'm fluent at Python, SQL databases, Data Vizualization, and more, " +
            "with a deep interest in Deep Learning."
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Jr. Data Scientist",
            company: "Open Souce",
            description: "Contributing in various open source project, doing internships. Understanding business requirements.",
            date: "2023-Present",
            icon: <BiRocket/>,
            tags: ["ML", "MLOPS", "Python", "ANN", "AutoML"]
        },
        {
            id: "work-3",
            title: "Motion Graphic Designer",
            company: "Bada Business Pvt. Ltd.",
            description: "Non-Tech jobs, creating intuitive graphics for promotional needs",
            date: "2022-2023",
            icon: <DiCodeigniter/>,
            tags: ["CSS", "Adobe Premiere pro", "Adobe Photoshop", "Adobe After effects"]
        },
        {
            id: "work-2",
            title: "Graphic Desinger",
            company: "The Crosscurrent",
            description: "Creating video contents" +
                "Creating graphics for social media",
            date: "2021-2022",
            icon: <FaMobileAlt/>,
            tags: ["Adobe Premiere pro", "Adobe Photoshop", "Adobe After effects", "Adobe Illustrator"]
        },
        {
            id: "work-1",
            title: "Backend Developer",
            company: "Firefly films",
            description: "Handling website backend" +
                "Building data pipeline solution",
            date: "2019-2021",
            icon: <GiCommercialAirplane/>,
            tags: ["Python", "MySQL","Wordpress"]
        }
    ]
}


export default homeConfig