import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, InputGroup, Spinner } from "reactstrap";
import { useCreateProductMutation } from "services/productsApi";
import { getAllProducts, createProduct } from "services/slices/productSlice";

function ProductCreate() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);

  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [dispatch]);


  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
  });

  const [createProduct, { isLoading, isError }] = useCreateProductMutation()

  const [formErrors, setFormErrors] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
    category: "",
  })
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && value.trim() === "" ){
      setFormErrors((prevState)=> ({...prevState,[name]: 'Name is required'}))
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        name: "",
      }))
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateProduct = async () => {
    try {
      const newProduct = await createProduct(formData); 
      setFormData({
        name: "",
        price: 0,
        stock: 0,
        description: "",
        category: "",
      });
      console.log(formData);
      alert("Producto creado con éxito");
    } catch (error) {
      console.log(error.message);
      alert("Error al crear el producto:", error.message);
    }
  };

  return (
    <div>
      <h1>Crear Producto</h1>
      <form onSubmit={handleCreateProduct}>
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
            {formErrors.name && <p className="error-message"> {formErrors.name} </p>}
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
            <label>Stock:</label>
            <Input
              type="number"
              name="stock"
              value={formData.stock}
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
            <label>Category:</label>
            <Input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
            />
          </div>
          {/* <div>
            <label>Oferta válida hasta:</label>
            <Input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              onFocus={() => setFirstFocus(true)}
              onBlur={() => setFirstFocus(false)}
            />
          </div> */}
        </InputGroup>
        {/* Agregar más campos de formulario aquí según sea necesario */}
        <Button color="green" type="submit" disabled={isLoading}>
          {isLoading ? "Creando..." : "Crear"}
        </Button>
        {isError && <p>Error al crear el producto</p>}
      </form>
    </div>
  );
}

export default ProductCreate;
