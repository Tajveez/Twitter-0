<template>
  <div>
    <!-- <hr /> -->
    <p class="error" v-if="error">{{ error }}</p>
    <div class="post-container" v-if="posts.length > 0">
      <div
        class="post shadow-xl mb-5 px-5 bg-white-500"
        v-for="post in posts"
        v-bind:key="post._id"
      >
        <div class="flex py-2 ml-2 border-gray rounded">
          <img
            src="https://www.pngitem.com/pimgs/m/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
            alt="Avatar"
            class="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <div class="text-xl">John doe</div>
            <p class="text-xs">{{ getDate(post.createdAt) }}</p>
          </div>
        </div>
        <p class="text">{{ post.text }}</p>
        <div class="actions">
          <div class="date">
            <i @click="deletePost(post._id)" class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
    <div v-else>No Posts Available</div>
  </div>
</template>

<script>
import PostService from "../PostService";

export default {
  name: "Posts",

  data() {
    return {
      posts: [],
      error: "",
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  computed: {},
  methods: {
    getDate(date) {
      const day = date.getDate();
      const month = this.months[date.getMonth()];
      const fullYear = date.getFullYear();

      return `${day}, ${month} ${fullYear}`;
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    },
    async updatePosts() {
      this.posts = await PostService.getPosts();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-container {
  display: block;
  /* padding: 5px; */
}
i {
  color: black;
  margin: 5px;
  cursor: pointer;
}
.error {
  background: #f77272;
  height: auto;
  color: white;
  padding: 10px;
}
.post {
  background: white;
  display: block;
  width: auto;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
}
.text {
  font-size: 22px;
  font-weight: 900;
  text-align: left;
  padding-left: 15px;
}
.actions {
  text-align: right;
  padding-right: 25px;
  font-size: medium;
}
.date {
  color: gray;
}
</style>
