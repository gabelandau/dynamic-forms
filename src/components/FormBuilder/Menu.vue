<template>
  <nav class="panel">
    <p class="panel-heading">Form Elements</p>
    <p class="panel-tabs">
      <a class="is-active">All</a>
      <a>Text</a>
      <a>Control</a>
    </p>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-ad" aria-hidden="true"></i>
      </span>Text Input</a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="far fa-sticky-note" aria-hidden="true"></i>
      </span>Text Area</a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-ellipsis-v" aria-hidden="true"></i>
      </span>Radio Buttons</a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="far fa-square" aria-hidden="true"></i>
      </span>Checkbox</a>
    <a class="panel-block">
      <span class="panel-icon">
        <i class="fas fa-angle-double-down" aria-hidden="true"></i>
      </span>Dropdown</a>
    <div class="panel-block">
      <button class="button is-danger is-outlined is-fullwidth">
        Reset Form
      </button>
      <button class="button is-info is-outlined is-fullwidth menu-button">
        View JSON
      </button>
    </div>
  </nav>
</template>

<style lang="sass" scoped>
.menu-button
  margin-left: 10px;

.panel
  background-color: #fff
  border: 1px solid #d0d0d0
</style>
