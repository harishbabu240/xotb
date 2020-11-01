<template>
  <div>
    <h1><strong>CheckBox</strong></h1>
    <p>
      Check Boxes allow the user to select one or more items from a given set.
    </p>
    <xotb-panel title="Checkbox Example">
      <div class="panel-view">
        <xotb-checkbox
          :label="'Remember Me'"
          :required="required"
          :disabled="disabled"
          @isChecked="checkEvent($event)"
        >
        </xotb-checkbox>
      </div>
    </xotb-panel>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      required: false,
      disabled: false,
      isChecked: false,
    };
  },
  methods: {
    checkEvent: function(event){
        console.log('checked', event);
    }
  },
};
</script>

<style></style>
