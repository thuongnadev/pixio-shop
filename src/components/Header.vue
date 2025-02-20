<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from "vue";
import Canvas from "@/components/Canvas.vue";
import CustomeSelect from "@/elements/CustomeSelect.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

const isMenu = ref(false);
const timer = ref({
  day: "",
  hour: "",
  min: "",
  sec: "",
});

onMounted(() => {
  const menus = document.querySelectorAll(".navbar-nav > li");
  menus.forEach(function (el, ind) {
    el.addEventListener("click", function () {
      el.classList.toggle("open");
      menus.forEach(function (ell, index) {
        if (ind !== index) {
          ell.classList.remove("open");
        }
      });
    });
  });
});

onMounted(() => {
  let countDownDate = new Date("Jan 5, 2025 15:37:25").getTime();

  let x = setInterval(function () {
    let now = new Date().getTime();

    let distance = countDownDate - now;

    timer.value.day = Math.floor(distance / (1000 * 60 * 60 * 24))
      .toString()
      .padStart(2, "0");
    timer.value.hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      .toString()
      .padStart(2, "0");
    timer.value.min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      .toString()
      .padStart(2, "0");
    timer.value.sec = Math.floor((distance % (1000 * 60)) / 1000)
      .toString()
      .padStart(2, "0");

    if (distance < 0) {
      countDownDate = new Date(`Jan 5, 2026 15:37:25`).getTime();
    }
  }, 1000);
});

const isFixed = ref(false);
function scrollHandler() {
  if (window.scrollY > 60) {
    isFixed.value = true;
  } else {
    isFixed.value = false;
  }
}

onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});
</script>

