<template>
  <div :class="{ 'style-wrapper': styled }">
    <div v-html="form"></div>
  </div>
</template>

<script>
import RenderEngine from '@/core/RenderEngine';

export default {
  props: ['config'],
  data() {
    return {
      styled: true,
      form: null,
    };
  },
  mounted() {
    this.form = RenderEngine.renderForm();
  },
};
</script>

<style lang="sass">
.style-wrapper
  @import "bulma/sass/utilities/_all.sass"
  @import "bulma/sass/elements/button.sass"
  @import "bulma/sass/form/_all.sass"
  @import "bulma/sass/grid/columns.sass"
</style>
