import React from 'react'
import './Products.css'
import 'react-multi-carousel/lib/styles.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

function Products() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 4,
        
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                    
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1
                }
            }
        ]
    };

    
    return (
        <>
            <div className='main'>


                <div className='card-product-container'>
                    <div className="card-product">
                        <h5>Handpicked music & audio</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg" alt="" />
                                <p>Headsets</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg" alt="" />
                                <p>Keyboards</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg" alt="" />
                                <p>Computer Mice</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg" alt="" />
                                <p>Chairs</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">see more</a>
                    </div>

                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Deals in PCs</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '250px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v1._SY304_CB573698005_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop now</a>
                    </div>

                    <div className="card-product">
                        <h5>Get ready to celebrate Easter</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_LP-HP_B08MYX5Q2W_01.23._SY116_CB619238939_.jpg" alt="" />
                                <p>Arts and Crafts</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_home_B08RCCP3HV_01.23._SY116_CB619238939_.jpg" alt="" />
                                <p>Puzzles and Games</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_kitchen_B0126LMDFK_01.23._SY116_CB619238939_.jpg" alt="" />
                                <p>Books</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_186x116_health-beauty_B07662GN57_01.23._SY116_CB619238939_.jpg" alt="" />
                                <p>Easter eggs</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop all</a>
                    </div>


                    <div className="card-product">
                        <h5>Handpicked music & audio</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://m.media-amazon.com/images/I/41aF1Kpc1iL._SY160_.jpg" alt="" />
                                <p>Headphones</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://m.media-amazon.com/images/I/316r7290SLL._SY75_.jpg" alt="" />
                                <p>Guitars</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://m.media-amazon.com/images/I/31qcGgiIK7L._SY75_.jpg" alt="" />
                                <p>Keyboards</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://m.media-amazon.com/images/I/313zteqI9LL._SY75_.jpg" alt="" />
                                <p>Microphones</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">see more curated tech</a>
                    </div>

                </div>
                <div className='card-product-container'>
                    <div className="card-product">
                        <h5>Handpicked music & audio</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics/XCM_CUTTLE_1468425_2580535_186x116_1X_en_US._SY116_CB609480017_.jpg" alt="" />
                                <p>Headphones</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1546380_2938463_186x116_1X_en_US._SY116_CB613156637_.jpg" alt="" />
                                <p>Guitars</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2023/img/Consumer_Electronics/XCM_CUTTLE_1545875_2934703_186x116_1X_en_US._SY116_CB613346538_.jpg" alt="" />
                                <p>Keyboards</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Consumer_Electronics/XCM_CUTTLE_1468425_2580538_186x116_1X_en_US._SY116_CB609480017_.jpg" alt="" />
                                <p>Microphones</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">see more curated tech</a>
                    </div>

                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Fill your Easter basket with joy</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '250px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/Easter/Fuji_Easter_Dash_card_1x_EN._SY304_CB581341381_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop gifts</a>
                    </div>

                    <div className="card-product">
                        <h5>Get ready to celebrate Easter</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/1H/Easter/GW/QuadCard/EA_2024_AH_119_Gateway_QuadCard_Crafts_186x116_1x._SY116_CB582182024_.jpg" alt="" />
                                <p>Arts and Crafts</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/1H/Easter/GW/QuadCard/EA_2024_AH_118_Gateway_QuadCard_PuzzlesGames_186x116_1x._SY116_CB582182024_.jpg" alt="" />
                                <p>Puzzles and Games</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/1H/Easter/GW/QuadCard/EA_2024_AH_120_Gateway_QuadCard_Books_186x116_1x._SY116_CB582182024_.jpg" alt="" />
                                <p>Books</p>
                            </div>
                            <div className='card-nested'>
                                <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2024/1H/Easter/GW/QuadCard/EA_2024_AH_121_Gateway_QuadCard_Eggs_186x116_1x._SY116_CB582182024_.jpg" alt="" />
                                <p>Easter eggs</p>
                            </div>

                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop all</a>
                    </div>


                    <div style={{ width: '300px' }} className="card-product">
                        <h5>Home décor under $50</h5>
                        <div className='card-product-nested-card'>
                            <div className='card-nested'>
                                <img style={{ width: '250px', height: '250px' }} src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2023/EBF23/Fuji_Desktop_Single_image_EBF_1x_v6._SY304_CB573698005_.jpg" alt="" />
                                <p></p>
                            </div>


                        </div>
                        <a style={{ textDecoration: 'none', padding: '15px', fontSize: '13px' }} href="">Shop now</a>
                    </div>


                </div>



            </div>

            <div className="slider-container">
                <h5>Best Sellers in Books</h5>
                <Slider {...settings}>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/91q6YJUqiAL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/913C+MR3S5L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71ihGxMQEBL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/810bsxh1MmL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81uxN1LVsML._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/91uwJky9oWL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81TmnPZWb0L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81uv7QtqJ0L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/91yskyVPAmL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81VP91WWhSL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81xj1NY02TL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/818PqOiT44L._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81RrEEMiOCL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/51xKFo2B+RL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81AHTyq2wVL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/917Bc9C1MlL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71EJeWqNPLL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81NsX5gOJkL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71sOjwYbBgL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/611X8GI7hpL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81EmtXw0mrL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81RYRl7DvXL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/812XbpMDovL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/81h4xinmqmL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/8136u75+kkL._AC_SY200_.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/I/71X9FMy66NL._AC_SY200_.jpg" alt="" />
                    </div>
                </Slider>
            </div>

        </>
    )
}

export default Products
