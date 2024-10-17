import React from 'react'

export const AboutItem = ({ title, text }) => {
  return (
    <div className="about-s__items-content">
      <span className="about-s__items-title">{ title }</span>
      <p className="about-s__items-text">{ text }</p>
    </div>
  )
}
