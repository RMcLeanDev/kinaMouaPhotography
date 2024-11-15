import {useState} from 'react';
import image1 from '../assets/image0.jpeg';
import image2 from '../assets/image1.jpeg';
import image3 from '../assets/image2.jpeg';
import image4 from '../assets/image3.jpeg';
import image5 from '../assets/image0.6dbc1fe9.jpeg'
import image6 from '../assets/image2.42dee657.jpeg'
import image7 from '../assets/image4.jpeg'
import image8 from '../assets/image06.jpeg'
import image9 from '../assets/image12.jpeg'
import image10 from '../assets/image22.jpeg'
import image11 from '../assets/image02.jpeg'
import image12 from '../assets/image32.jpeg'
import image13 from '../assets/image1.1.jpeg';
import image14 from '../assets/image2.1.jpeg';
import image15 from '../assets/image3.1.jpeg';
import image16 from '../assets/image4.1.jpeg';
import image17 from '../assets/image0 (5).jpeg';
import image18 from '../assets/image0 (6).jpeg';
import image19 from '../assets/image1 (5).jpeg';
import image20 from '../assets/image2 (2).jpeg';
import wed920241 from '../assets/wedding9-2024.1.jpeg';
import wed920242 from '../assets/wedding9-2024.2.jpeg';
import wed920243 from '../assets/wedding9-2024.3.jpeg';
import wed920244 from '../assets/wedding9-2024.4.jpeg';
import ZoomImage from './ZoomImage';
import camryn1 from '../assets/cameryn1.jpeg'
import camryn2 from '../assets/cameryn2.jpeg'
import camryn3 from '../assets/cameryn3.jpeg'
import camryn4 from '../assets/camryn4.jpeg'
import '../scss/RecentWork.scss';
import 'aos/dist/aos.css';

function RecentWork(){

    const arry = [camryn1, camryn2, camryn3, camryn4, wed920244, wed920242, wed920243, wed920241, image20, image19, image17, image18, image15, image14, image16, image13, image12, image4, image3, image10, image1, image8, image9, image2, image5, image6, image11, image7];
    const [zoom, setZoom] = useState({show: false, imageInfo: null});

    return(
        <div>
            {zoom.show ? <ZoomImage close={() => setZoom({show: false, imageInfo: null})} image={zoom.imageInfo}/> : null}
            <h1><em>Recent Work</em></h1>
            <div className="recentWork">
                {Object.keys(arry).map(images => {
                    let image = arry[images];
                    return <img onClick={() => setZoom({show:true, imageInfo: image})} style={{maxHeight: "80vh", cursor: "pointer"}} src={image} data-aos="fade-up" alt=""/> 
                })}
            </div>
        </div>  
    )
}

export default RecentWork;