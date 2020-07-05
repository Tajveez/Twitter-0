<template>
  <div>
    <nav class="flex shadow-md items-center justify-between flex-wrap bg-teal-500 p-6">
      <!-- Trigger/Open The Modal -->

      <a
        @click="openModal()"
        href="#"
        class="flex rounded-full items-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
      >
        <img
          src="https://www.pngitem.com/pimgs/m/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
          alt="Avatar"
          class="w-10 h-10 rounded-full mr-4"
        />
        <div class="text-xl">John doe</div>
        <!-- <img
        src="https://www.pngitem.com/pimgs/m/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
        alt="Avatar"
        class="avatar"
        /> @User1-->
      </a>
      <h1 class="font-mono text-white text-3xl font-bold">Social App</h1>
      <div class="flex">
        <div class="flex" v-if="1 == 2">
          <a
            class="flex rounded-full items-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 text-xl mr-2"
          >
            <i class="fa fa-sign-in mr-2" aria-hidden="true"></i>
            Login
          </a>
          <a
            class="flex rounded-full items-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 text-xl mr-2"
          >
            <i class="fa fa-user-plus mr-2" aria-hidden="true"></i>
            Register
          </a>
        </div>
        <div class="flex" v-else>
          <a
            class="flex rounded-full items-center text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 text-xl mr-2"
          >
            <i class="fa fa-comment-dots mr-2" aria-hidden="true"></i>
            Chat
          </a>
          <PostHeader @update:post="updatePosts" />
        </div>
      </div>
      <!-- <h2>MicroPosts</h2> -->
    </nav>
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <span @click="closeModal()" class="close">&times;</span>
          <h2>Welcome, User</h2>
        </div>
        <div class="modal-body">
          <ul>
            <li>
              <h1>
                <router-link to="/">Home</router-link>
              </h1>
            </li>
            <li>
              <h1>
                <router-link to="/about">About</router-link>
              </h1>
            </li>
            <li>
              <h1>
                <router-link to="/login">Login</router-link>
              </h1>
            </li>
            <li>
              <h1>
                <router-link to="/register">Register</router-link>
              </h1>
            </li>
          </ul>
          <!-- <p>Some text in the Modal Body</p>
          <p>Some other text...</p>-->
        </div>
        <div class="modal-footer">
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostHeader from "@/components/PostHeader";

export default {
  components: {
    PostHeader
  },
  methods: {
    openModal() {
      var modal = document.getElementById("myModal");
      modal.classList.add("show");
    },
    closeModal() {
      var modal = document.getElementById("myModal");
      modal.classList.remove("show");
    }
  }
};
</script>

<style scoped>
/* The Modal (background) */
/* .header {
  background: antiquewhite;
  display: flex;
  padding: 15px;
} */
.modal {
  top: 0;
  /* display: none; */
  position: fixed; /* Stay in place */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  left: -1400px;
  opacity: 0;
  transition: left 0.5s, opacity 0.2s;
  z-index: 1;
}
.modal.show {
  left: 0;
  opacity: 1;
}
/* Modal Content */
.modal-content {
  position: fixed;
  top: 0;
  background-color: #fefefe;
  width: 35%;
  height: 100%;
}

#myBtn {
  background: #72dded;
  border-radius: 50px;
}
/* The Close Button */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #72dded;
  color: white;
}

.modal-body {
  padding: 2px 16px;
}

.modal-footer {
  padding: 2px 16px;
  background-color: #72dded;
  color: white;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
