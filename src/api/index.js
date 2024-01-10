import productsFromServer from './products';
import usersFromServer from './users';
import categoriesFromServer from './categories';

export function findCategory(categoryId) {
  return categoriesFromServer.find(category => category.id === categoryId);
}

export function findUser(productId) {
  const category = findCategory(productId);
  return usersFromServer.find(
    user => user.id === category.ownerId,
  )
        
}

export function findProducts() {
  return productsFromServer.map(product => ({
    ...product,
    category: findCategory(product.categoryId),
    user: findUser(product.categoryId),
  }));
}

export function findProductsByQuery(products, query) {
  const normalizedQuery = query.trim().toLowerCase();
  let listOfProducts = [...products];

  if (normalizedQuery) {
    listOfProducts = listOfProducts.filter(
      product => product.name.toLowerCase().includes(normalizedQuery),
    );
  }

  return listOfProducts;
}

export function findProductsByUser(products, id) {
  let listOfProducts = [...products];

  if (id) {
    listOfProducts = listOfProducts.filter(
      product => product.user.id === id
    );
  }

  return listOfProducts;
}
