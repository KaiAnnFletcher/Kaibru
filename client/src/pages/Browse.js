import React, {Component} from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container, Row, Col } from "../components/Grid";
import { List, ListItem } from "../components/List";
import SearchForm from "../components/SearchForm";
import Bookmark from "../components/Bookmark";
//import LinkBtn from "../components/LinkBtn";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./style.css"
//import { response } from "express";
//import { response } from "express";
//import ResultList from "../components/ResultList";
//import SearchResultContainer from "../components/SearchResultContainer";


class Browse extends Component {

    state = {
    search: "",
    input: "",
    data: [],  
    verified: false  
};

//In future will need to construct OR conditions when multiple websites come into the picture
// When the website thumbnail is clicked, scrape all from that website's main page

handleClick() {
this.searchWebsite_1();
//console.log("this.searchWebsite_1: ", this.searchWebsite_1())
};

async searchWebsite_1() {
     API.scrapeAll()
     .then( data => {
     this.setState({ data: data.data })
     console.log("After this.setState")
     console.log("results: res.data ", {data: data})
     console.log("results: res.data.data ", {data: data.data})
     //console.log("results: res.data.data", {results: res.data.data})
     //console.log(res.data)
    // .catch(err =>{ console.log(err)
    
    //  });
    })
};

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    event.preventDefault();

    let fun = data => {

        this.setState({ data: data.data })

    };
    API.scrapeBySearch(this.state.search)
        .then(Array.from(fun))
        .catch(err => { console.log(err) })
}

  // handleFormSubmit = event => {
  //    event.preventDefault();

  //    API.scrapeBySearch(this.state.search)
  //     .then(response  =>  {
  //       let details = Array.from(response);
        
  //       // for (var data in (data.data)) {
  //       //   if ((data.data).hasOwnProperty(data)) {
  //       //     details.push(data);
  //       //   }
  //       for(var i = 0;  i < response.data.length; i++) {
  //          details.push({
  //          resultThumbnail: i, value: response.data[i],
  //          //resultDetails: i, value: data.data[i]
  //         })
  //       }
  //       for(var j = 0; j < response.data.length; j++) {
  //         details.push({
  //         resultDetails: j, value: response.data[j]
  //       })
  //     }
  //       this.setState({ data: details })
  //     });
  //   }
  
  // handleFormSubmit = (event) => {
  //   event.preventDefault();
    
  //   //  fun = (data) => {
  //   //   this.setState( {data: data.data} )
  //   //   console.log(data)
  //   //   console.log( {data: data.data} )
  //   // };
  //   API.scrapeBySearch(this.state.search)
  //         .then(async (data)  => {
  //         console.log(data)
  //         this.setState({ data: data.data })
  //       })
        
  //       //.catch(err => { console.log(err) })
  //   }       
    

//   handleFormSubmit = event => {
//   event.preventDefault();

//   API.scrapeBySearch()
//   .then( data =>{
//     this.setState( {data: data.data} )
//   })
// }



//    handleFormSubmit =  event => {
//    event.preventDefault.bind(this);
      
//      API.scrapeBySearch(this.state.search) 
//      .then(data => {
//       this.setState({ data: data.data }) 
//         console.log(data.data)
//        })   
//   }

  //handle saving
  handleSaveClick = id => {
    API.checkToken()
         .then(res => {
         if (res.status === 200) {
         this.setState({ verified: true })
         }
       })
       .catch(err => {
        console.error(err);
       });

    API.bookmark({
      id: id
    })
    .then(res => console.log("saved"))
    .catch(err => { console.log(err) })
  }
  
//   componentDidMount() {
//     API.checkToken()
//     .then(res => {
//     if (res.status === 200) {
//     this.setState({ verified: true })
//     }
//   })
//   .catch(err => {
//   console.error(err);
//   });
// }

    render() {
    return (
        <div>
          <Container fluid>

                <Row fluid>
                <Col size="md-12">
                    <Navbar />
                    <Jumbotron>
                    <h1>Websites</h1>
                    <h2>Click on any icon to begin your Search!</h2>
                    </Jumbotron>
                </Col>
                </Row>
                


                <Row>
                <Col size="md-12">
                {/* Placeholder for when the user signs in - user model needs to be created first with sequelize */}
                <div div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <img onClick={(e) => this.handleClick(e)} style={{backgroundColor: "lightBlue"}} className="StyleThumbnail" src="https://cdn11.bigcommerce.com/s-tzlp6/images/stencil/360x360/logo_1415602615__88358.original.png" class="rounded float-left" alt="Greenheart Shop" />
                {/* <img onClick={(e) => this.handleClick(e)} className="StyleThumbnail" src="https://image.shutterstock.com/image-vector/vector-logo-design-template-badge-260nw-493313134.jpg" class="rounded float-right" alt="Placeholder icon" />
                <img onClick={(e) => this.handleClick(e)} className="StyleThumbnail"src="https://image.shutterstock.com/image-vector/ecology-concept-green-city-on-260nw-701621245.jpg" class="rounded float-left" alt="Placeholder icon" />
                <img onClick={(e) => this.handleClick(e)} className="StyleThumbnail"src="https://image.shutterstock.com/image-photo/hand-holding-light-bulb-front-260nw-725473402.jpg" class="rounded float-right" alt="Placeholder icon" /> */}
                </div>
                <div>
                <br/>
                <br/>
                <br/>
                </div>
                </Col>
                </Row>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <Row>     
                <Col size="md-12">
                <SearchForm
                  search={this.state.search}
                  handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                />
                </Col>
                </Row>
 

                <Row>
                <Col size="md-12">

                {this.state && this.state.data.length ? (
                    <List>
                    {this.state.data.map(data => (
                    <ListItem key={data.data}>
                    <Container>
                    {this.state.data.resultThumbnail ? (
                    <img className ="StyleThumbnail" alt="thumbnail" src={data.resultThumbnail} ></img>
                    ) : (<img className ="StyleThumbnail" alt="thumbnail_1" src="https://cdn11.bigcommerce.com/s-tzlp6/images/stencil/360x360/logo_1415602615__88358.original.png" ></img>)}
                    <p>{data.resultDetails}</p>
                    
                    
                    <a target = "_blank" href ={data.resultLink}>{data.resultLink}</a>
                    
                    
                    </Container>
                    
                    {this.state.verified ? (
                      <Bookmark 
                      id={data.id}
                      onClick={this.handleSaveClick}
                      />
                    ) : (
                    <Link to={"/login"}>
                      <Bookmark
                      onClick={() => {return}}
                      />
                    </Link>
                    )}
                    {/* <Link to={"/browse"}>
                      <LinkBtn />
                    </Link> */}
                    </ ListItem>
                    ))}
                    </List>
                    ) : (
                    <div className = 'StyleBrowseMessage'>
                    <h5 style={{textAlign: "center"}}>No Results to display at this time. Click an icon or search for an item to get started!</h5>
                    </div>
                    )}
                </Col>
                </Row>
                <Footer />
</Container>
</div>
)}
}

export default Browse;