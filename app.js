// https://vuejs.org/v2/guide/

const app = new Vue({
    el: '#app',
    
    // https://vuejs.org/v2/guide/instance.html#Data-and-Methods
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Producto 1',
            description: 'Descripción',
            quantity: 0,
          },
          {
            id: 2,
            name: 'Producto 2',
            description: 'Descripción',
            quantity: 0,
          },
          {
            id: 3,
            name: 'Producto 3',
            description: 'Descripción',
            quantity: 0,
          }
        ],
        showCart: false
      };
    },
    
    // https://vuejs.org/v2/guide/computed.html
    computed: {
      cart() {
        return this.products.filter(product => product.quantity > 0);
      },
      totalQuantity() {
        return this.products.reduce(
          (total, product) => total + product.quantity,
          0
        );
      }
    },
      
      // https://vuejs.org/v2/guide/events.html#Methods-in-Inline-Handlers
      methods: {
        updateCart(product, updateType) {      
          for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === product.id) {
              if (updateType === 'subtract') {
                if (this.products[i].quantity !== 0) {
                  this.products[i].quantity--;
                }
              } else {
                this.products[i].quantity++;
              }
              
              break;
            }
          }
        }
      }
    });
    