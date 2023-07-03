import Carousel from 'react-bootstrap/Carousel';
import Fotter from './Footer'
import { FaHandshake } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
function UncontrolledExample() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[650px]"
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chan-walrus-958545.jpg&fm=jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
          <div className='buttons'>
                       <NavLink to="/login" className="btn btn-success px-4 rounded-pill">   GET STARTED   </NavLink>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[650px]"
          src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Join With Us</h3>
          <p>Attending networking events can provide you with many opportunities to socialize and build professional relationship</p>
          <div className='buttons'>
                       <NavLink to="/login" className="btn btn-outline-success px-4 rounded-pill">    GET STARTED   </NavLink>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-[650px]"
          src="https://images.squarespace-cdn.com/content/v1/57879a6cbebafb879f256735/1667226425853-GFTZP1P5PWAME97VPC6M/AD011219-21_original.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Join With Us</h3>
          <p>
          Going to a party or gathering with friends can be a fun way to socialize and meet new people.
          </p>
          <div className='buttons'>
                       <NavLink to="/login" className="btn btn-outline-success px-4 rounded-pill">   GET STARTED  </NavLink>
                    </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Fotter/>
    </div>
  );
}

export default UncontrolledExample;