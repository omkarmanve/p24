<template>
  <div class="max-w-xl mx-auto mt-10 p-10 rounded-2xl shadow-md border border-gray-200 space-y-8"
       style="background: linear-gradient(#f2f8f8, #e7f1f1);">

    <h2 class="text-3xl font-semibold text-gray-800 text-center">Candidate Information Form</h2>
    <p class="text-gray-500 text-center -mt-4">Fill all the details below & Verify the account</p>

    <!-- Name -->
    <div class="space-y-1">
      <label class="text-gray-700 font-medium">Full Name</label>
      <input
        type="text"
        v-model="form.name"
        placeholder="Enter your full name"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50"/>
    </div>

    <!-- Email -->
    <div class="space-y-1">
      <label class="text-gray-700 font-medium">Email ID</label>
      <input
        type="email"
        v-model="form.email"
        placeholder="Enter your email"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50"/>
    </div>

    <!-- Graduation -->
    <div class="space-y-1">
      <label class="text-gray-700 font-medium">Graduation</label>
      <input
        type="text"
        v-model="form.graduation"
        placeholder="Your graduation degree (e.g., B.Sc, B.Com)"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50"/>
    </div>

    <!-- UG Percentage -->
    <div class="space-y-1">
      <label class="text-gray-700 font-medium">UG Degree Percentage</label>
      <input
        type="number"
        v-model="form.ug"
        placeholder="Enter UG percentage"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50"/>
    </div>

    <!-- PG Degree -->
    <div class="space-y-1">
      <label class="text-gray-700 font-medium">PG Degree</label>
      <select
        v-model="form.pgDegree"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50">
        <option value="">Select PG Degree</option>
        <option value="MTech">M.Tech</option>
        <option value="MCA">MCA</option>
      </select>
    </div>

    <!-- PG Percentage -->
    <div class="space-y-1">
      <label class="text-gray-700 font-medium">PG Percentage</label>
      <input
        type="number"
        v-model="form.pg"
        placeholder="Enter PG percentage"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50"/>
    </div>

    <!-- Contact Number -->
    <div class="space-y-1">
      <label class="text-gray-700 font-medium">Contact Number</label>
      <input
        type="tel"
        v-model="form.contact"
        placeholder="Enter your contact number"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50"/>
    </div>

    <!-- Interview Date -->
    <div class="space-y-1">
      <label class="text-gray-700 font-medium">Interview Date</label>
      <input
        type="date"
        v-model="form.interviewDate"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50"/>
    </div>

    <!-- Interview Time -->
    <div class="space-y-1">
      <label class="text-gray-700 font-medium">Interview Time</label>
      <input
        type="time"
        v-model="form.interviewTime"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 bg-gray-50"/>
    </div>

    <!-- Resume Upload -->
    <div class="space-y-1">
      <label class="text-gray-700 font-medium">Upload Resume</label>
      <input
        type="file"
        @change="handleFileUpload"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"/>
    </div>

    <!-- Submit -->
     <p class="text-center text-red-600 font-medium">
  Please verify your account before submitting the form.
</p>
  <!-- Verify Button -->
<button
  @click="verifyAccount"
  class="w-full py-3 bg-green-600 text-white rounded-lg text-lg font-medium hover:bg-green-700 transition">
  Verify Account
</button>

  </div>
</template>
<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  graduation: "",
  ug: "",
  pg: "",
  contact: "",
  pgDegree: "",
  resume: null,
  interviewDate: "",
  interviewTime: "",
});

function handleFileUpload(event) {
  form.value.resume = event.target.files[0];
}

function submitForm() {
  if (
    !form.value.name ||
    !form.value.email ||
    !form.value.graduation ||
    !form.value.ug ||
    !form.value.pgDegree ||
    !form.value.pg ||
    !form.value.contact ||
    !form.value.resume ||
    !form.value.interviewDate ||
    !form.value.interviewTime
  ) {
    alert("Please fill all fields before submitting.");
    return;
  }

  console.log("Form Data:", form.value);
  alert("Form submitted successfully!");
}

import { useRouter } from "vue-router";

const router = useRouter();

function verifyAccount() {
  // Example: Route to next page
  router.push("/home");
}

</script>
