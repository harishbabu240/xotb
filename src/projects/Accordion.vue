<template>
  <div class="accordion-body">
    <div class="accordion-header" @click="toogleHeader()">
      <p>{{ header }}</p>
      <div :class="expandAccordion ? 'accordion-minus-icon': 'accordion-plus-icon'"></div>
      <!-- <img src="../assets/images/plus.svg" alt="Girl in a jacket" class="accordion-icon"/> -->
    </div>
    <div class="accordion-description" v-if="expandAccordion">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: String,
    description: String,
    expanded: Boolean,
  },
  data: function () {
    return {
      expandAccordion: this.expanded,
    };
  },
  methods: {
    toogleHeader: function () {
      this.expandAccordion = !this.expandAccordion;
      this.expandAccordion
        ? this.$emit("opened", "open")
        : this.$emit("closed", "close");
    },
  },
};
</script>

<style scoped>
.accordion-body {
  border: 1px solid #d2d2d2;
  padding: 10px;
  /* border-bottom: 0; */
}
p {
  margin: 0px;
}
.accordion-header {
  background-color: rgb(203, 241, 253);
  border: 1px solid #aac0fc;
  padding: 5px;
  position: relative;
  /* border-radius: 5px; */
}
.accordion-description {
  border: 1px solid #aac0fc;
  border-top: 0;
  padding: 5px;
}
.accordion-plus-icon{
    background-image: url(../assets/images/plus.svg);
    height: 10px;
    width: 10px;
    background-repeat: no-repeat, repeat;
    position: absolute;
    right: 10px;
    top: 13px;
}
.accordion-minus-icon{
    background-image: url(../assets/images/remove.svg);
    height: 10px;
    width: 10px;
    background-repeat: no-repeat, repeat;
    position: absolute;
    right: 10px;
    top: 13px;
}
</style>
