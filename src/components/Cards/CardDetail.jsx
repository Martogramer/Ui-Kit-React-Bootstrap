import React from 'react';
import { Card, CardBody, CardImg } from 'reactstrap';

const CardDetail = ({ id, description, img, offer, price }) => {
  return (
    <Card className="max-w-sm rounded overflow-hidden shadow-lg z-100">
      <CardBody>
        <div className="font-bold text-xl mb-2">Detalle del objeto {id}</div>
        <CardImg top src={img} alt="" className="h-48 w-full object-cover" />
        <p className="text-xl text-success">-{offer}%</p>
        <p className="text-xl text-danger">{price}</p>
        <p className="text-gray-700 text-base">{description}.</p>
      </CardBody>
    </Card>
  );
};

export default CardDetail;
