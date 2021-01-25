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
        {id: 2, name: 'Alerts', sub: 'Alert subtitle', _lnk: 'alert_message'},
        {id: 3, name: 'Avatars and Badges', sub: 'Avatar and Badges subtitle', _lnk: 'avatar_badges'},
        {id: 4, name: 'Banners', _lnk: 'banners'},
        {id: 5, name: 'Bottom Navigation', _lnk: 'bottom_navigation'},
        {id: 6, name: 'Calendars', _lnk: 'calendar_org'},
        {id: 7, name: 'Cards', _lnk: 'cards'},
        {id: 8, name: 'Carousels', _lnk: 'carousels'},
        {id: 9, name: 'Form Inputs & Controls', _lnk: 'forms_inputs'}
      ]
    }
  }
}
</script>

<style scoped>

</style>