//npm unstall react-slick --save
import './slider.css'
import React, {useState, useEffect, useRef} from 'react'
import Slide from "./slide"

let img1 = 'https://cdn.pixabay.com/photo/2019/06/08/21/32/castle-4261029__480.jpg'
let img2 = 'https://cdn.pixabay.com/photo/2021/09/23/09/01/swan-6649194__480.jpg'
let img3 = 'https://cdn.pixabay.com/photo/2021/07/30/08/21/street-6509043_1280.jpg'
let img4 = 'https://cdn.pixabay.com/photo/2021/08/07/08/50/staircase-6528080_1280.jpg'
let img5 = 'https://cdn.pixabay.com/photo/2021/09/02/02/34/sunset-6592545_1280.jpg'
let img6 = 'https://cdn.pixabay.com/photo/2020/12/03/14/35/horror-5800684_1280.jpg'
let img7 = 'https://cdn.pixabay.com/photo/2021/09/25/18/21/witch-6655568_1280.jpg'
let img8 = 'https://cdn.pixabay.com/photo/2021/08/20/18/00/shaving-6560988_1280.jpg'
let img9 = 'https://cdn.pixabay.com/photo/2021/01/01/21/31/halloween-5880068_1280.jpg'
let img10 = 'https://cdn.pixabay.com/photo/2018/11/26/19/43/autumn-3840138_1280.jpg'
const img = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]
const TOTAL_SLIDES = 390;
function Slider(){
   // const [currentSlide, setCurrentSlide]=useState(0);
    const slideRef = useRef(null);
    const nextSlide = () => {
        var sliderElem = document.querySelector(".slidercontainer");
        sliderElem.dataset.currentSlide = 0
        
    //     if(currentSlide >= TOTAL_SLIDES){
    //    // setCurrentSlide(0);
        
    //     document.querySelector(".slidercontainer")
    //     }else if(currentSlide===0){
    //     //setCurrentSlide(currentSlide+85);
    //     }else if(currentSlide=== 85){
    //     //setCurrentSlide(currentSlide+90);
    //     }else if(currentSlide=== 170 || currentSlide=== 205){
    //     //setCurrentSlide(currentSlide+90);
    //     }else{
    //     //setCurrentSlide(currentSlide+30);    
    //     }
    var sliderElem = document.querySelector(".slidercontainer")
    sliderElem.style.transition = "none";
    sliderElem.append(sliderElem.firstElementChild)
    sliderElem.style.transform = `translateX(-${2700}px)`;
    sliderElem.getBoundingClientRect();
     sliderElem.style.transition = "all 0.5s ease-in-out";
    sliderElem.style.transform = `translateX(-${3000}px)`
    };
    const prevSlide = () =>{
    var sliderElem = document.querySelector(".slidercontainer")
        sliderElem.style.transition = "none";
        sliderElem.prepend(sliderElem.lastElementChild)
        sliderElem.style.transform = `translateX(-${3300}px)`;
        sliderElem.getBoundingClientRect();
         sliderElem.style.transition = "all 0.5s ease-in-out";
        sliderElem.style.transform = `translateX(-${3000}px)`
        

    }
    // const rendering = () =>{
    //     let result = []
    //     for (let i = 0 ; i < img.length; i++ ){
    //         if(currentSlide= 0){
    //             result.push()
    //         }
    //     }
    // }
     useEffect(() => {
        var sliderElem = document.querySelector(".slidercontainer")
        //sliderElem.style.transition = "all 0.5s ease-in-out";
         sliderElem.style.transform = `translateX(-${3000}px)`; // 사이드 * 3000
        // sliderElem.dataset.currentSlide = 3000
       }, []);
    
    return(
    
        <div className='container'>
            <div class = 'wrapper'>
            {/* {currentSlide} */}
            <div className='slidercontainer'>
               
                <Slide img={img1}/>
                <Slide img={img2}/>
                <Slide img={img3}/>
                <Slide img={img4}/>
                <Slide img={img5}/>
                <Slide img={img6}/>
                <Slide img={img7}/>
                <Slide img={img8}/>
                <Slide img={img9}/>
                <Slide img={img10}/>
                <Slide img={img1}/>
                <Slide img={img2}/>
                <Slide img={img3}/>
                <Slide img={img4}/>
                <Slide img={img5}/>
                <Slide img={img6}/>
                <Slide img={img7}/>
                <Slide img={img8}/>
                <Slide img={img9}/>
                <Slide img={img10}/>
                <Slide img={img1}/>
                <Slide img={img2}/>
                <Slide img={img3}/>
                <Slide img={img4}/>
                <Slide img={img5}/>
                <Slide img={img6}/>
                <Slide img={img7}/>
                <Slide img={img8}/>
                <Slide img={img9}/>
                <Slide img={img10}/>
            </div>
             <div onClick={prevSlide} className='prevslide slide_btn'> <div className='slide_btn2'> &lt; </div></div>
             <div onClick={nextSlide} className='nextslide slide_btn'> <div className='slide_btn2'>&gt; </div></div>
             </div>
             
         </div>
  
    )

    
}
export default Slider;

