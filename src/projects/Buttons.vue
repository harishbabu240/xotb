<template>
  <div class="button-container">
    <button :class="type" @click="callback()"><slot></slot></button>
  </div>
</template>
<script>
export default {
  props: {
    type: String,
  },
  methods: {
    callback: function () {
      this.$emit("onClick", 'clicked');
    },
  },
};
</script>

<style scoped>
.button-container {
  display: inline;
}
button {
  padding: 0px 20px;
  border: 1px solid #ddd;
  color: #333;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  font-family: "微软雅黑", arail;
  cursor: pointer;
  margin: 0px 5px;
}
.danger {
  background-color: #ff4949;
  color: #fff;
}
.success {
  background-color: #13ce66;
  color: #fff;
}
.neutral {
  background-color: #0fbce7;
  color: #fff;
}
.outline {
  background-color: #ffffff;
  color: rgb(14, 193, 248);
  border: 1px solid rgb(14, 193, 248);
}
</style>
