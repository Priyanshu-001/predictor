<template>
	<div style="margin: 2rem;  ">
	
	<v-card width="100%" max-width="850px"  style="padding: 1rem;" >
	<v-row>
	<v-col cols="12" md="6">
		<h2 class="text-2xl"> <strong> All Courses  </strong> </h2>
	</v-col>
	<v-col cols="12" md="5" class="ml-auto">
		<label-wrapper label="Search Courses" label-for="searchCourses" label-classes="font-bold text-slate-600"
            class="bg-zinc-100 hover:bg-zinc-200 p-1 border">
            <template v-slot="{ id }">
              <UInput variant="outline" placeholder="Start typing to search"
                icon="i-heroicons-magnifying-glass-20-solid" v-model="search" :id="id" />
            </template>
          </label-wrapper>
	</v-col>
	</v-row>
	<v-row class="flex m-1 justify-around" >
		<!-- Skeleton loaders -->
	<template v-if="pending">
		....loading
	</template>
	<!-- content -->
	<template v-else>
		<course-item v-for="(item,index) in courses"  :item="item" :key="index" />
	</template>
	</v-row>

	</v-card>
	</div>

</template>

<script setup>
    const {data:allCourses,pending} = await useFetch('/api/courses')
    const search = ref('')
    const courses = computed(()=>pending.value ? [] : allCourses.value.filter(course=>course.courses?.toLowerCase().includes(search.value.toLowerCase())))
    

	useHead({
		title:'All Courses'
	})

</script>