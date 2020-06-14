/* eslint react/destructuring-assignment: 0 */
import * as React from 'react';
import Highlight, {defaultProps} from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import Prism from 'prism-react-renderer/prism';
import CopyClipboard from './copy-clipboard';

// Following advice from this issue https://github.com/FormidableLabs/prism-react-renderer/issues/53
(typeof global !== 'undefined' ? global : window).Prism = Prism;
// Add syntax highlighting support for PHP
require('prismjs/components/prism-php');

type CodeProps = {
  codeString: string;
  noLineNumbers?: boolean;
  metastring?: string;
  [key: string]: any;
};

function getParameters(className = '') {
  const [lang = '', parameters = ''] = className.split(':');

  return [
    // @ts-ignore
    lang.split('language-').pop().split('{').shift(),
  ].concat(
    // @ts-ignore
    parameters.split('&').reduce((merged, parameter) => {
      const [key, value] = parameter.split('=');
      // @ts-ignore
      merged[key] = value;
      return merged;
    }, {}),
  );
}

const RE = /{([\d,-]+)}/;

const calculateLinesToHighlight = (meta: string) => {
  if (!RE.test(meta)) {
    return () => false;
  }
  const lineNumbers = RE.exec(meta)![1]
    .split(',')
    .map((v) => v.split('-').map((x) => Number.parseInt(x, 10)));
  return (index: number) => {
    const lineNumber = index + 1;
    const inRange = lineNumbers.some(([start, end]) =>
      end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
    );
    return inRange;
  };
};

const Code = ({
                codeString,
                noLineNumbers = false,
                className: blockClassName,
                metastring = '',
              }: CodeProps) => {
  const [language, {title = ''}] = getParameters(blockClassName);

  const shouldHighlightLine = calculateLinesToHighlight(metastring);
  const hasLineNumbers = !noLineNumbers && language !== 'noLineNumbers' && true;

  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <React.Fragment>
          {title && (
            <div className="code-title">
              <div>{title}</div>
            </div>
          )}
          <div className="gatsby-highlight" data-language={language}>
            <pre
              className={className}
              style={style}
              data-linenumber={hasLineNumbers}
            >
              <CopyClipboard code={codeString}/>
              {tokens.map((line, i) => {
                const lineProperties = getLineProps({line, key: i});

                if (shouldHighlightLine(i)) {
                  lineProperties.className = `${lineProperties.className} highlight-line`;
                }

                return (
                  <div key={`div--${i}`} {...lineProperties}>
                    {hasLineNumbers && (
                      <span className="line-number-style">{i + 1}</span>
                    )}
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({token, key})} />
                    ))}
                  </div>
                );
              })}
            </pre>
          </div>
        </React.Fragment>
      )}
    </Highlight>
  );
};

export default Code;
