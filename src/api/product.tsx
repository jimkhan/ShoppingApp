import ApiCall from './ApiCall';

const getAllProduct = () => ApiCall.get('/products');

const getAllProductByCategory = (category: string) =>
  ApiCall.get(`/products/category/${category}`);

const getAllCategory = () => ApiCall.get('/products/categories');

export {getAllProduct, getAllCategory, getAllProductByCategory};
