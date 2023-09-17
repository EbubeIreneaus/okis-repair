<script lang="ts" setup>
const props = defineProps(['color', 'backgroundColor'])
</script>

<template>

        <button class="" :style={color:props.color,backgroundColor:props.backgroundColor}>
            <slot></slot>
        </button>

</template>

<style lang="css" scoped>
    button{
        width: 230px;
        height: 60px;
        border: none;
        
    }
</style>
