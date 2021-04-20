import React from "react"
import { FaCode, FaDatabase, FaAws } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "FrontEnd",
    text: `Providing interactive frontend development services to build custom, robust and secure applications for businesses in all verticals.I use latest tools and platforms like React for designing and developing powerful user-friendly interfaces.`,
    skills: [
      "ReactJs", "JavaScript", "Html/CSS/SASS"
    ]
  },
  {
    id: 2,
    icon: <FaDatabase className="service-icon" />,
    title: "BackEnd",
    text: `My back-end development services are not just about making a server, application, and database communicate with each other.It's about building a product that works seamlessly, meet market needs and creating an enjoyable user experience that earns your loyalty.`,
    skills: [
      "Nodejs", "PHP", "PostgressSQL/MySQL"
    ]
  },
  {
    id: 3,
    icon: <FaAws className="service-icon" />,
    title: "Others",
    text: `Being a full stack web developer ,I also work with a wide range of DevOps technologies so i can develop an excellent web product all the way through.It is not only the appearance of your product that matters, but also how smoothly, flexibly and reliably the part hidden from users performs.`,
    skills: [
      "DEVOPS", "Unit Tesing", "Wordpress", "Gatsby"
    ]
  },
]
