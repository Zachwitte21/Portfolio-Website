<script setup>
// imports: 
import Timeline from '../components/Timeline.vue'

const timelineEvents = [
  { title: "Started Portfolio Project", date: "Jan 2025", description: "Began developing a Vue.js portfolio." },
  { title: "Designed Navbar", date: "Feb 2025", description: "Implemented a sliding navbar for easy navigation." },
  { title: "Added Timeline", date: "March 2025", description: "Created a timeline component for project milestones." },
];
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
      <div>
        <img src="../assets/dcs.png"/>


      </div>

      <Timeline :events="timelineEvents" />
      
      <footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/zachary-witte-2025/" target="_blank">LinkedIn</a>
            <a href="https://github.com/Zachwitte21" target="_blank">GitHub</a>
          </li>
        </ul>
      </footer>
    </div>
  </template>
