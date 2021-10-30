// import React from "react";
// import { Slide } from "react-slideshow-image";

// function Slideshowbanner() {
//   const slideImages = [
//     {
//       url: "assets/1.png",
//       caption: "Slide 1",
//     },
//     {
//       url: "assets/2.png",
//       caption: "Slide 2",
//     },
//     {
//       url: "assets/3.png",
//       caption: "Slide 3",
//     },
//     {
//       url: "assets/4.png",
//       caption: "Slide 4",
//     },
//   ];

//   return (
//     <div>
//       <Slide>
//         {slideImages.map((slideImage, index) => (
//           <div className='each-slide' key={index}>
//             <div className="w-64 h-64" style={{ backgroundImage: `url(${slideImage.url})` }}>
//               <span>{slideImage.caption}</span>
//             </div>
//           </div>
//         ))}
//       </Slide>
//     </div>
//   );
// }

// export default Slideshowbanner;
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import ContentScreen from "./contentScreen";
import Header from "./header";

const fadeImages = [
  "assets/1.png",
  "assets/2.png",
  "assets/3.png",
  "assets/4.png",
];

export default function Ap() {
  return (
    <div className='slide-container'>
      <Fade class='relative'>
        <div className='each-fade relative ' class='relative'>
          <img src={fadeImages[0]} className='' style={{}} />
          {/*  <div className="absolute top-0">
          <ContentScreen/>
          </div> */}
        </div>
        <div className='each-fade relative class="relative'>
          <img src={fadeImages[1]} className='' style={{}} />
          {/*  <div className="absolute top-0">
          <ContentScreen/>
          </div> */}
        </div>
        <div className='each-fade relative class="relative'>
          <img src={fadeImages[2]} className='' style={{}} />
          {/*  <div className="absolute top-0">
          <ContentScreen/>
          </div> */}
        </div>
        <div className='each-fade relative class="relative'>
          <img src={fadeImages[3]} className='' style={{}} />
          {/*  <div className="absolute top-0">
          <ContentScreen/>
          </div> */}
        </div>
      </Fade>
      <div className=' absolute top-0 z-10'>
        <Header />
        <ContentScreen />
      </div>
    </div>
  );
}
