<template>
  <div class="vue-tempalte">
    <!-- Navigation -->
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
    >



      <div class="container">
        <a class="navbar-brand float-left"> MovieFamily </a>
        <router-link to="/">Home</router-link>
        <router-link to="/film">Film</router-link>
        <!-- <router-link to="/Profile">Profile</router-link> -->
        <!--<router-link to="/filmdetail">Detail</router-link>-->

        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/login"
              >Sign in</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <!-- Main -->
    <div class="App">
      <div class="app-container">
        <router-view />
      </div>
    </div>

    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><router-link to="/About">About Us</router-link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by MovieFamily
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
* {
  font-family: "Roboto", sans-serif;
}
.app-container {
  width: 100%;
  height: 100%;
}


</style>