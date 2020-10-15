import { Head } from 'next/document';
import { InlineStyle } from './InlineStyle';

type DocumentFiles = {
  sharedFiles: string[];
  pageFiles: string[];
  allFiles: string[];
};

export class CriticalCssHead extends Head {
  getCssLinks({ allFiles }: DocumentFiles) {
    const { assetPrefix } = this.context._documentProps;
    const { nonce } = this.props;
    const isCss = (file: string): boolean => /\.css$/.test(file);
    const renderCss = (file: string) => <InlineStyle key={file} file={file} nonce={nonce} assetPrefix={assetPrefix} />;
    return allFiles && allFiles.length > 0 ? allFiles.filter(isCss).map(renderCss) : null;
  }
}
