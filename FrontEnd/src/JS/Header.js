import { useEffect } from 'react'
import '../CSS/Header.css'
import { ReactComponent as SendEmailSvg } from "../ICONS/send.svg"
import { Stars } from './Stars'

export const Header = () => {
  return (
    <div className='page-section' id="header">
      <div id="glass-stars"></div>
      <Stars />
      <div id="main-text-cont" className='faded-glass'>
        <p className="main-text">Your digital security operations center</p>
      </div>
      <div className="classic-paragraph" id="second-text-cont">
        <p className="second-text">Real time awareness and insight, when and where it matters most.<br />An optimal video security system.</p>
      </div>
      <div className='classic-btn' id="service-btn-ctn">
        <p id="service-btn">Request demo</p>
        <SendEmailSvg id="send-email-svg" />
      </div>
    </div >
  )
}
