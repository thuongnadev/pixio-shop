<script setup lang="ts">
import bg from "@/assets/images/background/bg1.jpg";
import PagesSection from "@/components/PagesSection.vue";
</script>

<template>
  <div class="page-content bg-light">
    <!--banner-->
    <div class="dz-bnr-inr bg-secondary overlay-black-light dz-bnr-inr-md" :style="`background-image: url(${bg})`">
      <div class="container">
        <div class="dz-bnr-inr-entry">
          <h1>Banner Medium</h1>
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
              <li class="breadcrumb-item">Banner Medium</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <PagesSection />
  </div>
</template>
