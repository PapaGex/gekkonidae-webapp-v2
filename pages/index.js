import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";
import Card from "../components/card";
import Image from "next/image";
// import geckos from "../geckos.json";



export async function getStaticProps(context) {

    const options = {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    };

    const response = await fetch('http://localhost:8000', options);
        // .then(response => response.json())
        // .then(response => console.log(response))
        // .catch(err => console.error(err));
    const data = await response.json();
    return {
        props: {
            geckos: data,
        },
    };
}
export default function Home(props) {
  const handleOnBannerClick = () => {
      console.log('Stop Clickn The Fucken Button')
  }

  return (
      <div className={styles.container}>
        <Head>
            <title>Gekkonidae</title>
            <link rel="icon" href="/static/icons/logo.svg" />
        </Head>
    <main className={styles.main}>
        <Banner buttonText="Find the perfect gecko for your collection"
        handleOnClick={handleOnBannerClick}/>
        <div className={styles.cardLayout}>
            {props.geckos.map((gecko) => {
                return (
                    <Card
                        key={gecko.id}
                        name={gecko.name}
                        imgUrl={`/static/images/${gecko.species}.jpg`}
                        href={`/geckos/${gecko.id}`}
                        className={styles.card} />
                );
            })}
        </div>
    </main>
      </div>
  )
}
