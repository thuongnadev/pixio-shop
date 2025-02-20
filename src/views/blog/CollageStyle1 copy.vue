<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import { IMAGES } from "@/constent/Them";

const addActive = ref("All");
const hasMounted = ref(false);
const products = reactive([
  {
    className: "card-container m-b30 All Tops Jacket",
    img: IMAGES.profile1_pic1,
    title: "Satin Wrap Party Blouse",
    badge: "Party Blouse",
    tags: "All Tops",
  },
  {
    className: "card-container m-b30 All Outerwear Formal-wear",
    img: IMAGES.profile1_pic2,
    title: "Comfy Lounge Jogger Pants",
    badge: "Jogger Pants",
    tags: "All Outerwear Formal wear",
  },
  {
    className: "card-container m-b30 All Dresses",
    img: IMAGES.profile1_pic3,
    title: "Hiking Outdoor Gear Collection",
    badge: "Gear Collection",
    tags: "All  Dresses",
  },
  {
    className: "card-container m-b30 All Dresses Formal-wear",
    img: IMAGES.profile1_pic4,
    title: "Vintage Denim Overalls Shorts",
    badge: "Overalls ",
    tags: "All Tops ",
  },
  {
    className: "card-container m-b30 All Tops Jacket",
    img: IMAGES.profile1_pic5,
    title: "Plaid Wool Winter Coat",
    badge: "Winter Coat",
    tags: "All Outerwear Jacket Formal wear",
  },
  {
    className: "card-container m-b30 All Tops",
    img: IMAGES.profile1_pic6,
    title: "Plaid Wool Winter Coat",
    badge: "Winter Coat",
    tags: "All Outerwear Jacket Formal wear",
  },
  {
    className: "card-container m-b30 All Outerwear",
    img: IMAGES.profile2_pic7,
    title: "Athletic Mesh Sports Leggings",
    badge: "Leggings",
    tags: "All Dresses Jacket",
  },
]);

const buttons = [{ title: "All" }, { title: "Dresses" }, { title: "Tops" }, { title: "Outerwear" }, { title: "Jacket" }];

const productData = ref(products);

const filterHandler = (category: string) => {
  const filtered = products.filter((el) => el.tags.includes(category));
  productData.value = filtered;
  addActive.value = category;
};

onMounted(() => {
  hasMounted.value = true;
});
</script>

<template>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Collage Style 1" />
    <!--Banner End-->

    <section class="content-inner pt-0 z-index-unset">
      <div class="site-filters style-2 clearfix center">
        <ul class="filters" data-bs-toggle="buttons">
          <li :class="`btn ${addActive == title ? 'active' : ''}`" v-for="({ title }, ind) in buttons" :key="ind" @click="filterHandler(title)">
            <RouterLink to="">{{ title }}</RouterLink>
          </li>
        </ul>
      </div>
      <div class="container">
        <div class="clearfix">
          <ul id="masonry" class="grid row" data-isotope='{ "itemSelector": ".card-container", "masonry": { "columnWidth": 200 } }'>
            <li class="card-container m-b30 All Tops Jacket">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio2/pic1.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Party Blouse</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-1">Satin Wrap Party Blouse</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container m-b30 All Tops">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio2/pic6.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Stylish</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-1">Stylish Fedora Hat Collection</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container m-b30 All Outerwear Formal-wear">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio2/pic2.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Winter Coat</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-2">Plaid Wool Winter Coat</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container m-b30 All Dresses Formal-wear">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio2/pic4.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Suit</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-4">Sophisticated Swagger Suit</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container m-b30 All Tops Jacket">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio2/pic5.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Shorts</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-5">Vintage Denim Overalls Shorts</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container m-b30 All Dresses">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio2/pic3.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Gear Collection</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-3">Hiking Outdoor Gear Collection</RouterLink></h4>
                </div>
              </div>
            </li>
            <li class="card-container m-b30 All Outerwear">
              <div class="portfolio-box style-2">
                <div class="dz-media">
                  <RouterLink to="/portfolio-details-1">
                    <img src="../../assets/images/portfolio/portfolio2/pic7.jpg" alt="/" />
                  </RouterLink>
                </div>
                <div class="dz-content">
                  <div class="product-tag">
                    <RouterLink to="/portfolio-details-1">
                      <span class="badge badge-secondary">Coat</span>
                    </RouterLink>
                  </div>
                  <h4 class="title"><RouterLink to="/portfolio-details-2">Plaid Wool Winter Coat</RouterLink></h4>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
