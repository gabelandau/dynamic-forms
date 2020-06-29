<template>
  <div>
    <div class="box">
      <p class="subtitle">Text Input: Username</p>
      <input class="input" type="text" placeholder="Username">
    </div>
    <div class="box">
      <p class="subtitle">Text Input: Full Name</p>
      <input class="input" type="text" placeholder="Full Name">
    </div>
    <div class="box">
      <p class="subtitle">Dropdown: Role</p>
      <div class="select">
        <select>
          <option>Flair Mod</option>
          <option>Full Mod</option>
        </select>
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.box
  padding: 10px !important
  margin-bottom: 10px !important
  border: 1px solid #d0d0d0

  .subtitle
    margin-bottom: 5px
</style>
