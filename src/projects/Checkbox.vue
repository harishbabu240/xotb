<template>
  <div>
    <input type="checkbox" :required="required" :disabled="disabled" v-model="isChecked" @change="onChange(isChecked)"/> <span>{{label}}</span>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    required: Boolean,
    disabled: Boolean
  },
  data: function(){
      return {
          isChecked: false
      }
  },
  methods: {
    onChange: function (val) {
    this.$emit("isChecked", val);
    }
  }
};
</script>

<style></style>
