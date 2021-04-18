import React from "react"
import { FaDivide } from "react-icons/fa"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>Copyright &copy;{new Date().getFullYear()}
          <span> FoushWare </span> all rights reserved.
        </h4>
      </div>
    </footer>
  )
}

export default Footer
