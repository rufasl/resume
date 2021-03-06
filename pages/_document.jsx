import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/OptimusPrinceps.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="preload"
                        href="/fonts/OptimusPrincepsSemiBold.ttf"
                        as="font"
                        type="font/ttf"
                        crossOrigin="anonymous"
                    />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                                async
                                src={`https://www.googletagmanager.com/gtag/js?id=G-C3MRT6DPGY`}
                            />
                            <script
                                dangerouslySetInnerHTML={{
                                __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                                page_path: window.location.pathname,
                                });
                            `,
                                }}
                            />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument