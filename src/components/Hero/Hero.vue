<template>
  <section :class="'hero ' + typeAlert">
    <div class="hero-body">
      <p class="title">{{ title }}</p>
      <p class="subtitle">{{subTitle}}</p>
    </div>
  </section>
</template>
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