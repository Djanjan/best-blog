<template>
  <v-menu
    left
    bottom
    offset-y
    transition="scale-transition"
    :close-on-content-click="false"
    v-model="menu"
  >
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-sheet class="mx-auto text-center mb-0" elevation="4" max-width="400">
      <v-card-text>
        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text @click="menu = false">Cancel</v-btn>
          <v-btn color="primary" text @click="menu = false">Save</v-btn>
        </v-card-actions>
      </v-card-text>
    </v-sheet>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
    menu: false,
    model: null
  })
};
</script>
