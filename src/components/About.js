import React from 'react'

 function About() {
  return (
    <div className='container'>
    <div>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Welcome
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Welcome to TextCraft, your go-to tool for analyzing and formatting text efficiently. Whether you're a student, writer, or professional, TextCraft provides an intuitive interface that helps you modify, enhance, and analyze your text effortlessly.

With features such as case conversion, text analysis, and word counting, this app ensures your text is clear and concise. Switch between light and dark modes to customize your experience while getting real-time feedback on your formatting.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Key Features
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Text Transformation: Instantly convert your text to uppercase, lowercase, title case, and more.
Text Analysis: Analyze your text for word count, character count (with or without spaces), and sentence length to optimize readability.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Why TextFormat?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      With TextFormat, you don’t need to worry about formatting your text manually or using multiple tools. This app provides a smooth user experience, allowing you to get things done quickly without distractions. Whether you prefer working in light mode or dark mode, TextFormat offers a comfortable, customizable environment for any time of day.
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
  )
}
export default About

