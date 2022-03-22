import { Carousel } from "react-bootstrap";
import images from "../../assets/constants";
import Spinner from "../../common/Spinner";
function Slider() {
  return (
    <Carousel fade style={{ marginBottom: "10px" }}>
      {images ? (
        images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={`${index} slide`}
              style={{ height: "500px" }}
            />
          </Carousel.Item>
        ))
      ) : (
        <Spinner />
      )}
    </Carousel>
  );
}

export default Slider;
