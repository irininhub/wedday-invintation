import styles from "./styles.module.scss";
import flowersImage from "../../assets/frame-2.png";

export const InvintationHeader = () => {
    return (
        <div className={styles.invintationHeader}>
            <div className={styles.saveTheDate}>Сохранить дату</div>
            <img
                alt="flowers"
                className={styles.flowersCircle}
                src={flowersImage}
            />
            <div className={styles.newlywedsInfo}>
                <div className={styles.newlyweds}>Александр & Ирина</div>
                <div className={styles.commonDate}>
                    <div className="">
                        <span className={styles.subDate} style={{ letterSpacing: "5px" }}>суббота</span>
                        <span className={styles.numberDate}>6</span>
                        <span className={styles.subDate}>июля 2024</span>
                    </div>
                    <div className={styles.smallDate}>15:30</div>
                </div>
            </div>
        </div>
    );
};
