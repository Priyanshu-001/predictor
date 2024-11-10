<script setup lang="ts">

const {data, itemsPerPage} = defineProps(["data", "headers", "class", "itemsPerPage", "loading"]);
const page = ref(1)
const pageCount = itemsPerPage || 5;

const rows = computed(() => {
  return data.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
</script>

<template>
  <UCard :class="class">
    <UTable :rows="rows" :columns="headers" :loading="loading"/>

    <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
      <UPagination v-model="page" :page-count="pageCount" :total="data.length" />
    </div>
  </UCard>
</template>

