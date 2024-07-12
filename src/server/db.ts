type Product = { id: string; name: string };

// "database"
const products: Product[] = [
  {
    id: 'p1',
    name: 'Product 1',
  },
  {
    id: 'p2',
    name: 'Product 2',
  },
  {
    id: 'p3',
    name: 'Product 3',
  },
  {
    id: 'p4',
    name: 'Product 4',
  },
  {
    id: 'p5',
    name: 'Product 5',
  },
  {
    id: 'p6',
    name: 'Product 6',
  },
  {
    id: 'p7',
    name: 'Product 7',
  },
  {
    id: 'p8',
    name: 'Product 8',
  },
  {
    id: 'p9',
    name: 'Product 9',
  },
  {
    id: 'p10',
    name: 'Product 10',
  },
  {
    id: 'p11',
    name: 'Product 11',
  },
  {
    id: 'p12',
    name: 'Product 12',
  },
  {
    id: 'p13',
    name: 'Product 13',
  },
  {
    id: 'p14',
    name: 'Product 14',
  },
  {
    id: 'p15',
    name: 'Product 15',
  },
  {
    id: 'p16',
    name: 'Product 16',
  },
];
const cart: Product[] = [];

export const db = {
  product: {
    findAll: async () => products,
    findMany: async (page = 0, end = 8) => products.slice(page, end),
    findById: async (id: string) => products.find((product) => product.id === id),
    create: async (data: { name: string }) => {
      const product = { id: String(products.length + 1), ...data };
      products.push(product);
      return product;
    },
  },
  cart: {
    getCart: async () => cart,
    addToCart: async (product: Product) => cart.push(product),
    removeFromCart: async (product: Product) => {
      const index = cart.indexOf(product);
      if (index > -1) {
        cart.splice(index, 1);
      }
    },
    checkout: async () => {
      cart.splice(0, cart.length);
    },
  }
};