<template>
  <div :class="`sticky-header main-bar-wraper navbar-expand-lg ${isFixed ? 'is-fixed' : ''}`">
    <div class="main-bar clearfix">
      <div class="container-fluid clearfix d-lg-flex d-block">
        <!-- Website Logo -->
        <div class="logo-header logo-dark me-md-5">
          <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
        </div>

        <!-- Nav Toggle Button -->

        <button :class="`navbar-toggler collapsed navicon justify-content-end ${isMenu ? 'open' : ''}`" type="button" @click="isMenu = !isMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Main Nav -->
        <div :class="`header-nav w3menu navbar-collapse justify-content-start ${isMenu ? 'show' : ''}`" id="navbarNavDropdown">
          <div class="logo-header logo-dark">
            <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
          </div>
          <ul class="nav navbar-nav">
            <li class="has-mega-menu sub-menu-down auto-width menu-left">
              <RouterLink to="" class="menu_item"><span>Home</span><i class="fas fa-chevron-down tabindex"></i></RouterLink>
              <div class="mega-menu">
                <ul class="demo-menu mb-0">
                  <li>
                    <RouterLink to="/">
                      <img src="../assets/images/demo/demo-1.png" alt="/" />
                      <span class="menu-title">01 Home Page</span>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/index-2">
                      <img src="../assets/images/demo/demo-2.png" alt="/" />
                      <span class="menu-title">02 Home Page</span>
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/index-3">
                      <img src="../assets/images/demo/demo-3.png" alt="/" />
                      <span class="menu-title">03 Home Page</span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </li>
            <li class="has-mega-menu sub-menu-down">
              <RouterLink to="" class="menu_item"><span>Shop</span><i class="fas fa-chevron-down tabindex"></i></RouterLink>
              <div class="mega-menu shop-menu">
                <ul>
                  <li class="side-left">
                    <ul>
                      <li>
                        <RouterLink to="" class="menu-title">Shop Structure</RouterLink>
                        <ul>
                          <li><RouterLink to="/shop-standard">Shop Standard</RouterLink></li>
                          <li><RouterLink to="/shop-list">Shop List</RouterLink></li>
                          <li><RouterLink to="/shop-with-category">Shop With Category</RouterLink></li>
                          <li><RouterLink to="/shop-filters-top-bar">Shop Filters Top Bar</RouterLink></li>
                          <li><RouterLink to="/shop-sidebar">Shop Sidebar</RouterLink></li>
                          <li><RouterLink to="/shop-style-1">Shop Style 1</RouterLink></li>
                          <li><RouterLink to="/shop-style-2">Shop Style 2</RouterLink></li>
                        </ul>
                      </li>
                      <li>
                        <RouterLink to="" class="menu-title">Product Structure</RouterLink>
                        <ul>
                          <li><RouterLink to="/product-default">Default</RouterLink></li>
                          <li><RouterLink to="/product-thumbnail">Thumbnail</RouterLink></li>
                          <li><RouterLink to="/product-grid-media">Grid Media</RouterLink></li>
                          <li><RouterLink to="/product-carousel">Carousel</RouterLink></li>
                          <li><RouterLink to="/product-full-width">Full Width</RouterLink></li>
                        </ul>
                      </li>
                      <li>
                        <RouterLink to="" class="menu-title">Shop Pages</RouterLink>
                        <ul>
                          <li><RouterLink to="/shop-wishlist">Wishlist</RouterLink></li>
                          <li><RouterLink to="/shop-cart">Cart</RouterLink></li>
                          <li><RouterLink to="/shop-checkout">Checkout</RouterLink></li>
                          <li><RouterLink to="/shop-compare">Compare</RouterLink></li>
                          <li><RouterLink to="/shop-order-tracking">Order Tracking</RouterLink></li>
                          <li><RouterLink to="/login">Login</RouterLink></li>
                          <li><RouterLink to="/registration">Registration</RouterLink></li>
                          <li>
                            <RouterLink to="/forget-password">Forget Password </RouterLink>
                          </li>
                        </ul>
                      </li>
                      <li class="month-deal">
                        <div class="clearfix me-3">
                          <h3>Deal of the month</h3>
                          <p class="mb-0">
                            Yes! Send me exclusive offers, personalised, and unique gift ideas, tips for shopping on Pixio
                            <RouterLink to="/shop-standard" class="dz-link-2">View All Products</RouterLink>
                          </p>
                        </div>
                        <div class="sale-countdown">
                          <div class="countdown text-center">
                            <div class="date">
                              <span class="time days text-primary">{{ timer.day }}</span>
                              <span class="work-time">Days</span>
                            </div>
                            <div class="date">
                              <span class="time hours text-primary">{{ timer.hour }}</span>
                              <span class="work-time">Hours</span>
                            </div>
                            <div class="date">
                              <span class="time mins text-primary">{{ timer.min }}</span>
                              <span class="work-time">Minutess</span>
                            </div>
                            <div class="date">
                              <span class="time secs text-primary">{{ timer.sec }}</span>
                              <span class="work-time">Second</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="side-right">
                    <div class="adv-media">
                      <img src="../assets/images/adv-1.png" alt="/" />
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="has-mega-menu sub-menu-down auto-width">
              <RouterLink to="" class="menu_item"><span>Blog</span><i class="fas fa-chevron-down tabindex"></i></RouterLink>
              <div class="mega-menu">
                <ul>
                  <li>
                    <RouterLink to="" class="menu-title">Blog Dark Style</RouterLink>
                    <ul>
                      <li><RouterLink to="/blog-dark-2-column">Blog 2 Column</RouterLink></li>
                      <li><RouterLink to="/blog-dark-2-column-sidebar">Blog 2 Column Sidebar</RouterLink></li>
                      <li><RouterLink to="/blog-dark-3-column">Blog 3 Column</RouterLink></li>
                      <li><RouterLink to="/blog-dark-half-image">Blog Half Image</RouterLink></li>
                    </ul>
                    <RouterLink to="" class="menu-title">Blog Light Style</RouterLink>
                    <ul>
                      <li><RouterLink to="/blog-light-2-column">Blog 2 Column</RouterLink></li>
                      <li><RouterLink to="/blog-light-2-column-sidebar">Blog 2 Column Sidebar</RouterLink></li>
                      <li><RouterLink to="/blog-light-half-image">Blog Half Image</RouterLink></li>
                      <li><RouterLink to="/blog-exclusive">Blog Exclusive</RouterLink></li>
                    </ul>
                  </li>
                  <li>
                    <RouterLink to="" class="menu-title">Blog Sidebar</RouterLink>
                    <ul>
                      <li><RouterLink to="/blog-left-sidebar">Blog left Sidebar</RouterLink></li>
                      <li><RouterLink to="/blog-right-sidebar">Blog Right Sidebar</RouterLink></li>
                      <li><RouterLink to="/blog-both-sidebar">Blog Both Sidebar</RouterLink></li>
                      <li><RouterLink to="/blog-wide-sidebar">Blog Wide Sidebar</RouterLink></li>
                    </ul>
                    <RouterLink to="" class="menu-title">Blog Page</RouterLink>
                    <ul>
                      <li><RouterLink to="/blog-archive">Blog Archive</RouterLink></li>
                      <li><RouterLink to="/blog-author">Author</RouterLink></li>
                      <li><RouterLink to="/blog-category">Blog Category</RouterLink></li>
                      <li><RouterLink to="/blog-tag">Blog Tag</RouterLink></li>
                    </ul>
                  </li>
                  <li>
                    <RouterLink to="" class="menu-title">Blog Details</RouterLink>
                    <ul>
                      <li><RouterLink to="/post-standard">Post Standard</RouterLink></li>
                      <li><RouterLink to="/post-left-sidebar">Post Left Sidebar</RouterLink></li>
                      <li><RouterLink to="/post-header-image">Post Header Image</RouterLink></li>
                      <li><RouterLink to="/post-slide-show">Post Slide Show</RouterLink></li>
                      <li><RouterLink to="/post-side-image">Post Side Image</RouterLink></li>
                      <li><RouterLink to="/post-gallery">Post Gallery</RouterLink></li>
                      <li><RouterLink to="/post-gallery-alternative">Post Gallery Alternative</RouterLink></li>
                      <li><RouterLink to="/post-open-gutenberg">Post Open Gutenberg</RouterLink></li>
                      <li><RouterLink to="/post-link">Post Link</RouterLink></li>
                      <li><RouterLink to="/post-audio">Post Audio</RouterLink></li>
                      <li><RouterLink to="/post-video">Post Video</RouterLink></li>
                    </ul>
                  </li>
                  <li class="post-menu">
                    <RouterLink to="" class="menu-title">Recent Posts</RouterLink>
                    <div class="widget widget_post pt-2">
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
                        <li>
                          <div class="dz-media">
                            <img src="../assets/images/shop/product/small/4.png" alt="" />
                          </div>
                          <div class="dz-content">
                            <h6 class="name"><RouterLink to="/post-standard">Satin Wrap Party Blouse</RouterLink></h6>
                            <span class="time">July 23, 2023</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li class="has-mega-menu sub-menu-down">
              <RouterLink to="" class="menu_item"><span>Portfolio</span><i class="fas fa-chevron-down tabindex"></i></RouterLink>
              <div class="mega-menu portfolio-menu">
                <ul>
                  <li class="side-left">
                    <ul class="portfolio-nav-link">
                      <li>
                        <RouterLink to="/portfolio-tiles">
                          <img src="../assets/images/portfolio/icons/portfolio-tiles.svg" alt="/" />
                          <span>Portfolio Tiles</span>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/collage-style-1">
                          <img src="../assets/images/portfolio/icons/collage-style-1.svg" alt="/" />
                          <span>Collage Style 1</span>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/collage-style-2">
                          <img src="../assets/images/portfolio/icons/collage-style-2.svg" alt="/" />
                          <span>Collage Style 2</span>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/masonry-grid">
                          <img src="../assets/images/portfolio/icons/masonry-grid.svg" alt="/" />
                          <span>Masonry Grid</span>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/cobble-style-1">
                          <img src="../assets/images/portfolio/icons/cobble-style-1.svg" alt="/" />
                          <span>Cobble Style 1</span>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/cobble-style-2">
                          <img src="../assets/images/portfolio/icons/cobble-style-2.svg" alt="/" />
                          <span>Cobble Style 2</span>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/portfolio-thumbs-slider">
                          <img src="../assets/images/portfolio/icons/portfolio-thumbs-slider.svg" alt="/" />
                          <span>Portfolio Thumbs Slider</span>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/portfolio-film-strip">
                          <img src="../assets/images/portfolio/icons/portfolio-film-strip.svg" alt="/" />
                          <span>Portfolio Film Strip</span>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/carousel-showcase">
                          <img src="../assets/images/portfolio/icons/carousel-showcase.svg" alt="/" />
                          <span>Carousel Showcase</span>
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/portfolio-split-slider">
                          <img src="../assets/images/portfolio/icons/portfolio-split-slider.svg" alt="/" />
                          <span>Portfolio Split Slider</span>
                        </RouterLink>
                      </li>
                    </ul>
                  </li>
                  <li class="side-right line-left">
                    <RouterLink to="" class="menu-title">Portfolio Details</RouterLink>
                    <ul>
                      <li><RouterLink to="/portfolio-details-1">Portfolio Details 1</RouterLink></li>
                      <li><RouterLink to="/portfolio-details-2">Portfolio Details 2</RouterLink></li>
                      <li><RouterLink to="/portfolio-details-3">Portfolio Details 3</RouterLink></li>
                      <li><RouterLink to="/portfolio-details-4">Portfolio Details 4</RouterLink></li>
                      <li><RouterLink to="/portfolio-details-5">Portfolio Details 5</RouterLink></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li class="has-mega-menu sub-menu-down wide-width">
              <RouterLink to="" class="menu_item"><span>Pages</span><i class="fas fa-chevron-down tabindex"></i></RouterLink>
              <div class="mega-menu">
                <ul>
                  <li>
                    <RouterLink to="" class="menu-title">Pages</RouterLink>
                    <ul>
                      <li><RouterLink to="/about-us">About Us</RouterLink></li>
                      <li><RouterLink to="/about-me">About Me</RouterLink></li>
                      <li><RouterLink to="/pricing-table">Pricing Table</RouterLink></li>
                      <li><RouterLink to="/our-gift-vouchers">Our Gift Vouchers</RouterLink></li>
                      <li><RouterLink to="/what-we-do">What We Do</RouterLink></li>
                      <li><RouterLink to="/faqs-1">Faqs 1</RouterLink></li>
                      <li><RouterLink to="/faqs-2">Faqs 2</RouterLink></li>
                      <li><RouterLink to="/our-team">Our Team</RouterLink></li>
                    </ul>
                  </li>
                  <li>
                    <RouterLink to="" class="menu-title">Contact Us</RouterLink>
                    <ul>
                      <li><RouterLink to="/contact-us-1">Contact Us 1</RouterLink></li>
                      <li><RouterLink to="/contact-us-2">Contact Us 2</RouterLink></li>
                      <li><RouterLink to="/contact-us-3">Contact Us 3</RouterLink></li>
                    </ul>
                    <RouterLink to="" class="menu-title">Web Pages</RouterLink>
                    <ul>
                      <li><RouterLink to="/error-1">Error 404 1</RouterLink></li>
                      <li><RouterLink to="/error-2">Error 404 2</RouterLink></li>
                      <li><RouterLink to="/coming-soon">Coming Soon</RouterLink></li>
                      <li><RouterLink to="/under-construction">Under Construction</RouterLink></li>
                    </ul>
                  </li>
                  <li>
                    <RouterLink to="" class="menu-title">Banner Style</RouterLink>
                    <ul>
                      <li><RouterLink to="/banner-with-bg-color">Banner with BG Color</RouterLink></li>
                      <li><RouterLink to="/banner-with-image">Banner with Image</RouterLink></li>
                      <li><RouterLink to="/banner-with-video">Banner with Video</RouterLink></li>
                      <li><RouterLink to="/banner-with-kanbern">Banner with Kanbern</RouterLink></li>
                      <li><RouterLink to="/banner-small">Banner Small</RouterLink></li>
                      <li><RouterLink to="/banner-medium">Banner Medium</RouterLink></li>
                      <li><RouterLink to="/banner-large">Banner Large</RouterLink></li>
                    </ul>
                  </li>
                  <li>
                    <RouterLink to="" class="menu-title">Header Style</RouterLink>
                    <ul>
                      <li><RouterLink to="/header-style-1">Header Style 1</RouterLink></li>
                      <li><RouterLink to="/header-style-2">Header Style 2</RouterLink></li>
                      <li><RouterLink to="/header-style-3">Header Style 3</RouterLink></li>
                      <li><RouterLink to="/header-style-4">Header Style 4</RouterLink></li>
                      <li><RouterLink to="/header-style-5">Header Style 5</RouterLink></li>
                      <li><RouterLink to="/header-style-6">Header Style 6</RouterLink></li>
                      <li><RouterLink to="/header-style-7">Header Style 7</RouterLink></li>
                      <li class="w3menulink"><RouterLink to="/w3menu">Menu Styles</RouterLink></li>
                    </ul>
                  </li>
                  <li>
                    <RouterLink to="" class="menu-title">Footer Style</RouterLink>
                    <ul>
                      <li><RouterLink to="/footer-style-1">Footer Style 1</RouterLink></li>
                      <li><RouterLink to="/footer-style-2">Footer Style 2</RouterLink></li>
                      <li><RouterLink to="/footer-style-3">Footer Style 3</RouterLink></li>
                      <li><RouterLink to="/footer-style-4">Footer Style 4</RouterLink></li>
                      <li><RouterLink to="/footer-style-5">Footer Style 5</RouterLink></li>
                      <li><RouterLink to="/footer-style-6">Footer Style 6</RouterLink></li>
                      <li><RouterLink to="/footer-style-7">Footer Style 7</RouterLink></li>
                    </ul>
                  </li>
                  <li>
                    <RouterLink to="" class="menu-title">Dashboard</RouterLink>
                    <ul>
                      <li><RouterLink to="/account-dashboard">Dashboard</RouterLink></li>
                      <li><RouterLink to="/account-orders">Orders</RouterLink></li>
                      <li><RouterLink to="/account-order-details">Orders Details</RouterLink></li>
                      <li><RouterLink to="/account-order-confirmation">Orders Confirmation</RouterLink></li>
                      <li><RouterLink to="/account-downloads">Downloads</RouterLink></li>
                      <li><RouterLink to="/account-return-request">Return Request</RouterLink></li>
                      <li><RouterLink to="/account-return-request-detail">Return Request Detail</RouterLink></li>
                      <li><RouterLink to="/account-refund-requests-confirmed">Return Request Confirmed</RouterLink></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li class="sub-menu-down">
              <RouterLink to=""><span>My Account</span> <i class="fas fa-chevron-down tabindex"></i></RouterLink>
              <ul class="sub-menu">
                <li><RouterLink to="/account-dashboard">Dashboard</RouterLink></li>
                <li><RouterLink to="/account-orders">Orders</RouterLink></li>
                <li><RouterLink to="/account-order-details">Orders Details</RouterLink></li>
                <li><RouterLink to="/account-order-confirmation">Orders Confirmation</RouterLink></li>
                <li><RouterLink to="/account-downloads">Downloads</RouterLink></li>
                <li><RouterLink to="/account-return-request">Return Request</RouterLink></li>
                <li><RouterLink to="/account-return-request-detail">Return Request Detail</RouterLink></li>
                <li><RouterLink to="/account-refund-requests-confirmed">Return Request Confirmed</RouterLink></li>
                <li><RouterLink to="/account-profile">Profile</RouterLink></li>
                <li><RouterLink to="/account-address">Address</RouterLink></li>
                <li><RouterLink to="/account-shipping-methods">Shipping methods</RouterLink></li>
                <li><RouterLink to="/account-payment-methods">Payment Methods</RouterLink></li>
                <li><RouterLink to="/account-review">Review</RouterLink></li>
                <li><RouterLink to="/account-billing-address">Billing address</RouterLink></li>
                <li><RouterLink to="/account-shipping-address">Shipping address</RouterLink></li>
                <li><RouterLink to="/account-cancellation-requests">Cancellation Requests</RouterLink></li>
              </ul>
            </li>
          </ul>
          <div class="dz-social-icon">
            <ul>
              <li><RouterLink class="fab fa-facebook-f" target="_blank" to="https://www.facebook.com/dexignzone"></RouterLink></li>
              <li><RouterLink class="fab fa-twitter" target="_blank" to="/https://twitter.com/dexignzones"></RouterLink></li>
              <li><RouterLink class="fab fa-linkedin-in" target="_blank" to="https://www.linkedin.com/showcase/3686700/admin/"></RouterLink></li>
              <li><RouterLink class="fab fa-instagram" target="_blank" to="https://www.instagram.com/dexignzone/"></RouterLink></li>
            </ul>
          </div>
        </div>

        <!-- EXTRA NAV -->
        <div class="extra-nav">
          <div class="extra-cell">
            <ul class="header-right">
              <li class="nav-item login-link">
                <RouterLink class="nav-link" to="/login"> Login / Register </RouterLink>
              </li>
              <li class="nav-item search-link">
                <RouterLink
                  class="nav-link"
                  to="#"
                  @click.prevent
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  <i class="iconly-Light-Search"></i>
                </RouterLink>
              </li>
              <li class="nav-item wishlist-link">
                <RouterLink
                  class="nav-link"
                  to="#"
                  @click.prevent
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i class="iconly-Light-Heart2"></i>
                </RouterLink>
              </li>
              <li class="nav-item cart-link">
                <RouterLink
                  to="#"
                  @click.prevent
                  class="nav-link cart-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i class="iconly-Broken-Buy"></i>
                  <span class="badge badge-circle">5</span>
                </RouterLink>
              </li>
              <li class="nav-item filte-link">
                <RouterLink
                  to="#"
                  @click.prevent
                  class="nav-link filte-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasLeft"
                  aria-controls="offcanvasLeft"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 13" fill="none">
                    <rect y="11" width="30" height="2" fill="black"></rect>
                    <rect width="30" height="2" fill="black"></rect>
                  </svg>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="dz-search-area dz-offcanvas offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-modal="true" role="dialog">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">×</button>
    <div class="container">
      <form class="header-item-search">
        <div class="input-group search-input">
          <div class="dropdown bootstrap-select default-select">
            <CustomeSelect
              :options="[
                { title: 'All Categories' },
                { title: 'Clothes' },
                { title: 'UrbanSkirt' },
                { title: 'VelvetGown' },
                { title: 'LushShorts' },
                { title: 'Vintage' },
                { title: 'Wedding' },
                { title: 'Cotton' },
                { title: 'Linen' },
                { title: 'Navy' },
                { title: 'Urban' },
                { title: 'Business Meeting' },
                { title: 'Formal' },
              ]"
            />
          </div>
          <input type="search" class="form-control" placeholder="Search Product" />
          <button class="btn" type="button">
            <i class="iconly-Light-Search"></i>
          </button>
        </div>
        <ul class="recent-tag">
          <li class="pe-0"><span>Quick Search :</span></li>
          <li><RouterLink to="/shop-list">Clothes</RouterLink></li>
          <li><RouterLink to="/shop-list">UrbanSkirt</RouterLink></li>
          <li><RouterLink to="/shop-list">VelvetGown</RouterLink></li>
          <li><RouterLink to="/shop-list">LushShorts</RouterLink></li>
        </ul>
      </form>
      <div class="row">
        <div class="col-xl-12">
          <h5 class="mb-3">You May Also Like</h5>
          <Swiper
            class="swiper category-swiper2 swiper-initialized swiper-horizontal swiper-backface-hidden"
            :slides-per-view="6"
            :autoplay="{ delay: 3000 }"
            :modules="[Autoplay]"
            :space-between="30"
            :breakpoints="{
              1200: { slidesPerView: 6 },
              991: { slidesPerView: 5 },
              775: { slidesPerView: 4 },
              575: { slidesPerView: 3 },
              240: { slidesPerView: 2 },
            }"
          >
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/2.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title"><RouterLink to="/shop-list">ClassicCapri</RouterLink></h6>
                  <h6 class="price">$20.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide swiper-slide-prev">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/5.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title"><RouterLink to="/shop-list">DapperCoat</RouterLink></h6>
                  <h6 class="price">$70.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide swiper-slide-active">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/6.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title"><RouterLink to="/shop-list">ComfyLeggings</RouterLink></h6>
                  <h6 class="price">$45.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide swiper-slide-next">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/7.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title"><RouterLink to="/shop-list">DenimDream Jeans</RouterLink></h6>
                  <h6 class="price">$40.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/4.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title"><RouterLink to="/shop-list">SilkBliss Dress</RouterLink></h6>
                  <h6 class="price">$60.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/1.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title"><RouterLink to="/shop-list">SilkBliss Dress</RouterLink></h6>
                  <h6 class="price">$40.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/3.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title"><RouterLink to="/shop-list">GlamPants</RouterLink></h6>
                  <h6 class="price">$30.00</h6>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide class="swiper-slide">
              <div class="shop-card">
                <div class="dz-media">
                  <img src="../assets/images/shop/product/4.png" alt="image" />
                </div>
                <div class="dz-content">
                  <h6 class="title"><RouterLink to="/shop-list">ComfyLeggings</RouterLink></h6>
                  <h6 class="price">$35.00</h6>
                </div>
              </div>
            </SwiperSlide>

            <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
  <Canvas />
</template>
