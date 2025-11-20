<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div
      class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center"
      style="width: 342px;"
    >
      <!-- Icon -->
      <div class="flex justify-center mb-5">
        <div class="w-16 h-16 border-2 border-blue-400 rounded-full flex items-center justify-center">
          <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-7a2 2 0 00-2-2h-1V7a5 5 0 00-10 0v3H6a2 2 0 00-2 2v7a2 2 0 002 2z" />
          </svg>
        </div>
      </div>

      <!-- Timer -->
      <p class="text-red-600 text-sm font-medium mb-2">
        Time remaining: {{ timeRemaining }}s
      </p>

      <!-- Title -->
      <p class="text-gray-700 text-sm leading-5 mb-4">
        Enter the code we sent via WhatsApp to<br>
        your mobile number: <span class="font-medium">+91 703*** *****</span>.
      </p>

      <!-- Input -->
      <input
        v-model="message"
        type="text"
        maxlength="6"
        placeholder="Security Code"
        class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mb-4
               focus:ring-2 focus:ring-blue-500 outline-none"
      />

      <!-- Button -->
      <button
        @click="sendMessage"
        class="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
        Confirm
      </button>

      <!-- Result -->
      <p class="text-red-600 text-sm font-medium mt-2">{{ result }}</p>

      <!-- Checkbox -->
      <div class="flex items-start mt-4 gap-2 text-left">
        <input type="checkbox" v-model="trust" class="mt-1 w-4 h-4" />
        <div>
          <p class="font-medium text-sm">Trust this device</p>
          <p class="text-gray-500 text-xs">We won't ask for a code next time</p>
        </div>
      </div>

      <!-- Links -->
      <p class="text-gray-700 text-sm mt-4">Didn't get a security code?</p>
      <a href="#" class="text-blue-600 text-sm font-medium">Send code via SMS instead</a>

      <p class="text-gray-700 text-sm mt-4 leading-5">
        If you're unable to receive a security code,<br>
        use one of your <a href="#" class="text-blue-600">backup codes</a>.
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MessageSender",

  data() {
    return {
      message: "",
      trust: false,
      result: "",
      timer: null,
      timeRemaining: 160,
    };
  },

  methods: {
    async sendMessage() {
      if (this.message.length !== 6) {
        this.result = "OTP must be exactly 6 digits.";
        return;
      }

      if (this.timeRemaining <= 0) {
        this.result = "Time expired! Request a new OTP.";
        return;
      }

      try {
        const res = await axios.post("http://localhost:5000/send-message", {
          message: this.message,
        });

        this.result = res.data.msg ?? "OTP Verified!";
        clearInterval(this.timer);
      } catch (err) {
        this.result = "Error sending OTP.";
      }
    },

    startTimer() {
      this.timer = setInterval(() => {
        if (this.timeRemaining > 0) {
          this.timeRemaining--;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    },
  },

  mounted() {
    this.startTimer();
  },

  beforeUnmount() {
    clearInterval(this.timer);
  },
};
</script>
