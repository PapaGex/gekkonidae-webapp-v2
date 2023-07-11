import {useRouter} from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import cls from 'classnames';
import styles from "public/static/images/styles/gekkonidae.module.css";
import geckos from "../../geckos.json";

export function getStaticProps(staticProps) {
    const params = staticProps.params;
    console.log("params", params);
    return {
        props: {
            gecko: geckos.find((gecko) => {
                return gecko.id.toString() === params.id;
            }),
        },
    };
}

export function getStaticPaths() {
    const paths = geckos.map((gecko) => {
        return {
         params: {
             id: gecko.id.toString(),
         },
    };
    });
        return {
            paths,
            fallback: true,
        };
    }
const Gekkonidae = (props) => {
    const router = useRouter()
    console.log('Next Router', router);

    if (router.isFallback) {
        return <div>Loading...</div>
    }

 //   const map = L.map('map').setView([22.6149, 167.4817], 13); // setview args are lat and long then zoom

    const { id, name, genus, species,
        discovered, description, habitat,
        species_range, lifespan, snout_to_vent,
        locale_subspecies } = props.gecko;

    return (
        <>
            <div className={styles.layout}>
                <Head>

                    <title>{species}</title>
                </Head>
                <h1 > {genus} {species} </h1>
                <div className={styles.col1}>
                    <Image className={styles.geckoImg} src={`/static/images/${name}.jpg`} alt={species} width={600} height={400}/>
                </div>
                <div className={cls("glass", styles.col2)}>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{name}</h1>
                    </div>
                    <p>This gecko commonly referred to as {name} is known to have a lifespan of {lifespan},
                        can grow between {snout_to_vent} snout to vent and is found in {species_range}.</p>
                    <div id="map">

                    </div>
                </div>
                <div className={styles.homeLink}>
                    <Link href="/">Back to Homepage</Link>
                </div>
            </div>
        </>
    );
};

export default Gekkonidae;