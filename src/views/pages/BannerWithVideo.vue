<script setup lang="ts"></script>
<template>
  <div class="page-content bg-light">
    <!--banner-->
    <div class="dz-bnr-inr bg-secondary overlay-black-light">
      <video autoplay loop muted id="video-background">
        <source src="../../assets/images/background/bg-video.mp4" type="video/mp4" />
      </video>
      <div class="container">
        <div class="dz-bnr-inr-entry">
          <h1>Banner With Video</h1>
          <nav aria-label="breadcrumb" class="breadcrumb-row">
            <ul class="breadcrumb">
              <li class="breadcrumb-item"><RouterLink to="/"> Home</RouterLink></li>
              <li class="breadcrumb-item">Banner With Video</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

    <section class="content-inner">
      <div class="container">
        <div class="row about-style2 align-items-center">
          <div class="col-lg-6 col-md-12 col-sm-12 m-b30">
            <div class="about-thumb">
              <img src="../../assets/images/men.png" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 m-b30">
            <div class="about-content">
              <div class="section-head style-1 d-block">
                <h3 class="title">About Pixio Our Story and Mission in Ecommerce</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle of text.
                </p>
                <p>
                  All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator
                  on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate
                  Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
                  non-characteristic words etc.
                </p>
              </div>
              <div class="about-bx-detail">
                <div class="about-bx-pic radius">
                  <img src="../../assets/images/testimonial/testimonial4.jpg" alt="" />
                </div>
                <div>
                  <h6 class="name">Kenneth Fong</h6>
                  <span class="position">Postgraduate Student</span>
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
