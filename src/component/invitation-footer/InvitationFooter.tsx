import s from "./styles.module.scss";
import { Linkedin, TelephoneInboundFill, Telegram } from "react-bootstrap-icons";
import { TooltipComponent } from "../common/Tooltip/TooltipComponent";
import flowers from "../../assets/flowersSmall/tl.webp";
import blueFlowers from "../../assets/flowersSmall/tl16.webp";
import divider from "../../assets/divider.webp";

export const InvitationFooter = () => {
    return (
        <div className={s.invitationFooterContent}>
            <div className={s.invitationInfo}>
                <img alt="flowers" className={`${s.flowerImg} ${s.flowerTop}`} src={flowers} />
                <img alt="flowers" className={`${s.flowerImg} ${s.flowerBlueTop}`} src={blueFlowers} />
                <h4 className={s.title}>Наши контакты</h4>
                <img alt="divider" className="mb-2" src={divider} />
                <div className={s.contactsBox}>
                    <div className={s.contacts}>
                        <TelephoneInboundFill color="#4164b5" size={30} />
                        <div className={s.block}>
                            <TooltipComponent title="+375259409340">
                                <a href="tel:+375259409340">Александр</a>
                            </TooltipComponent>
                            <span className="mx-2">&#38;</span>
                            <TooltipComponent title="+375296152303">
                                <a href="tel:+375296152303">Ирина</a>
                            </TooltipComponent>
                        </div>
                    </div>
                    <div className={s.contacts}>
                        <Telegram color="var(--icon-color)" size={30} />
                        <div className={s.block}>
                            <TooltipComponent title="@sanchoPanchho1188">
                                <a href="https://t.me/sanchoPanchho1188" target="_blank">
                                    Александр
                                </a>
                            </TooltipComponent>
                            <span className="mx-2">&#38;</span>
                            <TooltipComponent title="@irinapotr">
                                <a href="https://t.me/irinapotr" target="_blank">
                                    Ирина
                                </a>
                            </TooltipComponent>
                        </div>
                    </div>
                    <div className={s.contacts}>
                        <Linkedin color="var(--icon-color)" size={30} />
                        <div className={s.block}>
                            <a href="https://www.linkedin.com/in/aliaksandr-koktysh-87a556226/" target="_blank">
                                Александр
                            </a>
                            <span className="mx-2">&#38;</span>
                            <a href="https://www.linkedin.com/in/irina-potrebko-768029120/" target="_blank">
                                Ирина
                            </a>
                        </div>
                    </div>
                </div>
                <img alt="flowers" className={`${s.flowerImg} ${s.flowerBottom}`} src={flowers} />
                <img alt="flowers" className={`${s.flowerImg} ${s.flowerBlueBottom}`} src={blueFlowers} />
            </div>
        </div>
    );
};
