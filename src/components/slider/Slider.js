import { useEffect } from "react";
import mark1 from "../../assets/slider1 (2).jpg";
import mark2 from "../../assets/slider4.jpg";
import css from "./Slider.css"


export default function Slider(){


    return(
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
  
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={mark1} class="images d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-info">
      <h5 className="fs-3 fw-bold">Swelcom There</h5>
        <p className="fs-4">You Can Find A Lot Of Things Here</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={mark2} class=" images d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block text-info">
        <h5 className="fs-3 fw-bold">We Have A good Chance</h5>
        <p className="fs-4">thing Agian And Agian Before Buy things</p>
      </div>
    </div>
  
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon  " aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon " aria-hidden="true"></span>
    <span class="visually-hidden" >Next</span>
  </button>
</div>
    )
}