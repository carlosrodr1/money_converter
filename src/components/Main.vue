<template>
  <div id="app" style="background: #167df0">
    <hero
      typeAlert="is-info"
      :title="
        receivedValue != ''
          ? receivedValue
          : `Convertendo de ${this.valueA} para ${this.valueB} `
      "

     :subTitle="receivedValue != ''
          ? receivedValue
          : `Convertendo de ${this.valueA} para ${this.valueB} `
      "
    />

    <br />

    <div class="container">
      <converter
        :creditA="valueA"
        :creditB="valueB"
        @changeCurrency="changeCurrency"
        @changeValue="updateValue"
        @toggleCurrency="toggleCurrency"
      />

    </div>
  </div>
</template>

<style>
.rounded {
  height: 30px;
  border-radius: 35px;
}
</style>

<script>
import Converter from "./Converter/Converter.vue";

export default {
  components: {
    Converter,
  },
  data: () => ({
    receivedValue: "",
    valueA: "USD",
    valueB: "BRL",
  }),
  methods: {
    updateValue(data) {
      this.receivedValue = data.newValue;
    },

    changeCurrency(data) {
      if (this.valueB == data) {
        this.toggleCurrency();
        return;
      }

      this.valueA = data;
    },

    toggleCurrency() {
      let saved = this.valueA;

      this.valueA = this.valueB;
      this.valueB = saved;
    },
  },
};
</script>
