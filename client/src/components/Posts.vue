<template>
  <div class="container">
    <Header />
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="post-container" v-if="posts.length > 0">
      <div class="post" v-for="post in posts" v-bind:key="post._id">
        <p class="text">{{ post.text }}</p>
        <div class="actions">
          <div class="date">
            {{ getDate(post.createdAt) }}
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
import Header from "@/components/Header";
export default {
  name: "Posts",
  components: {
    Header
  },
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
  background: #72dded;
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
