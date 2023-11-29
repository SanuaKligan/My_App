import React from "react";
import classes from "./ForHome.module.css";

import crookedLine from "../../assets/images/for_home/КриваяЛиния.svg"
import forHomeFirstImg from "../../assets/images/for_home/forHomeFirstImg.png"
import forHomeSecondImg from "../../assets/images/for_home/forHomeSecondImg.png"
import forHomeThirdImg from "../../assets/images/for_home/forHomeThirdImg.png"
import alterForHomeThirdImg from "../../assets/images/for_home/alterForHomeThirdImg.png"
import miniLogo from "../../assets/images/for_home/miniLogo.svg"
import arrowDown from "../../assets/images/for_home/arrowDown.svg"
import block2img1 from "../../assets/images/for_home/block2img1.png"
import block2img2 from "../../assets/images/for_home/block2img2.png"
import block2img3 from "../../assets/images/for_home/block2img3.png"
import block2img4 from "../../assets/images/for_home/block2img4.png"

import block3img1 from "../../assets/images/for_home/block3img1.png"
import block3img2 from "../../assets/images/for_home/block3img2.png"
import alterBlock3img2 from "../../assets/images/for_home/alterBlock3img2.png"

import furnExImg1 from "../../assets/images/for_home/furnExImg1.png"
import furnExImg2 from "../../assets/images/for_home/furnExImg2.png"
import furnExImg3 from "../../assets/images/for_home/furnExImg3.png"
import furnExImg4 from "../../assets/images/for_home/furnExImg4.png"
import furnExImg5 from "../../assets/images/for_home/furnExImg5.png"
import furnExImg6 from "../../assets/images/for_home/furnExImg6.png"
import FormAudit from "../FormAudit/FormAudit";

import logo from "../../assets/images/for_home/logo.svg"
import curvedLine from "../../assets/images/about_us/curvedLine.svg"
import learnDetailed from "../../assets/images/about_us/learnMoreButton.svg"
import { NavLink } from "react-router-dom";


const ForHome = () =>{
    return(
        <div className={classes.forHome}>
            <div className={classes.titleBlock}>
                <div className={classes.titleWhite}>МЕБЕЛЬ ДЛЯ</div>
                <div className={classes.line15_6}></div>
                <div className={classes.titleYellow}>ВАШЕГО ДОМА</div>
            </div>
            <div className={classes.crookedLine} >
                <img src={crookedLine}/>
            </div>
            <div className={classes.firstCont}>
                <img src={forHomeFirstImg} />
                <img src={forHomeSecondImg}/>
                <img src={forHomeThirdImg} className={classes.bottomImg}/>
                <img src={alterForHomeThirdImg} className={classes.alterBottomImg}/>
            </div>
            <div className={classes.miniLogo} >
                <img src={miniLogo} />
            </div>
            <div className={classes.miniTextTop}>
                <div className={classes.titleWhite}>
                    Loft & Luxe
                </div>
                <div className={classes.titleWhite}>
                    гарантирует
                </div>
                <div className={classes.titleWhite}>
                    вам,
                </div>
                <div className={classes.titleWhite}>
                    что
                </div>
                <div className={classes.titleYellow}>
                    наша мебель
                </div>
                <div className={classes.titleWhite}>
                    станет
                </div>
                <div className={classes.titleWhite}>
                    вашей
                </div>
                <div className={classes.titleYellow}>
                    любимой мебелью
                </div>
            </div>
            <div className={classes.checkBelow}>Убедитесь ниже</div>
            <div className={classes.checkBelowImg}><img src={arrowDown} /></div>

            <div className={classes.alterTopBlock3}>
                <div><img src={block3img1} /></div>
            </div>

            <div className={classes.block2}>
                <div><img src={block2img1} /></div>
                <div><img src={block2img2} className={classes.firstCentrImg} /></div>
                <div><img src={block2img3} className={classes.secondCentrImg} /></div>
                <div><img src={block2img4} /></div>
            </div>

            <div className={classes.alterBottomBlock3}>
                <div><img src={alterBlock3img2} /></div>
            </div>

            <div className={classes.block3}>
                <div><img src={block3img1} className={classes.leftCentrImg}/></div>
                <div><img src={block3img2} className={classes.rightCentrImg} /></div>
            </div>

            <div className={classes.exampleText}>
                <div className={classes.titleWhite}>Пример</div>
                <div className={classes.titleWhite}>нашей</div>
                <div className={classes.titleWhite}>мебели</div>
                <div className={classes.titleWhite}>для</div>
                <div className={classes.titleYellow}>дома</div>
            </div>
            <div className={classes.furnExComt}>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg1}/></div>
                    <div className={classes.tit}>Большой обеденный стол</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Обеденный стол, гармонично сочетающий в
                        себе практичность и дизайн, создает 
                        идеальную атмосферу для наслаждения 
                        блюдами в кругу близких людей.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg2}/></div>
                    <div className={classes.tit}>Стол “Клеопатра”</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Стол "Клеопатра" - это воплощение
                        роскоши и изысканности. Его изящные
                        линии и безупречное исполнение придают
                        интерьеру шарм и элегантность.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg3}/></div>
                    <div className={classes.tit}>Уютное кресло</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Кресло для тех, кто ценит комфорт и уют.
                        Его мягкая обивка и удобная форма
                        позволяют расслабиться и насладиться
                        моментом отдыха.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg4}/></div>
                    <div className={classes.tit}>Тумба “Аркана”</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Идеальное решение для тех, кто ценит
                        элегантность и функциональность в своем
                        доме. Ее дизайн и практическая форма
                        создают атмосферу уюта и комфорта.
                    </div>
                </div>
                <div className={classes.furnBlock}>
                    <div className={classes.avImg}><img src={furnExImg5}/></div>
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
                    <div className={classes.avImg}><img src={furnExImg6}/></div>
                    <div className={classes.tit}>Кресло “Зелень”</div>
                    <div className={classes.siz}>130см на 240см</div>
                    <div className={classes.tex}>
                        Кресло "Зелень" - это прекрасный выбор
                        для позитивных людей. Его яркая зеленая
                        обивка и удобная форма позволяют
                        создать атмосферу свежести и легкости.
                    </div>
                </div>
            </div>
            
            <button className={classes.moreFurnButton}>
                <NavLink to={"/business/bars_cafes"} className={classes.navLink}>
                    Больше мебели в нашем каталоге
                </NavLink>
            </button>
            <div className={classes.fonImg}>
                <img src={logo} className={classes.fonImgTitle}/>
                <div className={classes.fonImgText}>Интересует, как проходит заказ?</div>
                <img src={curvedLine} className={classes.curvedLineImg}/>
                <div className={classes.learnDetailed}>
                    <NavLink to={"/how_it_will_be"} className={classes.learnDetailedNav}>
                        <img src={learnDetailed} />
                    </NavLink>
                </div>
            </div>
            <FormAudit />
        </div>
    );
};

export default ForHome;