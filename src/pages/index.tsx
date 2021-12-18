import React, { Component, useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import 'bootstrap/dist/css/bootstrap.css';

import Paypal from '../components/Paypal';
import StripeFrom from '../components/stripeForm';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {


  const [valMe, setValMe] = useState();
  const [valTwoMe, setValTwoMe] = useState();

  // function jayss() {
  //   const valOne = document.getElementById('one');
  //   valOne?.click(() => {
  //     var data = valOne.value
  //   })
  // }







  return (
    <div className='sellerWrap'>
      <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700" >
          <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <i className="mdi mdi-credit-card-outline text-3xl"></i>
            </div>
          </div>
          <div className="mb-10">
            <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
          </div>
          <div className="mb-3 flex -mx-2 maidd">
            <Tabs defaultActiveKey="second">
              <Tab eventKey="first" id="one" title="Stripe Cards">
                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
                <StripeFrom />
              </Tab>
              <Tab eventKey="second" id="two" title="Paypal">
                <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" />
                <Paypal />
              </Tab>
            </Tabs>
            {/* <div className="px-2">
              <label htmlFor="type1" className="flex items-center cursor-pointer">
                <input onChange={(event) => setValMe(event.target.value)} onClick={toggleOne} type="radio" value="stripe" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" />
                <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
              </label>
            </div>
            <div className="px-2">
              <label htmlFor="type2" className="flex items-center cursor-pointer">
                <input onChange={(event) => setValTwoMe(event.target.value)} onClick={toggleTwo} type="radio" value="paypal" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" />
              </label>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );


}
