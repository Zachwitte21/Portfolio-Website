<script setup>
import Project from '../components/Project.vue';
</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 class="text-4xl font-bold text-gray-800">Zachary Witte</h1>
      <div>
        <p>
          I’m a passionate and driven software developer with 1 year of experience in the tech industry, 
          specializing in full-stack development and cloud solutions. I will be graduating in May 2025 with a BS in 
          Computer Science and have hands-on experience from my internships. I thrive in collaborative environments 
          where I can contribute to innovative software solutions while continuously learning and developing my skills. 
          Currently, I’m working towards earning the AWS Solutions Architect Associate certification to further 
          enhance my cloud expertise. I’m excited about opportunities where I can apply my technical knowledge, 
          problem-solving abilities, and passion for technology to create impactful and scalable software solutions. 
          Let’s connect!
        </p>
        <img src="../assets/me_monkey.jpg"/>
      </div>
      <Project 
        name="DCS" 
        description="Software Developer" 
        image="../assets/dcs.png" 
      />
      <footer>
        <h3>Email: 
          <a href="mailto:zachwitte21@gmail.com">zachwitte21@gmail.com</a>
        </h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/zachary-witte-2025/" target="_blank">LinkedIn</a>
            <a href="https://github.com/Zachwitte21" target="_blank">GitHub</a>
          </li>
        </ul>
      </footer>
    </div>
  </template>
  