import Document, { Html, Head, Main, NextScript } from 'next/document'

class GexDoc extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps}
    }

    render () {
        return (
            <Html lang="en">
                <Head>
                <link rel="preload" href="/fonts/Cinzel-Regular.tff" as="font" crossOrigin="anonymous"/>
                <link rel="preload" href="/fonts/Tourney_SemiExpanded-Thin.ttf" as="font" crossOrigin="anonymous"/>
                <link rel="preload" href="/fonts/BigShouldersInlineText-Bold.ttf" as="font" crossOrigin="anonymous"/>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}
export default GexDoc;