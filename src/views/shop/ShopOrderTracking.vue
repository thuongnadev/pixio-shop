<script setup lang="ts"></script>

<template>
  <div class="page-content bg-light">
    <section class="px-3">
      <div class="row align-center-center">
        <div class="col-xxl-6 col-xl-6 col-lg-6 start-side-content">
          <div class="dz-bnr-inr-entry">
            <h1>Order Tracking</h1>
            <nav aria-label="breadcrumb text-align-start" class="breadcrumb-row">
              <ul class="breadcrumb">
                <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
                <li class="breadcrumb-item">Order Tracking</li>
              </ul>
            </nav>
          </div>
          <div class="registration-media">
            <img src="../../assets/images/registration/pic2.png" alt="/" />
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 end-side-content">
          <div class="login-area">
            <h2 class="text-secondary text-center">Track Your Order</h2>
            <p class="text-center m-b30">welcome please login to your account</p>
            <form>
              <div class="m-b30">
                <label class="label-title">Order ID</label>
                <input name="dzName" class="form-control" placeholder="Found in your order confirmation email." type="text" />
              </div>
              <div class="m-b30">
                <label class="label-title">Billing email</label>
                <input name="dzName" class="form-control" placeholder="Email you used during checkout." type="email" />
              </div>
              <div class="text-center">
                <button class="btn btn-secondary btnhover text-uppercase">Track</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
