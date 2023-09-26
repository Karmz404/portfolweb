import React from "react";
import Loading from "../assets/img/loading.png"
import Loading2 from "../assets/img/loading.svg"
import LoadingLot from "../assets/img/animations/Loading.json"
import LoadingLot2 from "../assets/img/animations/LoaderLot2.json"
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { TypeAnimation } from 'react-type-animation';


export default class Loader extends React.Component {
  constructor(props){
    super(props);
    this.lotRef = React.createRef();
  }
  componentDidMount(){
    this.lotRef.current.setPlayerSpeed(1000);
  }
  
  render() {
    return (
      <div className="Loader flex flex-col text-teal-100 absolute flex justify-center items-center h-screen max-h-screen left-0 right-0">
          {/*<img className="w-60" src={Loading2} />*/}
          <TypeAnimation
                  className="text-white lg:text-3xl text-2xl brightness-150 p-1 font-extralight"
                  sequence={[
                    "K",1000,"KA",1000,"KAR",1000,"KARM",1000,"KARMA"
                     ]}
                  wrapper="h2"
                  cursor={true}
              repeat={0}
         />
         <Player
           ref={this.lotRef}
           className="md:w-48 w-32"
            autoplay
            speed={10/2 - 3}
            loop={false}
            src={LoadingLot2}
            style={{color:"white"}}
            onEvent={e => {
              e === "complete" && this.props.handleApp();
            }}
          >
          </Player>
      </div>
      )
  }
}