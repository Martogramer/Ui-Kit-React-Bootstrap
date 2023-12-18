import React, { useEffect, useState } from "react";
import { Button, Spinner, Table, Row, Col } from "reactstrap";
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
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
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
    <div className="container">
      <Row style={{ marginBottom: '10px' }} >
    <Col>
    </Col>
    <Col>
    </Col>
    <Col>
    </Col>
    <Col>
      <Button href='admin/crear' color="success" className="">Nuevo</Button>
    </Col>
      </Row>

      {isLoading ? (
        <Spinner color="primary" />
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Stock</th>
              <th></th>
              <th></th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
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
                    Modificar
                  </Button>
                </td>
                <td>
                  <Button onClick={() => handleDeleteProduct(product.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default ProductList;
