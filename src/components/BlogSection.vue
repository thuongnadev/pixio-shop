<script setup lang="ts">
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
</script>
<template>
  <Swiper
    class="swiper swiper-blog-post"
    :slides-per-view="4.5"
    :space-between="30"
    :modules="[Autoplay]"
    :autoplay="{ delay: 1500 }"
    :speed="1200"
    :loop="true"
    :breakpoints="{
      1200: { slidesPerView: 4 },
      775: { slidesPerView: 3 },
      575: { slidesPerView: 2 },
      240: { slidesPerView: 1 },
    }"
  >
    <SwiperSlide class="swiper-slide">
      <div class="dz-card style-2 wow fadeInUp" data-wow-delay="0.2s">
        <div class="dz-media">
          <img src="../assets/images/blog/grid/1.jpg" alt="" />
          <div class="post-date">17 May 2023</div>
        </div>
        <div class="dz-info">
          <h4 class="dz-title mb-0">
            <RouterLink to="/blog-light-3-column">Style Diaries: A Week in Fashion</RouterLink>
          </h4>
          <ul class="blog-social">
            <li>
              <RouterLink class="share-btn" to="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7 7H17V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </RouterLink>
              <ul class="sub-team-social">
                <li>
                  <RouterLink to="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="/https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="dz-card style-2 wow fadeInUp" data-wow-delay="0.4s">
        <div class="dz-media">
          <img src="../assets/images/blog/grid/2.jpg" alt="" />
          <div class="post-date">28 Feb 2023</div>
        </div>
        <div class="dz-info">
          <h4 class="dz-title mb-0">
            <RouterLink to="/blog-light-3-column">Chic & Unique: Personalized Fashion Finds</RouterLink>
          </h4>
          <ul class="blog-social">
            <li>
              <RouterLink class="share-btn" to="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7 7H17V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </RouterLink>
              <ul class="sub-team-social">
                <li>
                  <RouterLink to="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="/https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="dz-card style-2 wow fadeInUp" data-wow-delay="0.6s">
        <div class="dz-media">
          <img src="../assets/images/blog/grid/3.jpg" alt="" />
          <div class="post-date">15 Aug 2023</div>
        </div>
        <div class="dz-info">
          <h4 class="dz-title mb-0">
            <RouterLink to="/blog-light-3-column">Dress to Impress: Elevate Your Everyday Style</RouterLink>
          </h4>
          <ul class="blog-social">
            <li>
              <RouterLink class="share-btn" to="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7 7H17V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </RouterLink>
              <ul class="sub-team-social">
                <li>
                  <RouterLink to="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="/https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="dz-card style-2 wow fadeInUp" data-wow-delay="0.8s">
        <div class="dz-media">
          <img src="../assets/images/blog/grid/4.jpg" alt="" />
          <div class="post-date">28 Nov 2023</div>
        </div>
        <div class="dz-info">
          <h4 class="dz-title mb-0">
            <RouterLink to="/blog-light-3-column">Street Style Safari: Global Fashion Influences</RouterLink>
          </h4>
          <ul class="blog-social">
            <li>
              <RouterLink class="share-btn" to="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7 7H17V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </RouterLink>
              <ul class="sub-team-social">
                <li>
                  <RouterLink to="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="/https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="dz-card style-2 wow fadeInUp" data-wow-delay="1.0s">
        <div class="dz-media">
          <img src="../assets/images/blog/grid/5.jpg" alt="" />
          <div class="post-date">13 Feb 2023</div>
        </div>
        <div class="dz-info">
          <h4 class="dz-title mb-0">
            <RouterLink to="/blog-light-3-column">Fashion & Beauty Fusion: The Ultimate Style Guide</RouterLink>
          </h4>
          <ul class="blog-social">
            <li>
              <RouterLink class="share-btn" to="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7 7H17V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </RouterLink>
              <ul class="sub-team-social">
                <li>
                  <RouterLink to="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="/https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="swiper-slide">
      <div class="dz-card style-2 wow fadeInUp" data-wow-delay="0.2s">
        <div class="dz-media">
          <img src="../assets/images/blog/grid/1.jpg" alt="" />
          <div class="post-date">17 May 2023</div>
        </div>
        <div class="dz-info">
          <h4 class="dz-title mb-0">
            <RouterLink to="/blog-light-3-column">Style Diaries: A Week in Fashion</RouterLink>
          </h4>
          <ul class="blog-social">
            <li>
              <RouterLink class="share-btn" to="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M7 7H17V17" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </RouterLink>
              <ul class="sub-team-social">
                <li>
                  <RouterLink to="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="/https://twitter.com/" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                </li>
                <li>
                  <RouterLink to="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
