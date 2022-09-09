import { createStore } from "vuex";

export default createStore({
  state: {
    msg: "Vuex desde Cero.",
    name:'Juan',
    apellido: 'Perez',
    friends: [],
    friend: null,
  },

  getters: {

    message(state){
      return state.msg;
    },

    fullName(state){
      return `${state.name} ${state.apellido}`;
    }

  },
  mutations: {

    addFriend(state){
      state.friends = [state.friend,...state.friends]; //split operator
    },

  },
  
  actions: {
    addFriendAction(context){
      context.commit('addFriend'); //to use actions it is necessary to make a commit
    }
  },
});
