<script setup lang="ts"></script>
<template>
  <div class="page-content bg-light">
    <section class="content-inner main-faq-content">
      <div class="container">
        <div class="row faq-head">
          <div class="col-12 text-center">
            <h1 class="title wow fadeInUp" data-wow-delay="0.1s">Hi! How can we help you?</h1>
            <nav aria-label="breadcrumb" class="breadcrumb-row wow fadeInUp" data-wow-delay="0.2s">
              <ul class="breadcrumb mb-lg-4 mb-3">
                <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
                <li class="breadcrumb-item">Faq’s 1</li>
              </ul>
            </nav>
            <div class="search_widget wow fadeInUp" data-wow-delay="0.3s">
              <form class="dzSearch">
                <div class="form-group">
                  <div class="input-group mb-0">
                    <input name="dzSearch" type="search" class="form-control" placeholder="Search FAQ" />
                    <div class="input-group-addon">
                      <button name="dzSearch" value="search" class="btn">
                        <i class="icon feather icon-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 m-b30 m-sm-b15 wow fadeInUp" data-wow-delay="0.1s">
            <div class="faq-content-box style-1">
              <div>
                <h3 class="dz-title">How can I contact customer support?</h3>
                <p>If your order has not yet shipped, you can contact us to change your shipping address. If your order has already shipped, we may not be able to change the address.</p>
              </div>
              <RouterLink to="/faqs-2" class="faq-link">
                <i class="flaticon-plus"></i>
                Show More
              </RouterLink>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 m-b30 m-sm-b15 wow fadeInUp" data-wow-delay="0.2s">
            <div class="faq-content-box style-1">
              <div>
                <h3 class="dz-title">How can I track my order?</h3>
                <p>Once your order has shipped, you will receive a tracking number via email. You can use this tracking number to track your order on our website or on the carrier's website.</p>
              </div>
              <RouterLink to="/faqs-2" class="faq-link">
                <i class="flaticon-plus"></i>
                Show More
              </RouterLink>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 m-b30 m-sm-b15 wow fadeInUp" data-wow-delay="0.3s">
            <div class="faq-content-box style-1">
              <div>
                <h3 class="dz-title">Can I cancel my order?</h3>
                <p>If your order has not yet shipped, you can cancel it by contacting us. If your order has already shipped, you will need to follow our return policy.</p>
              </div>
              <RouterLink to="/faqs-2" class="faq-link">
                <i class="flaticon-plus"></i>
                Show More
              </RouterLink>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 m-b30 m-sm-b15 wow fadeInUp" data-wow-delay="0.4s">
            <div class="faq-content-box style-1">
              <div>
                <h3 class="dz-title">Do you offer gift wrapping?</h3>
                <p>Yes, we offer gift wrapping for an additional fee. You can select this option during checkout.</p>
              </div>
              <RouterLink to="/faqs-2" class="faq-link">
                <i class="flaticon-plus"></i>
                Show More
              </RouterLink>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 m-b30 m-sm-b15 wow fadeInUp" data-wow-delay="0.5s">
            <div class="faq-content-box style-1">
              <div>
                <h3 class="dz-title">Do you offer international shipping?</h3>
                <p>Yes, we offer international shipping to select countries. Please check our shipping page for more information.</p>
              </div>
              <RouterLink to="/faqs-2" class="faq-link">
                <i class="flaticon-plus"></i>
                Show More
              </RouterLink>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 m-b30 m-sm-b15 wow fadeInUp" data-wow-delay="0.6s">
            <div class="faq-content-box style-1">
              <div>
                <h3 class="dz-title">What is your return policy?</h3>
                <p>We offer a 30-day return policy for most products. If you are not satisfied with your purchase, please contact us for instructions on how to return the item.</p>
              </div>
              <RouterLink to="/faqs-2" class="faq-link">
                <i class="flaticon-plus"></i>
                Show More
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
