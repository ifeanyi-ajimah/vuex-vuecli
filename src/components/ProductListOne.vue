<template>
  <div id="product-list-one">
      <h2> Product List One </h2>
      <ul>
          <li v-for=" product in products" :key="product.name">
              <span class="name"> {{ product.name }}</span>
              <span class="price"> ${{ product.price }}</span>
          </li>
          <br>
          <li v-for=" product in saleProducts" :key="product.name">
              <span class="name"> {{ product.name }}</span>
              <span class="price"> ${{ product.price }}</span>
          </li>
      </ul>
      <button @click="reducePrice(4)"> Reduce Price </button>

    
  </div>
</template>

<script>

export default {
//   props: ['products'], 

  data(){
    return {

    }
  
  },

computed:{
    products(){
      return this.$store.state.products
    },
    saleProducts () {
       return this.$store.getters.saleProducts
    }

  },
  methods:{
    reducePrice: function(amount)  {
        // this.$store.state.products.forEach( product => {
        //   product.price -= 1;
        // });

         //this.$store.commit('reducePrice'); //this directly commits/triggers a mutation
         //commit function is used to trigger the reducePrice fxn in the store mutations
         //To invoke a mutation handler, you need to call store.commit with its type: eg store.commit('increment')

         this.$store.dispatch('reducePrice', amount); //use dispatch when you want to dispatch an action . the action now commits the mutation
         //this command is to dispatch an action 
    }

  }
  
 
}
</script>

<style scoped >
#product-list-one{
    background-color: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,2);
    margin: 10px 0px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 5px;
    list-style-type: none;
    /* margin: 20px; */
}

#product-list-one ul li{
    padding:  20px;
    display: inline-block;
    background: rgba(255,255,255 , 0.7);
    margin-right: 10px ;
    margin-top: 10px;
}
.price{
    font-weight: bold;
    color: #E8800C;
    display: block;
}
</style>
