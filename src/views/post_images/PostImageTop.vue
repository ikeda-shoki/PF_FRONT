<script setup lang="ts">
import { MqResponsive } from "vue3-mq";
</script>

<template>
  <div>
    <MqResponsive target="lg+">
      <div id="top">
        <div class="container">
          <div class="top-text">
            <h3 class="top-title">
              Bringing Your Art
              <br />
              to More People....
            </h3>
            <p class="top-subtitle">あなたのイラストや写真をもっと身近にお手軽に</p>
          </div>
          <!-- <TopButtons></TopButtons> -->
        </div>
      </div>
    </MqResponsive>

    <MqResponsive target="sp">
      <!-- <SpTop></SpTop> -->
    </MqResponsive>
    <!-- <Footer></Footer> -->
  </div>
</template>

<style lang="scss" scoped>
#top {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/images/top.jpg);
  background-size: cover;
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: lighten;

  .container {
    position: relative;
  }

  .top-text {
    position: absolute;
    top: 230px;
    left: 20px;

    .top-title {
      font-size: 60px;
      font-family: "Akaya Telivigala", cursive, "Nunito", sans-serif;
      font-weight: bold;
    }

    .top-subtitle {
      font-size: 18px;
      font-weight: bold;
    }
  }
}
</style>
