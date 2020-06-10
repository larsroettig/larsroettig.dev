/** @jsx jsx */
import { jsx } from 'theme-ui';
import styled from '@emotion/styled';
import useClipboard from 'react-use-clipboard';
import { FaCheck, FaCopy } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { breakpointSm } from '../../../styles/breakpoints';

type CopyClipboardProps = {
  code: string;
};

const CopyClipboard = ({ code }: CopyClipboardProps) => {
  const [isCopied, setCopied] = useClipboard(code, {successDuration: 2000});
  const icon = isCopied === false ? <FaCopy/> : <FaCheck/>;

  return (
    <CopyButton onClick={setCopied}>
      <IconContext.Provider value={{ size: '0.6rem' }}>
        {icon}
      </IconContext.Provider>
    </CopyButton>
  );
};

const CopyButton = styled.button`
  position: absolute;
  right: 22px;
  top: 10px;
  padding: 5px 9px ;
  border-radius: 5px;
  border-color: rgba(255,255,255, 0.5);
  background: none;
  display: none;
  color: rgba(255,255,255, 0.5);

   ${breakpointSm} {
    display: block;
  }
`;

export default CopyClipboard;
