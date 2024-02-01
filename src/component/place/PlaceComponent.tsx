import { FC } from "react";
import s from "./styles.module.scss";
import divider from "../../assets/divider.webp";
import { placeText } from "../../constants/Text";

export const PlaceComponent: FC = () => {
    return (
        <div className={s.placeComponent}>
            <div className={s.placeContainer}>
                <div className={s.placeMark}></div>
                <p className={s.placeText}>
                    <b>{placeText.address}</b>
                </p>
                <img alt="divider" className={s.dividerTop} src={divider} />
                <p className={s.placeText}>
                    Местом проведения нашего дня мы выбрали <b>усадьбу Ганка</b>. Усадьба расположена в одном из живописных мест Воложинского района на берегу
                    небольшого озера на хуторе.
                </p>
                <p className={s.placeText}>
                    Для наших дорогих гостей мы организовываем <b>трансфер</b>.
                </p>
                <img alt="divider" className={s.dividerBottom} src={divider} />
                <p className={s.placeTextSmall}>
                    Мы заберем гостей из двух точек. Первая Минск (Каменная горка), а также деревня Острошицы. Трансфер привезет Вас в усадьбу к началу
                    торжества и завесет обратно, по указанным адресам после окончания праздника
                </p>
            </div>
        </div>
    );
};
