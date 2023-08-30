import React, { useState } from 'react';
import { useGetAllProductsQuery, useCreateProductMutation, useUpdateProductMutation, useDeleteProductMutation } from '../../services/productsApi';

function CreateProduct() {
  const { data: products, isLoading, isError } = useGetAllProductsQuery();
  const {createProduct} = useCreateProductMutation();
  const {updateProduct} = useUpdateProductMutation();
  const {deleteProduct} = useDeleteProductMutation();
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
  });

  const handleCreateProduct = () => {
    createProduct.mutate(newProduct);
    setNewProduct({});
  };

  const handleUpdateProduct = (id, updates) => {
    updateProduct.mutate({ id, ...updates });
  };

  const handleDeleteProduct = (id) => {
    deleteProduct.mutate(id);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching products.</div>;
  }

  return (
    <div>
      <h1>Product CRUD</h1>

      <h2>Create Product</h2>
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name || ''}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newProduct.description || ''}
        onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price || ''}
        onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
      />
      <input
        type="number"
        placeholder="Stock"
        value={newProduct.stock || ''}
        onChange={(e) => setNewProduct({ ...newProduct, stock: Number(e.target.value) })}
      />
      <input
        type="text"
        placeholder="Category"
        value={newProduct.category || ''}
        onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
      />
      <button onClick={handleCreateProduct}>Create</button>

      <h2>Product List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Category: {product.category}</p>
          <button onClick={() => handleUpdateProduct(product.id, { name: 'Updated Name' })}>Update</button>
          <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CreateProduct;