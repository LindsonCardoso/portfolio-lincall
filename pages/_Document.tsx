import Document, {Html, Head, Main, NextScript} from  'next/document';

export default class MyDocument extends Document {
    render() {
      return(
        <Html>
          <Head> 
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600;700&display=swap" rel="stylesheet"/>    
            {/*<link rel="stylesheet" href="/static/css/fortawesome.css"/>*/}
          </Head>
      <body>
    
        <Main />
        <NextScript />

      </body>
        </Html>
      );
    }


}