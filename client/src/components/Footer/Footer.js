import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center bg-black' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
        </section>

        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Want style Ideas and Treats?</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' label='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='my-4'>
          <h4>
            Collaborate With Us by Sharing Your Design and You will get 20% on every product sell.
          </h4>
        </section>

        <section className=' mx-auto'>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 mt-5'>
              <h5 className='text-uppercase text-center' style={{color: "#F8EA54"}}>NEED HELP </h5>

         <div className='d-flex justify-content-center'>
         <ul className='list-unstyled text-start mb-0 ms-4'>
                <li>
                  <a href='#!' className='text-white'>
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Track Order
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Returns & Refunds
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    FAQ's
                  </a>
                </li>
              </ul>
         </div>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 mt-5'>
              <h5 className='text-uppercase text-center' style={{color: "#F8EA54"}}>Company</h5>

              <div className='d-flex justify-content-center'>
              <ul className='list-unstyled text-start ms-5 mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    We're Hiring
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Privacy Policy
                  </a>
                </li>
              </ul>
              </div>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 mt-5'>
              <h5 className='text-uppercase text-center' style={{color: "#F8EA54"}}>Category</h5>

              <div className='d-flex justify-content-center'>
              <ul className='list-unstyled mb-0 ms-4 text-start'>
                <li>
                  <a href='#!' className='text-white'>
                    Anime Tshirt
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Oversized Tshirt
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Hoodies
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Accessories
                  </a>
                </li>
              </ul>
              </div>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0 mt-5'>
              <h5 className='text-uppercase text-center' style={{color: "#F8EA54"}}>Contact Us</h5>

             <div className='d-flex justify-content-center'>
             <ul className='list-unstyled mb-0 ms-5 text-start'>
                <li>
                  <a href='#!' className='text-white'>
                    support@animemerch.in
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    ph. +91 1232321230
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Rajendra Nagar, Indore
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    
                  </a>
                </li>
              </ul>
             </div>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          AnimeMerch
        </a>
      </div>
    </MDBFooter>
  );
}