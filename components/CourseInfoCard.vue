<template>
	<div class="tw-bg-gradient-to-br tw-text-white tw-from-blue-500 tw-to-blue-700 tw-p-3">

		<h1 class="text-4xl  font-bold text-center "> {{name}} </h1>
	</div>

</template>
<script setup>
    const props = defineProps(['course'])
    const name = computed(()=>props.course?.split('_').join(' '))
</script>
