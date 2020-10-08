<template>
  <div
    class="container d-flex align-items-center justify-content-center min-vh-100"
    v-if="submitted"
  >
    <div class="post-success text-center">
      <img src="../assets/images/success1.svg" class="img-fluid img-success" />
      <p>Your story's been Shared <i class="fa fa-check"></i></p>

      <router-link to="/" class="btn btn-dark mx-2">Home</router-link>
      <a href="#" class="btn btn-light">Donate</a>
    </div>
  </div>

  <div class="container" v-if="!submitted">
    <nav class="navbar navbar-expand-lg navbar-light">
      <!-- Navigasi Bar -->
      <router-link to="/"
        ><img class="navbar-brand" src="../assets/images/icon.svg"
      /></router-link>
    </nav>
    <div class="form-input">
      <!-- Header -->
      <div class="header-menu ">
        <div class="header mt-3">
          <h2 class="header-font">Write your story</h2>
          <p class="light-font caption-header">
            Write your story and share it with them
          </p>
        </div>
      </div>
      <!-- Header -->

      <!-- Form Create Story -->
      <form class="mt-5">
        <div class="section-title">
          <label for="The title of your story">
            The title of your story
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="Input here"
            v-model="blog.title"
            required
          />
        </div>
        <div class="section-your-story mt-4">
          <label for="The title of your story">
            Your story
          </label>
          <textarea
            name=""
            class="form-control"
            rows="10"
            v-model="blog.story"
            placeholder="Example : Don’t overwhelm yourself. To-do lists often fail because we make them way too complex or the tasks are unequal. Some tasks will take a long time others won’t take any time at all. This creates an unbalance in the way we distribute our time. What happens then is that our to-do list then becomes a procrastination tool. Yes ,that’s right. Because then we do the easy stuff, and then become really distracted on the hard stuff"
            required
          ></textarea>
        </div>
        <div class="section-button mt-5 d-flex flex-row-reverse">
          <button v-on:click.prevent="post" class="btn btn-dark ml-2">
            Post Story
          </button>
        </div>
      </form>
      <!-- Form Create Story -->
    </div>
  </div>
  <Footer v-if="!submitted"></Footer>
</template>

<script>
import axios from "axios";
import Footer from "../components/Footer";
export default {
  name: "Write",
  components: {
    Footer
  },
  data() {
    return {
      blog: {
        title: "",
        story: "",
        timestamp: ""
      },
      submitted: false
    };
  },
  methods: {
    post: function() {
      axios
        .post("https://anonim-database.firebaseio.com/posts.json", this.blog)
        .then(data => {
          console.log(data);
          this.submitted = true;
        });
    },
    getTime: function() {
      let currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      this.blog.timestamp = currentDateWithFormat;
    }
  },
  mounted() {
    this.getTime();
  }
};
</script>
