import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';
import BookFormModal from './BookFormModal';
import {Card,Button, CardColumns} from 'react-bootstrap';
require('dotenv').config();

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      resultsBook: [],
      bookTitle: '',
      bookUrl: '',
      bookDesecription: '',
      bookData: '',
      serverRoute: process.env.REACT_APP_SERVER
    });
  }





  submitDataFuction = async (event) => {
    event.preventDefault();
    // console.log('hellooo from submit');
    // console.log('event.target.bookTitle.value',event.target.bookTitle.value);
    await this.setState({
      bookTitle: event.target.bookTitle.value,
      bookUrl: event.target.bookUrl.value,
      bookDesecription: event.target.bookDesecription.value,
    })
    console.log('this.state.bookTitle', this.state.bookTitle);
    const bookData = {
      userEmail: this.props.auth0.user.email,
      bookTitle: this.state.bookTitle,
      bookUrl: this.state.bookUrl,
      bookDesecription: this.state.bookDesecription,
    }
    await this.setState({
      bookData: bookData,
    })

    //add book data to DB from frontend to backend by axios.post

    // let postReqUl =`${serverRoute}/addbook`,bookData
    console.log('this.state.bookData', this.state.bookData);

    const addBook = await axios.post(`${this.state.serverRoute}/addbook`, this.state.bookData);

    console.log('this.state.bookTitle', this.state.bookTitle);
    console.log('addBook', addBook);
    this.setState({
      resultsBook: addBook.data,
    })
  }


  //delete function
  deleteFunctoin = async (index) => {
    const userEmail = {
      userEmail: this.props.auth0.user.email,
    }
    console.log('userEmail', userEmail);
    console.log('index', index);
    let newArrAfterDeleteing = await axios.delete(`${this.state.serverRoute}/deletebook/${index}`, { params: userEmail })
    this.setState({
      resultsBook: newArrAfterDeleteing.data,
    })
  }

  async componentDidMount() {

    let serverRoute = process.env.REACT_APP_SERVER
    // let bookReqUrl= 'http://localhost:3003/books?email=mariam.mohannad98@gmail.com';
    // let bookReqUrl= 'http://localhost:3003/books?email=ahmadabuosbeh20@gmail.com';

    let bookReqUrl = `${serverRoute}/books?email=${this.props.auth0.user.email}`;

    const resultsBook = await axios.get(bookReqUrl);



    this.setState({

      resultsBook: resultsBook.data[0].books,

    })
  }




  render() {
    return (
      <Jumbotron>
        <BookFormModal submitDataFuctionProps={this.submitDataFuction}></BookFormModal>

        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>

        {/* <h1>{this.state.bookTitle}</h1>
        <img src={this.state.bookUrl} alt =''></img>
        <p>{this.state.bookDesecription}</p> */}
  <CardColumns>
        {this.state.resultsBook.map((item, index) => {
          return (
            <>
              {/* <div key={index}>
                <h1>{item.bookTitle}</h1>
                <img src={item.bookImage} alt='' style={{ width: "500px" }}></img>
                <p>{item.bookDescription}</p>
                <button onClick={() => this.deleteFunctoin(index)}>Delete</button>
              </div> */}
            
                <Card key={index} >
                  <Card.Img variant="top" src={item.bookImage} />
                  <Card.Body>
                    <Card.Title>{item.bookTitle}</Card.Title>
                    <Card.Text>{item.bookDescription}</Card.Text>
                    <Button onClick={() => this.deleteFunctoin(index)}>Delete</Button>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 1 sec ago</small>
                  </Card.Footer>
                </Card>
                {/* <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in to additional
        content.{' '}
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This card has even longer content than the first to
                      show that equal height action.
      </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Footer>
                </Card> */}
              
            </>
          )


        })}
        </CardColumns>
        {/* <h1>{this.state.resultsBook.bookTitle}</h1> */}


        {/* <h1>{this.state.resultsBook.books[1].bookTitle}</h1>
        <img src={this.state.resultsBook.books[1].bookImage} alt =''></img>
        <p>{this.state.resultsBook.books[1].bookDescription}</p> */}

      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
