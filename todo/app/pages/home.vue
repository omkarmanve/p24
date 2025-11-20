<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="w-full max-w-md bg-white p-10 rounded-2xl shadow-md border border-gray-200">

      <!-- Heading -->
      <h2 class="text-3xl font-semibold text-gray-800 text-center">
        Login
      </h2>

      <!-- Email -->
      <div class="space-y-1 mt-6">
        <label class="font-medium text-gray-700">Email</label>
        <input
          type="email"
          v-model="email"
          placeholder="Enter your email"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Password -->
      <div class="space-y-1 mt-4">
        <label class="font-medium text-gray-700">Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Enter your password"
          class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <!-- Login Button -->
      <button
        @click="loginUser"
        class="w-full py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition mt-6"
      >
        Login
      </button>

      <!-- OR divider -->
      <div class="flex items-center my-6">
        <div class="flex-1 h-px bg-gray-300"></div>
        <span class="px-3 text-gray-500 text-sm">OR</span>
        <div class="flex-1 h-px bg-gray-300"></div>
      </div>

      <!-- Social Icons Only -->
      <div class="flex justify-center gap-6">

        <!-- GitHub Icon -->
        <button
          @click="signupWithGithub"
          class="w-14 h-14 bg-black rounded-full flex items-center justify-center hover:opacity-85 transition"
        >
        <img src="/github-6980894_640.webp" class="w-7 h-7" />

        </button>

        <!-- Instagram Icon -->
        <button
          @click="signupWithInstagram"
          class="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-pink-500 to-yellow-500 hover:opacity-85 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            class="w-7 h-7"
          />
        </button>
        <!-- Google Icon -->
<button
  @click="signupWithGoogle"
  class="w-14 h-14 rounded-full flex items-center justify-center bg-white border hover:bg-gray-100 transition"
>
<img
  src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
  class="w-7 h-7"
/>

</button>


      </div>

      <!-- Signup Link -->
      <p class="text-center text-gray-600 mt-6">
        Don’t have an account?
        <span
          class="text-blue-600 font-medium cursor-pointer hover:underline"
          @click="goToSignup"
        >
          Sign up
        </span>
      </p>

    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

function loginUser() {
  if (!email.value || !password.value) {
    alert("Please enter both email and password.");
    return;
  }

  console.log("Logged in with:", email.value, password.value);
  router.push("/dashboard");
}

function signupWithGithub() {
  console.log("GitHub signup");
  router.push("/oauth-github");
}

function signupWithInstagram() {
  console.log("Instagram signup");
  router.push("/about");
}

function signupWithGoogle() {
  console.log("Google signup");
  router.push("/oauth-google");
}

function goToSignup() {
  router.push("/signup");
}
</script>
