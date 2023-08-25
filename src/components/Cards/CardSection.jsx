import React, { useState } from 'react';
import { Card, CardImg, CardBody, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import CardDetail from './CardDetail';

const CardSection = ({ id, imageUrl, description, price, offer, addToCart }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  }

  return (
    <Card className="max-w-md rounded overflow-hidden shadow-lg">
      <CardImg top src={imageUrl} alt="Imagen" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <CardBody>
        <div className="font-bold text-xl mb-1">Objeto {id}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </CardBody>
      <CardBody>
        <Button color="primary" onClick={toggleDetail}>
          Ver
        </Button>
        <Button color="success" onClick={() => addToCart(id)}>
          Agregar al carrito
        </Button>
      </CardBody>

      <Modal isOpen={showDetail} toggle={toggleDetail}>
        <ModalHeader toggle={toggleDetail}>Detalle del objeto {id}</ModalHeader>
        <ModalBody>
          <CardDetail id={id} description={description} img={imageUrl} offer={offer} price={price} />
          <div className="d-flex justify-content-between mt-4">
            <Button color="primary" onClick={toggleDetail}>
              Cerrar
            </Button>
            <Button color="success" onClick={toggleDetail}>
              Comprar
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </Card>
  );
};

export default CardSection;
