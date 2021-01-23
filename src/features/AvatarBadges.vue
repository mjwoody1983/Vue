<template>
  <div id="app">
    <v-app id="inspire">

      <!-- Avatar section -->
      <v-container fluid>
        <v-row justify="center">
          <v-subheader>Today</v-subheader>

          <v-expansion-panels popout>
            <v-expansion-panel
                v-for="(message, i) in messages"
                :key="i"
                hide-actions
            >
              <v-expansion-panel-header>
                <v-row
                    align="center"
                    class="spacer"
                    no-gutters
                >
                  <v-col
                      cols="4"
                      sm="2"
                      md="1"
                  >
                    <v-avatar
                        size="36px"
                    >
                      <img
                          v-if="message.avatar"
                          alt="Avatar"
                          src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                      >
                      <v-icon
                          v-else
                          :color="message.color"
                          v-text="message.icon"
                      ></v-icon>
                    </v-avatar>
                  </v-col>

                  <v-col
                      class="hidden-xs-only"
                      sm="5"
                      md="3"
                  >
                    <strong v-html="message.name"></strong>
                    <span
                        v-if="message.total"
                        class="grey--text"
                    >
                    &nbsp;({{ message.total }})
                  </span>
                  </v-col>

                  <v-col
                      class="text-no-wrap"
                      cols="5"
                      sm="3"
                  >
                    <v-chip
                        v-if="message.new"
                        :color="`${message.color} lighten-4`"
                        class="ml-0 mr-2 black--text"
                        label
                        small
                    >
                      {{ message.new }} new
                    </v-chip>
                    <strong v-html="message.title"></strong>
                  </v-col>

                  <v-col
                      v-if="message.excerpt"
                      class="grey--text text-truncate hidden-sm-and-down"
                  >
                    &mdash;
                    {{ message.excerpt }}
                  </v-col>
                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-card-text v-text="lorem"></v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>

        <v-container>
          <v-spacer></v-spacer>
        </v-container>
        <!-- Badges section -->
        <v-container>
          <v-row
              align="center"
              justify="center"
          >
            <v-badge
                bordered
                color="error"
                icon="mdi-lock"
                overlap
            >
              <v-btn
                  class="white--text"
                  color="error"
                  depressed
              >
                Lock Account
              </v-btn>
            </v-badge>

            <div class="mx-3"></div>

            <v-badge
                bordered
                bottom
                color="deep-purple accent-4"
                dot
                offset-x="10"
                offset-y="10"
            >
              <v-avatar size="40">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
              </v-avatar>
            </v-badge>

            <div class="mx-3"></div>

            <v-badge
                avatar
                bordered
                overlap
            >
              <template v-slot:badge>
                <v-avatar>
                  <v-img src="https://cdn.vuetifyjs.com/images/logos/v.png"></v-img>
                </v-avatar>
              </template>

              <v-avatar size="40">
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
            </v-badge>
          </v-row>
        </v-container>
      </v-container>



    </v-app>
  </div>
</template>

<script>
export default {
  name: "AvatarBadges",
  data: () => ({
    messages: [
      {
        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
        name: 'John Leider',
        title: 'Welcome to Vuetify!',
        excerpt: 'Thank you for joining our community...',
      },
      {
        color: 'red',
        icon: 'mdi-account-multiple',
        name: 'Social',
        new: 1,
        total: 3,
        title: 'Twitter',
      },
      {
        color: 'teal',
        icon: 'mdi-tag',
        name: 'Promos',
        new: 2,
        total: 4,
        title: 'Shop your way',
        exceprt: 'New deals available, Join Today',
      },
    ],
    lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',
  }),
}
</script>

<style scoped>

</style>