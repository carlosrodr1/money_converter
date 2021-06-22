<template>
  <section :class="'hero ' + typeAlert">
    <div class="hero-body custom">
      <p class="title">{{ title }}</p>
      <p class="subtitle">{{subTitle}}</p>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');

.custom {
  font-family: 'Raleway';
  text-align: center;
}
</style>

<script>
export default {
  name: "Hero",
  props: {
    title: {
      tpye: String,
      required: true,
    },
    subTitle: {
      type: String,
      default: "Conversor de moedas",
    },
    typeAlert: {
      type: String,
      default: "is-link",
    },
  },
};
</script>