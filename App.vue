<template>
  <v-app dark>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>add_comment</v-icon>  
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
    <!--form  -->
        <v-list>
          <v-spacer/>
              <v-form id="post_name" ref="form" v-model="valid" lazy-validation>
                  <input v-model="message" placeholder="Name of post" >
              </v-form>
          <v-spacer/>
              <v-form id="post_name" ref="form" v-model="valid" lazy-validation>
                  <input v-model="message" placeholder="Your Message" >
              </v-form>
            <v-btn
                @click="add_marker"
            >
                submit
            </v-btn>
            <v-btn @click="clear">clear</v-btn>
        </v-list>
    </v-navigation-drawer>ß
    <v-footer :fixed="fixed" app>
      <span>s.andrewfleming@gmail.com</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'person_outline',
        title: 'Register'
      },
      {icon:'person_outline',
      title:'Login'}
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Geografiti',
    }
  },
  methods: {
    add_marker() {
  var myLatLng = {lat:39.276776, lng:-76.612131};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
    }
  }
}
</script>

<style>
input {
    width: 100%;
    padding-right:50px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

</style>

