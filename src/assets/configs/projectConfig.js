import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye, AiFillWeiboSquare} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/1.jpg"
import graphEmbeddings from "../images/2.png"
import kafkaMl from "../images/3.jpg"
import portfolio from "../images/portfolio.jpeg"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Covid-19 Predictive Model",
        links: [
            {
                name: "repo",
                url: "https://github.com/SominZex/covid_19_ML_Algo",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/SominZex/covid_19_ML_Algo/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/SominZex/covid_19_ML_Algo/subscription",
                icon: <AiFillEye/>,
            }
/*            {
                name: "docs",
                url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/",
                icon: <ImBook/>,
            }*/
        ],
        image: sklearnGenetic,
        description: "Covid-19 data analysis, predictive modeling and training ML algo.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "CNN Dog recognition model",
        links: [
            {
                name: "repo",
                url: "https://github.com/SominZex/CNN_dog_vision",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/SominZex/CNN_dog_vision/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/SominZex/CNN_dog_vision/subscription",
                icon: <AiFillEye/>,
            }
        ],
        image: graphEmbeddings,
        description: "Building and training Dog breed recognition CNN.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Malaria detection algorithm",
        links: [
            {
                name: "repo",
                url: "https://github.com/SominZex/malaria_detection_cnn",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/SominZex/malaria_detection_cnn/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/SominZex/malaria_detection_cnn/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: kafkaMl,
        description: "Malaria blood cell classification and detection ANN model.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "NLP based Web scrapper",
        links: [
            {
                name: "repo",
                url: "https://github.com/SominZex/ultra_scrapper",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/SominZex/ultra_scrapper/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/SominZex/ultra_scrapper/subscription",
                icon: <AiFillEye/>
            }
        ],
        image: "https://www.scrapeit.io/assets/cache_image/blog/web-scraping-ai2_1200x0_82d.webp",
        description: "Building a web scrapper that also classify website based on their metadata.",
        target: "_blank"
    },
    {
        id: "project-7",
        title: "Customer Churn Prediction",
        links: [
            {
                name: "repo",
                url: "https://github.com/SominZex/customer_churn_modeling",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/SominZex/customer_churn_modeling/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/SominZex/customer_churn_modeling/subscription",
                icon: <AiFillEye/>,
            }
        ],
        image: "https://cdn.prod.website-files.com/63299e8be533faffbc123045/636552d0b570aa56ec6e2683_customer-churn-hero.png",
        description: "Building and training model to predict customer churn",
        target: "_blank"
    },
    {
        id: "project-8",
        title: "Military Intelligence Simulation",
        links: [
            {
                name: "repo",
                url: "https://github.com/SominZex/military_intelligence_assessment",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/SominZex/military_intelligence_assessment/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/SominZex/military_intelligence_assessment/subscription",
                icon: <AiFillEye/>,
            }
        ],
        image: "https://static.vecteezy.com/system/resources/thumbnails/048/008/502/small_2x/a-special-soldier-is-depicted-observing-the-wartime-situation-and-the-advancement-of-his-military-army-through-holographic-displays-showcasing-strategic-analysis-and-tactical-planning-in-photo.jpg",
        description: "Analyzing Military Censory Data, GPS co-ordinates, news reports, cross border activities etc.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Mental Model (Desktop Version)",
        links: [
            {
                name: "Link",
                url: "http://mentalmodal.unaux.com",
                icon: <AiFillWeiboSquare/>
            }
        ],
        image: "https://miro.medium.com/v2/resize:fit:1400/1*K_rA4NtwZS5lQXmfj8_r2A.png",
        description: "Personal Mental model project.",
        target: "_blank"
    },
    {
        id: "project-0",
        title: "Portfolio Website (Desktop Version)",
        links: [
            {
                name: "Link",
                url: "http://sominspace.unaux.com/",
                icon: <AiFillWeiboSquare/>
            }
        ],
        image: portfolio,
        description: "Personal Portfolio Website",
        target: "_blank"
    },
    {
        id: "project-6",
        title: "Mindmap (Desktop Version)",
        links: [
            {
                name: "Link",
                url: "http://sominspace.unaux.com/mindmap.html",
                icon: <AiFillWeiboSquare/>
            }
        ],
        image: "https://miro.medium.com/v2/resize:fit:1400/1*DOXaFF6Hg9KcDQK9wgMrWA.png",
        description: "Personal Portfolio 3D Website",
        target: "_blank"
    }
]

export default projectConfig