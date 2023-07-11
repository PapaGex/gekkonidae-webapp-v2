import styles from "../components/banner.module.css";
import Image from 'next/image';
const Banner = (props) => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.title}  >
            <img src={"/static/gekkonidaeTitle.png"}
                   alt="geckos" width="1808" height="400"
                   style={{ objectFit: 'cover, cover, contain, none'
                       }} />
            </div>
        </div>
            <h2 className={styles.subTitle}><i>The website devoted to the care and the natural history of geckos</i></h2>
            <div className={styles.buttonWrapper} >
                <button className={styles.button} onClick={props.handleOnClick}>
                {props.buttonText}
                </button>
            </div>
        </>
    );
};

export default Banner;