
import React, { useState } from "react";
import { useUpdateProductMutation } from "services/productsApi";
import { useGetProductQuery } from "services/productsApi";

function ProductUpdate({ _id }) {
  const { data, isLoading } = useGetProductQuery(_id);

  const [formData, setFormData] = useState({
    name: data?.name,
    description: data?.description,
    price: data?.price,
    discount: data?.discount,
    image: data?.image,
    endDate: data?.endDate,
  });
  

  const [updateProduct] = useUpdateProductMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({ id: _id, ...formData });
      // Redirigir o realizar alguna otra acción después de la actualización
    } catch (error) {
      console.error("Error al actualizar el producto:", error);
    }
  };

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Actualizar Producto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Precio:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        {/* Agregar más campos de formulario aquí según sea necesario */}
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
}

export default ProductUpdate;