import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Main,
  Head,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />

          <link
            href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
            rel="stylesheet"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin="anonymous" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

          <link rel="icon" href="../pizy-group-logo.svg" />

          <meta name="description" content="Uma plataforma de desenvolvimento digital que busca ajudar iniciantes e pessoas que desejam um futuro de sucesso no mundo da tecnologia." />
          <meta name="image" content="https://raw.githubusercontent.com/pizygroup/community/main/assets/meta%20image-v1.png" />
          
          <link rel="canonical" href="https://pizy.group" data-baseprotocol="https:" data-basehost="pizy.group" />
          
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1" />
          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="theme-color" content="#000000" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="google" content="notranslate" />
          
          <meta property="og:url" content="https://pizy.group" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="PIZY Group · Uma nova plataforma para programadores." />
          <meta property="og:description" content="Uma plataforma de desenvolvimento digital que busca ajudar iniciantes e pessoas que desejam um futuro de sucesso no mundo da tecnologia." />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:site_name" content="PIZY Group · Uma nova plataforma para programadores." />
          <meta property="og:image" content="https://raw.githubusercontent.com/pizygroup/community/main/assets/meta%20image-v1.png" />
          <meta property="og:image:secure_url" content="https://raw.githubusercontent.com/pizygroup/community/main/assets/meta%20image-v1.png" />
          <meta property="og:image:alt" content="Uma nova plataforma para programadores." />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="PIZY Group · Uma nova plataforma para programadores." />
          <meta name="twitter:site" content="@pizygroup" />
          <meta name="twitter:creator" content="@pizygroup" />
          <meta name="twitter:image" content="https://raw.githubusercontent.com/pizygroup/community/main/assets/meta%20image-v1.png" />
          <meta name="twitter:image:src" content="https://raw.githubusercontent.com/pizygroup/community/main/assets/meta%20image-v1.png" />
          <meta name="twitter:image:alt" content="Uma nova plataforma para programadores." />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:image:height" content="630" />

          <link rel="apple-touch-icon" sizes="48x48" href="../pizy-group-logo.svg" />
          <link rel="apple-touch-icon" sizes="72x72" href="../pizy-group-logo.svg" />
          <link rel="apple-touch-icon" sizes="96x96" href="../pizy-group-logo.svg" />
          <link rel="apple-touch-icon" sizes="144x144" href="../pizy-group-logo.svg" />
          <link rel="apple-touch-icon" sizes="192x192" href="../pizy-group-logo.svg" />
          <link rel="apple-touch-icon" sizes="256x256" href="../pizy-group-logo.svg" />
          <link rel="apple-touch-icon" sizes="384x384" href="../pizy-group-logo.svg" />
          <link rel="apple-touch-icon" sizes="512x512" href="../pizy-group-logo.svg" />

          <meta name="next-head-count" content="43" />
        </Head>
        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}
