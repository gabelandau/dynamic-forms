<template>
  <div :class="{ 'style-wrapper': styled }">
    <div class="columns">
      <div class="column is-two-thirds">
        <Editor />
      </div>
      <div class="column">
        <Menu />
      </div>
    </div>
  </div>
</template>

<script>
import '@fortawesome/fontawesome-free/js/all';
import Menu from './FormBuilder/Menu.vue';
import Editor from './FormBuilder/Editor.vue';

export default {
  props: ['config'],
  components: { Menu, Editor },
  data() {
    return {
      styled: true,
    };
  },
};
</script>

<style lang="sass">
.style-wrapper
  @import "bulma/sass/utilities/_all.sass"
  @import "bulma/sass/elements/button.sass"
  @import "bulma/sass/components/panel.sass"
  @import "bulma/sass/elements/box.sass"
  @import "bulma/sass/grid/columns.sass"
  @import "bulma/sass/form/_all.sass"

  .subtitle
    font-size: 0.9em
</style>
