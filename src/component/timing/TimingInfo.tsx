import { FC } from "react";
import s from "./styles.module.scss";
import peopleImg from "../../assets/timing1.webp";
import ringImg from "../../assets/timing2.webp";
import plateImg from "../../assets/timing3.webp";
import clockImg from "../../assets/timing4.webp";
import divider from "../../assets/divider.webp";

export const TimingInfo: FC = () => {
    const timing = [
        {
            time: "14:30",
            info: "Сбор гостей",
            image: peopleImg,
            class: "people",
        },
        {
            time: "16:00",
            info: "Свадебная церемония",
            image: ringImg,
            class: "ring",
        },
        {
            time: "17:00",
            info: "Праздничный банкет",
            image: plateImg,
            class: "plate",
        },
        {
            time: "~00:00",
            info: "Окончание торжества",
            image: clockImg,
            class: "clock",
        },
    ];
    const renderTiming = () =>
        timing.map((el) => (
            <div className="d-flex mb-2">
                <div className={s.timingIcon}>
                    <img alt="icon" className={`${s[el.class]}`} src={el.image} />
                </div>

                <div className={s.timing}>
                    <span className={s.time}>{el.time}</span>
                    <span className={s.info}>{el.info}</span>
                </div>
            </div>
        ));
    return (
        <div className={s.timingInfo}>
            <div className={s.clockCircle}>
                <div className={s.clockMain} />
            </div>

            <h1 className={s.title}>Время</h1>
            <div className={s.timeContainer}>{renderTiming()}</div>
            <img alt="divider" className={s.dividerTop} src={divider} />
        </div>
    );
};
