<script setup lang="ts"></script>

<template>
  <footer class="site-footer footer-dark style-3">
    <!-- Footer Top -->
    <div class="container">
      <div class="row">
        <div class="col-md-4 col-lg-4 col-md-12 px-0">
          <div class="row dz-post g-0 spno">
            <div class="col-lg-6 col-6">
              <div class="dz-post-media">
                <img src="../assets/images/posts/pic1.png" alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-6">
              <div class="dz-post-media">
                <img src="../assets/images/posts/pic2.png" alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-6">
              <div class="dz-post-media">
                <img src="../assets/images/posts/pic3.png" alt="" />
              </div>
            </div>
            <div class="col-lg-6 col-6">
              <div class="dz-post-media">
                <img src="../assets/images/posts/pic4.png" alt="" />
              </div>
            </div>
            <RouterLink to="" class="instagram-link">
              <div
                class="follow-link bg-white wow bounceIn"
                data-wow-delay="0.1s"
                style="visibility: visible; animation-delay: 0.1s; animation-name: bounceIn"
              >
                <div class="follow-link-icon">
                  <img src="../assets/images/insta-follow.png" alt="" />
                </div>
                <div class="follow-link-content">
                  <h4>Share with #Pixio</h4>
                  <p>Follow @Pixio for inspiration.</p>
                </div>
              </div>
            </RouterLink>
          </div>
        </div>
        <div class="col-md-8 col-lg-8 col-md-12">
          <div class="footer-top">
            <div class="dz-custom-container">
              <div
                class="row align-items-center logo-topbar gx-0 wow fadeInUp"
                data-wow-delay="0.1s"
                style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp"
              >
                <div class="col-12 col-sm-6">
                  <div class="footer-logo logo-white mb-0">
                    <RouterLink to="/"><img src="../assets/images/logo-white.svg" alt="" /></RouterLink>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <div class="dz-social-icon style-1">
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
                </div>
              </div>
              <div class="row">
                <div
                  class="col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInUp"
                >
                  <div class="widget widget_services">
                    <h5 class="footer-title">Our Stores</h5>
                    <ul>
                      <li><RouterLink to="">New York</RouterLink></li>
                      <li><RouterLink to="">London SF</RouterLink></li>
                      <li><RouterLink to="">Edinburgh</RouterLink></li>
                      <li><RouterLink to="">Los Angeles</RouterLink></li>
                      <li><RouterLink to="">Chicago</RouterLink></li>
                      <li><RouterLink to="">Las Vegas</RouterLink></li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                  style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp"
                >
                  <div class="widget widget_services">
                    <h5 class="footer-title">Useful Links</h5>
                    <ul>
                      <li><RouterLink to="">Privacy Policy</RouterLink></li>
                      <li><RouterLink to="">Returns</RouterLink></li>
                      <li><RouterLink to="">Terms &amp; Conditions</RouterLink></li>
                      <li><RouterLink to="">Contact Us</RouterLink></li>
                      <li><RouterLink to="">Latest News</RouterLink></li>
                      <li><RouterLink to="">Our Sitemap</RouterLink></li>
                    </ul>
                  </div>
                </div>
                <div
                  class="col-lg-4 col-md-4 col-sm-4 col-12 wow fadeInUp"
                  data-wow-delay="0.4s"
                  style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInUp"
                >
                  <div class="widget widget_services">
                    <h5 class="footer-title">Footer Menu</h5>
                    <ul>
                      <li><RouterLink to="">Instagram profile</RouterLink></li>
                      <li><RouterLink to="">New Collection</RouterLink></li>
                      <li><RouterLink to="">Woman Dress</RouterLink></li>
                      <li><RouterLink to="">Contact Us</RouterLink></li>
                      <li><RouterLink to="">Latest News</RouterLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Footer Bottom -->
          <div class="footer-bottom wow fadeInUp" data-wow-delay="0.5s" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp">
            <div class="fb-inner">
              <div class="text-center">
                <p class="copyright-text">
                  © <span class="current-year">2024</span> <RouterLink to="https://www.dexignzone.com/">DexignZone</RouterLink> Theme. All Rights
                  Reserved.
                </p>
              </div>
            </div>
          </div>
          <!-- Footer Bottom End -->
        </div>
      </div>
    </div>
    <!-- Footer Top End -->
  </footer>
</template>
