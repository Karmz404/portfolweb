import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

//import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';


function Hob(img,title,description){
  this.img = img;
  this.title = title;
  this.description = description;
}

let a = new Hob("", "Maghinoktok","Day Dreamer");
let b = new Hob("", "Matulog","Sleeper");
let c = new Hob("", "Overthink","Fav. Hobby");
let d = new Hob("", "Tan aw og Niana Vids","Crush ko si Niana.");




export default function SwiperComp() {
  let hobbieslist = [a,b,c,d];
  
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper border-4 w-72"
      >
        {
          hobbieslist.map((e,i) => {
            return (
             <SwiperSlide key={i} className="bg-teal-400 p-16">
                <div className="flex flex-col">
                   <h5 className="">{e.title}</h5>
                   <h5 className="">{e.description}</h5>
                </div>
             </SwiperSlide>
            )
          })
        }
      </Swiper>
    </>
  );
}
