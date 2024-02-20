import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import meter1 from '../assets/img/meter1.png'
import meter2 from '../assets/img/meter2.png'
import meter3 from '../assets/img/meter3.png'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
     return (
        <section className='skill' id='skills'>
             <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className='skill-bx wow zoomIn'>
                            <h2>
                                Skills
                            </h2>
                            <p>Here's the list of my current skills and software domain</p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                <div className='item'>
                                    <img src={meter1} alt='web'/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter2} alt='illustration'/>
                                    <h5>Illustration</h5>
                                </div>
                                <div className='item'>
                                    <img src={meter3} alt='design'/>
                                    <h5>Graphic Design</h5>
                                </div>
                            
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className='background-image-left' src={colorSharp} alt='Image'/>
        </section>
     )

}