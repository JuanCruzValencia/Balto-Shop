import { useState, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { WishListContext } from "../../../context/WishListContext";
import { WishCards } from "./wishCard/WishCards";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import './WishList.css'

export function WishList() {
  const [show, setShow] = useState(false);
  const { wishList } = useContext(WishListContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {wishList.length > 0 ? <AiTwotoneHeart onClick={handleShow} className="heart__icon--red" /> :<AiOutlineHeart onClick={handleShow} className="heart__icon" />}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="header-color">
          <Modal.Title>Productos en Favoritos</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-color">
          {wishList.length > 0 ? (
            wishList.map((product) => {
              return <WishCards key={product.id} data={product} />;
            })
          ) : (
            <h2>No tiene ningun producto en Favoritos</h2>
          )}
        </Modal.Body>
        <Modal.Footer className="header-color">
          <Button className='wishList__btn' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
