<script setup lang="ts">
import CommonBanner from "@/elements/CommonBanner.vue";
import bg from "@/assets/images/background/bg1.jpg";
import MyAccountSidebar from "@/elements/MyAccountSidebar.vue";
</script>

<template>
  <div class="page-content bg-light">
    <!--Banner Start-->
    <CommonBanner :img="bg" name="Home" title="Order Details" />
    <!--Banner End-->

    <div class="content-inner-1">
      <div class="container">
        <div class="row">
          <MyAccountSidebar />
          <section class="col-xl-9 account-wrapper">
            <div class="account-card order-details">
              <div class="order-head">
                <div class="head-thumb">
                  <img src="../../assets/images/shop/small/pic1.png" alt="" />
                </div>
                <div class="clearfix m-l20">
                  <div class="badge">In Progress</div>
                  <h4 class="mb-0">Order #17493</h4>
                </div>
              </div>
              <div class="row mb-sm-4 mb-2">
                <div class="col-sm-6">
                  <div class="shiping-tracker-detail">
                    <span>Item</span>
                    <h6 class="title">casual shirt</h6>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="shiping-tracker-detail">
                    <span>Courier</span>
                    <h6 class="title">casual shirt</h6>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="shiping-tracker-detail">
                    <span>Start Time</span>
                    <h6 class="title">05 April 2024, 15:43:23</h6>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="shiping-tracker-detail">
                    <span>Address</span>
                    <h6 class="title">Address 451 Wall Street UK, London</h6>
                  </div>
                </div>
              </div>
              <div class="content-btn m-b15">
                <RouterLink to="/shop-wishlist" class="btn btn-secondary me-xl-3 me-2 m-b15 btnhover20">Export Details</RouterLink>
                <RouterLink to="/product-default" class="btn btn-outline-secondary m-b15 me-xl-3 me-2 btnhover20">Request Confirmation</RouterLink>
                <RouterLink to="/account-cancellation-requests" class="btn btn-outline-danger m-b15 btnhover20">Cancel Order</RouterLink>
              </div>
              <div class="clearfix">
                <div class="dz-tabs style-3">
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      class="nav-link active"
                      id="nav-order-history-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-order-history"
                      role="tab"
                      aria-controls="nav-order-history"
                      aria-selected="true"
                    >
                      Order History
                    </button>
                    <button
                      class="nav-link"
                      id="nav-Item-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-Item"
                      role="tab"
                      aria-controls="nav-Item"
                      aria-selected="false"
                    >
                      Item Details
                    </button>
                    <button
                      class="nav-link"
                      id="nav-courier-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-courier"
                      role="tab"
                      aria-controls="nav-courier"
                      aria-selected="false"
                    >
                      Courier
                    </button>
                    <button
                      class="nav-link"
                      id="nav-receiver-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-receiver"
                      role="tab"
                      aria-controls="nav-receiver"
                      aria-selected="false"
                    >
                      Receiver
                    </button>
                  </div>
                </div>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-order-history" role="tabpanel" aria-labelledby="nav-order-history-tab" tabindex="0">
                    <div class="widget-timeline style-1">
                      <ul class="timeline">
                        <li>
                          <div class="timeline-badge success"></div>
                          <div class="timeline-box">
                            <RouterLink class="timeline-panel" to="">
                              <h6 class="mb-0">Product Shiped</h6>
                              <span>08/04/2024 5:23pm</span>
                            </RouterLink>
                            <p><strong>Courier Service : </strong>UPS, R. Gosling</p>
                            <p><strong>Estimated Delivery Date : </strong>09/04/2024</p>
                          </div>
                        </li>
                        <li>
                          <div class="timeline-badge primary"></div>
                          <div class="timeline-box">
                            <RouterLink class="timeline-panel" to="">
                              <h6 class="mb-0">Product Shiped</h6>
                              <span>08/04/2024 5:23pm</span>
                            </RouterLink>
                            <p><strong>Tracking Number : </strong>3409-4216-8759</p>
                            <p><strong>Warehouse : </strong>Top Shirt 12b</p>
                          </div>
                        </li>
                        <li>
                          <div class="timeline-badge"></div>
                          <div class="timeline-box">
                            <RouterLink class="timeline-panel" to="">
                              <h6 class="mb-0">Product Packaging</h6>
                              <span>09/04/2024 4:34pm</span>
                            </RouterLink>
                          </div>
                        </li>
                        <li>
                          <div class="timeline-badge"></div>
                          <div class="timeline-box">
                            <RouterLink class="timeline-panel" to="">
                              <h6 class="mb-0">Order Palced</h6>
                              <span>10/04/2024 2:36pm</span>
                            </RouterLink>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="nav-Item" role="tabpanel" aria-labelledby="nav-Item-tab" tabindex="0">
                    <h5>Item Details</h5>
                    <div class="tracking-item">
                      <div class="tracking-product"><img src="../../assets/images/shop/small/pic1.png" alt="" /></div>
                      <div class="tracking-product-content">
                        <h6 class="title">Collar Casual Shirt</h6>
                        <small class="d-block"><strong>Price</strong> : $150</small>
                        <small class="d-block"><strong>Size</strong> : Xl</small>
                      </div>
                    </div>
                    <div class="tracking-item-content">
                      <span>Total Price</span>
                      <h6>+ $150</h6>
                    </div>
                    <div class="tracking-item-content border-bottom border-light mb-2">
                      <span class="text-success">Total Discounts</span>
                      <h6>- $55</h6>
                    </div>
                    <div class="tracking-item-content">
                      <span>Order Total</span>
                      <h6>$95</h6>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="nav-courier" role="tabpanel" aria-labelledby="nav-courier-tab" tabindex="0">
                    <p>
                      Commyolk Suspendisse et justo. Praesent mattis augue Aliquam ornare hendrerit augue Cras tellus In pulvinar lectus a est
                      Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent
                      mattis commyolk augue aliquam ornare.
                    </p>
                  </div>
                  <div class="tab-pane fade" id="nav-receiver" role="tabpanel" aria-labelledby="nav-receiver-tab" tabindex="0">
                    <h5 class="text-success mb-4">Thank you Your order has been received</h5>
                    <ul class="tracking-receiver">
                      <li>Order Number : <strong>#17493</strong></li>
                      <li>Date : <strong>17/04/2024, 02:34pm</strong></li>
                      <li>Total : <strong>$95</strong></li>
                      <li>Payment Methods : <strong>Cash on Delivery</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
