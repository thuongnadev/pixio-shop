<script lang="ts" setup>
import { IMAGES } from "@/constent/Them";
import ProductRelaited from "@/elements/ProductRelaited.vue";
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const gallery = [
  { img: IMAGES.portfolio_detail5Pic1 },
  { img: IMAGES.portfolio_detail5Pic2 },
  { img: IMAGES.portfolio_detail5Pic3 },
  { img: IMAGES.portfolio_detail5Pic4 },
];
const gallery2 = [{ img: IMAGES.portfolio_detail5Pic5 }, { img: IMAGES.portfolio_detail5Pic6 }, { img: IMAGES.portfolio_detail5Pic7 }];
</script>

<template>
  <div class="page-content bg-light">
    <!--banner-->
    <div class="dz-bnr-inr">
      <div class="container">
        <div class="dz-bnr-inr-entry section-detail text-start">
          <div class="row">
            <div class="col-xl-6">
              <div class="dz-content">
                <div class="product-tag">
                  <RouterLink to="/portfolio-details-1">
                    <span class="badge badge-primary">fashion</span>
                  </RouterLink>
                </div>
                <h2 class="title">Make your fashion look mire charming</h2>
              </div>
            </div>
            <div class="col-xl-6">
              <div class="detail-list-box style-3">
                <ul>
                  <li>
                    <span class="title">Client</span>
                    <span>Martin Stewart</span>
                  </li>
                  <li>
                    <span class="title">Seatpad</span>
                    <span>100% Polyester</span>
                  </li>
                  <li>
                    <span class="title">Location</span>
                    <span>London, UK</span>
                  </li>
                  <li>
                    <span class="title">Shipping</span>
                    <span>Free Shipping</span>
                  </li>
                  <li>
                    <span class="title">Category</span>
                    <span>Child Trolly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Lightgallery :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom], selector: '.lg-item' }" class="content-inner pt-0" id="lightgallery">
      <div class="container-fluid">
        <div class="row">
          <div class="col-xl-3 col-md-3 col-sm-4 col-6 m-b30" v-for="({ img }, ind) in gallery" :key="ind">
            <div class="dz-box portfolio-bx style-1">
              <div class="dz-media rounded">
                <a class="mfp-link lg-item" :href="img" :data-src="img">
                  <i class="feather icon-maximize dz-maximize top-right"></i>
                  <img :src="img" alt="image" class="d-none" />
                </a>
                <img :src="img" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Lightgallery>
    <section class="content-inner-1 about-section-detail bg-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6 col-md-6">
            <div class="dz-detail-box border-0 p-0">
              <h2>Research & Planning</h2>
              <p class="m-b30 m-lg-b20">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>

              <p class="mb-xl-0">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                making it look like readable English.
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-md-6 sticky-top">
            <div class="dz-media rounded">
              <img src="../../assets/images/portfolio/details/portfolio-detail-3/about1.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Lightgallery :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom], selector: '.lg-item' }" class="content-inner-2" id="lightgallery2">
      <div class="container">
        <div class="row">
          <div :class="`col-xl-4 col-md-4 m-b30 ${inde == 2 ? '' : 'col-md-4 col-sm-6'}`" v-for="({ img }, inde) in gallery2" :key="inde">
            <div class="dz-box portfolio-bx style-1">
              <div class="dz-media rounded">
                <a class="mfp-link lg-item" :href="img" :data-src="img">
                  <i class="feather icon-maximize dz-maximize top-right"></i>
                  <img :src="img" alt="image" class="d-none" />
                </a>
                <img :src="img" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Lightgallery>

    <!-- Post Pagination -->
    <section class="content-inner pb-0">
      <div class="container">
        <div class="row">
          <div class="col-xl-12">
            <div class="post-pagination style-1">
              <div class="post-prev">
                <RouterLink to="/portfolio-details-5" class="post-inner">
                  <div class="inner-icon">
                    <i class="icon feather icon-chevron-left"></i>
                  </div>
                  <div class="dz-media me-3">
                    <img src="../../assets/images/portfolio/details/portfolio-detail-1/post-pagination/post-1.jpg" alt="" />
                  </div>
                  <div class="dz-info m-0">
                    <span>Swagger</span>
                    <h6 class="m-b0">Sophisticated Swagger Suit</h6>
                  </div>
                </RouterLink>
              </div>
              <div class="post-next">
                <RouterLink to="/portfolio-details-2" class="post-inner">
                  <div class="dz-info">
                    <span>Sweater</span>
                    <h6 class="m-b0">Cozy Knit Cardigan Sweater</h6>
                  </div>
                  <div class="dz-media">
                    <img src="../../assets/images/portfolio/details/portfolio-detail-1/post-pagination/post-2.jpg" alt="" />
                  </div>
                  <div class="inner-icon">
                    <i class="icon feather icon-chevron-right"></i>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="content-inner-1 overflow-hidden releted-portfolio">
      <div class="container">
        <div class="section-head style-2">
          <div class="left-content">
            <h2 class="title mb-0">Related Projects</h2>
          </div>
        </div>
        <ProductRelaited />
      </div>
    </section>
  </div>
</template>
