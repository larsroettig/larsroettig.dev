import React from 'react';

import CodeBlock from './code-prism';

function preToCodeBlock(preProperties) {
  if (
    preProperties.children
    && preProperties.children.props
    && preProperties.children.props.mdxType === 'code'
  ) {
    const {
      children: codeString,
      className = '',
      ...properties
    } = preProperties.children.props;

    const matches = className.match(/language-(?<lang>.*)/);

    return {
      codeString: codeString.trim(),
      className,
      language:
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : '',
      ...properties,
    };
  }
}

const CodePre: React.FC<{}> = (preProperties) => {
  const properties = preToCodeBlock(preProperties);

  if (properties) {
    return <CodeBlock {...properties} />;
  }
  return <pre {...preProperties} />;
};

export default CodePre;
