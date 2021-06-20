<template>
  <div id="app" style="background: #eee">
    <hero
      typeAlert="is-info"
      :title="receivedValue != '' ? receivedValue : `Convertendo de ${this.valueA} para ${this.valueB} `"
    />

    <hr />

    <div class="container">
      <converter
        :creditA="valueA"
        :creditB="valueB"
        @changeValue="updateValue"
        @toggleCurrency="toggleCurrency"
      />

      <hr/>

      <section>
        <b-field>
          <b-select v-model="valueA" placeholder="Converter de outras moedas" icon="currency-usd">
            <option value="EUR">Euro</option>
            <option value="USD">Dólar canadense</option>
          </b-select>
        </b-field>
      </section>
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
    ts: ""
  }),
  methods: {
  
    updateValue(data) {
      this.receivedValue = data.newValue;
    },
    toggleCurrency() {
      let saved = this.valueA;

      this.valueA = this.valueB;
      this.valueB = saved;
    },
  },
};
</script>
