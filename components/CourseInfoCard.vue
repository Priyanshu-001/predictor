<template>
	<div class="bg-gradient-to-br text-white from-blue-500 to-blue-700 p-3">

		<h1 class="text-4xl  font-bold text-center "> {{name}} </h1>
	</div>

</template>
<script setup>
    const props = defineProps(['course'])
    const name = computed(()=>props.course?.split('_').join(' '))
</script>
