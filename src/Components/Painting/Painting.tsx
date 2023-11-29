import React from "react";
import classes from "./Painting.module.css";

import loftLogo from "../../assets/images/sawing/loftLogo.svg"

import secCont1Img from "../../assets/images/painting/secCont1Img.png"
import secCont2Img from "../../assets/images/painting/secCont2Img.png"
import secCont3Img from "../../assets/images/painting/secCont3Img.png"
import alterSecCont3Img from "../../assets/images/painting/alterSecCont3Img.png"

import advantageImg from "../../assets/images/sawing/advantageImg.png"

import logo1Img from "../../assets/images/painting/logo1Img.svg"
import logo2Img from "../../assets/images/painting/logo2Img.svg"
import logo3Img from "../../assets/images/painting/logo3Img.svg"

import fifthCont1Img from "../../assets/images/welding/fifthCont1Img.png"
import fifthCont2Img from "../../assets/images/welding/fifthCont2Img.png"
import fifthCont3Img from "../../assets/images/painting/fifthCont3Img.png"
import fifthCont4Img from "../../assets/images/painting/fifthCont4Img.png"
import fifthCont5Img from "../../assets/images/sawing/fifthCont6Img.png"
import fifthCont6Img from "../../assets/images/painting/fifthCont6Img.png"
import fifthCont7Img from "../../assets/images/welding/fifthCont3Img.png"

import FormAudit from "../FormAudit/FormAudit";

