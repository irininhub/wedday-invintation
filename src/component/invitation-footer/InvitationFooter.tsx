import s from "./styles.module.scss";
import {
    Linkedin,
    TelephoneInboundFill,
    Telegram,
} from "react-bootstrap-icons";
import { TooltipComponent } from "../common/Tooltip/TooltipComponent";
// import botle from "../../assets/botle.webp";
import botle from "../../assets/flowersSmall/tl.webp";

export const InvitationFooter = () => {
    return (
        <div className={s.invitationFooterContent}>
            <img alt="bottle" className={`${s.botleImg} ${s.botleTop}`} src={botle} />
            <h4 className={s.title}>Наши контакты</h4>
            <div className={s.contacts}>
                <TelephoneInboundFill color="green" size={30} />
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
                        <a
                            href="https://t.me/sanchoPanchho1188"
                            target="_blank"
                        >
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
                    <a
                        href="https://www.linkedin.com/in/aliaksandr-koktysh-87a556226/"
                        target="_blank"
                    >
                        Александр
                    </a>
                    <span className="mx-2">&#38;</span>
                    <a
                        href="https://www.linkedin.com/in/irina-potrebko-768029120/"
                        target="_blank"
                    >
                        Ирина
                    </a>
                </div>
            </div>
            <img alt="bottle" className={`${s.botleImg} ${s.botleBottom}`} src={botle} />
        </div>
    );
};
