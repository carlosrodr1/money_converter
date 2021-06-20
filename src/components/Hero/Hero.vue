<template>
    <section :class="'hero ' + typeAlert">
      <div class="hero-body">
        <p class="title">{{title}}</p>
        <p class="subtitle">Convertendo de {{converter}}</p>
      </div>
    </section>
</template>
<script>
    export default {
        name: "Hero",
        props: {
            title: {
                tpye: String,
                default: "Conversor de moedas"
            },
            converter: {
                type: String,
                default: "$ para R$"
            },
            typeAlert: {
                type: String,
                default: "is-link"
            }
        }
    }
</script>