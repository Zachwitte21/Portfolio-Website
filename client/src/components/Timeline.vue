<template>
    <div class="timeline-container">
      <div class="timeline">
        <div v-for="(event, index) in events" :key="index" class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-content">
            <h3 class="timeline-title">{{ event.title }}</h3>
            <p class="timeline-date">{{ event.date }}</p>
            <p class="timeline-description">{{ event.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    events: {
      type: Array,
      required: true,
      default: () => [],
    },
  });
  </script>
  
  <style scoped>
  .timeline-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .timeline {
    position: relative;
    max-width: 600px;
  }
  
  .timeline-item {
    display: flex;
    align-items: flex-start;
    position: relative;
    padding: 20px 0;
  }
  
  .timeline-item:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 20px;
    top: 40px;
    width: 2px;
    height: 100%;
    background-color: #cbd5e1; /* Light gray */
  }
  
  .timeline-marker {
    width: 16px;
    height: 16px;
    background-color: #3b82f6; /* Blue */
    border-radius: 50%;
    position: absolute;
    left: 12px;
    top: 20px;
  }
  
  .timeline-content {
    background: white;
    padding: 10px 15px;
    border-radius: 5px;
    margin-left: 40px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    max-width: 400px;
  }
  
  .timeline-title {
    font-weight: bold;
    font-size: 18px;
    color: #1e293b; /* Dark gray */
  }
  
  .timeline-date {
    font-size: 14px;
    color: #64748b; /* Gray */
  }
  
  .timeline-description {
    font-size: 16px;
    color: #475569; /* Dark gray */
  }
  </style>
  