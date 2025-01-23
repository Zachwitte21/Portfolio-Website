<template>
  <div class="project" :style="{ backgroundImage: 'url(' + image + ')' }">
    <router-link :to="'/projects/' + name">
      <div class="overlay">
        <h2>{{ name }}</h2>
        <p>{{ description }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.project {
  position: relative;
  width: 300px;
  height: 300px;
  background-size: cover;
  background-position: center;
  margin: 20px;
}

.overlay {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  text-align: center;
  padding: 10px;
}

h2, p {
  margin: 0;
}
</style>
