<script setup lang="ts"></script>

<template>
  <div class="page-content">
    <section class="overflow-hidden">
      <div class="row error-page style-2">
        <div class="col-lg-6 col-md-6 error-start-content">
          <div class="logo">
            <RouterLink to="/"><img src="../../assets/images/logo-white.png" alt="" /></RouterLink>
          </div>
          <div class="dz_error">404</div>
          <div class="dz-social-icon style-2 white">
            <ul>
              <li>
                <RouterLink to="https://www.facebook.com/dexignzone" target="_blank">
                  <i class="fa-brands fa-facebook-f"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/https://twitter.com/dexignzones" target="_blank">
                  <i class="fa-brands fa-twitter"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="https://www.linkedin.com/showcase/3686700/admin/" target="_blank">
                  <i class="fa-brands fa-linkedin"></i>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="https://www.instagram.com/dexignzone/" target="_blank">
                  <i class="fa-brands fa-instagram"></i>
                </RouterLink>
              </li>
            </ul>
          </div>
          <img src="../../assets/images/circle-lines3.png" class="bg-img" alt="" />
        </div>
        <div class="col-lg-6 col-md-6 error-end-content">
          <div class="error-inner">
            <h1 class="error-head">OOPS!</h1>
            <p class="error-para">Oh, no! This page does not exist.</p>
            <RouterLink to="/" class="btn btn-secondary text-uppercase">Go to Main Page</RouterLink>
          </div>
          <img src="../../assets/images/circle-lines4.png" class="bg-img2" alt="" />
        </div>
      </div>
    </section>
  </div>
</template>
