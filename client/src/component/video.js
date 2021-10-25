import './video.css'
import {useMediaQuery} from 'react-responsive'
export default function Video() {
    const isPc = useMediaQuery({
        query : "(min-width:768px)"
    })
    const isMobile = useMediaQuery({
        query : "(max-width:767px)"
    })

    return(
        <div className = 'allvideocontainer'>
            <div className='imgcontainer'>
                <img className = 'img' src='https://cdn.pixabay.com/photo/2019/06/08/21/32/castle-4261029__480.jpg'/>
            </div>  
            <div className='videoinfo'>
                <div>1분만에 못질하는방법</div>
                <div>조회수</div>
            </div>   
        </div>
    )

}