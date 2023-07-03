import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebookSquare ,FaTwitter,FaLinkedinIn} from "react-icons/fa";
import { AiOutlineGoogle,AiOutlineInstagram,AiFillGithub } from "react-icons/ai";

function Fotter() {
  return (
    <MDBFooter bgColor='white' className='text-center text-lg-start text-muted'>
      {/* <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>

        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <FaFacebookSquare/>
          </a>
          <a href='' className='me-4 text-reset'>
            <FaTwitter />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiOutlineGoogle />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiOutlineInstagram />
          </a>
          <a href='' className='me-4 text-reset'>
            <FaLinkedinIn />
          </a>
          <a href='' className='me-4 text-reset'>
            <AiFillGithub />
          </a>
        </div>
      </section> */}

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                About As
              </h6>
              <p>
              We are the best social media platform for food lovers to seek and experience best foods.
              </p>
            </MDBCol>

            

          

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                NO:568/8
              </p>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Meal Seeker,colomba
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
              seeker@gmail.com
              </p>
              

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        Meal Seeker.lk
        </a>
      </div>
    </MDBFooter>
  );
}
export default Fotter;