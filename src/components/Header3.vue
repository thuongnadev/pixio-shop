<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import CustomeSelect from "@/elements/CustomeSelect.vue";
import Menu from "@/elements/Menu.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import Canvas from "@/components/Canvas.vue";

const menu = ref(false);

const isMenu = ref(false);
const isFixed = ref(false);

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

function scrollHandler() {
  if (window.scrollY > 90) {
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
  <!-- Main Header -->
  <div class="header-info-bar">
    <div class="container clearfix">
      <!-- Website Logo -->
      <div class="logo-header logo-dark">
        <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
      </div>
      {{ " " }}
      <!-- EXTRA NAV -->
      <div class="extra-nav d-md-flex d-none">
        <div class="extra-cell">
          <ul class="navbar-nav header-right m-0">
            <li class="nav-item info-box">
              <div class="nav-link">
                <div class="dz-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="enable-background: new 0 0 512 512" xml:space="preserve">
                    <path
                      style="fill: #3cc"
                      d="M489.343 210.251c-4.827-105.317-92.01-189.513-198.498-189.513h-69.689c-106.488 0-193.67 84.197-198.498 189.513C9.495 214.747 0 227.228 0 241.894v78.61c0 18.436 15 33.436 33.437 33.436h60.996c6.075 0 11-4.925 11-11V219.458c0-6.075-4.925-11-11-11H44.789c5.699-92.338 82.618-165.72 176.366-165.72h69.689c93.749 0 170.667 73.381 176.366 165.72h-49.644c-6.075 0-11 4.925-11 11V342.94c0 6.075 4.925 11 11 11h60.996c18.436 0 33.436-15 33.436-33.436v-78.61c.002-14.666-9.493-27.147-22.655-31.643zM83.433 331.94H33.437c-6.306 0-11.437-5.13-11.437-11.436v-78.61c0-6.306 5.131-11.436 11.437-11.436h49.996V331.94zM490 320.504c0 6.306-5.131 11.436-11.436 11.436h-49.996V230.458h49.996c6.306 0 11.436 5.13 11.436 11.436v78.61z"
                    ></path>
                    <path
                      d="M256 491.262a11.001 11.001 0 0 1-8.402-3.9l-52.108-61.671h-74.566c-20.673 0-37.491-16.818-37.491-37.49V188.049c0-20.673 16.818-37.491 37.491-37.491h270.154c20.672 0 37.49 16.818 37.49 37.491V388.2c0 20.672-16.818 37.49-37.49 37.49h-74.566l-52.108 61.671a11.006 11.006 0 0 1-8.404 3.901zM120.923 172.558c-8.542 0-15.491 6.949-15.491 15.491V388.2c0 8.541 6.949 15.49 15.491 15.49h79.673c3.238 0 6.312 1.427 8.402 3.9L256 463.218l47.002-55.627a10.998 10.998 0 0 1 8.402-3.9h79.673c8.541 0 15.49-6.949 15.49-15.49V188.049c0-8.542-6.949-15.491-15.49-15.491H120.923z"
                    ></path>
                    <path
                      d="M193.81 259.09c-8.663.084-14.039-9.956-9.139-17.11 4.134-6.475 14.16-6.434 18.29 0 4.892 7.164-.483 17.196-9.151 17.11zM311.729 259.09c-7.629.166-13.258-8.219-10.16-15.21 3.614-8.972 16.705-8.978 20.31 0 3.113 6.979-2.526 15.376-10.15 15.21zM256 352.204c-25.31 0-50.619-10.009-73.192-30.028-4.545-4.03-4.962-10.982-.931-15.528 4.029-4.545 10.982-4.962 15.528-.931 36.689 32.536 80.501 32.538 117.19 0 4.547-4.031 11.497-3.614 15.528.931 4.031 4.546 3.614 11.498-.931 15.528-22.572 20.019-47.882 30.028-73.192 30.028z"
                    ></path>
                  </svg>
                </div>
                <div class="info-content">
                  <span>24/7 SUPPORT</span>
                  <h6 class="title mb-0">+73 099 321 312</h6>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {{ " " }}
      <!-- header search nav -->
      <div class="header-search-nav">
        <form class="header-item-search">
          <div class="input-group search-input">
            <div class="dropdown bootstrap-select default-select">
              <CustomeSelect
                :options="[
                  { title: 'All Categories' },
                  { title: 'Photography' },
                  { title: 'Arts' },
                  { title: 'Adventure' },
                  { title: 'Action' },
                  { title: 'Games' },
                  { title: 'Movies' },
                  { title: 'Comics' },
                  { title: 'Biographies' },
                  { title: 'Children’s Books' },
                  { title: 'Historical' },
                  { title: 'Contemporary' },
                  { title: 'Classics' },
                  { title: 'Education' },
                ]"
              />
            </div>

            <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="Search for products" />
            <button class="btn" type="button">
              <i class="iconly-Light-Search"></i>
            </button>
          </div>
        </form>
      </div>
      {{ " " }}
    </div>
  </div>
  <!-- Main Header End -->

  <!-- Main Header -->
  <div :class="`sticky-header main-bar-wraper navbar-expand-lg ${isFixed ? 'is-fixed' : ''}`">
    <div class="main-bar clearfix">
      <div class="container clearfix d-lg-flex d-block">
        <!-- Website Logo -->
        <div class="logo-header logo-dark">
          <RouterLink to="/"><img src="../assets/images/logo.svg" alt="logo" /></RouterLink>
        </div>

        <!-- Nav Toggle Button -->
        <button :class="`navbar-toggler collapsed navicon justify-content-end ${isMenu ? 'open' : ''}`" type="button" @click="isMenu = !isMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Main Nav -->
        <div :class="`header-nav navbar-collapse justify-content-start ${isMenu ? 'show' : ''}`" id="navbarNavDropdown">
          <div class="logo-header">
            <RouterLink to="/"><img src="../assets/images/logo.svg" alt="" /></RouterLink>
          </div>
          <div class="browse-category-menu">
            <RouterLink
              :class="`category-btn ${menu ? 'active' : ''}`"
              data-bs-toggle="collapse"
              to="/#menu-2"
              role="button"
              aria-expanded="false"
              aria-controls="menu-2"
              @click="menu = !menu"
            >
              <div class="category-menu me-3">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span class="category-btn-title"> Browse Categories </span>
              <span class="toggle-arrow ms-auto">
                <i class="icon feather icon-chevron-down"></i>
              </span>
            </RouterLink>
            <div class="category-menu-items collapse" id="menu-2">
              <ul class="nav navbar-nav">
                <li class="has-mega-menu cate-drop">
                  <RouterLink to="">
                    <i class="icon feather icon-arrow-right"></i>
                    <span>Bamboo Products</span>
                    <span class="menu-icon">
                      <i class="icon feather icon-chevron-right"></i>
                    </span>
                  </RouterLink>
                  <div class="mega-menu">
                    <div class="row">
                      <div class="col-md-3 col-sm-4 col-6">
                        <RouterLink to="" class="menu-title">Smart Home Products</RouterLink>
                        <ul>
                          <li><RouterLink to="/shop-standard">Thermostats</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Lighting</RouterLink></li>
                          <li>
                            <RouterLink to="/shop-standard">Security Systems<span class="badge bg-primary">NEW</span></RouterLink>
                          </li>
                          <li><RouterLink to="/shop-standard">Locks</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Assistants</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Entertainment Systems</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Blinds And Shades</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Water Monitors</RouterLink></li>
                        </ul>
                      </div>
                      <div class="col-md-3 col-sm-4 col-6">
                        <RouterLink to="/shop-standard" class="menu-title">Smart Home Products</RouterLink>
                        <ul>
                          <li><RouterLink to="/shop-standard">Thermostats</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Lighting</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Security Systems</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Locks</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Assistants</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Entertainment Systems</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Blinds And Shades</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Water Monitors</RouterLink></li>
                        </ul>
                      </div>
                      <div class="col-md-3 col-sm-4 col-6">
                        <RouterLink to="/shop-standard" class="menu-title">Smart Home Products</RouterLink>
                        <ul>
                          <li><RouterLink to="/shop-standard">Thermostats</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Lighting</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Security Systems</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Locks</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Assistants</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Entertainment Systems</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Blinds And Shades</RouterLink></li>
                          <li>
                            <RouterLink to="/shop-standard">Water Monitors<span class="badge bg-red">Offer</span></RouterLink>
                          </li>
                        </ul>
                      </div>
                      <div class="col-md-3 col-sm-4 col-6">
                        <RouterLink to="/shop-standard" class="menu-title">Smart Home Products</RouterLink>
                        <ul>
                          <li><RouterLink to="/shop-standard">Thermostats</RouterLink></li>
                          <li>
                            <RouterLink to="/shop-standard">Lighting<span class="badge bg-secondary">Exclusive</span></RouterLink>
                          </li>
                          <li><RouterLink to="/shop-standard">Security Systems</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Locks</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Assistants</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Entertainment Systems</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Blinds And Shades</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Water Monitors</RouterLink></li>
                        </ul>
                      </div>
                      <div class="col-md-3 col-sm-4 col-6">
                        <RouterLink to="/shop-standard" class="menu-title">Smart Home Products</RouterLink>
                        <ul>
                          <li><RouterLink to="/shop-standard">Thermostats</RouterLink></li>
                          <li>
                            <RouterLink to="/shop-standard">Lighting<span class="badge bg-orange">Feture</span></RouterLink>
                          </li>
                          <li><RouterLink to="/shop-standard">Security Systems</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Locks</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Assistants</RouterLink></li>
                        </ul>
                      </div>
                      <div class="col-md-3 col-sm-4 col-6">
                        <RouterLink to="/shop-standard" class="menu-title">Smart Home Products</RouterLink>
                        <ul>
                          <li><RouterLink to="/shop-standard">Thermostats</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Lighting</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Security Systems</RouterLink></li>
                          <li>
                            <RouterLink to="/shop-standard">Locks<span class="badge bg-purple">SALE</span></RouterLink>
                          </li>
                          <li><RouterLink to="/shop-standard">Home Assistants</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Entertainment Systems</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Blinds And Shades</RouterLink></li>
                        </ul>
                      </div>
                      <div class="col-md-3 col-sm-4 col-6">
                        <RouterLink to="/shop-standard" class="menu-title">Smart Home Products</RouterLink>
                        <ul>
                          <li><RouterLink to="/shop-standard">Thermostats</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Lighting</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Security Systems</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Locks</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Assistants</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Entertainment Systems</RouterLink></li>
                        </ul>
                      </div>
                      <div class="col-md-3 col-sm-4 col-6">
                        <RouterLink to="/shop-standard" class="menu-title">Smart Home Products</RouterLink>
                        <ul>
                          <li><RouterLink to="/shop-standard">Thermostats</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Lighting</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Security Systems</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Locks</RouterLink></li>
                          <li><RouterLink to="/shop-standard">Home Assistants</RouterLink></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="cate-drop">
                  <RouterLink to="">
                    <i class="icon feather icon-arrow-right"></i>
                    <span>Fitness Trackers</span>
                    <span class="menu-icon">
                      <i class="icon feather icon-chevron-right"></i>
                    </span>
                  </RouterLink>
                  <ul class="sub-menu">
                    <li><RouterLink to="/shop-standard">Thermostats</RouterLink></li>
                    <li><RouterLink to="/shop-standard">Lighting</RouterLink></li>
                    <li><RouterLink to="/shop-standard">Security Systems</RouterLink></li>
                    <li><RouterLink to="/shop-standard">Locks</RouterLink></li>
                    <li><RouterLink to="/shop-standard">Home Assistants</RouterLink></li>
                    <li><RouterLink to="/shop-standard">Entertainment Systems</RouterLink></li>
                    <li><RouterLink to="/shop-standard">Blinds And Shades</RouterLink></li>
                    <li><RouterLink to="/shop-standard">Appliances</RouterLink></li>
                    <li><RouterLink to="/shop-standard">Water Monitors</RouterLink></li>
                    <li><RouterLink to="/shop-standard">Gardening Systems</RouterLink></li>
                  </ul>
                </li>

                <li>
                  <RouterLink to="/shop-standard">
                    <i class="icon feather icon-arrow-right"></i>
                    <span>Protein Supplements</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-standard">
                    <i class="icon feather icon-arrow-right"></i>
                    <span>Fitness Equipment</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-standard">
                    <i class="icon feather icon-arrow-right"></i>
                    <span>Reusable Bags</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-standard">
                    <i class="icon feather icon-arrow-right"></i>
                    <span>Water Bottles </span>
                    <span class="badge bg-purple">SALE</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-standard">
                    <i class="icon feather icon-arrow-right"></i>
                    <span>Home Assistants</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-standard">
                    <i class="icon feather icon-arrow-right"></i>
                    <span>Water Monitors</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-standard">
                    <i class="icon feather icon-arrow-right"></i>
                    <span>Baby Monitors</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-standard">
                    <i class="icon feather icon-arrow-right"></i>
                    <span>Convertible Car Seats</span>
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/shop-standard">
                    <i class="icon feather icon-arrow-right"></i>
                    <span>Convertible Car Seats</span>
                  </RouterLink>
                </li>
                <li class="menu-items">
                  <RouterLink to="">
                    <i class="flaticon-blocks me-3"></i>
                    <span>More Products</span>
                    <span class="menu-icon">
                      <i class="icon feather icon-chevron-right"></i>
                    </span>
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
          <Menu />
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Main Header End -->
  <!-- SearchBar -->
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
  <!-- SearchBar -->

  <Canvas />
</template>
