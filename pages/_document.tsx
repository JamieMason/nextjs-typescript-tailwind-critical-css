import Document, { Main, NextScript } from 'next/document';
import { CriticalCssHead } from '../components/CriticalCssHead';

class ExtendedNextDocument extends Document {
  render() {
    return (
      <html>
        <CriticalCssHead />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default ExtendedNextDocument;
