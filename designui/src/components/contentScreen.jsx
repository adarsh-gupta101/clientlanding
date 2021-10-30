import React from "react";
import "../index.css";
import country from "../country.png";

function ContentScreen() {
  return (
    <div
      class='flex flex-col justify-center items-center w-full mt-16'
      style={{ width: "98vw" }}>
      <img
        src='/assets/logo.png'
        class='w-36 h-36'
        style={{ width: 93, height: 120 }}
      />
      <p class='text-white text-xl my-4'>
        The mediators between freelancers and clients
      </p>
      <div class='bg-white flex flex-row rounded-xl' style={{ width: "490px" }}>
        <input
          type='text'
          className='Search'
          class='rounded-md p-2 '
          style={{ width: 350 }}
          placeholder='Search Places in Netherlands'></input>

        <select name='cars' id='cars' style={{border:"1px solid black",padding:8,borderWidth:0,borderRight:"2px solid #72B257",
        borderLeft:"2px solid #72B257"

    }}>
          <option value='volvo'>All</option>
          <option value='saab'>xyz</option>
          <option value='opel'>abc</option>
          <option value='audi'>abc</option>
        </select>

       {/*  <select name='country' id='cars'>
          <option
            value='volvo'
            style={{ backgroundImage: country, width: 12, height: 12 }}>
          img
          </option>
          <option value='imh'>xyz</option>
          <option value='imh'>abc</option>
          <option value='audi'>abc</option>
        </select>       */}
          <img src={country} style={{objectFit:"contain",marginLeft:4}}></img>

      </div>
      <div className='flex  justify-around mt-12 content-center  w-full'>
        <div
          class='p-6 w-60 h-48  mt-8  bg-white rounded-xl shadow-md  items-center space-x-4 relative content-around'
          style={{ width: 227, height: 250 }}>
          <div class=''>
            <img
              class='m-auto'
              style={{ width: 38, height: 45 }}
              src='/assets/database.png'
              alt='ChitChat Logo'
            />
          </div>

          <div>
            <div class='text-xl  text-black mt-8 ' style={{ color: "#72B257" }}>
              Large Database of freelancers
            </div>
            <p class='text-gray-500 absolute bottom-2 flex items-center font-bold'  style={{ color: "#72B257" }}>
              Read more <img src='/assets/right.png' class='h-4 '></img>{" "}
              <img src='/assets/right.png' class='h-4 '></img>
            </p>
          </div>
        </div>
        <div
          class='p-6 w-60 h-48  mt-8 bg-white rounded-xl shadow-md relative items-center space-x-4'
          style={{ width: 230, height: 250 }}>
          <img
            src='/assets/tick.png'
            class='m-auto'
            alt=''
            style={{ width: 20, height: 19 }}
          />
          <div class='flex justify-center ' style={{ marginLeft: 4 }}>
            <img
              src='/assets/secondcard.png'
              style={{ width: 14, height: 22 }}
              alt='ChitChat Logo'
            />{" "}
            <img
              src='/assets/secondcard.png'
              alt='ChitChat Logo'
              style={{ width: 14, height: 22 }}
            />{" "}
            <img
              src='/assets/secondcard.png'
              alt='ChitChat Logo'
              style={{ width: 14, height: 22 }}
            />
          </div>
          <div>
            <div class='text-xl mt-8  text-black' style={{ color: "#72B257" }}>
              Pace your projects on Curramt as a cllient and find the suitable
              freelancer
            </div>
            <p class='text-gray-500 absolute bottom-2 flex items-center font-bold'  style={{ color: "#72B257" }}>
              Get Started <img src='/assets/right.png' class='h-4 '></img>{" "}
              <img src='/assets/right.png' class='h-4 '></img>
            </p>
          </div>
        </div>
        <div
          class='p-6 w-60 h-48 m-8 mt-8 bg-white rounded-xl shadow-md relative items-center space-x-4'
          style={{ width: 230, height: 250 }}>
          <div class=''>
            <img
              class=' m-auto'
              src='/assets/3card.png'
              alt='ChitChat Logo'
              style={{ width: 30, height: 25 }}
            />
            <img
              class='m-auto'
              style={{ width: 48, height: 17 }}
              src='/assets/31card.png'
              alt='ChitChat Logo'
            />
          </div>
          <div>
            <div class='text-xl  text-black mt-8' style={{ color: "#72B257" }}>
              Find more assignments as a freelancer
            </div>
            <p class='text-gray-500 absolute bottom-2 flex items-center font-bold '  style={{ color: "#72B257" }}>
              Read more <img src='/assets/right.png' class='h-4 '></img>{" "}
              <img src='/assets/right.png' class='h-4 '></img>
            </p>
          </div>
        </div>
        <div
          class='p-6 w-60 h-48  mt-8 bg-white rounded-xl relative shadow-md  items-center space-x-4'
          style={{ width: 230, height: 250 }}>
          <div class=''>
            <img
              class='m-auto'
              src='/assets/card4.png'
              alt='ChitChat Logo'
              style={{ width: 39, height: 45 }}
            />
          </div>
          <div>
            <div class='text-xl mt-8 text-black' style={{ color: "#72B257" }}>
              Proffesional guidance
            </div>
            <p
              class='text-gray-500 absolute bottom-2 font-bold flex items-center'
              style={{ color: "#72B257" }}>
              Read more
              <img src='/assets/right.png' class='h-4 '></img>{" "}
              <img src='/assets/right.png' class='h-4 '></img>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentScreen;
