<template>
  <div class="home">
    <v-container>
      <h1>Placeholder for my home page.</h1>

      <v-container>
        <v-row>
          <v-col
              v-for="n in 24"
              :key="n"
              cols="4"
          >
            <v-card height="200"></v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-container>



  </div>
</template>

<script>
export default {
  name: "Home.vue"
}
</script>

<style scoped>

</style>