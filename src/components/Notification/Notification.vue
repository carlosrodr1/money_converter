<template>
     <div :class="'notification ' + type">
        {{content}}
      </div>
</template>
<script>

export default {
    name: 'Notification',
    props: {
        content: {
            type: String,
            default: "Hello World"
        },
        type: {
            type: String,
            default: "is-primary"
        }
    }
}
</script>
