<template>
  <div class="header">
    <!-- Trigger/Open The Modal -->

    <button @click="openModal()" id="myBtn">
      <img src="../assets/logo.png" alt="Avatar" class="avatar" /> @User1
    </button>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>
    <h2>MicroPosts</h2>
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <div class="modal-header">
          <span @click="closeModal()" class="close">&times;</span>
          <h2>Modal Header</h2>
        </div>
        <div class="modal-body">
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
        <div class="modal-footer">
          <h3>Modal Footer</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      var modal = document.getElementById("myModal");
      modal.classList.add("show");
    },
    closeModal() {
      var modal = document.getElementById("myModal");
      modal.classList.remove("show");
    },
  },
};
</script>

<style scoped>
/* The Modal (background) */
.modal {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  left: -300px;
  opacity: 0;
  transition: left 0.4s, opacity 0.4s;
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
  width: 50%;
  height: 100%;
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
