<script setup>

</script>

<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          Vue overview libraries
        </router-link>
        <button class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/task-list">
                Todo list
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="mt-3">
      <router-view/>
    </div>
  </main>
</template>

<style scoped>

</style>
