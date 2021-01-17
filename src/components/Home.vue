<template>
  <div class="home">
    <v-container>
      <h1>Placeholder for my home page.</h1>

      <v-container>
        <v-row>
          <v-col
              v-for="n in listItems"
              :key="n.id"
              cols="4"
          >
            <v-card height="200"
                    elevation="2"

            >
              <v-card-title>{{ n.name }}</v-card-title>
              <v-card-subtitle>{{ n.sub }}</v-card-subtitle>
              <v-btn :to="{name: n._lnk }">{{ n._lnk }}</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-container>



  </div>
</template>

<script>
export default {
  name: "Home.vue",
  data () {
    return {
      listItems: [
        {id: 1, name: 'Switches, Checkboxes and Table', sub: 'Switch and a Checkbox nested in a table', _lnk: 'switch_check'},
        {id: 2, name: 'Alerts', sub: 'Alert subtitle'},
        {id: 3, name: 'Avatars and Badges', sub: 'Avatar and Badges subtitle'},
        {id: 4, name: 'Banners'},
        {id: 5, name: 'Bottom Navigation'},
        {id: 6, name: 'Calendars'},
        {id: 7, name: 'Cards'},
        {id: 8, name: 'Carousels'},
        {id: 9, name: 'Form Inputs & Controls'}
      ]
    }
  }
}
</script>

<style scoped>

</style>