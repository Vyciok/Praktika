import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./components.css";

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="m-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img
          src={pizza.image}
          className="img-fluid"
          style={{ height: "230px", width: "230px" }}
        />
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => {
              setVarient(e.target.value);
            }}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>

        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100 t-left">
          <h1 className="mt-1">
            Price : {pizza.prices[0][varient] * quantity}€
          </h1>
        </div>
        <div className="m-1 w-100 t-right">
          <button className="btn">ADD TO CART</button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            className="img-fluid"
            style={{ height: "350px", width: "350px" }}
          />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
