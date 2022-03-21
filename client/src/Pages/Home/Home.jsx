import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Container, Col } from "react-bootstrap";
import { Navbar, Search, Pizza, Footer, Slider } from "../../components";
import { getAllPizzas } from "../../store/actions";
function App() {
  const dispatch = useDispatch();
  const { Pizzas } = useSelector((state) => state.pizzas.pizzas);
  useEffect(() => {
    document.title = "Pizza";
    dispatch(getAllPizzas());
  }, []);
  const arr = [1, 2, 3, 5, 8, 9, 90, 8];
  return (
    <Container>
      <Navbar />
      {/* <Search /> */}
      {/* <Slider /> */}
      <Row>
        {Pizzas &&
          Pizzas.map((item, index) => <Pizza Pizza={item} key={item._id} />)}
      </Row>
      <Footer />
    </Container>
  );
}

export default App;
