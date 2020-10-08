<template>
  <div class="search mt-3">
    <input
      type="text"
      class="form-control"
      v-model="search"
      placeholder="&#xf002; Find a story"
    />
  </div>
  <div class="content-menu mt-5">
    <div class="row">
      <div class="col-md-4 mb-5" v-for="blog in filteredBlogs" :key="blog.id">
        <div class="name-user d-flex">
          <i class="fa fa-user-circle ava px-1 fa-lg "></i>
          <p class="username">Anonim</p>
        </div>
        <div class="title-post">
          <router-link v-bind:to="'/blog/' + blog.id"
            ><p class="title">
              {{ blog.title }}
            </p></router-link
          >
          <p class="post-caption">
            {{ blog.story.slice(0, 150) + " . . ." }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowStory",
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  methods: {},
  created() {
    axios
      .get("https://anonim-database.firebaseio.com/posts.json")
      .then(response => {
        return response.data;
      })
      .then(data => {
        let blogsArray = [];
        for (let key in data) {
          data[key].id = key;
          blogsArray.push(data[key]);
        }
        this.blogs = blogsArray;
      });
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  }
};
</script>
