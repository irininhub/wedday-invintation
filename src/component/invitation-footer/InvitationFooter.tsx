import s from "./styles.module.scss";
import {
    Linkedin,
    TelephoneInboundFill,
    Telegram,
} from "react-bootstrap-icons";
import { TooltipComponent } from "../common/Tooltip/TooltipComponent";

export const InvitationFooter = () => {
    return (
        <div className={s.invitationFooterContent}>
            <h4>Наши контакты</h4>
            <div className={s.contacts}>
                <TelephoneInboundFill color="green" size={30} />
                <div className={s.block}>
                    <TooltipComponent title="+375259409340">
                        <a href="tel:+375259409340">Александр</a>
                    </TooltipComponent>
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
                    <a
                        href="https://www.linkedin.com/in/irina-potrebko-768029120/"
                        target="_blank"
                    >
                        Ирина
                    </a>
                </div>
            </div>
        </div>
    );
};
