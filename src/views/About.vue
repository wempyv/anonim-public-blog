<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="about">
      <!-- Main -->
      <div class="main mt-5">
        <div class="row align-items-center">
          <div class="col-md-6">
            <img
              src="../assets/images/ilustrator.svg"
              height="420"
              class="img-fluid"
            />
          </div>
          <div class="col-md-6 hero-main d-flex flex-column mt-5 ">
            <p class="font-header"><strong>A</strong>nonim</p>
            <p class="hero-caption">
              Anonim is a public blog that allows users to share stories. Users
              can share their stories without publishing their identity. Now
              Anonim now in the beta version where
              <a href="https://wempyv.github.io/">Wempy Virgana</a> as developer
              will continue to update on another feature to add
            </p>
          </div>
        </div>
      </div>
      <!-- Main -->
    </div>

    <div class="about-developer py-5 mt-5 text-center">
      <h2>Meet the developer</h2>
      <div class="about">
        <img
          src="../assets/images/ava.jpg"
          class="img-fluid mt-5 ava-developer"
          alt=""
        />
        <p class="name-developer">Wempy Virgana</p>
        <p class="job-developer">a Student & Web Developer</p>

        <div class="button-sosmed mt-5">
          <a
            href="https://www.instagram.com/wvirgana/"
            class="btn btn-info mx-2"
          >
            <i class="fa fa-instagram"></i> Instagram</a
          >
          <a href="https://github.com/wempyv" class="btn btn-dark"
            ><i class="fa fa-github"></i> Github</a
          >
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "About",
  components: {
    Navbar,
    Footer
  }
};
</script>
