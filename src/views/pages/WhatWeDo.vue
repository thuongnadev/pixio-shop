<script setup lang="ts">
import bg from "@/assets/images/background/bg7.jpg";
import CountUp from "vue-countup-v3";
</script>

<template>
  <div class="page-content bg-light">
    <!--banner-->
    <div class="dz-bnr-inr dz-bnr-inr-lg style-2" :style="`background-image: url(${bg})`">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-12 col-sm-12">
            <div class="dz-bnr-inr-entry">
              <h1>The Impact of What We Do How We Make a Difference</h1>
              <nav aria-label="breadcrumb" class="breadcrumb-row">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
                  <li class="breadcrumb-item">What We Do</li>
                </ul>
              </nav>
              <div class="dz-media wow rounded fadeInUp" data-wow-delay="0.3s">
                <img src="../../assets/images/about/pic7.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="content-inner about-style3">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-12 col-sm-12">
            <div class="whatwedo-box">
              <div class="about-content">
                <div class="section-head style-1 wow fadeInUp d-block" data-wow-delay="0.4s">
                  <h4 class="title">Our Mission</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                    1500s,
                  </p>

                  <h4 class="title">Our Vision</h4>
                  <p>
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
                    on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate
                    Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                    non-characteristic words etc.
                  </p>
                </div>
                <div class="row justify-content-center m-b30 text-lg-start text-center">
                  <div class="col-lg-4 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div class="exp-head">
                      <div class="counter-num">
                        <h2 class="d-flex align-items-center">
                          <span class="counter"><CountUp start-val="0" end-val="50" :duration="50" /></span>k+
                        </h2>
                      </div>
                      <span class="counter-title">Happy Customer</span>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.6s">
                    <div class="exp-head">
                      <div class="counter-num">
                        <h2 class="d-flex align-items-center">
                          <span class="counter"><CountUp start-val="0" end-val="21" :duration="50" /></span>+
                        </h2>
                      </div>
                      <span class="counter-title">Years in Business</span>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-4 col-sm-4 col-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div class="exp-head">
                      <div class="counter-num">
                        <h2 class="d-flex align-items-center">
                          <span class="counter"><CountUp start-val="0" end-val="98" :duration="50" /></span>%
                        </h2>
                      </div>
                      <span class="counter-title">Return Clients</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-12 col-sm-12">
            <div class="about-thumb wow fadeInUp" data-wow-delay="0.8s">
              <img src="../../assets/images/lady3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="get-in-touch bg-secondary">
      <div class="m-r100 m-md-r0 m-sm-r0 wow fadeInUp" data-wow-delay="0.1s">
        <h3 class="dz-title mb-lg-0 mb-3">
          Questions ?
          <span>Our experts will help find the grar that’s right for you</span>
        </h3>
      </div>
      <RouterLink to="/contact-us-1" class="btn btn-light wow fadeInUp" data-wow-delay="0.2s">Get In Touch</RouterLink>
    </section>

    <!-- Companies -->
    <section class="content-inner-1 companies bg-light">
      <div class="container">
        <div class="section-inner">
          <div class="section-head style-3 wow fadeInUp" data-wow-delay="0.1s">
            <h2 class="title">We’re just keep growing with 6.3k trusted companies</h2>
            <p>Nullam nec ipsum luctus, vehicula massa in, dictum sapien. Aenean quis luctus ert nulla quam augue.</p>
          </div>
          <div class="row gx-3 companies-inner">
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.1s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo1.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.2s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo2.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.3s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo3.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.4s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo4.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.5s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo5.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.6s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo6.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.7s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo7.png" alt="" />
                </div>
              </RouterLink>
            </div>
            <div class="col-md-3 col-sm-4 col-6 p-lg-b30 p-b20 wow fadeInUp" data-wow-delay="0.8s">
              <RouterLink to="" class="companies-wrapper">
                <div class="companies-media">
                  <img src="../../assets/images/companies/logo8.png" alt="" />
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Companies End -->
  </div>
</template>
