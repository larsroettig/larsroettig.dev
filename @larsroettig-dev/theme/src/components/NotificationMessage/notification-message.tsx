import * as React from 'react';
import styled from "@emotion/styled";
import {tailwind} from '@theme-ui/presets';


type NotificationMessageProps = {
  'visibleMs': number
  'shouldBeHidden': boolean
};


const NotificationMessage = (props: React.PropsWithChildren<NotificationMessageProps>) => {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    if (props.shouldBeHidden === true) {
      setTimeout(() => {
        setVisible(false);
      }, props.visibleMs);
    }
  })

  if (visible === false) {
    return null;
  }

  return (
    <NotificationContainer>
      {props.children}
    </NotificationContainer>
  )
}

const NotificationContainer = styled.div`
 position: fixed;
 padding: 0 1rem 1rem 1rem;
 max-width: 150px;
 background-color: #234E52;
 z-index: 2;
 bottom: 50px;
 left: 100px;
 color: #fff;
 text-align: center;
 border-radius: 1rem;
`;

NotificationMessage.defaultProps = {
  shouldBeHidden: true,
  visibleMs: 9000
}

export default NotificationMessage;
