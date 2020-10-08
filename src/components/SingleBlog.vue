<template>
  <Navbar></Navbar>
  <div class="container">
    <div class="main mt-4">
      <div class="title">
        <p class="text-center">{{ blog.title }}</p>
      </div>
      <div class="anonim-profile d-flex mt-4">
        <div class="ava d-flex align-items-center">
          <i class="fa fa-user-circle ava px-1 fa-2x "></i>
        </div>
        <div class="ava-profile">
          <p class="name-anonim">Anonim</p>
          <p class="anonim-date">{{ blog.timestamp }}</p>
        </div>
      </div>
      <div class="story mt-4">
        <p>{{ blog.story }}</p>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "SingleBlog",
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      id: this.$route.params.id,
      blog: {}
    };
  },
  created() {
    axios
      .get("https://anonim-database.firebaseio.com/posts/" + this.id + ".json")
      .then(response => {
        return response.data;
      })
      .then(data => {
        this.blog = data;
      });
  }
};
</script>
