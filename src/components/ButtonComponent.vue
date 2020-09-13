<template>
  <div>
    <h1><strong>Buttons</strong></h1>
    <p>
      Buttons allow the user to trigger an action or make a selection with a
      single tap or a click. They form an integral part of a UI and are often
      present in dialogs, modal windows, forms, cards and toolbars.
    </p>
    <xotb-panel title="Button Example" :collapsable="true">
      <div class="panel-view">
        <xotb-button :type="'base'">Base</xotb-button>
        <xotb-button :type="'neutral'">Normal</xotb-button>
        <xotb-button :type="'success'">success</xotb-button>
        <xotb-button :type="'outline'">Outline</xotb-button>
        <xotb-button :type="'danger'">Danger</xotb-button>
      </div>
    </xotb-panel>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.panel-view {
  padding: 20px;
}
</style>
