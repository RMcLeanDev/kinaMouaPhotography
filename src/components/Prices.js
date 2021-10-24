import react, {useEffect} from 'react';
import '../scss/Prices.scss';

function Prices(){

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[])

    return(
        <div className="prices">
            <div>
                <h1>Prices</h1>
                <p>*Photoshoots will require the deposit fee to hold your spot in my schedule.</p>
                <p>*Deposit fee will be credited towards final price.</p>
            </div>
            <hr/>
            <div className="packagesContainer">
                <h1>Portraits & Senior Photos</h1>
                <div className="package">
                    <h2>MINI PACKAGE</h2>
                    <h3>$150 with 50% deposit</h3>
                    <h3>30 minute session, 1 outfit, 1 location</h3>
                    <h3>Gallery of edited photos!</h3>
                </div>
                <div className="package">
                    <h2>STANDARD PACKAGE</h2>
                    <h3>$250 with 50% deposit</h3>
                    <h3>1 hour session, 2 outfits, 1 location</h3>
                    <h3>Gallery of edited photos!</h3>
                </div>
                <div className="package">
                    <h2>PLATINUM PACKAGE</h2>
                    <h3>$400 with 50% deposit</h3>
                    <h3>2-3 hour session, 3 outfits 2 locations</h3>
                    <h3>Gallery of edited photos!</h3>
                </div>
            </div>
            <div className="packagesContainer">
                <h1>Families & Friends</h1>
                <div className="package">
                    <h3>$75 per person with 50% deposit</h3>
                    <h3>Minimum of 3 people</h3>
                    <h3>1 hour session, 1 outfit, 1 location</h3>
                    <h3>Gallery of edited photos!</h3>
                </div>
            </div>
            <div className="packagesContainer">
                <h1>Couples & Engagement</h1>
                <div className="package">
                    <h2>MINI PACKAGE</h2>
                    <h3>$150 with 50% deposit</h3>
                    <h3>30 minute session, 1 outfit, 1 location</h3>
                    <h3>Gallery of edited photos!</h3>
                </div>
                <div className="package">
                    <h2>STANDARD PACKAGE</h2>
                    <h3>$250 with 50% deposit</h3>
                    <h3>1 hour session, 2 outfits, 1 location</h3>
                    <h3>Gallery of edited photos!</h3>
                </div>
            </div>
            <div className="packagesContainer">
                <h1>Weddings</h1>
                <div className="package">
                    <h2>ELOPEMENT PACKAGE</h2>
                    <h3>$600 with 20% deposit</h3>
                    <h3>Maximum of 20 guests</h3>
                    <h3>Covers 4 hours of the elopement</h3>
                </div>
                <div className="package">
                    <h2>STANDARD PACKAGE</h2>
                    <h3>$1000 with 20% deposit</h3>
                    <h3>Covers 8 hours including getting ready, ceremony, reception, and first look photos</h3>
                </div>
            </div>
        </div>
    )
}

export default Prices;