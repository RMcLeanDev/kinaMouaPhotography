import react, {useRef, useState, useEffect} from 'react';
import '../scss/Testimonials.scss';
import emailjs from 'emailjs-com';
import testim1 from '../assets/testim1.jpeg';
import testim2 from '../assets/testim2.jpg';
import testim3 from '../assets/testim3.jpeg';
import testim4 from '../assets/testim4.jpeg';
import downArrow from '../assets/downArrow.png';
import {useSwipeable} from "react-swipeable";

function Testimonials(){

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[])

    const handlers = useSwipeable({
        onSwipedLeft: () => nextPhoto(),
        onSwipedRight: () => prevPhoto()
    })

    
    let images = [testim1, testim2, testim3, testim4];
    let comment = ["“Kina is an incredibly gifted photographer; I absolutely adored the way all of my photos turned out. Her editing style is amazing, and she made me feel comfortable in every shoot.”",
        "“Working with Kina was such a confidence boost. It was my first photo shoot since I had my senior pictures done in 2015. I was so stunned by the end results. I haven’t felt this confident or beautiful in awhile. The actual shoot was comfortable, fun, full of laughter, and memorable.”",
        "“We love them all! Thank you so much for dealing with our weirdness!”",
        "“Kina is an amazin photographer, she got everything I wanted and took her time when taking the photos and turned out beautiful! I had an amazing experience. You won't regret working with Kina she does beautiful work and good with detail”"
    ]
    let name = ["-Noelle", "-Selena M.", "-Lexy & Garrett", "-Julia"]
    
    const [count, setCount] = useState(0);
    const [alert, setAlert] = useState(null);
    
    const form = useRef();
    
    const sendEmail = (e) => {
        e.preventDefault();
                
        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, 'template_iu3k0y6', form.current, process.env.REACT_APP_EMAILJS)
        .then((result) => {
            setAlert(<h1>Thank you for submitting your testimonial!</h1>)
        }, (error) => {
            setAlert(<p>{error.text}</p>)
        });
        
    };

    
    function prevPhoto(){
        if(count === 0){
            let num = images.length;
            setCount(num - 1);
        } else {
            setCount(count - 1);
        }
    }
    function nextPhoto(){
        if(count === images.length - 1){
            setCount(0)
        } else {
            setCount(count + 1);
        }
    }
      

    return(
        <div className="testimonials">
            <h1>Testimonials</h1>
            <hr/>
            <div className="desktopTestim">
                <div className="testimonialContainer">
                    <img src={testim1} alt=""/>
                    <div className="satatement">
                        <h2>“Kina is an incredibly gifted photographer; I absolutely adored the way all of my photos turned out. Her editing style is amazing, and she made me feel comfortable in every shoot.”</h2>
                        <h2>-Noelle</h2>
                    </div>
                </div>
                <div className="testimonialContainer">
                    <img src={testim2} alt=""/>
                    <div className="satatement">
                        <h2>“Working with Kina was such a confidence boost. It was my first photo shoot since I had my senior pictures done in 2015. I was so stunned by the end results. I haven’t felt this confident or beautiful in awhile. The actual shoot was comfortable, fun, full of laughter, and memorable.”</h2>
                        <h2>-Selena M.</h2>
                    </div>
                </div>
                <div className="testimonialContainer">
                    <img src={testim3} alt=""/>
                    <div className="satatement">
                        <h2>“We love them all! Thank you so much for dealing with our weirdness!”</h2>
                        <h2>-Lexy & Garrett</h2>
                    </div>
                </div>
                <div className="testimonialContainer">
                    <img src={testim4} alt=""/>
                    <div className="satatement">
                        <h2>“Kina is an amazin photographer, she got everything I wanted and took her time when taking the photos and turned out beautiful! I had an amazing experience. You won't regret working with Kina she does beautiful work and good with detail”</h2>
                        <h2>-Julia</h2>
                    </div>
                </div>
            </div>
            <div className="mobileTestim" {...handlers}>
                <div className="testimonialContainer">
                    <img src={images[count]} alt=""/>
                    <div className="satatement">
                        <h2>{comment[count]}</h2>
                        <h2>{name[count]}</h2>
                        <div className="buttons">
                            <button onClick={prevPhoto} className="prevButton">&#x2039;</button>
                            <button onClick={nextPhoto} className="nextButton">&#x203A;</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <img src={downArrow} className="downArrow" alt=""/>
            <h1>Submit Your Testimonial Here!</h1>
            <form ref={form} onSubmit={sendEmail}>
                {alert}
                <input type="text" name="from_name" required placeholder="Name:"/>
                <input type="email" name="reply_to" required placeholder="Email:"/>
                <textarea name="message" placeholder="Message:"/>
                <button type="submit" value="Send" required> Send </button>
            </form>
        </div>
    )
}

export default Testimonials;