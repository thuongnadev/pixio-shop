<script setup lang="ts">
import bg from "@/assets/images/background/bg1.jpg";
import CommonBanner from "@/elements/CommonBanner.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Blog Exclusive" />
    <!--Banner End-->

    <section class="content-inner-1 z-index-unset">
      <div class="container">
        <div class="row justify-content-lg-between justify-content-md-center">
          <div class="col-lg-5 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="dz-card style-3">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-1/pic1.png" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">17 May 2023</li>
                  </ul>
                </div>
                <h2 class="dz-title">
                  <RouterLink to="/post-open-gutenberg">Trendsetter Chronicles: Unveiling the Latest in Fashion</RouterLink>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="dz-card style-4">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-1/pic2.png" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">20 Dec 2023</li>
                  </ul>
                </div>
                <h2 class="dz-title">
                  <RouterLink to="/post-open-gutenberg">Chic & Unique: Personalized Fashion Finds</RouterLink>
                </h2>
                <RouterLink to="/post-open-gutenberg" class="font-14 mt-auto read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="dz-card style-4">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-1/pic3.png" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">15 June 2023</li>
                  </ul>
                </div>
                <h2 class="dz-title">
                  <RouterLink to="/post-open-gutenberg">Runway Rundown: Decoding Fashion Week’s Best Looks</RouterLink>
                </h2>

                <RouterLink to="/post-open-gutenberg" class="font-14 mt-auto read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="dz-card style-3">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-1/pic4.png" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">25 Nov 2023</li>
                  </ul>
                </div>
                <h2 class="dz-title">
                  <RouterLink to="/post-open-gutenberg">Sustainable Style: Eco-Friendly Fashion Choices</RouterLink>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="dz-card style-3">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-1/pic5.png" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">28 May 2023</li>
                  </ul>
                </div>
                <h2 class="dz-title">
                  <RouterLink to="/post-open-gutenberg">Fashion Fails and Fixes: Learn from Style Mistakes</RouterLink>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="dz-card style-4">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-1/pic6.png" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">26 April 2023</li>
                  </ul>
                </div>
                <h2 class="dz-title">
                  <RouterLink to="/post-open-gutenberg">Body Positivity in Fashion: Embrace Your Unique Style</RouterLink>
                </h2>

                <RouterLink to="/post-open-gutenberg" class="font-14 mt-auto read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div class="dz-card style-4">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-1/pic7.png" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">7 Feb 2023</li>
                  </ul>
                </div>
                <h2 class="dz-title">
                  <RouterLink to="/post-open-gutenberg">Fashion & Beauty Fusion: The Ultimate Style Guide</RouterLink>
                </h2>

                <RouterLink to="/post-open-gutenberg" class="font-14 mt-auto read-btn"
                  >Read More
                  <i class="icon feather icon-chevron-right"></i>
                </RouterLink>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
            <div class="dz-card style-3">
              <div class="dz-media">
                <img src="../../assets/images/blog/blogpost-1/pic8.png" alt="/" />
              </div>
              <div class="dz-info">
                <div class="dz-meta">
                  <ul>
                    <li class="post-date">12 Mar 2023</li>
                  </ul>
                </div>
                <h2 class="dz-title">
                  <RouterLink to="/post-open-gutenberg">Closet Confidential: Behind-the-Scenes of a Fashionista</RouterLink>
                </h2>
              </div>
            </div>
          </div>
          <div class="col-12 text-center mt-3 wow fadeInUp" data-wow-delay="0.9s">
            <RouterLink to="/blog-light-half-image" class="btn btn-secondary"> Loadmore </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
