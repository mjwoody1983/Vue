<template>
    <v-container
        class="px-0"
        fluid
    >
      <v-switch
          v-model="listItems.switch"
          :label="`Switch 1: ${listItems[0].switch.toString()}`"
          @click="details(listItems[0].label, !listItems[0].switch)"
      ></v-switch>

      <v-data-table
          :headers="headers"
          :items="listItems"
          class="elevation-2"
        >


              <template slot="item.switch" slot-scope="{ item }">
                <v-switch
                    v-model="item.switch"
                    @click="details(item.label, item.switch)"
                ></v-switch>
              </template>

              <template slot="item.x_t" slot-scope="{ item }">
                <v-checkbox
                    v-model="item.x_t"
                    @click="details(item.label, item.x_t)"
                ></v-checkbox>
              </template>


      </v-data-table>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data () {
      return {
        switch1: true,
        listItems: [
          {label: 0,switch: false, x_t: false},
          {label: 1,switch: true, x_t: false},
          {label: 2,switch: true, x_t: false}
        ],
        headers: [
            {text: 'Label', sortable: false, value: 'label'},
            {text: 'Switch', sortable: false, value: 'switch'},
            {text: 'xt', sortable: false, value: 'x_t'}
        ]
      }
    },
    methods: {
      details(i) {
        //this.listItems[i].switch = itemUpdate
        console.log('After...', this.listItems[i].x_t)
      }
    }
  }
</script>
