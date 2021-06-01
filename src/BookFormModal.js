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
                           Add Your Favourite Book Now!
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={this.submitDataFuctionProps2}>
                    <Form.Group>
                    <Form.Label>Book Title :</Form.Label>
                        <Form.Control as="select" size="lg"  name="bookTitle">
                            <option>Mathematics Book</option>
                            <option>Heat Transfer Book</option>
                            <option>Mechanical Dseign Book</option>
                            <option>Thermodynamics Book</option>
                        </Form.Control>
                        <br />
                        <Form.Label>Image URL :</Form.Label>
                        <Form.Control as="select" name="bookUrl">
                            <option>https://www.amazon.co.jp/images/I/51RIZ1XDSVL._AC_UL600_SR465,600_.jpg</option>

                            <option>https://www.witpress.com/theme/Witpress/img/covers/978-1-84564-656-1/introduction-to-heat-transfer.jpg</option>

                            <option>https://easyengineering.net/wp-content/uploads/2017/10/91nknEz3tXL.jpg</option>

                            <option>https://qph.fs.quoracdn.net/main-qimg-d6eee7e15558e2d5b6d16197d5fd8f3c.webp</option>
                        </Form.Control>
                        <br />
                        <Form.Label>Book Description :</Form.Label>
                        <Form.Control size="sm" as="select" name="bookDesecription">
                            <option>Our Preschool Math Workbook for Toddlers Ages 2-4 is a great way for your little one to learn basic mathematical skills such as number recognition, number tracing and counting. We’ve put together a variety of different activities that are both fun and educational! We’ve got little ones ourselves and know how important (and difficult!) it is to keep their attention!</option>

                            <option>This introduction to heat transfer offers advanced undergraduate and graduate engineering students a solid foundation in the subjects of conduction, convection, radiation, and phase-change, in addition to the related topic of mass transfer. A staple of engineering courses around the world for more than three decades, it has been revised and updated regularly by the authors, a pair of recognized experts in the field. The text addresses the implications, limitations, and meanings of many aspects of heat transfer, connecting the subject to its real-world applications and developing students' insight into related phenomena.</option>

                            <option>Shigley\'s Mechanical Engineering Design is intended for students beginning the study of mechanical engineering design. Students will find that the text inherently directs them into familiarity with both the basics of design decisions and the standards of industrial components. It combines the straightforward focus on fundamentals that instructors have come to expect, with a modern emphasis on design and new applications. This edition maintains the well-designed approach that has made this book the standard in machine design for nearly 50 years.</option>

                            <option>This textbook is for a one semester introductory course in thermodynamics, primarily for use in a mechanical or aerospace engineering program, although it could also be used in an engineering science curriculum. The book contains a section on the geometry of curves and surfaces, in order to review those parts of calculus that are needed in thermodynamics for interpolation and in discussing thermodynamic equations of state of simple substances. It presents the First Law of Thermodynamics as an equation for the time rate of change of system energy, the same way that Newton’s Law of Motion, an equation for the time rate of change of system momentum, is presented in Dynamics. Moreover, this emphasis illustrates the importance of the equation to the study of heat transfer and fluid mechanics. New thermodynamic properties, such as internal energy and entropy, are introduced with a motivating discussion rather than by abstract postulation, and connection is made with kinetic theory.</option>
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