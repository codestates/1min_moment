import './slider.css'
import React, {useState, useEffect, useRef} from 'react'
import Slide from "./slide"
import axios from 'axios';
const TOTAL_SLIDES = 390;

const category = ['생활','교통','법','의료','교육','무언가1','무언가2','무언가3','무언가4']


function Slider({idx,idx2,getvideoInfo,getCategory}){
    let itemsToRender = null;
   
    const [array, SetArray] = useState([])
    
    const slideRef = useRef(null);
    const nextSlide = () => {
        var sliderElem = document.querySelector(`.${idx}`);
        sliderElem.dataset.currentSlide = 0
    var sliderElem = document.querySelector(`.${idx}`)
    sliderElem.style.transition = "none";
    sliderElem.append(sliderElem.firstElementChild)
    sliderElem.style.transform = `translateX(-${299.7}vw)`;
    sliderElem.getBoundingClientRect();
     sliderElem.style.transition = "all 0.5s ease-in-out";
    sliderElem.style.transform = `translateX(-${333}vw)`
    };
    const prevSlide = () =>{
        
    var sliderElem = document.querySelector(`.${idx}`)
        sliderElem.style.transition = "none";
        sliderElem.prepend(sliderElem.lastElementChild)
        sliderElem.style.transform = `translateX(-${366.6}vw)`;
        sliderElem.getBoundingClientRect();
         sliderElem.style.transition = "all 1s ease-in-out";
        sliderElem.style.transform = `translateX(-${333}vw)`
 



    }
   
     useEffect(() => {
        var sliderElem = document.querySelector( `.${idx}`)
         sliderElem.style.transform = `translateX(-${333}vw)`; // 사이드 * 3000

       }, []);

       useEffect(()=>{
        
         axios(
            {
            method: 'get',
            url: `${process.env.REACT_APP_SERVER}/videos`,
            params: {
             //솔트 넘겨주기
             sort: 'views',
             category:category[idx2],
             limit:10
            },
            
            headers: { }
  
          })
         .then((res)=>{
             SetArray(array => [...array, ...res.data.data])
        
         })

       }
       
       ,[])
       
     
       if(array){
          itemsToRender = array.map((obj, index) =>{
              return <Slide key={obj.id} title={obj.title}  timestamp={obj.createdAt} image={obj.thumbnail} video={obj.video} getvideoInfo={getvideoInfo} video_id={obj.id} category1={obj.category1} category2={obj.category2} category3={obj.category3}/>
             })
       }else{
            itemsToRender = '...loading'
        }
        const getrealcategory = () =>{
            getCategory(category[idx2])
            
        }
   
    return(
        <div className='slider_container'>
            <div class = 'wrapper'>
            <div className='slider_info'>
            <div>{category[idx2]}</div> 
            <div  className={category[idx2]} onClick={getrealcategory}>+더보기</div>
            
            </div>
            <div className={idx}>
               {itemsToRender}
               {itemsToRender}
               {itemsToRender}
            </div>
             <div onClick={prevSlide} className='prevslide slide_btn'> <div className='slide_btn2'> &lt; </div></div>
             <div onClick={nextSlide} className='nextslide slide_btn'> <div className='slide_btn2'>&gt; </div></div>
             </div>
           
           
             
         </div>
         
  
    )

    
}
export default Slider;

