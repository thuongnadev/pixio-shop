<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Header2 from "@/components/Header2.vue";
import Footer from "./components/Footer.vue";
import Header3 from "./components/Header3.vue";
import Header4 from "./components/Header4.vue";
import Footer2 from "./components/Footer2.vue";
import Footer3 from "./components/Footer3.vue";
import Footer4 from "./components/Footer4.vue";
import Footer5 from "./components/Footer5.vue";
import Footer6 from "./components/Footer6.vue";
import Footer7 from "./components/Footer7.vue";
import Header5 from "./components/Header5.vue";
import PreviewModel from "./elements/PreviewModel.vue";
import { watch } from "vue";
import router from "./router";

watch(
  () => router.currentRoute.value.path,
  () => {
    window.scrollTo(0, 0);
  }
);
</script>

<template>
  <div class="page-wraper">
    <PreviewModel />
    <component :is="$route.meta.layout">
      <header class="site-header mo-left header style-1 header-transparent">
        <Header />
      </header>
      <RouterView />
      <Footer />
    </component>
    <component :is="$route.meta.layout2">
      <header class="site-header mo-left header">
        <Header />
      </header>
      <RouterView />
      <Footer />
    </component>
    <component :is="$route.meta.layout3">
      <header class="site-header mo-left header header-text-white header-transparent">
        <Header2 />
      </header>
      <RouterView />
      <Footer />
    </component>
    <component :is="$route.meta.layout4">
      <header class="site-header mo-left header border-bottom">
        <Header />
      </header>
      <RouterView />
    </component>
    <component :is="$route.meta.layout5">
      <header class="site-header mo-left header style-1 header-transparent">
        <Header />
      </header>
      <RouterView />
    </component>
    <component :is="$route.meta.layout6">
      <RouterView />
    </component>
    <component :is="$route.meta.layout7">
      <header class="site-header mo-left header style-2">
        <Header3 />
      </header>
      <RouterView />
      <Footer />
    </component>
    <component :is="$route.meta.layout8">
      <Header4 />

      <RouterView />
      <Footer />
    </component>
    <component :is="$route.meta.layout9">
      <header class="site-header mo-left header">
        <div class="top-bar">
          <div class="container-fluid">
            <div class="dz-topbar-inner d-flex justify-content-between align-items-center">
              <div class="dz-topbar-left">
                <ul>
                  <li><RouterLink to="/about-us">About Us</RouterLink></li>
                  <li><RouterLink to="/contact-us-1">Contact Us</RouterLink></li>
                  <li><RouterLink to="/faqs-2">Help Desk</RouterLink></li>
                </ul>
              </div>
              <div class="dz-topbar-right">
                <ul>
                  <li><span>Share:</span></li>
                  <li>
                    <RouterLink to="https://www.facebook.com/dexignzone" target="_blank"><i class="fa-brands fa-facebook-f"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.linkedin.com/showcase/3686700/admin/" target="_blank"
                      ><i class="fa-brands fa-linkedin-in"></i
                    ></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.instagram.com/dexignzone/" target="_blank"><i class="fa-brands fa-instagram"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/https://twitter.com/dexignzones" target="_blank"><i class="fa-brands fa-twitter"></i></RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Header />
      </header>
      <RouterView />
      <Footer />
    </component>
    <component :is="$route.meta.layout10">
      <header class="site-header mo-left header">
        <div class="top-bar bg-primary text-white">
          <div class="container-fluid">
            <div class="dz-topbar-inner d-flex justify-content-between align-items-center">
              <div class="dz-topbar-left">
                <ul>
                  <li><RouterLink to="/about-us">About Us</RouterLink></li>
                  <li><RouterLink to="/contact-us-1">Contact Us</RouterLink></li>
                  <li><RouterLink to="/faqs-2">Help Desk</RouterLink></li>
                </ul>
              </div>
              <div class="dz-topbar-right">
                <ul>
                  <li><span>Share:</span></li>
                  <li>
                    <RouterLink to="https://www.facebook.com/dexignzone" target="_blank"><i class="fa-brands fa-facebook-f"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.linkedin.com/showcase/3686700/admin/" target="_blank"
                      ><i class="fa-brands fa-linkedin-in"></i
                    ></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.instagram.com/dexignzone/" target="_blank"><i class="fa-brands fa-instagram"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/https://twitter.com/dexignzones" target="_blank"><i class="fa-brands fa-twitter"></i></RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Header />
      </header>
      <RouterView />
      <Footer />
    </component>
    <component :is="$route.meta.layout11">
      <header class="site-header mo-left header">
        <Header />
      </header>
      <RouterView />
      <Footer2 />
    </component>
    <component :is="$route.meta.layout12">
      <header class="site-header mo-left header">
        <Header />
      </header>
      <RouterView />
      <Footer3 />
    </component>
    <component :is="$route.meta.layout13">
      <header class="site-header mo-left header">
        <Header />
      </header>
      <RouterView />
      <Footer4 />
    </component>
    <component :is="$route.meta.layout14">
      <header class="site-header mo-left header">
        <Header />
      </header>
      <RouterView />
      <Footer5 />
    </component>
    <component :is="$route.meta.layout15">
      <header class="site-header mo-left header">
        <Header />
      </header>
      <RouterView />
      <Footer6 />
    </component>
    <component :is="$route.meta.layout16">
      <header class="site-header mo-left header">
        <Header />
      </header>
      <RouterView />
      <Footer7 />
    </component>
    <component :is="$route.meta.layout17">
      <header class="site-header mo-left header style-1">
        <Header5 />
      </header>
      <RouterView />
      <Footer7 />
    </component>
    <component :is="$route.meta.layout18">
      <header class="site-header mo-left header header-transparent">
        <Header />
      </header>
      <RouterView />
      <Footer />
    </component>
  </div>
</template>
