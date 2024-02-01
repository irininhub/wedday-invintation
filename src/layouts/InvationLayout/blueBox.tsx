import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";

interface IProps {
    children: ReactElement;
}

export const BlueBoxLayout: FC<IProps> = ({ children }) => {
    return (
        <div className={styles.blueBoxLayout}>
            <div className={styles.blueBoxBefore} />
            <>{ children }</>
            <div className={styles.blueBoxAfter} />
        </div>
    );
};
