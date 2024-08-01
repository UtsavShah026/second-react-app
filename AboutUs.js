import React from 'react'
import Header from './Header'
const AboutUs = () => {
  return (
    <div className='container' >
        <div class="container mt-5">
        <div class="row">
            <div class="col-lg-6">
                <h1 class="display-4">About Us</h1>
                <p class="lead" style={Header.Theme}>Welcome to Maruti Enterprise! We are a leading provider of B2B solutions for the retail industry. Our mission is to streamline the supply chain and help businesses thrive in the competitive market.</p>
                <p>Founded in 2024, Maruti Enterprise has grown from a small startup to a reputable name in the industry. Our commitment to excellence and customer satisfaction has been the cornerstone of our success.</p>
                <p>We offer a wide range of products and services tailored to meet the needs of our clients. From inventory management to delivery solutions, our innovative approach ensures that your business runs smoothly and efficiently.</p>
                <p>Our team of experts is dedicated to providing personalized support and guidance to help you achieve your business goals. We believe in building long-term relationships with our clients and partners, fostering a community of growth and success.</p>
            </div>
            <div class="col-lg-6">
                <img src="/assets/company_logo/logo.png" class="img-fluid" alt="About Us"/>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default AboutUs
