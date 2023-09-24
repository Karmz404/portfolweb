import React from "react";
import {motion} from "framer-motion";

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
         <div id="Skills" className="Skills  bg-teal-500 flex justify-center md:h-96">
              <div className="">
                 {this.skills.map((e,i)=>{
                   return (
                        <div key={i} className="bg-teal-700 p-7">
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