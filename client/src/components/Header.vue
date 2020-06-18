<template>
  <div class="container">
    <h2>MicroPosts</h2>
    <!-- Create New Post -->
    <div class="create-post">
      <label for="create-post"></label>
      <input
        type="text"
        id="create-post"
        v-model="text"
        maxlength="200"
        @keydown.enter.prevent="newPost()"
        placeholder="Add new post"
      />
      <button @click.prevent="newPost()" class="submit">Create</button>
    </div>
  </div>
</template>

<script>
import PostService from "../PostService";

export default {
  name: "Header",
  data() {
    return {
      text: ""
    };
  },
  computed: {},
  methods: {
    async newPost() {
      if (this.text === "") {
        this.error = "Input must not be empty";
        setTimeout(() => {
          this.error = "";
        }, 3500);
      } else {
        PostService.createPost(this.text);
        this.$emit("update:post");
        this.text = "";
      }
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #72dded;
  width: 70%;
}

button[class="submit"] {
  flex: 2;
  background: #72dded;
  color: #fff;
  border: 1px #72dded solid;
  cursor: pointer;
  height: 35px;
}
</style>