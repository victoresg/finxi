<template>
  <footer class="footer d-none d-md-block">
    <div class="row no-gutters">
      <div class="col-md-6 d-flex justify-content-center">
        <div class="d-flex flex-column justify-content-center mr-5">
          <ul class="footer-list d-flex flex-row pl-5 pr-5">
            <li class="mr-3">
              Pricing
            </li>
            <li class="mr-3">
              Blog
            </li>
            <li class="mr-3">
              Webinars
            </li>
            <li class="mr-3">
              Events
            </li>
            <li class="mr-3">
              Help Canter 
            </li>
          </ul>
          <p class="copy-right pl-5 pr-5">© Copyright 2020</p>
        </div>
      </div>
      <div class="col-md-6 d-flex justify-content-center">
        <div class="pl-5 pt-5 pb-5">
          <div class="d-flex flex-row">
            <p class="ml-5">Terms and Conditions</p>
            <p class="ml-3">Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  .footer {
    position: absolute;
    bottom: 0;
    background-color: #42b983;
    width: 100%;
    &-list {
    color: #ffff;
      list-style: none;
      padding-inline-start: 0px;
      li {
        border-right: 1px solid #ffff;
        padding-right: 15px;
      }
      li:nth-child(5) {
        border: none;
      }
    }
    .copy-right {
      color: #ffffff;
    }
    p {
      color: #ffff;
    }
    p:nth-child(1) {
      border-right: 1px solid #ffff;
      padding-right: 1rem;
    }
  }
</style>