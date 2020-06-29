<template>
  <div id="app">
    <h2 class="title is-2">Dynamic Forms</h2>
    <div class="box builder">
      <FormBuilder />
    </div>
    <div class="box">
      <FormRender />
    </div>
  </div>
</template>

<script>
import FormBuilder from './components/FormBuilder.vue';
import FormRender from './components/FormRender.vue';

export default {
  name: 'App',
  components: {
    FormBuilder,
    FormRender,
  },
};
</script>

<style lang="sass">
@import "bulma/sass/utilities/_all.sass"
@import "bulma/sass/base/_all.sass"
@import "bulma/sass/elements/box.sass"
@import "bulma/sass/elements/title.sass"

html,body
  background-color: #d6d6d6

.builder
  background-color: #f9f9f9

#app
  width: 1200px
  margin: 20px auto 0 auto
</style>
