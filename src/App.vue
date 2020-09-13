<template>
  <div class="main-container">
    <div class="container">
      <ul style="list-style-type:none">
        <li v-for="library in libaraies">
          <router-link :to="library">{{ library }}</router-link>
        </li>
      </ul>
      <div class="examples">
      <router-view></router-view>
    </div>
    </div>
    
  </div>
</template>

<script>
import * as lib from "./assets/libraries.js";

export default {
  data: function () {
    return {
      libaraies: [],
    };
  },
  created: function () {
    console.log(lib.LIBRARIES);
    this.libaraies = lib.LIBRARIES;
  },
};
</script>

<style>
.main-container {
  position: absolute;
}
.container {
  display: flex;
  flex-direction: row;
}
.examples {
  border: 1px solid #dddddd;
  padding: 50px 50px;
  width: 100%;
}
li {
  color: #6ab3f3;
  border-bottom: 1px solid #dddddd;
  padding: 2px;
  border-left: 1px solid #dddddd;
}
</style>
