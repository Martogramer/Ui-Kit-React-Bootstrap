import React from "react";
import { useDeleteProductMutation } from "services/productsApi";

function ProductDelete({ _id }) {
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async () => {
    try {
      await deleteProduct(_id);
      // Realizar alguna acción después de la eliminación
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  return (
    <div>
      <h1>Eliminar Producto</h1>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
}

export default ProductDelete;