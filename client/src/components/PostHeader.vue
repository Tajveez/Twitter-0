<template>
  <div>
    <!-- Create New Post -->
    <div id="popupmodal" class="creat-post-modal modal-overlay">
      <div class="modal-content">
        <label class="text-2xl float-left" for="create-post">Create a new post</label>
        <textarea
          class="w-full h-32 mt-2 mb-2 p-2 border border-black-500 bg-gray-300"
          style="resize:none"
          id="create-post"
          v-model="text"
          maxlength="200"
          @keydown.enter.prevent="newPost()"
          placeholder="Write your Post content here"
        />
        <div style="text-align:right" class="mt-2">
          <a
            @click.prevent="newPost()"
            class="mr-2 cursor-pointer rounded-full text-sm leading-none px-4 py-2 border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500 mt-4 lg:mt-0 text-xl"
          >
            <!-- <i class="fa fa-pencil mr-2" aria-hidden="true"></i> -->
            Post
          </a>
          <a
            @click.prevent="closeModal()"
            class="rounded-full cursor-pointer text-sm leading-none px-4 py-2 border rounded text-teal-500 border-teal-500 hover:border-transparent hover:text-white hover:bg-teal-500 mt-4 lg:mt-0 text-xl"
          >Close</a>
        </div>
      </div>
    </div>
    <div class="create-post">
      <a
        @click.prevent="openModal()"
        class="flex rounded-full items-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 text-xl cursor-pointer"
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
      this.closeModal();
    },
    openModal() {
      var modal = document.getElementById("popupmodal");
      console.log("hello");
      modal.classList.add("show");
    },
    closeModal() {
      var modal = document.getElementById("popupmodal");
      modal.classList.remove("show");
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
.creat-post-modal {
  top: -1400px;
  position: fixed; /* Stay in place */
  overflow-y: hidden; /* Enable scroll if needed */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  opacity: 0;
  left: 0;
  transition: top 0.2s, opacity 0.2s;
  z-index: 1;
}
.modal-overlay {
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.creat-post-modal.show {
  top: 0;
  opacity: 1;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
</style>