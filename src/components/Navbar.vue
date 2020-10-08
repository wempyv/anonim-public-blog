<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <!-- Navigasi Bar -->
      <router-link to="/"
        ><img src="../assets/images/icon.svg" class="navbar-brand" alt=""
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link to="/" class="nav-link light-font">Home</router-link>
          <router-link to="/about-us" class="nav-link light-font" href="#"
            >About us</router-link
          >
          <router-link to="/write" href="" class="btn btn-primary"
            >Write Something</router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style></style>
