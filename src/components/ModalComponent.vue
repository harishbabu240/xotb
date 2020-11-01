<template>
  <div>
    <h1><strong>Modal</strong></h1>
    <p>
      Modal dialogs interrupt users and demand an action by temporarily blocking
      interactions with the main view of a site. They are appropriate when the
      user's attention needs to be directed towards important information
    </p>
    <xotb-panel title="Modal Example">
      <div class="panel-view">
        <xotb-button :type="'outline'" @onClick="showModal = true"
          >Open Modal</xotb-button
        >
        <xotb-modal :displayModal="showModal" @closeModal="showModal = false"><p>Sample Modal..</p></xotb-modal>
      </div>
    </xotb-panel>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showModal: false,
    };
  },
};
</script>

<style></style>
