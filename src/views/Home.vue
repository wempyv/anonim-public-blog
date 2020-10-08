<template>
  <Navbar></Navbar>
  <div class="container">
    <!--Main Menu -->
    <div class="header-menu ">
      <div class="header mt-3">
        <h2 class="header-font">All the stories</h2>
        <p class="light-font caption-header">read stories from everyone</p>
      </div>
    </div>
    <!-- Post Content -->
    <ShowStory></ShowStory>
  </div>
  <Footer></Footer>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ShowStory from "@/components/ShowStory.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    ShowStory
  }
};
</script>
