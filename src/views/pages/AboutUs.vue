<script setup lang="ts">
import CountUp from "vue-countup-v3";
</script>
<template>
  <div class="page-content bg-light">
    <section class="dz-bnr-inr dz-bnr-inr-sm bg-light">
      <div class="container">
        <div class="dz-bnr-inr-entry">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-7">
              <div class="text-start mb-xl-0 mb-4">
                <h1>Your Fashion Journey Starts Here Discover Style at Pixio</h1>
                <nav aria-label="breadcrumb" class="breadcrumb-row">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
                    <li class="breadcrumb-item">About us</li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="col-lg-5 col-md-5">
              <div class="about-sale text-start">
                <div class="row">
                  <div class="col-lg-5 col-md-6 col-6">
                    <div class="about-content">
                      <h2 class="title d-flex align-item-center">
                        <span class="counter"><CountUp :start-val="0" :end-val="50" :duration="50" /></span>+
                      </h2>
                      <p class="text">Items Sale</p>
                    </div>
                  </div>
                  <div class="col-lg-5 col-md-6 col-6">
                    <div class="about-content">
                      <h2 class="title">400%</h2>
                      <p class="text">Return on investment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="about-banner overflow-visible">
      <video autoplay loop muted id="video-background">
        <source src="../../assets/images/background/bg-video.mp4" type="video/mp4" />
      </video>
      <div class="about-info">
        <h3 class="dz-title">
          <RouterLink to="/about-me">why Pixio ?</RouterLink>
        </h3>
        <p class="text mb-0">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web page editors now use
        </p>
      </div>
    </section>

    <!--Our Mission Section-->
    <section class="content-inner">
      <div class="container">
        <div class="row about-style2 align-items-xl-center align-items-start">
          <div class="col-lg-6 col-lg-5 col-sm-5 m-b30 sticky-top">
            <div class="about-thumb">
              <img src="../../assets/images/men.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-7 col-sm-7">
            <div class="about-content">
              <div class="section-head style-2 d-block">
                <h3 class="title w-100">Elevate Your Style: A Unique Fashion Experience at Pixio</h3>
                <p>
                  At Untouch, we're dedicated to creating an exclusive fashion destination that transcends the ordinary. Our passion for style,
                  quality, and individuality drives our mission. Our collection is a carefully curated blend of timeless classics and the latest
                  trends,
                </p>
                <p>
                  In addition to our extensive collection, we're equally devoted to ensuring your shopping experience is seamless and enjoyable. Our
                  website is designed with your convenience in mind, offering secure transactions and a responsive customer support team to assist you
                  every step of the way.
                </p>
              </div>
              <div class="about-bx-detail">
                <div class="about-bx-pic radius">
                  <img src="../../assets/images/testimonial/testimonial4.jpg" alt="" />
                </div>
                <div>
                  <h6 class="name">Kenneth Fong</h6>
                  <span class="position">Ceo and founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get In Touch -->
    <section class="get-in-touch">
      <div class="m-r100 m-md-r0 m-sm-r0">
        <h3 class="dz-title mb-lg-0 mb-3">
          Questions ?
          <span>Our experts will help find the grar that’s right for you</span>
        </h3>
      </div>
      <RouterLink to="/contact-us-1" class="btn btn-light">Get In Touch</RouterLink>
    </section>
    <!-- Get In Touch End -->

    <section class="content-inner">
      <div class="container">
        <div class="row g-3 g-xl-4">
          <div class="col-xl-6 col-lg-8 col-md-12 col-sm-12 wow fadeInUp" data-wow-delay="0.1s">
            <div class="section-head">
              <h2 class="title">Meet our team of creators, designers, and world-class problem solvers</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                humour, or randomised words.
              </p>
              <RouterLink class="btn btn-secondary me-3" to="/registration">Join Our Team</RouterLink>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.2s">
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <RouterLink to=""><img src="../../assets/images/team/pic1.jpg" alt="" /></RouterLink>
                <ul class="team-social-icon">
                  <li>
                    <RouterLink to="https://www.facebook.com/dexignzone" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/https://twitter.com/dexignzone" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.instagram.com/dexignzone/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.linkedin.com/in/dexignzone/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/our-team">John Doe</RouterLink></h5>
                <span>CEO & Founder</span>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <RouterLink to=""><img src="../../assets/images/team/pic2.jpg" alt="" /></RouterLink>
                <ul class="team-social-icon">
                  <li>
                    <RouterLink to="https://www.facebook.com/dexignzone" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/https://twitter.com/dexignzone" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.instagram.com/dexignzone/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.linkedin.com/in/dexignzone/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/our-team">Ivan Mathews</RouterLink></h5>
                <span>iOS Developer</span>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.4s">
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <RouterLink to=""><img src="../../assets/images/team/pic3.jpg" alt="" /></RouterLink>
                <ul class="team-social-icon">
                  <li>
                    <RouterLink to="https://www.facebook.com/dexignzone" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/https://twitter.com/dexignzone" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.instagram.com/dexignzone/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.linkedin.com/in/dexignzone/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/our-team">Macauley Herring </RouterLink></h5>
                <span>Customer Success</span>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <RouterLink to=""><img src="../../assets/images/team/pic4.jpg" alt="" /></RouterLink>
                <ul class="team-social-icon">
                  <li>
                    <RouterLink to="https://www.facebook.com/dexignzone" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/https://twitter.com/dexignzone" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.instagram.com/dexignzone/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.linkedin.com/in/dexignzone/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/our-team">Alya Levine</RouterLink></h5>
                <span>CTO </span>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.6s">
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <RouterLink to=""><img src="../../assets/images/team/pic5.jpg" alt="" /></RouterLink>
                <ul class="team-social-icon">
                  <li>
                    <RouterLink to="https://www.facebook.com/dexignzone" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/https://twitter.com/dexignzone" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.instagram.com/dexignzone/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.linkedin.com/in/dexignzone/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/our-team">Rose Hernandez </RouterLink></h5>
                <span>Backend Developer</span>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-4 col-sm-4 col-6 wow fadeInUp" data-wow-delay="0.7s">
            <div class="dz-team style-1 m-md-b0 m-sm-b0 m-b30">
              <div class="dz-media">
                <RouterLink to=""><img src="../../assets/images/team/pic6.jpg" alt="" /></RouterLink>
                <ul class="team-social-icon">
                  <li>
                    <RouterLink to="https://www.facebook.com/dexignzone" target="_blank"><i class="fab fa-facebook-f"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/https://twitter.com/dexignzone" target="_blank"><i class="fab fa-twitter"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.instagram.com/dexignzone/" target="_blank"><i class="fab fa-instagram"></i></RouterLink>
                  </li>
                  <li>
                    <RouterLink to="https://www.linkedin.com/in/dexignzone/" target="_blank"><i class="fa-brands fa-linkedin-in"></i></RouterLink>
                  </li>
                </ul>
              </div>
              <div class="dz-content">
                <h5 class="title"><RouterLink to="/our-team">Elen Benitez </RouterLink></h5>
                <span>Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
