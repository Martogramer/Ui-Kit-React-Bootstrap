import React, { useEffect, useState } from "react";
import { Button, Spinner, Table } from "reactstrap";
import {
  useDeleteProductMutation,
  useUpdateProductMutation,
  useCreateProductMutation,
  useGetAllProductsQuery,
} from "../../../services/productsApi";
import { useAllProducts } from "../../../services/hooks/useProducts";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "services/slices/productSlice";

function ProductList() {
  const { data, isLoading } = useGetAllProductsQuery();
  //const products = useAllProducts();
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()
  const { createProduct } = useCreateProductMutation();
  const { updateProduct } = useUpdateProductMutation();
  const { deleteProduct } = useDeleteProductMutation();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    image: "",
    endDate: "",
  });

  /*  if (isLoading) {
    return <Spinner color="primary" />;
  } */

  const handleCreateProduct = () => {
    createProduct.mutate(formData);
    setFormData({});
  };

  const handleUpdateProduct = async (id, updates) => {
    try {
      await updateProduct.mutateAsync({ id, ...updates });
    } catch (error) {
      console.error(`Error al actualizar el producto ${id}:`, error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await deleteProduct.mutateAsync(id);
    } catch (error) {
      console.error(`Error al eliminar el producto ${id}:`, error);
    }
  };

  return (
    <div>
      <h1>Listado de Productos</h1>

      {/* {loading ? (
        <Spinner color="primary" />
      ) : ( */}
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Categoría</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
                <td>
                  <Button
                    onClick={() =>
                      handleUpdateProduct(product.id, {
                        name: "Updated Name",
                      })
                    }
                  >
                    Update
                  </Button>
                  <Button onClick={() => handleDeleteProduct(product.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      {/* )} */}
    </div>
  );
}

export default ProductList;
