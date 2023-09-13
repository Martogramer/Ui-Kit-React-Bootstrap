import React, { useState } from "react";
import { Button, Input, InputGroup, Spinner } from "reactstrap";
import { useCreateProductMutation } from "services/productsApi";

function ProductCreate() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    discount: 0,
    image: "",
    endDate: "",
  });

  const [createProduct, isLoading] = useCreateProductMutation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 /*  if (isLoading) {
    return <Spinner color="primary" />;
  } */

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct(formData);
      // Limpia el formulario o redirige según sea necesario
    } catch (error) {
      console.error("Error al crear el producto:", error);
    }
  };

  return (
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={handleSubmit}>
        <InputGroup
          className={
            "no-border input-lg" + (lastFocus ? " input-group-focus" : "")
          }
        >
          <div>
            <label>Nombre:</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
            />
          </div>
          <div>
            <label>Descripción:</label>
            <Input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
            />
          </div>
          <div>
            <label>Precio:</label>
            <Input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
            />
          </div>
          <div>
            <label>Descuento:</label>
            <Input
              type="number"
              name="discount"
              value={formData.discount}
              onChange={handleInputChange}
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
            />
          </div>
          <div>
            <label>Imagen:</label>
            <Input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
            />
          </div>
          <div>
            <label>Oferta válida hasta:</label>
            <Input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
            />
          </div>
        </InputGroup>
        {/* Agregar más campos de formulario aquí según sea necesario */}
        <Button color="green" type="submit">Crear</Button>
      </form>
    </div>
  );
}

export default ProductCreate;
