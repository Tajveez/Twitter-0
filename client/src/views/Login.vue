<template>
  <div class="w-1/2 p-5 m-auto">
    <form method="post" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="mb-4 text-4xl">Login</h1>
      <div>
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
        <div class="text-right mt-2">
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember me
          </label>
        </div>
      </div>
      <div class="flex items-center justify-between">
        <span class="psw">
          <a
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >Forgot password?</a>
        </span>
        <div>
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