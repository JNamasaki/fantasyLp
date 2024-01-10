import bg from './images/Hero.svg';
import { MdStars } from "react-icons/md"; // MdAwardStarRounded
import './App.css';
import { Container, Row, Col, Navbar, Nav, Button, CardGroup, Card } from 'react-bootstrap';

function App() {
  return (
    <>

      <Container className='hero-bg' fluid>
        <Row >
          <Col xs={12} md={3} className='nav'>

            <Navbar expand="lg" ligth>
              <Container>
                <Nav className='me-auto'>
                  <Nav.Link className='navItem' href='#Home'>Home</Nav.Link >
                  <Nav.Link className='navItem' href='#'>The Universe</Nav.Link >
                  <Nav.Link className='navItem' href='#'>Books</Nav.Link>
                  <Nav.Link className='navItem' href='#'>Enchanted Market</Nav.Link >
                  <Nav.Link className='navItem' href='#'>Magic Lessons</Nav.Link>
                  <Nav.Link className='navItem' href='#'>Contact</Nav.Link>

                  <Button className='navBtn' variant='ligth'> Get the book</Button>
                </Nav>
              </Container>

            </Navbar>
          </Col>
          <Col>
            <img src={bg} alt="hero" />
          </Col>
        </Row>
      </Container>
      <Container className='desk-bg'>
        <CardGroup className='cardgroup'>
          <Card className='card'>

            <Card.Body>
              <Card.Title className='tit'>The Arcane School</Card.Title>
              <Card.Subtitle className='subtit'>Immerse yourself in a world of magic and adventure!</Card.Subtitle>
              <Card.Text>
                Discover the School of Arcana, where the darkest secrets intertwine with mysterious powers.
                Welcome to the School of the Arcane, a bewitching place where young wizards and witches learn to master their magical powers. Explore rooms filled with puzzles, attend bewitching lessons and face fantastical creatures. Get ready to dive into a world of wonders and dangers!
              </Card.Text>
              <Card.Footer>
                <MdStars color='#B16C4C' />
                <MdStars color='#B16C4C' />
                <MdStars color='#B16C4C' />
              </Card.Footer>
            </Card.Body>

          </Card>
          <Card>
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
              <Card.Title className='tit'>The Quest for the Lost Orb</Card.Title>
              <Card.Subtitle className='subtit'>An epic adventure awaits!</Card.Subtitle>
              <Card.Text>
                Join the Quest for the Lost Orb and become the legendary hero the world needs.

                The Quest for the Lost Orb is about to begin. An ancient prophecy speaks of a hero destined to find the Lost Orb, a powerful relic capable of restoring the balance between good and evil. Assemble a team of brave companions, explore distant lands, and face formidable opponents to fulfill your destiny.
              </Card.Text>
              <Card.Footer>
                <MdStars color='#B16C4C' />
                <MdStars color='#B16C4C' />
                <MdStars color='#B16C4C' />
              </Card.Footer>
            </Card.Body>
            
          </Card>
          <Card>

            <Card.Body>
              <Card.Title className='tit'>The Alliance of Kingdoms</Card.Title>
              <Card.Subtitle className='subtit'> Forge alliances to save the kingdoms! </Card.Subtitle>
              <Card.Text>
                Unite with the kings and queens of the Kingdoms to repel the forces of darkness.<br />

                Darkness threatens to overwhelm the Realms. Join the Alliance of Kingdoms and forge bonds with the monarchs of enchanted lands. Strategize, develop your magical skills and prepare to face a demonic army. Your courage and determination will be the keys to preserving peace and prosperity in this fantastic universe
              </Card.Text>
              
              <Card.Footer>
                <MdStars color='#B16C4C' />
                <MdStars color='#B16C4C' />
                <MdStars color='#B16C4C' />
              </Card.Footer>
            </Card.Body>

          </Card>
        </CardGroup>
      </Container>
      <Container className='cta'>
        <Row >
          <Col>
            <Button variant='primaty'>Primary</Button>
            <Button variant='success'>Success</Button>
          </Col>
        </Row>
      </Container>
    </>

  );
}

export default App;
