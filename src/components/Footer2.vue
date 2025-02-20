<script setup lang="ts"></script>
<template>
  <footer class="site-footer footer-dark">
    <!-- Footer Top -->
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-md-4">
            <div class="widget widget_about">
              <div class="footer-logo logo-white">
                <RouterLink to="/"><img src="../assets/images/logo-white.svg" alt="" /></RouterLink>
              </div>
              <ul class="widget-address">
                <li>
                  <p><span>Address</span> : 451 Wall Street, UK, London</p>
                </li>
                <li>
                  <p><span>E-mail</span> : example@info.com</p>
                </li>
                <li>
                  <p><span>Phone</span> : (064) 332-1233</p>
                </li>
              </ul>
              <div class="subscribe_widget">
                <h6 class="title fw-medium text-capitalize">subscribe to our newsletter</h6>
                <form class="dzSubscribe style-1" action="script/mailchamp.php" method="post">
                  <div class="dzSubscribeMsg"></div>
                  <div class="form-group">
                    <div class="input-group mb-0">
                      <input name="dzEmail" type="email" class="form-control" placeholder="Your Email Address" />
                      <div class="input-group-addon">
                        <button name="submit" value="Submit" type="submit" class="btn">
                          <i class="icon feather icon-arrow-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-md-4">
            <div class="widget widget_post">
              <h5 class="footer-title">Recent Posts</h5>
              <ul>
                <li>
                  <div class="dz-media">
                    <img src="../assets/images/shop/product/small/1.png" alt="" />
                  </div>
                  <div class="dz-content">
                    <h6 class="name"><RouterLink to="/post-standard">Cozy Knit Cardigan Sweater</RouterLink></h6>
                    <span class="time">July 23, 2023</span>
                  </div>
                </li>
                <li>
                  <div class="dz-media">
                    <img src="../assets/images/shop/product/small/2.png" alt="" />
                  </div>
                  <div class="dz-content">
                    <h6 class="name"><RouterLink to="/post-standard">Sophisticated Swagger Suit</RouterLink></h6>
                    <span class="time">July 23, 2023</span>
                  </div>
                </li>
                <li>
                  <div class="dz-media">
                    <img src="../assets/images/shop/product/small/3.png" alt="" />
                  </div>
                  <div class="dz-content">
                    <h6 class="name"><RouterLink to="/post-standard">Athletic Mesh Sports Leggings</RouterLink></h6>
                    <span class="time">July 23, 2023</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-md-3">
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
          <div class="col-xl-2 col-md-3">
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
          <div class="col-xl-2 col-md-3">
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
    <!-- Footer Top End -->

    <!-- Footer Bottom -->
    <div class="footer-bottom">
      <div class="container">
        <div class="row fb-inner">
          <div class="col-lg-6 col-md-12 text-start">
            <p class="copyright-text">
              © <span class="current-year">2024</span> <RouterLink to="https://www.dexignzone.com/">DexignZone</RouterLink> Theme. All Rights
              Reserved.
            </p>
          </div>
          <div class="col-lg-6 col-md-12 text-end">
            <div class="d-flex align-items-center justify-content-center justify-content-md-center justify-content-xl-end">
              <span class="me-3">We Accept: </span>
              <img src="../assets/images/footer-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer Bottom End -->
  </footer>
</template>
