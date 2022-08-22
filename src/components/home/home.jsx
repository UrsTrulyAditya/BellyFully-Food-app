import React from 'react' 
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <div className="intro bg-image shadow-2-strong">
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
        <div className="container textBox mt-3 d-flex align-items-center justify-content-start text-left  h-100">
          <div className="text-white">
            <h1 className="mb-3 font-weight-bold">
              FILL YOUR BELLY
              </h1>
            <h5 className="mb-4 font-weight-bold">
            WITH DELICIOUS FOOD 
            </h5>
            <p className='mb-4 w-50 font-weight-light text-left'>Aside from their natural good taste and great crunchy texture 
            alongside wonderful colors and fragrances,eating a large serving of fresh.</p>
             
            <Link to='/items'>
            <button
              className="btn btn-outline-light btn-lg mt-2">
              Let's Find
            </button>
            </Link>
          </div>
        </div>
         
      </div>
    </div>
      {/* <Policies/> */}
        <main className="mt-5">
          <div className="container">
            {/*Section: Content*/}
            <div className="healthy-food-section pt-1 pb-1">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 gx-5 mb-4">
                    <div className="text-center">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
                        className="healthy-food-section-img"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 gx-5 mb-4">
                    <h1 className="healthy-food-section-heading">
                      Fresh, Healthy, Organic, Delicious Fruits
                    </h1>
                    <p className="healthy-food-section-description">
                      Say no to harmful chemicals and go fully organic with our range of
                      fresh fruits and veggies. Pamper your body and your senses with the
                      true and unadulterated gifts from mother nature. with the true and
                      unadulterated gifts from mother nature.
                    </p>
                    <button className="btn btn-warning">Watch Video</button>
                  </div>
                </div>
              </div>
            </div>


            {/*Section: Content*/}
            <hr className="my-5" />
            {/*Section: Content*/}
            <div
              className="delivery-and-payment-section pt-1 pb-1"
              id="deliveryPaymentSection"
            >
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-5 order-1 order-md-2">
                    <div className="text-center">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/delivery-payment-section-img.png"
                        className="delivery-and-payment-section-img"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-7 order-2 order-md-1">
                    <h1 className="delivery-and-payment-section-heading">
                      Delivery and Payment
                    </h1>
                    <p className="delivery-and-payment-section-description">
                      Enjoy hassle-free payment with the plenitude of payment options
                      available for you. Get live tracking and locate your food on a live
                      map. It's quite a sight to see your food arrive to your door. Plus,
                      you get a 5% discount on every order every time you pay online.
                    </p>
                    <button className="btn btn-warning">Order Now</button>
                    <div className="mt-3">
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/visa-card-img.png"
                        className="payment-card-img"
                      />
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/master-card-img.png"
                        className="payment-card-img"
                      />
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/paypal-card-img.png"
                        className="payment-card-img"
                      />
                      <img
                        src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/american-express-img.png"
                        className="payment-card-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Section: Content*/}

          </div>
        </main>
    </div>
  )
}

export default Home