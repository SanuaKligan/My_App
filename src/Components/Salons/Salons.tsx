import React from "react";
import classes from "./Salons.module.css"
import alterFirstImg from "../../assets/images/salons/alterFirstImg.png"
import firstImg from "../../assets/images/salons/firstImg.png"
import crookedLine from "../../assets/images/salons/crookedLine.svg"
import SeeBelow from "../SeeBelow/SeeBelow";

import slide1Big from "../../assets/images/salons/slide1Big.png"
import slide1 from "../../assets/images/salons/slide1.png"
import slide4 from "../../assets/images/salons/slide4.png"
import slide2 from "../../assets/images/salons/slide2.png"
import slide3 from "../../assets/images/salons/slide3.png"
import slide3Big from "../../assets/images/salons/slide3Big.png"

import furnExImg1 from "../../assets/images/salons/furnExImg1.png"
import furnExImg2 from "../../assets/images/salons/furnExImg2.png"
import furnExImg3 from "../../assets/images/salons/furnExImg3.png"
import furnExImg4 from "../../assets/images/salons/furnExImg4.png"
import furnExImg5 from "../../assets/images/salons/furnExImg5.png"
import furnExImg6 from "../../assets/images/salons/furnExImg6.png"

import logo from "../../assets/images/Group 4606.png"
import curvedLine from "../../assets/images/about_us/curvedLine.svg"
import learnDetailed from "../../assets/images/about_us/learnMoreButton.svg"
import FormAudit from "../FormAudit/FormAudit";
import { NavLink } from "react-router-dom";
import Slider from "../../UI/Slider/Slider";



const Salons = () => {
    const slides = [slide1, slide2, slide3, slide4]
    return(
        <div className={classes.salons}>
            <div className={classes.firstContainer}>
                <div className={classes.logoText}>
                    <div className={classes.titleWhite}>МЕБЕЛЬ ДЛЯ </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>САЛОНОВ</div>
                </div>
            </div>
            <div><img src={alterFirstImg} className={classes.alterFirstImg} /></div>
            <div><img src={firstImg} className={classes.firstImg} /></div>
            <div className={classes.secondContainer}>
                <div className={classes.vertical49}></div>
                <div className={classes.text1}>Нужна мебель для салонов?</div>
                <div className={classes.crookedLine}><img src={crookedLine} /></div>
                <div className={classes.text2}>
                    <div className={classes.titleWhite}>
                        У нас вы найдете
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>
                        лучшее
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleWhite}>
                        качество и дизайн, по
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleYellow}>
                        самой
                    </div>
                </div>
                <div className={classes.text3}>
                    <div className={classes.titleYellow}>
                        справедливой
                    </div>
                    <div className={classes.line15_6}></div>
                    <div className={classes.titleWhite}>
                        цене
                    </div>
                </div>
            </div>
            <SeeBelow />
            <div className={classes.noneSlider}>
                <Slider slides={slides} />
            </div>
            <div className={classes.alterSlides}>
                <div className={classes.alterSlideBig}><img src={slide1Big} /></div>
                <div className={classes.alterSlide}><img src={slide4} /></div>
                <div className={classes.alterSlide}><img src={slide2} /></div>
                <div className={classes.alterSlideBig}><img src={slide3Big} /></div>
            </div>
            <div className={classes.exampleText}>
                <div className={classes.titleWhite}>Пример нашей мебели</div>
                <div className={classes.titleWhite}>для </div>
                <div className={classes.titleYellow}>салонов</div>
            </div>
            <div className={classes.furnExComt}>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg1}/></div>
                    <div className={classes.tit}>Элегантная обувница</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Элегантная обувница с геометрическими 
                        формами и минималистическим дизайном. 
                        Идеально подходит для современных 
                        интерьеров.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg2}/></div>
                    <div className={classes.tit}>Стильный стеллаж</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Стильный и функциональный дизайнерский 
                        стеллаж с уникальной геометрической 
                        формой, который идеально подходит для 
                        любого интерьера. 
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg3}/></div>
                    <div className={classes.tit}>Раскошный стеллаж и стол</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Современный дизайнерский круглый стол, 
                        созданный для тех, кто ценит комфорт и 
                        элегантность в интерьере. Идеальным 
                        выбор для любого помещения.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg4}/></div>
                    <div className={classes.tit}>Прямоугольный стол для салона</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Изысканный и функциональный стол для 
                        кафе, который обеспечивает комфортное 
                        пространство продуктивной работы.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg5}/></div>
                    <div className={classes.tit}>Салонный стул</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Элегантный и удобный стул для салона, 
                        который сочетает в себе функциональность 
                        и стильный дизайн, создавая идеальное 
                        рабочее пространство.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg6}/></div>
                    <div className={classes.tit}>Стол и два стула</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Soft Loft - это лучший выбор для салонов, 
                        которые ищут качественную мебель 
                        вкоманда опытных специалистов готова 
                        предложить
                    </div>
                </div>
            </div>
            <div className={classes.moreFurnButton}>
                <NavLink to={"/catalog"} className={classes.navLink}>
                    Перейти в полный каталог
                </NavLink>
            </div>
            <FormAudit />
        </div>
    );
};

export default Salons;