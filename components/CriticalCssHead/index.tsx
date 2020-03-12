import { Head } from 'next/document';
import { InlineStyle } from './InlineStyle';

export class CriticalCssHead extends Head {
  getCssLinks() {
    return this.__getInlineStyles();
  }

  __getInlineStyles() {
    const { assetPrefix, files } = this.context._documentProps;
    const { nonce } = this.props;
    const isCss = (file: string): boolean => /\.css$/.test(file);
    const renderCss = (file: string) => <InlineStyle key={file} file={file} nonce={nonce} assetPrefix={assetPrefix} />;
    return files && files.length > 0 ? files.filter(isCss).map(renderCss) : null;
  }
}
