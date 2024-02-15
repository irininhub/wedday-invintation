import { FC, ReactElement } from "react";
import styles from "./styles.module.scss";

interface IProps {
    children: ReactElement;
    className?: String;
}

export const BlueBoxLayout: FC<IProps> = ({ children, className }) => {
    return (
        <div className={`${styles.blueBoxLayout} ${className ? className : ''}`}>
            <div className={styles.blueBoxBefore} />
            <>{ children }</>
            <div className={styles.blueBoxAfter} />
        </div>
    );
};