const Painting: React.FC = (props) => {
        return (
            <div className={classes.painting}>
                <div className={classes.firstContainer}>
                    <div className={classes.logoText}>
                        <div className={classes.sawingTitleYellow}>
                            LOFT RT
                        </div>
                        <div className={classes.titleWhite}>
                            ПОРОШКОВАЯ ПОКРАСКА
                        </div>
                    </div>
                    <div className={classes.alterLogoText}>
                        <div className={classes.titleYellow}>
                            ПОРОШКОВАЯ
                        </div>
                        <div className={classes.titleWhite}>
                            ПОКРАСКА
                        </div>
                    </div>
                </div>
                <div className={classes.fonImg}></div>
                <div className={classes.loftLogo}><img src={loftLogo}/></div>
                <div className={classes.underLogoText}>
                    <div className={classes.titleYellow}>Мы – лучшая компания среди </div>
                    <div className={classes.titleYellow}>конкурентов, </div>
                    <div className={classes.titleWhite}>обеспечивающая </div>
                    <div className={classes.titleWhite}>качество работы с </div>
                    <div className={classes.titleYellow}>порошковой </div>
                    <div className={classes.titleYellow}>покраски. </div>
                    <div className={classes.titleWhite}>Мы работаем </div>
                    <div className={classes.titleWhite}>только с </div>
                    <div className={classes.titleWhite}>лучшими производителями:</div>
                </div>
                <div className={classes.partnersLogo}>
                    <img className={classes.logo1Img} src={logo1Img} />
                    <img className={classes.alterlogo3Img} src={logo3Img}/>
                    <img className={classes.logo2Img} src={logo2Img}/>
                    <img className={classes.logo3Img} src={logo3Img}/>
                </div>
                <div className={classes.firstTitle}>
                    <div className={classes.titleWhite}>Что такое </div>
                    <div className={classes.titleYellow}>порошковая </div>
                    <div className={classes.titleYellow}>покраска </div>
                    <div className={classes.titleWhite}>и чем она </div>
                    <div className={classes.titleWhite}>отличается от обычной?</div>
                </div>
                <div className={classes.paragsCont}>
                    Порошковая покраска — это процесс нанесения покрытия на поверхность различных материалов. 
                    В отличие от жидкой краски, порошковая покраска осуществляется путем электростатического распыления 
                    порошка на предварительно подготовленную поверхность.
                </div>
                <div className={classes.paragsCont}>
                    Порошковая краска состоит из смеси полимеров, пигментов и добавок. При нагревании в специальной печи порошковая краска тает и прочно сцепляется с поверхностью, образуя равномерное и долговечное покрытие.
                </div>
                <div className={classes.paragsCont}>
                    Этот метод имеет несколько преимуществ. Во-первых, порошковая покраска обеспечивает высокую стойкость к царапинам, химическим воздействиям, ультрафиолетовому излучению и атмосферным условиям. Во-вторых, она экологически безопасна, поскольку не содержит растворителей и других вредных веществ. Кроме того, порошковая покраска позволяет создавать разнообразные оттенки и эффекты, такие как металлическое покрытие, матовая отделка и другие.
                </div>
                <div className={classes.secondContainer}>
                    <img src={secCont1Img} />
                    <img src={secCont2Img}/>
                    <img src={secCont3Img} className={classes.bottomImg}/>
                    <img src={alterSecCont3Img} className={classes.alterBottomImg}/>
                </div>
                <div className={classes.sevenStages}>
                    <div className={classes.titleWhite}>Заказ делится всего на </div>
                    <div className={classes.titleYellow}>7 этапов</div>
                </div>
                <div className={classes.fifthContainer}>
                    <div className={classes.fifthBlock1}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>1</div>
                                <div className={classes.title}>
                                    <div>
                                        Обсуждение требований 
                                    </div>
                                    <div>
                                        и деталей проекта
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                Вы можете связаться с нами через наш сайт или по телефону, чтобы оставить заявку на изготовление мебели. Мы примем вашу заявку и свяжемся с вами в ближайшее время.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont1Img} /></div>
                    </div>
                    <div className={classes.fifthBlock2}>
                        <div className={classes.imgSide}><img src={fifthCont2Img} /></div>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>2</div>
                                <div className={classes.title}>
                                    <div>
                                        Подготовка 
                                    </div>
                                    <div>
                                        документации
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                После обсуждения требований, составляется техническое задание или чертежи, которые описывают детали и параметры металлоконструкции, а также спецификации сварки. Эта документация будет использоваться в процессе выполнения заказа.
                            </div>
                        </div>
                        <div className={classes.alerImgSide}><img src={fifthCont2Img} /></div>
                    </div>
                    <div className={classes.fifthBlock1}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>3</div>
                                <div className={classes.title}>
                                    <div>
                                        Расчет 
                                    </div>
                                    <div>
                                        стоимости
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                На основе предоставленных требований и чертежей, мы производим расчет стоимости выполнения заказа. Сюда входят затраты на материалы, труд и оборудование, а также сроки выполнения работы.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont4Img} /></div>
                    </div>
                    <div className={classes.fifthBlock2}>
                        <div className={classes.imgSide}><img src={fifthCont3Img} /></div>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>4</div>
                                <div className={classes.title}>
                                    <div>
                                        Согласование условий и 
                                    </div>
                                    <div>
                                        подписание договора
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                После того как клиент оценит предложение и уточнит детали, происходит согласование условий и подписание договора на выполнение сварочных работ.
                            </div>
                        </div>
                        <div className={classes.alerImgSide}><img src={fifthCont3Img} /></div>
                    </div>
                    <div className={classes.fifthBlock1}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>5</div>
                                <div className={classes.title}>
                                    <div>
                                        Изготовление 
                                    </div>
                                    <div>
                                        металлоконструкции
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                После заключения договора начинается процесс изготовления металлоконструкции согласно утвержденным чертежам и спецификациям. В этот период может потребоваться закупка материалов.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont5Img} /></div>
                    </div>
                    <div className={classes.fifthBlock2}>
                        <div className={classes.imgSide}><img src={fifthCont6Img} /></div>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>6</div>
                                <div className={classes.title}>
                                    <div>
                                        Сварка и 
                                    </div>
                                    <div>
                                        контроль качества
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                Сварочные работы проводятся профессиональными сварщиками, соблюдая все технические стандарты и требования безопасности. После завершения сварочных работ проводится контроль качества для убедительности, что металлоконструкция соответствует утвержденным спецификациям.
                            </div>
                        </div>
                        <div className={classes.alerImgSide}><img src={fifthCont6Img} /></div>
                    </div>
                    <div className={classes.fifthBlock1}>
                        <div className={classes.textSide}>
                            <div className={classes.numbAndTitl}>
                                <div className={classes.number}>7</div>
                                <div className={classes.title}>
                                    <div>
                                        Оплата и 
                                    </div>
                                    <div>
                                        документация
                                    </div>
                                </div>
                            </div>
                            <div className={classes.paragraph}>
                                После успешной приемки заказа, клиент осуществляет оплату согласно условиям договора. Также предоставляются все необходимые документы, включая акты выполненных работ и гарантии, если они предусмотрены.
                            </div>
                        </div>
                        <div className={classes.imgSide}><img src={fifthCont7Img} /></div>
                    </div>
                </div>
                <FormAudit />
            </div>
        );
}

export default Painting;