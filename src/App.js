import "bootstrap/dist/css/bootstrap.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import UserForm from './components/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserDataProvider }from "./contexts/UserDataContext";
import UsersDisplay from "./components/UsersDisplay";

function App() {
  return (
    <UserDataProvider>
    <Container className="mt-2">
      <Row>
        <Col md={8} lg={8}>
          <UsersDisplay />
        </Col>
        <Col md={4}>
          <UserForm />
        </Col>
      </Row>
    </Container>
    </UserDataProvider>
  );
}

export default App;
