<template>
  <div>
    <!-- Create New Post -->
    <div class="create-post">
      <!-- <label for="create-post"></label>
      <input
        type="text"
        id="create-post"
        v-model="text"
        maxlength="200"
        @keydown.enter.prevent="newPost()"
        placeholder="Add new post"
      />-->
      <a
        @click.prevent="newPost()"
        class="flex rounded-full items-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 text-xl"
      >
        <i class="fa fa-pencil mr-2" aria-hidden="true"></i>
        Create New
      </a>
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
/* form {
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
} */
</style>