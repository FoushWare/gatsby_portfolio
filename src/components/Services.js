import React from "react"
import Title from "./Title"
import services from "../constants/services"
import { AiFillCheckCircle } from "react-icons/ai"

const Services = () => {
  return (

    <section className="section bg-grey">
      <Title title="services" />
      <div className="section-center services-center">

        {services.map(service => {
          const { id, icon, title, text, skills } = service;
          return (<article key={id} className="service">
            {icon}
            <h4>{title}</h4>
            <div className="underline"></div>
            <p>{text}</p>
            <ul style={{ textAlign: "left" }}>
              {skills.map(skill => <li><AiFillCheckCircle />&nbsp;&nbsp;&nbsp;   {skill}</li>)}
            </ul>
          </article>)
        })}
      </div>
    </section>
  )
}

export default Services
