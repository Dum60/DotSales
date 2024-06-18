<template>
  <v-data-table-server :items="items" :search="search" item-value="name">
    <template v-slot:tfoot>
      <tr>
        <td>
          <v-text-field
              v-model="name"
              class="ma-2"
              density="compact"
              placeholder="Query..."
              hide-details
          ></v-text-field>
        </td>
      </tr>
    </template>
  </v-data-table-server>
  <table>
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Status</th>
        <th scope="col">Responsible</th>
        <th scope="col">Date</th>
      </tr>
    </thead>
    <tbody>
      <leadCard
          v-for="lead in items.leads"
          :key="lead.id"
          :name="lead.name"
          :color="lead.color"
          :date="lead.date"
          :price="lead.price"
          :responsible="lead.responsibleId"
          :status="lead.statusId" />
    </tbody>
  </table>
</template>

<script setup>

import LeadCard from "@/components/leadCard.vue";

defineProps({
  items: Array
})

</script>

<style>
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}

thead {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}
</style>