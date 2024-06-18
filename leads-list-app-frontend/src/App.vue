<template>
  <LeadsTable :items="items" />
</template>

<script setup>

import axios from "axios";
import {ref} from "vue";

const items = ref([])

onMounted(async () => {
  try {
    const data = await axios.get("http://localhost:3000/api/leads").then(response => response.data)
    console.log(data)
    items.value = data
  } catch (e) {
    console.log(e)
  }
});
</script>


<script>
import LeadsTable from "@/components/leadsTable.vue";
import {defineComponent, onMounted} from "vue";

export default defineComponent({
  components: {
    LeadsTable,
  }
});
</script>