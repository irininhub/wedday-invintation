import { FC, ReactElement } from "react";
import s from "./styles.module.scss";
import heart from "../../assets/heart.webp";

interface IProps {
    children: ReactElement;
}
export const SaveDate: FC = () => {
    const dates = [
        { name: "Cр", date: "3" },
        { name: "Чт", date: "4" },
        { name: "Пт", date: "5" },
        { name: "Cб", date: "6", isEvent: true },
        { name: "Вс", date: "7" },
        { name: "Пн", date: "8" },
        { name: "Вт", date: "9" },
    ];
    const renderDate = () => {
        return dates.map((el) => (
            <div className={s.dayDate} key={el.date}>
                <span className={s.name}>{el.name}</span>
                <span className={`${s.date} ${el.isEvent && s.eventDate}`}>
                    {el.date}
                </span>
            </div>
        ));
    };
    return (
        <div className={s.saveDate}>
            <div className={s.calendar}>
                {renderDate()}
                <img alt="roses" className={s.heart} src={heart} />
            </div>
            <a
                className={s.saveTheDate}
                target="_blank"
                href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=Mm4wdWYwdXR0ZmVsMmhmZnUwNGkxMjNyc3UgN2Y0ZDY0NWI3OWQ0NmI5MzU2NzM4ZDU1MDdmYTcwMDZlYWNjMDNhNzE5OTA3ODEyMTliMWMzNTU5MGI1Y2QwNkBn&amp;tmsrc=7f4d645b79d46b9356738d5507fa7006eacc03a71990781219b1c35590b5cd06%40group.calendar.google.com"
            >
                Сохранить дату в календарь
            </a>
        </div>
    );
};
