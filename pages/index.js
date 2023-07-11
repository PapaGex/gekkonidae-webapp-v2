import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";
import Card from "../components/card";
import Image from "next/image";
import geckos from "../geckos.json";
export default function Home() {
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
            {geckos.map((gecko) => {
                return (
                    <Card
                        key={gecko.id}
                        name={gecko.name}
                        imgUrl={`/static/images/${gecko.species}.jpg`}
                        href={`/gekkonidae/${gecko.id}`}
                        className={styles.card} />
                );
            })}
        </div>
    </main>
      </div>
  )
}
