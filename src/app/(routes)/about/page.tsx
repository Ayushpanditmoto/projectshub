"use client";
import React from "react";
import CenterLayout from "@/app/components/CenterLayout";

function About() {
  return (
    <CenterLayout>
      <div className="prose">
        <h1>Welcome to My Website</h1>

        <section className="mb-6">
          <h2>About Us</h2>
          <p>
            We are a passionate team dedicated to our mission and purpose.
            Welcome to our website, where we strive to deliver exceptional
            services and uphold our core values.
          </p>
        </section>

        <section className="mb-6">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide valuable services to our clients and
            create meaningful solutions. We aim to excel in our work, meeting
            and exceeding the expectations of those we serve.
          </p>
        </section>

        <section className="mb-8">
          <h2>Services</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <h3>Web Design</h3>
              <p>
                Our web design services specialize in creating visually
                stunning and user-friendly websites that leave a lasting
                impression.
              </p>
            </div>
            <div>
              <h3>Content Creation</h3>
              <p>
                Our content creation team can craft compelling content that
                engages your audience and drives results.
              </p>
            </div>
          </div>
          <img
            src="https://unsplash.com/photos/dfhvEXJORzk/download?ixid=M3wxMjA3fDB8MXxhbGx8MjJ8fHx8fHwyfHwxNjkzMDcyOTAwfA&force=true&w=2400"
            alt="Service Image"
            className="w-full max-h-96 mt-4"
          />
        </section>

        <section className="mb-8">
          <h2>Portfolio</h2>
          <ul className="list-disc ml-6">
            <li>
              <a href="/portfolio/project-1">Project 1</a>: Brief description
              of project 1
            </li>
            <li>
              <a href="/portfolio/project-2">Project 2</a>: Brief description
              of project 2
            </li>
            <li>
              <a href="/portfolio/project-3">Project 3</a>: Brief description
              of project 3
            </li>
          </ul>
        </section>

        <section>
          <h2>Testimonials</h2>
          <blockquote className="border-l-4 border-blue-500 pl-4 mb-4">
            <p>
              "Working with [Your Company Name] was a fantastic experience.
              They delivered exactly what we needed and exceeded our
              expectations."
            </p>
            <cite className="block text-right">- Satisfied Client</cite>
          </blockquote>
        </section>
      </div>
    </CenterLayout>
  );
}

export default About;
