<template>
  <div>
    <div>
      <input type="text" v-model="taskInput" placeholder="Add task..." />
    </div>

    <div>
      <button @click="saveTask">
        {{ isEditing ? "Update Task" : "Add Task" }}
      </button>
    </div>

    <ul>
      <li v-for="t in tasks" :key="t.id">
        {{ t.title }}
        
        <!-- Update -->
        <button @click="editTask(t)">Edit</button>

        <!-- Remove -->
        <button @click="removeTask(t.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const taskInput = ref("");
const tasks = ref([]);

const isEditing = ref(false);
let editId = null;

/* ADD or UPDATE */
function saveTask() {
  if (taskInput.value.trim() === "") return;

  if (isEditing.value) {
    // Update existing task
    const index = tasks.value.findIndex((task) => task.id === editId);
    tasks.value[index].title = taskInput.value;

    isEditing.value = false;
    taskInput.value = "";
  } else {
    // Add new task
    tasks.value.push({
      id: Date.now(), // unique id
      title: taskInput.value,
    });
    taskInput.value = "";
  }
}

/* REMOVE TASK */
function removeTask(id) {
  tasks.value = tasks.value.filter((task) => task.id !== id);
}

/* LOAD TASK INTO INPUT FOR EDITING */
function editTask(task) {
  taskInput.value = task.title;
  editId = task.id;
  isEditing.value = true;
}
</script>
