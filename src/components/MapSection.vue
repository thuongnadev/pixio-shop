<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
</script>

<template>
  <div class="container-fluid p-0">
    <div class="row align-items-start">
      <div class="col-xl-7 col-lg-12 col-md-12">
        <div class="map-area">
          <img src="../assets/images/map/map2.png" alt="image" />
          <div class="map-line" id="map-line" style="height: 82%"><img src="../assets/images/map/map-line.png" alt="image" /></div>
          <div class="loction-b wow" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: updown-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="47" viewBox="0 0 35 47" fill="none">
              <path
                d="M17.8211 5.10059C11.2718 5.10059 5.96484 10.4115 5.96484 16.9568C5.96484 23.5061 11.2757 28.8131 17.8211 28.8131C24.3704 28.8131 29.6773 23.5061 29.6773 16.9568C29.6773 10.4075 24.3704 5.10059 17.8211 5.10059ZM17.8211 26.8761C12.3435 26.8761 7.90185 22.4344 7.90185 16.9568C7.90185 11.4792 12.3395 7.0376 17.8211 7.0376C23.2987 7.0376 27.7403 11.4792 27.7403 16.9568C27.7403 22.4344 23.2987 26.8761 17.8211 26.8761Z"
                fill="#CC0D39"
              ></path>
              <path
                d="M17.8227 2.75879C9.8603 2.75879 3.40625 9.21284 3.40625 17.1752C3.40625 17.5404 3.42213 17.9135 3.45388 18.2946C4.36681 29.1267 17.8187 46.7583 17.8187 46.7583C17.8187 46.7583 30.1592 30.5795 32.0049 19.6957C32.1557 18.8185 32.2351 17.973 32.2351 17.1713C32.2391 9.21284 25.7851 2.75879 17.8227 2.75879ZM17.8227 27.666C13.2461 27.666 9.34033 24.7962 7.80422 20.7595C7.35172 19.5727 7.10562 18.2906 7.10562 16.945C7.10562 11.0268 11.9045 6.22794 17.8227 6.22794C23.7409 6.22794 28.5397 11.0268 28.5397 16.945C28.5397 18.6121 28.1587 20.1919 27.4799 21.601C25.7493 25.1932 22.0738 27.666 17.8227 27.666Z"
                fill="#CC0D39"
              ></path>
              <path
                d="M17.8242 2.75879V6.23191C23.7424 6.23191 28.5413 11.0308 28.5413 16.949C28.5413 18.6161 28.1602 20.1958 27.4815 21.6049C25.7509 25.1932 22.0753 27.67 17.8242 27.67V46.7622C17.8242 46.7622 30.1647 30.5834 32.0104 19.6997C32.1613 18.8225 32.2407 17.977 32.2407 17.1752C32.2407 9.21284 25.7866 2.75879 17.8242 2.75879Z"
                fill="#CC0D39"
              ></path>
              <path
                d="M26.3002 25.437C30.983 20.7542 30.983 13.1618 26.3002 8.47904C21.6174 3.79623 14.0251 3.79623 9.34225 8.47904C4.65945 13.1618 4.65945 20.7542 9.34226 25.437C14.0251 30.1198 21.6174 30.1198 26.3002 25.437Z"
                stroke="white"
                stroke-width="0.5007"
                stroke-miterlimit="10"
              ></path>
              <path
                opacity="0.39"
                d="M32.239 17.1752C32.239 17.973 32.1597 18.8185 32.0088 19.6997C30.6513 20.4578 29.1311 21.1008 27.4799 21.6049C28.1586 20.1958 28.5397 18.6161 28.5397 16.949C28.5397 11.0308 23.7408 6.23191 17.8226 6.23191C11.9044 6.23191 7.10556 11.0308 7.10556 16.949C7.10556 18.2906 7.35166 19.5766 7.80415 20.7634C6.16881 20.0807 4.70414 19.2432 3.45779 18.2946C3.42603 17.9135 3.41016 17.5404 3.41016 17.1752C3.41016 9.21284 9.86421 2.75879 17.8266 2.75879C25.785 2.75879 32.239 9.21284 32.239 17.1752Z"
                fill="white"
              ></path>
              <path
                d="M17.9283 23.1084H14.0781V10.9187C15.7174 10.8472 16.9003 10.8115 17.6267 10.8115C18.9603 10.8115 19.9923 11.0695 20.7227 11.5895C21.453 12.1095 21.8182 12.8517 21.8182 13.8163C21.8182 14.3839 21.584 14.8999 21.1196 15.3643C20.6512 15.8287 20.1352 16.1224 19.5716 16.2375C20.6393 16.4717 21.4173 16.8567 21.9055 17.3926C22.3938 17.9324 22.6399 18.6628 22.6399 19.5876C22.6399 20.6593 22.2072 21.5127 21.3379 22.1518C20.4647 22.7908 19.3295 23.1084 17.9283 23.1084ZM15.9199 12.2484V15.7533C16.3049 15.785 16.7852 15.8049 17.3567 15.8049C19.0993 15.8049 19.9725 15.1658 19.9725 13.8837C19.9725 12.7565 19.1707 12.1928 17.5671 12.1928C16.9558 12.1889 16.4081 12.2087 15.9199 12.2484ZM15.9199 17.0433V21.6953C16.551 21.7509 17.0392 21.7786 17.3766 21.7786C18.5317 21.7786 19.3731 21.5842 19.905 21.1912C20.4369 20.7982 20.7029 20.179 20.7029 19.3217C20.7029 18.5278 20.4488 17.9443 19.9447 17.5672C19.4367 17.1902 18.5912 16.9996 17.4083 16.9996L15.9199 17.0433Z"
                fill="#CC0D39"
              ></path>
              <path
                d="M18.319 23.1084H14.4688V10.9187C16.1081 10.8472 17.2909 10.8115 18.0173 10.8115C19.351 10.8115 20.383 11.0695 21.1133 11.5895C21.8437 12.1095 22.2088 12.8517 22.2088 13.8163C22.2088 14.3839 21.9747 14.8999 21.5103 15.3643C21.0419 15.8287 20.5259 16.1224 19.9622 16.2375C21.03 16.4717 21.808 16.8567 22.2962 17.3926C22.7844 17.9324 23.0305 18.6628 23.0305 19.5876C23.0305 20.6593 22.5978 21.5127 21.7286 22.1518C20.8514 22.7908 19.7161 23.1084 18.319 23.1084ZM16.3105 12.2484V15.7533C16.6955 15.785 17.1758 15.8049 17.7474 15.8049C19.4899 15.8049 20.3631 15.1658 20.3631 13.8837C20.3631 12.7565 19.5613 12.1928 17.9578 12.1928C17.3425 12.1889 16.7948 12.2087 16.3105 12.2484ZM16.3105 17.0433V21.6953C16.9416 21.7509 17.4298 21.7786 17.7672 21.7786C18.9223 21.7786 19.7638 21.5842 20.2957 21.1912C20.8275 20.7982 21.0935 20.179 21.0935 19.3217C21.0935 18.5278 20.8394 17.9443 20.3353 17.5672C19.8273 17.1902 18.9818 16.9996 17.799 16.9996L16.3105 17.0433Z"
                fill="#CC0D39"
              ></path>
            </svg>
          </div>
          <div class="loction-center wow fadeInUp" data-wow-delay="1.0s" style="visibility: visible; animation-delay: 1s; animation-name: fadeInUp">
            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="38" viewBox="0 0 61 38" fill="none">
              <path
                opacity="0.41"
                d="M41.1005 33.4829C41.1005 35.7087 36.4963 37.5077 30.7944 37.5077C25.1077 37.5077 20.4883 35.7087 20.4883 33.4829C20.4883 31.257 25.0925 29.458 30.7944 29.458C36.4811 29.458 41.1005 31.257 41.1005 33.4829Z"
                fill="#050505"
              ></path>
              <path
                d="M40.6576 32.3699C40.6576 34.5043 36.2364 36.227 30.7937 36.227C25.3509 36.227 20.9297 34.5043 20.9297 32.3699C20.9297 30.2355 25.3509 28.5127 30.7937 28.5127C36.2364 28.5127 40.6576 30.2355 40.6576 32.3699Z"
                fill="#C92020"
                stroke="white"
                stroke-width="0.6087"
                stroke-miterlimit="10"
              ></path>
              <path d="M0.589844 0.870117V17.8605H27.0772L30.795 29.9002L34.4936 17.8605H61.0003V0.870117H0.589844Z" fill="#CC0D39"></path>
              <path d="M59.8647 1.83398H1.78516V16.821H59.8647V1.83398Z" stroke="white" stroke-width="0.3472" stroke-miterlimit="10"></path>
              <path
                d="M11.1641 12.6794L11.8575 11.7547C12.3391 12.1785 12.9363 12.3904 13.6683 12.3904C15.0167 12.3904 15.691 11.851 15.691 10.7723C15.691 10.2714 15.4984 9.88615 15.0938 9.57793C14.7086 9.26971 14.1692 9.1156 13.5335 9.1156H13.4179V8.15242H13.4757C14.7085 8.15242 15.325 7.70935 15.325 6.82323C15.325 5.89858 14.7471 5.43625 13.572 5.43625C12.9363 5.43625 12.4355 5.60963 12.0695 5.95638L11.4145 5.14731C11.8768 4.66572 12.6281 4.43457 13.6876 4.43457C14.6122 4.43457 15.3828 4.64645 15.9799 5.05099C16.5771 5.45552 16.8661 5.97563 16.8661 6.61133C16.8661 7.09292 16.6927 7.53598 16.3652 7.90198C16.0377 8.26799 15.6525 8.51841 15.2094 8.65326C15.8258 8.80737 16.3074 9.09634 16.6734 9.48161C17.0394 9.86688 17.2128 10.3484 17.2128 10.9071C17.2128 11.7162 16.9046 12.3519 16.2689 12.7949C15.6332 13.238 14.7663 13.4499 13.6298 13.4499C13.1482 13.4499 12.6859 13.3728 12.2235 13.238C11.7805 13.0646 11.4338 12.8913 11.1641 12.6794Z"
                fill="white"
              ></path>
              <path
                d="M19.8919 9.03866L19.3911 8.74969V4.51172H24.7078V5.53268H20.778V7.65168C21.144 7.43979 21.5871 7.32421 22.1457 7.32421C23.1474 7.32421 23.8988 7.57461 24.4189 8.0562C24.939 8.53779 25.2087 9.23129 25.2087 10.1174C25.2087 12.3135 24.0143 13.4115 21.6256 13.4115C20.6239 13.4115 19.7956 13.1803 19.1406 12.7373L19.6993 11.7355C20.3542 12.1786 20.9899 12.3905 21.6064 12.3905C22.9741 12.3905 23.6676 11.697 23.6676 10.2908C23.6676 8.98086 22.9934 8.32589 21.6449 8.32589C21.0092 8.36442 20.412 8.57634 19.8919 9.03866Z"
                fill="white"
              ></path>
              <path
                d="M28.6176 11.6387C28.9258 11.6387 29.1762 11.735 29.3881 11.9084C29.6 12.0817 29.7156 12.2936 29.7156 12.5441C29.7156 12.7945 29.6 13.0064 29.3881 13.1798C29.1762 13.3531 28.9258 13.4494 28.6176 13.4494C28.3094 13.4494 28.0589 13.3531 27.847 13.1798C27.6351 13.0064 27.5195 12.7945 27.5195 12.5441C27.5195 12.2936 27.6351 12.0817 27.847 11.9084C28.0589 11.7157 28.3094 11.6387 28.6176 11.6387Z"
                fill="white"
              ></path>
              <path
                d="M37.9599 10.9258V13.3144H36.5729V10.9258H31.6992V10.2515L37.4397 4.53027H37.9599V10.0011H39.0386V10.9258H37.9599ZM36.5729 6.91896L33.4329 10.0204H36.5729V6.91896Z"
                fill="white"
              ></path>
              <path
                d="M42.9309 13.3152L41.4669 11.4082L40.7541 12.0053V13.296H39.9258V7.95996H40.7541V11.2733L42.5264 9.50105H43.4895L42.0063 10.9458L43.817 13.296H42.9309V13.3152Z"
                fill="white"
              ></path>
              <path
                d="M49.7889 13.3146V10.9067C49.7889 10.3095 49.4807 10.0206 48.845 10.0206C48.6523 10.0206 48.4597 10.0784 48.2863 10.1747C48.1129 10.271 47.9974 10.3866 47.9396 10.5214V13.3339H47.1113V10.637C47.1113 10.4444 47.0342 10.3095 46.8608 10.1939C46.6874 10.0784 46.4563 10.0398 46.1866 10.0398C46.0132 10.0398 45.8399 10.0976 45.6665 10.1939C45.4739 10.2903 45.339 10.4059 45.2619 10.5407V13.3339H44.4336V9.53898H44.973L45.2427 9.98204C45.5509 9.63529 45.9554 9.4812 46.437 9.4812C47.092 9.4812 47.5736 9.65456 47.824 9.98204C47.9203 9.84719 48.0937 9.71234 48.3441 9.61603C48.5945 9.51971 48.8449 9.46191 49.1146 9.46191C49.5962 9.46191 49.9622 9.57751 50.2319 9.80867C50.5016 10.0398 50.6172 10.3673 50.6172 10.7911V13.3339H49.7889V13.3146Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div class="loction-a wow" data-wow-delay="1.2s" style="visibility: visible; animation-delay: 1.2s; animation-name: updown-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="56" height="86" viewBox="0 0 56 86" fill="none">
              <path
                d="M28.1688 5.40039C15.5701 5.40039 5.35547 15.6183 5.35547 28.217C5.35547 40.819 15.5701 51.0337 28.1721 51.0337C40.7741 51.0337 50.9888 40.819 50.9888 28.217C50.9888 15.6183 40.7708 5.40039 28.1688 5.40039ZM28.1688 47.3061C17.6282 47.3061 9.08306 38.761 9.08306 28.2203C9.08306 17.6797 17.6282 9.13127 28.1688 9.13127C38.7095 9.13127 47.2546 17.6764 47.2546 28.217C47.2546 38.7577 38.7095 47.3061 28.1688 47.3061Z"
                fill="#CC0D39"
              ></path>
              <path
                d="M28.1692 0.895508C12.8473 0.895508 0.429688 13.3164 0.429688 28.6351C0.429688 29.3365 0.462617 30.051 0.525182 30.7853C2.28689 51.6328 28.1692 85.5631 28.1692 85.5631C28.1692 85.5631 51.9178 54.4318 55.4675 33.4888C55.754 31.7963 55.9121 30.1729 55.9121 28.6351C55.9121 13.3164 43.4912 0.895508 28.1692 0.895508ZM28.1692 48.8272C19.364 48.8272 11.8462 43.3083 8.8892 35.5403C8.01987 33.2583 7.54569 30.7853 7.54569 28.2037C7.54569 16.8135 16.779 7.57684 28.1692 7.57684C39.5594 7.57684 48.7961 16.8102 48.7961 28.2037C48.7961 31.411 48.0618 34.4504 46.7545 37.1604C43.422 44.0624 36.3521 48.8272 28.1692 48.8272Z"
                fill="#CC0D39"
              ></path>
              <path
                d="M28.168 0.895508V7.57684C39.5582 7.57684 48.7948 16.8102 48.7948 28.2037C48.7948 31.411 48.0605 34.4504 46.7532 37.1604C43.4208 44.0657 36.3509 48.8272 28.168 48.8272V85.5631C28.168 85.5631 51.9165 54.4318 55.4663 33.4888C55.7528 31.7963 55.9108 30.1729 55.9108 28.6351C55.9108 13.3164 43.4899 0.895508 28.168 0.895508Z"
                fill="#CC0D39"
              ></path>
              <path
                d="M28.1672 51.2905C40.9104 51.2905 51.2407 40.9602 51.2407 28.217C51.2407 15.4739 40.9104 5.14355 28.1672 5.14355C15.4241 5.14355 5.09375 15.4739 5.09375 28.217C5.09375 40.9602 15.4241 51.2905 28.1672 51.2905Z"
                stroke="white"
                stroke-width="1.1614"
                stroke-miterlimit="10"
              ></path>
              <path
                d="M34.3107 39.1875L32.7593 34.4661H24.3855L22.7259 39.1875H19.2852L28.4265 16.4961H29.2399L37.7219 39.1875H34.3107ZM28.6856 22.3651L25.199 32.2199H31.8836L28.6856 22.3651Z"
                fill="#CC0D39"
              ></path>
              <path
                d="M34.3107 39.1875L32.7593 34.4661H24.3855L22.7259 39.1875H19.2852L28.4265 16.4961H29.2399L37.7219 39.1875H34.3107ZM28.6856 22.3651L25.199 32.2199H31.8836L28.6856 22.3651Z"
                fill="#CC0D39"
              ></path>
            </svg>
          </div>

          <div class="area-box1 wow animated" data-wow-delay="1.4s" style="visibility: visible; animation-delay: 1.4s">
            <div class="shop-card style-7">
              <div class="dz-media">
                <img src="../assets/images/shop/product/medium/3.png" alt="image" />
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Cozy Knit Cardigan Sweater</RouterLink></h5>
                <span class="sale-title">up to 79% off</span>
              </div>
            </div>
          </div>
          <div class="area-box2 wow animated" data-wow-delay="1.6s" style="visibility: visible; animation-delay: 1.6s">
            <div class="shop-card style-7">
              <div class="dz-media">
                <img src="../assets/images/shop/product/medium/4.png" alt="image" />
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Sophisticated Swagger Suit</RouterLink></h5>
                <span class="sale-title">up to 79% off</span>
              </div>
            </div>
          </div>
          <div class="area-box3 wow animated" data-wow-delay="1.8s" style="visibility: visible; animation-delay: 1.8s">
            <div class="shop-card style-7">
              <div class="dz-media">
                <img src="../assets/images/shop/product/medium/5.png" alt="image" />
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Classic Denim Skinny Jeans</RouterLink></h5>
                <span class="sale-title">up to 79% off</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-5 col-lg-12 col-md-12 custom-width">
        <div class="section-head style-1 wow fadeInUp d-lg-flex align-items-end justify-content-between" data-wow-delay="0.1s">
          <div class="left-content">
            <h2 class="title">Discovering the Hottest Nearby Destinations in Your Area</h2>
            <p class="text-capitalize text-secondary m-0">Up to 60% off + up to $107 Cashback</p>
          </div>
          <RouterLink to="/shop-list" class="text-secondary font-14 d-flex align-items-center gap-1 m-b15"
            >See All
            <i class="icon feather icon-chevron-right font-18"></i>
          </RouterLink>
        </div>
        <Swiper
          class="swiper swiper-shop2 swiper-visible swiper-item-4"
          :slides-per-view="4"
          :space-between="30"
          :loop="true"
          :breakpoints="{
            1200: { slidesPerView: 4 },
            1024: { slidesPerView: 3 },
            775: { slidesPerView: 2 },
            240: { slidesPerView: 1 },
          }"
        >
          <SwiperSlide class="swiper-slide wow fadeInUp" data-wow-delay="0.1s">
            <div class="shop-card style-7">
              <div class="dz-media">
                <img src="../assets/images/shop/product/medium/3.png" alt="image" />
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Cardigan Sweater</RouterLink></h5>
                <span class="sale-title text-success">up to 79% off</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide wow fadeInUp" data-wow-delay="0.2s">
            <div class="shop-card style-7">
              <div class="dz-media">
                <img src="../assets/images/shop/product/medium/4.png" alt="image" />
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Swagger Suit</RouterLink></h5>
                <span class="sale-title">up to 79% off</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide wow fadeInUp" data-wow-delay="0.4s">
            <div class="shop-card style-7">
              <div class="dz-media">
                <img src="../assets/images/shop/product/medium/5.png" alt="image" />
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Skinny Jeans</RouterLink></h5>
                <span class="sale-title">up to 79% off</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide wow fadeInUp" data-wow-delay="0.5s">
            <div class="shop-card style-7">
              <div class="dz-media">
                <img src="../assets/images/shop/product/medium/6.png" alt="image" />
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Sports Leggings</RouterLink></h5>
                <span class="sale-title">up to 79% off</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide wow fadeInUp" data-wow-delay="0.6s">
            <div class="shop-card style-7">
              <div class="dz-media">
                <img src="../assets/images/shop/product/medium/3.png" alt="image" />
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Cardigan Sweater</RouterLink></h5>
                <span class="sale-title text-success">up to 79% off</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide wow fadeInUp" data-wow-delay="0.7s">
            <div class="shop-card style-7">
              <div class="dz-media">
                <img src="../assets/images/shop/product/medium/4.png" alt="image" />
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/shop-list">Swagger Suit</RouterLink></h5>
                <span class="sale-title">up to 79% off</span>
              </div>
            </div>
          </SwiperSlide>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </Swiper>
      </div>
    </div>
  </div>
</template>
