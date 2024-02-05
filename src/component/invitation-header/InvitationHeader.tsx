import styles from "./styles.module.scss";
import frameImage from "../../assets/kluax.webp";
import { BackgroundLayout } from "../../layouts/InvationLayout/background";
import divider from "../../assets/divider.webp";
import { SaveDate } from "./saveDate";

export const InvitationHeader = () => {
    return (
        <BackgroundLayout>
            <div className={styles.invitationHeaderContent}>
                <SaveDate />
                <div className={styles.blurredWrapper}>
                    <img alt="flowers" className={styles.groundCircle} src={frameImage} />
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
                <img alt="divider" className={styles.flowersImageTop} src={divider} />
            </div>
        </BackgroundLayout>
    );
};
