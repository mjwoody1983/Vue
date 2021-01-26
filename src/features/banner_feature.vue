<template>
  <div>
    <v-container>
      <v-checkbox
          v-model="v0"
          label="Visible"
      ></v-checkbox>
      <v-banner
          v-model="v0"
          single-line
          transition="slide-y-transition"
      >
        No Internet connection
        <template v-slot:actions="{ dismiss }">
          <v-btn
              text
              color="primary"
              @click="dismiss"
          >
            Dismiss
          </v-btn>
          <v-btn
              text
              color="primary"
          >
            Retry
          </v-btn>
        </template>
      </v-banner>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "banner_feature",
  data: () => ({
    v0: true,
  }),
}
</script>

<style scoped>

</style>