import React,{useState}  from 'react'
import {Button, Modal, Form} from 'react-bootstrap/';
import '../PhotoModal/PhotoModal.css'


function PhotoModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="outline-secondary" onClick={handleShow} className="PhotoBtn">
          +
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Upload a Photo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Example file input" />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

  
  export default PhotoModal