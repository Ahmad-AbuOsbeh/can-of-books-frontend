'use strict';
import React from 'react';
import { Form, Button ,Modal} from 'react-bootstrap'


class BookFormModal extends React.Component {
  
    constructor(props){
        super(props);
        this.state={
            show : false,
        };
    }


    showModalFunction=()=>{
          this.setState({
              show: true,
          })
    }

    hideModalFunction=()=>{
        this.setState({
            show: false,
        })
  }
  submitDataFuctionProps2 =(e)=>{
    this.props.submitDataFuctionProps(e)
    this.setState({
        show: false,
    })
  }
  

    render() {

        return (
            <>
                <Button onClick={this.showModalFunction}>Add Book</Button>
                <Modal
                    show={this.state.show}
                    onHide={this.hideModalFunction}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-custom-modal-styling-title">
                            Custom Modal Styling
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={this.submitDataFuctionProps2}>
                    <Form.Group>
                    <Form.Label>Book Title :</Form.Label>
                        <Form.Control as="select" size="lg"  name="bookTitle">
                            <option>Mathematics Book</option>
                        </Form.Control>
                        <br />
                        <Form.Label>Image URL :</Form.Label>
                        <Form.Control as="select" name="bookUrl">
                            <option>https://www.amazon.co.jp/images/I/51RIZ1XDSVL._AC_UL600_SR465,600_.jpg</option>
                        </Form.Control>
                        <br />
                        <Form.Label>Book Description :</Form.Label>
                        <Form.Control size="sm" as="select" name="bookDesecription">
                            <option>Our Preschool Math Workbook for Toddlers Ages 2-4 is a great way for your little one to learn basic mathematical skills such as number recognition, number tracing and counting. We’ve put together a variety of different activities that are both fun and educational! We’ve got little ones ourselves and know how important (and difficult!) it is to keep their attention!</option>
                        </Form.Control>
                        <Button type='sumbit' >submit</Button>
                    </Form.Group>
                </Form>
                    </Modal.Body>
                </Modal>
               
            </>
        )
    }
}


export default BookFormModal;