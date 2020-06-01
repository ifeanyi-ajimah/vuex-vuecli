import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex); //to tell Vue.js that we want to use a plugin. This plugin is Vuex plugin

//export store so that we can import and use it in our main.js file and therefore everywhere in the project.
export const store_data = new Vuex.Store({

    state:{  //in this STATE, we can define different set of data. 

        //products object is the first data in the central state.
        products: [
            {name: 'Banana Skin', price : 20},
            {name: 'Shiny Star', price : 40},
            {name: 'Green Shells', price : 60},
            {name: 'Red Shells', price: 80},
            {name: 'Kansy Nuts', price: 70}
          ]
    }, 

    getters:{
        // saleProducts: function(state){
        saleProducts: state => {
            var saleProducts = state.products.map( product => {
              return {
                name: '**'+ product.name + '**',
                price: product.price / 2
              }
            });
            return saleProducts;
          }

    },

    mutations:{ 
        reducePrice: function(state, payload) {//payload is parameter passed from the action that is calling the mutator
        // reducePrice: (state, payload) =>{
            state.products.forEach( product => {
                product.price -= payload;
            });
        }

    },

    //we use actions to run asynchronous codes .  it takes parameter called context
    //we shouldn't use asynchronous codes in mutations . actions is an intermediary btw the component emmiting the mutation and the mutation itself

    actions:{
      
        //N/B: even if you are not performing any form of assynchronous task, its always better practice, to instead of directly committing a mutation directly from your component,
        //its better to always dispatch an action, wc ll then commit the mutation 

        reducePrice: (context, payload) => { //payload are the parameter passed from the vue component
            setTimeout( function(){
            context.commit('reducePrice',payload)//this is to fire the reduce price mutation
            },2000)
        }
    }    

});


