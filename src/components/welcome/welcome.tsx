import React from 'react';
import  'bootstrap/dist/css/bootstrap.min.css';
import { Image,Row,Col ,Container} from 'react-bootstrap';
import welcomeImage from '../../assets/images/welcomeImage.jpg';

const Welcome: React.FC = () => {
  return (
    <Row className="welcome">
      <Col xs={12}>
        <h1 className="text-center my-3 ">My Library</h1>
      </Col>

      <Container className="px-0" fluid={true}>
      <Col xs={12}> 
        <Image   className="" src={welcomeImage}/>
      </Col>
      </Container>
      

      <Col xs={12} className="pt-2 text-end pe-5">
         
          Photo by <a href="https://reactsoftvesel2021jan.atlassian.net/jira/software/projects/CC/boards/25">sadeepa bhashitha </a>
            on <a href="https://reactsoftvesel2021jan.atlassian.net">Unsplash</a>      
      </Col>

    </Row>
);
} 

export default Welcome;
