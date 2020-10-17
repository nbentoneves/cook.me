import React from "react";
import styles from "./Layout.module.scss";

const layout = (props) => {

    return (
        <div className={styles.Layout}>
            <header className={styles.Header}>
            </header>
            <main>
                {props.children}
            </main>
        </div>
    )
}

export default layout;