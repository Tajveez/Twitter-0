<template>
  <div class="w-1/2 p-5 m-auto">
    <form method="post" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="mb-4 text-4xl">Register</h1>
      <!-- <div class="imgcontainer">
        <img
          src="https://www.pngitem.com/pimgs/m/506-5067022_sweet-shap-profile-placeholder-hd-png-download.png"
          alt="Avatar"
          class="avatar"
        />
      </div>-->

      <div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block tracking-wide text-gray-700 text-sm font-bold mb-2"
              for="grid-first-name"
            >First Name</label>
            <input
              class="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Han"
            />
            <!-- <p class="text-red-500 text-xs italic">Please fill out this field.</p> -->
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block tracking-wide text-gray-700 text-sm font-bold mb-2"
              for="grid-last-name"
            >Last Name</label>
            <input
              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="uname">
            <b>Username</b>
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="uname">
            <b>Email</b>
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Enter Email"
            name="uname"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="psw">
            <b>Password</b>
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="psw">
            <b>Confirm Password</b>
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Enter Password Again"
            name="psw"
            required
          />
        </div>
        <!-- <div class="text-right mt-2">
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>
        </div>-->
      </div>
      <div class="flex items-center justify-center">
        <!-- <span class="psw">
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >Forgot password?</a>
        </span>-->
        <div class="mb-4 ml-auto">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold mr-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >Login</button>
          <button
            class="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >Sign up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>