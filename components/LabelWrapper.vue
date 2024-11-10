<template>
    <div :class="class">
        <label :for="labelFor" :class="labelClasses">{{ label }}</label>
        <slot :id="labelFor"></slot>
    </div>
</template>
<script setup lang="ts">
    defineProps(["label", "labelFor", "labelClasses", "class"])
</script>