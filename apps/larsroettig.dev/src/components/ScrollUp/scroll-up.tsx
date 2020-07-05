/** @jsx jsx */
import { jsx } from 'theme-ui';
import ScrollUpButton from 'react-scroll-up-button';
import { IconContext } from 'react-icons';
import { FaArrowCircleUp } from 'react-icons/all';
import styled from '@emotion/styled';

const ScrollUp = () => (
  <ScrollUpButton>
    <ScrollBody>
      <IconContext.Provider value={{ size: '1.5em' }}>
        <FaArrowCircleUp
          sx={{ backgroundColor: 'background', borderRadius: '20px' }}
        />
      </IconContext.Provider>
    </ScrollBody>
  </ScrollUpButton>
);

export default ScrollUp;

const ScrollBody = styled.div`
  position: fixed;
  bottom: 30px;
  transition: opacity 0.5s ease-in-out 0s, right;
  cursor: pointer;
  opacity: 1;
  right: 30px;
  z-index: 10;
  max-height: 25px;
`;
