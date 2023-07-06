<script setup>
    defineProps({
        imageSource: {
            type: String,
            required: true
        },
        siteName: {
            type: String,
            required: true
        },
        siteDescription: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: true
        },
    })
</script>

<template>
  <li class="recent-works__card">
    <a href="#">
      <figure>
        <img :src="imageSource" alt="" />
      </figure>
      <h4 class="site-name">{{siteName}}</h4>
      <p class="site-description">{{siteDescription}}</p>
      <ul class="tags">
        <li v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>
    </a>
  </li>
</template>