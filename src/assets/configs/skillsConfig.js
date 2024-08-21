import {
    SiPython,
    SiPostgresql,
    SiMicrosoftsqlserver,
    SiDocker,
    SiMicrosoftazure,
    SiRedis,
    SiReact,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiWindowsterminal,
    SiSnowflake,
    SiApacheairflow,
    SiApachekafka,
    SiPowerbi,
    SiMicrosoftexcel,
    SiTableau,
    SiMysql
} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import {FaGitAlt} from "react-icons/fa";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50}/>,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <SiMysql size={50}/>,
            text: "MySQL"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <FaGitAlt size={50}/>,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <SiPostgresql size={50}/>,
            text: "PostgreSQL"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <SiWindowsterminal size={50}/>,
            text: "Bash"
        }
        ,
        {
            id: "skills-5",
            className: "skill-icon",
            icon: <SiMicrosoftexcel size={50}/>,
            text: "Microsoft Excel"
        },
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiTableau size={50}/>,
            text: "TableAU"
        }
    ]
}

export default skillsConfig
