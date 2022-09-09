<template>
  <div class="hello">
    <!-- <h1>{{ $store.state.msg }}</h1> access through $store.state -->
    <!-- <h1>{{ $store.getters.message }} access through $store.getters</h1> -->
    <!-- <h4>{{ $store.getters.fullName}}</h4> -->
    <h2>Friends</h2>
    <input type="text" v-model="friend" />
    <button @click="addFriend">Add</button>
    <ul>
      <li v-for="(friend, index) in $store.state.friends" :key="index">
        {{ friend }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      friend: "",
    };
  },

  methods: {

    addFriend(){
      this.$store.state.friend=this.friend;
      this.$store.dispatch('addFriendAction');
      this.friend="";
    }

  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
