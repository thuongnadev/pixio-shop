<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
</script>

<template>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Pricing Table" />
    <!--Banner End-->

    <!-- Pricing Table -->
    <section class="dz-pricingtable">
      <div class="container">
        <div class="row pricingtable-wraper">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="pricingtable-wrapper style-1 bg-light m-b30">
              <div class="pricingtable-inner">
                <div class="pricingtable-title">
                  <h3 class="title">Starter Plan</h3>
                  <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="pricingtable-price">
                  <h2 class="pricingtable-bx">$19<small class="pricingtable-type">/Month</small></h2>
                </div>
                <div class="pricingtable-button">
                  <RouterLink to="/registration" class="btn btn-outline-secondary">Try for free</RouterLink>
                </div>
                <div class="pricingtable-list">
                  <h4 class="list-title">Key Features:</h4>
                  <ul class="pricingtable-features">
                    <li>Access to all features</li>
                    <li>Assisted onboarding support</li>
                    <li>CPM Overage: Unlimited</li>
                    <li class="disable">Program reviews 1x a month</li>
                    <li class="disable">CPM Overage: Unlimited</li>
                    <li class="disable">Assisted onboarding support</li>
                    <li class="disable">CPM Overage: Unlimited</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="pricingtable-wrapper style-1 bg-light m-b30">
              <div class="pricingtable-inner">
                <div class="pricingtable-title">
                  <h3 class="title">Popular Plan</h3>
                  <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="pricingtable-price">
                  <h2 class="pricingtable-bx">$39<small class="pricingtable-type">/Month</small></h2>
                </div>
                <div class="pricingtable-button">
                  <RouterLink to="/registration" class="btn btn-outline-secondary">Try for free</RouterLink>
                </div>
                <div class="pricingtable-list">
                  <h4 class="list-title">Key Features:</h4>
                  <ul class="pricingtable-features">
                    <li>Access to all features</li>
                    <li>Assisted onboarding support</li>
                    <li>CPM Overage: Unlimited</li>
                    <li>Program reviews 1x a month</li>
                    <li>CPM Overage: Unlimited</li>
                    <li class="disable">Assisted onboarding support</li>
                    <li class="disable">CPM Overage: Unlimited</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="pricingtable-wrapper style-1 bg-light m-b30">
              <div class="pricingtable-inner">
                <div class="pricingtable-title">
                  <h3 class="title">Custom Plan</h3>
                  <p class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div class="pricingtable-price">
                  <h2 class="pricingtable-bx">$69<small class="pricingtable-type">/Month</small></h2>
                </div>
                <div class="pricingtable-button">
                  <RouterLink to="/registration" class="btn btn-outline-secondary">Try for free</RouterLink>
                </div>
                <div class="pricingtable-list">
                  <h4 class="list-title">Key Features:</h4>
                  <ul class="pricingtable-features">
                    <li>Access to all features</li>
                    <li>Assisted onboarding support</li>
                    <li>CPM Overage: Unlimited</li>
                    <li>Program reviews 1x a month</li>
                    <li>CPM Overage: Unlimited</li>
                    <li>Assisted onboarding support</li>
                    <li>CPM Overage: Unlimited</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get In Touch -->
    <section class="content-inner-1 p-t0">
      <div class="container">
        <div class="get-in-touch rounded">
          <div class="m-r100 m-md-r0 m-sm-r0 wow fadeInUp" data-wow-delay="0.1s">
            <h3 class="dz-title mb-lg-0 mb-3">
              Questions ?
              <span>Our experts will help find the grar that’s right for you</span>
            </h3>
          </div>
          <RouterLink to="/contact-us-1" class="btn btn-light wow fadeInUp" data-wow-delay="0.2s">Get In Touch</RouterLink>
        </div>
      </div>
    </section>
    <!-- Get In Touch End -->
  </div>
</template>
