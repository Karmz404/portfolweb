import React from "react";
import {motion} from "framer-motion";
import { TypeAnimation } from 'react-type-animation';


function Sk(img,title){
  this.img = img;
  this.title = title;
}
let a = new Sk("","Bullying");
let b = new Sk("","Judging");
let c = new Sk("","Critisizing");
let d = new Sk("","Sarcasm");


class Skills extends React.Component{
  constructor(props){
    super(props);
    this.skills = [a,b,c,d];
  }
   // VARIANTS___-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
  btnvar = {
    visible : {
      x:[500,0],
      transition:{
        duration:3
      }
    },
    hidden:{
      x:500
    }
  }
  // End of VARIANTS___-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
  
 // LIFE CYSCLES-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 // End of LIFE CYSCLES-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 
 
 //CUST METHODS-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 //END OF CUST METHODS-_-_-_-_--_-_-_-_-_-_-_-_-_--_-_-_-_
 
 
 // RWNDDEEEEEEEEEEEERRRRRR
  render(){
    return(
         <div id="Skills" className="Skills relative  bg-teal-500 flex  justify-cente px-12">
              <TypeAnimation
                  className="absolute text-teal-300 font-medium flex md:hidden"
                  sequence={[
                    "Thing's Im Good At",2000,"Thing's Im Fluent In",2000
                     ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{top:"-80px", left:"50%",transform:"translate(-50%,0%)"}}
                />
            
              <div className="flex md:flex-row flex-col bordedr justify-center flex-wrap  gap-10 SKILLSS">
                 {this.skills.map((e,i)=>{
                   return (
                        <div key={i} className="bg-teal-700 SKILLS-ITEMS  p-5 ">
                          <img src={e.img} />
                          <h6 className="">{e.title}</h6>
                       </div>
                     )
                 })}
              </div>
         </div>
      )
  }
}
export default Skills;



