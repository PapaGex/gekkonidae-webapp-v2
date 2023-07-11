import Link from "next/link";
import Image from "next/image";
import cls from 'classnames';
import styles from '../components/card.module.css';

const Card = (props) => {
    return <div>
        <Link className={styles.cardLink} href={props.href}>
            <div className={cls("glass", styles.container)}>
            <div className={styles.cardHeaderWrapper}>
        <h2 className={styles.cardHeader}>{props.name}</h2>
            </div>
            <div className={styles.cardImageWrapper}>
        <Image className={styles.cardImage} src={props.imgUrl} width={260} height={160}  alt='gecko'></Image>
            </div>
            </div>
            </Link>
    </div>;
};

export default Card;