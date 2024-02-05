import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";
import flowersImage from "../../assets/flowersSmall/tl.webp";
import coupleImage from "../../assets/couple.png";
import daisiesImage from "../../assets/flowersSmall/t14.webp";

import pinkFlower from "../../assets/flowersSmall/t5.webp";
import leavesImage from "../../assets/flowersSmall/t15.webp";

interface IProps {
    children: ReactElement;
}

export const BackgroundLayout: FC<IProps> = ({ children }) => {
    return (
        <div className={styles.background}>
            <div className={styles.centerFlowers}>
            </div>
            <img alt="leaves" className={styles.leavesImageTop} src={leavesImage} />
            <img alt="roses" className={styles.flowersImageTop} src={flowersImage} />
            <img alt="roses" className={styles.flowersImageTop1} src={flowersImage} />
            <img alt="blot-white" className={styles.flowersImageTop3} src={daisiesImage} />
            <img alt="pink-flower" className={styles.flowersImageTop4} src={pinkFlower} />
            {children}
            <img alt="leaves" className={styles.flowersImageBottom} src={leavesImage} />
            <img alt="pink-flower" className={styles.flowersImageBottom4} src={pinkFlower} />
            <img alt="blot-white" className={styles.flowersImageBottom5} src={daisiesImage} />
            <img alt="roses" className={styles.flowersImageBottom1} src={flowersImage} />
            <img alt="roses" className={styles.flowersImageBottom2} src={flowersImage} />
            <img alt="bouquet" className={styles.coupleImage} src={coupleImage} />
        </div>
    );
};
