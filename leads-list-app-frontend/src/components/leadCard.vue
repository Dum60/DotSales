<script setup>
  const props = defineProps(['name', 'price', 'date', 'status', 'color', 'responsible'])
</script>

<template>
  <tr>
    <td>
      {{ props.name }}
    </td>
    <td>
      {{ props.price }}
    </td>
    <td>
      {{ props.status }}
    </td>
    <td>
      {{ props.responsible }}
    </td>
    <td>
      {{ props.date }}
    </td>
  </tr>
</template>

<style scoped>
</style>