<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Blog Author" />
    <!--Banner End-->

    <section class="content-inner z-index-unset">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 col-lg-8">
            <div class="row justify-content-center">
              <div class="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                <div class="author-box m-b30 style-1">
                  <div class="author-profile-info">
                    <div class="author-profile-pic">
                      <img src="../../assets/images/blog/profile.jpg" alt="/" />
                    </div>
                    <div class="author-profile-content">
                      <h6 class="title">I am John Doe</h6>
                      <p>I am a developer based in Melbourne</p>
                      <img src="../../assets/images/blog/signing.png" alt="/" />
                      <ul class="social-icon m-b0">
                        <li>
                          <RouterLink to="https://www.facebook.com/dexignzone" target="_blank">
                            <i class="fa-brands fa-facebook-f"></i>
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink to="https://www.instagram.com/dexignzone/" target="_blank">
                            <i class="fa-brands fa-instagram"></i>
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink to="/https://twitter.com/dexignzones" target="_blank">
                            <i class="fa-brands fa-twitter"></i>
                          </RouterLink>
                        </li>
                        <li>
                          <RouterLink to="https://www.behance.net/dexignzone" target="_blank">
                            <i class="fa-brands fa-behance"></i>
                          </RouterLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6 col-sm-6 m-lg-b50 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                <div class="dz-card blog-half style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-4/pic1.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">17 May 2023</li>
                      </ul>
                    </div>
                    <h3 class="dz-title">
                      <RouterLink to="/post-header-image">Trendsetter Chronicles: Unveiling the Latest in Fashion</RouterLink>
                    </h3>
                    <RouterLink to="/post-header-image" class="font-14 read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6 col-sm-6 m-lg-b50 m-b30 wow fadeInUp" data-wow-delay="0.3s">
                <div class="dz-card blog-half style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-4/pic2.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">27 Oct 2023</li>
                      </ul>
                    </div>
                    <h3 class="dz-title">
                      <RouterLink to="/post-header-image">Runway Rundown: Decoding Fashion Week’s Best Looks</RouterLink>
                    </h3>
                    <RouterLink to="/post-header-image" class="font-14 read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6 col-sm-6 m-lg-b50 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                <div class="dz-card blog-half style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-4/pic3.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">20 Dec 2023</li>
                      </ul>
                    </div>
                    <h3 class="dz-title">
                      <RouterLink to="/post-header-image">Closet Confidential: Behind-the-Scenes of a Fashionista</RouterLink>
                    </h3>
                    <RouterLink to="/post-header-image" class="font-14 read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6 col-sm-6 m-lg-b50 m-b30 wow fadeInUp" data-wow-delay="0.5s">
                <div class="dz-card blog-half style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-4/pic4.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">26 Nov 2023</li>
                      </ul>
                    </div>
                    <h3 class="dz-title">
                      <RouterLink to="/post-header-image">Fashion Forward: Spotlight on Emerging Designers</RouterLink>
                    </h3>
                    <RouterLink to="/post-header-image" class="font-14 read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6 col-sm-6 m-lg-b50 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                <div class="dz-card blog-half style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-4/pic5.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">30 Jan 2023</li>
                      </ul>
                    </div>
                    <h3 class="dz-title">
                      <RouterLink to="/post-header-image">DIY Couture: Crafting Your Own Fashion Masterpieces</RouterLink>
                    </h3>
                    <RouterLink to="/post-header-image" class="font-14 read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-6 col-sm-6 m-lg-b50 m-b30 wow fadeInUp" data-wow-delay="0.7s">
                <div class="dz-card blog-half style-5">
                  <div class="dz-media">
                    <img src="../../assets/images/blog/blogpost-4/pic6.jpg" alt="/" />
                  </div>
                  <div class="dz-info">
                    <div class="dz-meta">
                      <ul>
                        <li class="post-date">5 Feb 2023</li>
                      </ul>
                    </div>
                    <h3 class="dz-title">
                      <RouterLink to="/post-header-image">Fashion Fails and Fixes: Learn from Style Mistakes</RouterLink>
                    </h3>
                    <RouterLink to="/post-header-image" class="font-14 read-btn"
                      >Read More
                      <i class="icon feather icon-chevron-right"></i>
                    </RouterLink>
                  </div>
                </div>
              </div>
              <div class="col-12 text-center mt-sm-4 mt-2 wow fadeInUp" data-wow-delay="0.8s">
                <RouterLink to="/blog-author" class="btn btn-secondary"> Loadmore</RouterLink>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4">
            <div class="side-bar sticky-top mt-lg-0 mt-md-5 mt-3">
              <div class="widget">
                <h5 class="widget-title">Search</h5>
                <div class="search-bx">
                  <form role="search" method="post">
                    <div class="input-group">
                      <input name="text" class="form-control" placeholder="Search" type="text" />
                      <span class="input-group-btn">
                        <button class="btn">
                          <i class="icon feather icon-search"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>
              <div class="widget widget_categories style-1">
                <h5 class="widget-title">Category</h5>
                <ul>
                  <li class="cat-item"><RouterLink to="/blog-category">Dresses</RouterLink> (10)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Top & Blouses</RouterLink> (5)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Boots</RouterLink> (17)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Jewelry</RouterLink> (13)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Makeup</RouterLink> (06)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Fragrances</RouterLink> (17)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Shaving & Grooming</RouterLink> (13)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Jacket</RouterLink> (06)</li>
                  <li class="cat-item"><RouterLink to="/blog-category">Coat</RouterLink> (22)</li>
                </ul>
              </div>
              <div class="widget recent-posts-entry">
                <h5 class="widget-title">Latest Post</h5>
                <div class="widget-post-bx">
                  <div class="widget-post clearfix">
                    <div class="dz-media">
                      <RouterLink to="/post-standard"><img src="../../assets/images/blog/recent-blog/pic1.jpg" alt="/" /></RouterLink>
                    </div>
                    <div class="dz-info">
                      <div class="dz-meta">
                        <ul>
                          <li class="post-date">17 May 2022</li>
                        </ul>
                      </div>
                      <h6 class="title"><RouterLink to="/post-standard">The Anatomy of an Effective Shopping Cart Page</RouterLink></h6>
                    </div>
                  </div>
                  <div class="widget-post clearfix">
                    <div class="dz-media">
                      <RouterLink to="/post-standard"><img src="../../assets/images/blog/recent-blog/pic2.jpg" alt="/" /></RouterLink>
                    </div>
                    <div class="dz-info">
                      <div class="dz-meta">
                        <ul>
                          <li class="post-date">17 May 2022</li>
                        </ul>
                      </div>
                      <h6 class="title"><RouterLink to="/post-standard">Shopping Cart Design User-Friendly Tips and Best Practices</RouterLink></h6>
                    </div>
                  </div>
                  <div class="widget-post clearfix">
                    <div class="dz-media">
                      <RouterLink to="/post-standard"><img src="../../assets/images/blog/recent-blog/pic3.jpg" alt="/" /></RouterLink>
                    </div>
                    <div class="dz-info">
                      <div class="dz-meta">
                        <ul>
                          <li class="post-date">17 May 2022</li>
                        </ul>
                      </div>
                      <h6 class="title"><RouterLink to="/post-standard">Shopping Cart Security Keeping Your Customers' Data Safe</RouterLink></h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="widget widget_tag_cloud">
                <h5 class="widget-title">Tags</h5>
                <div class="tagcloud">
                  <RouterLink to="/blog-tag">Vintage </RouterLink>
                  <RouterLink to="/blog-tag">Wedding</RouterLink>
                  <RouterLink to="/blog-tag">Cotton</RouterLink>
                  <RouterLink to="/blog-tag">Linen</RouterLink>
                  <RouterLink to="/blog-tag">Navy</RouterLink>
                  <RouterLink to="/blog-tag">Urban</RouterLink>
                  <RouterLink to="/blog-tag">Business Meeting</RouterLink>
                  <RouterLink to="/blog-tag">Formal</RouterLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
