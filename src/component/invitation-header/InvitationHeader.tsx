import styles from "./styles.module.scss";
import frameImage from "../../assets/kluax.webp";
import flowersImage from "../../assets/flowersSmall/tl.webp";
import coupleImage from "../../assets/couple.webp";
import daisiesImage from "../../assets/flowersSmall/t14.webp";

export const InvitationHeader = () => {
    return (
        <div className={styles.invitationHeader}>
            <img alt="roses" className={styles.flowersImageTop} src={flowersImage} />
            <img alt="roses" className={styles.flowersImageTop1} src={flowersImage} />
            <img alt="roses" className={styles.flowersImageTop2} src={daisiesImage} />
            <img alt="roses" className={styles.flowersImageTop3} src={daisiesImage} />
            <div className={styles.invitationHeaderContent}>
                <div className={styles.saveTheDate}>Сохранить дату</div>
                <div className={styles.blurredWrapper}>
                    <img alt="flowers" className={styles.flowersCircle} src={frameImage} />
                </div>

                <div className={styles.newlywedsInfo}>
                    <div className={styles.newlyweds}>Александр & Ирина</div>
                    <div className={styles.commonDate}>
                        <div className="">
                            <span className={styles.subDate} style={{ letterSpacing: "5px" }}>
                                суббота
                            </span>
                            <span className={styles.numberDate}>6</span>
                            <span className={styles.subDate}>июля 2024</span>
                        </div>
                        <div className={styles.smallDate}>15:30</div>
                    </div>
                </div>
            </div>
            <img alt="roses" className={styles.flowersImageBottom} src={flowersImage} />
            <img alt="roses" className={styles.flowersImageBottom1} src={flowersImage} />
            <img alt="bouquet" className={styles.coupleImage} src={coupleImage} />
        </div>
    );
};
