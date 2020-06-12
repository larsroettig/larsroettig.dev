import React from 'react'
import ReactDOM from 'react-dom'
import NotificationMessage from './src/components/NotificationMessage'
import {Button} from 'theme-ui';

function onServiceWorkerUpdateReady () {
  const root = document.createElement('div')
  document.body.appendChild(root)
  ReactDOM.render(
    <NotificationMessage>
      <p>A new version is available !</p>
      <Button sx={{background: 'none',
        '&:hover': {
          bg: 'rgba(0,0,0,0.1)'
        }
      }} onClick={() => window.location.reload()}>
        Click here to update.
      </Button>
    </NotificationMessage>,
    root,
  )
}

export { onServiceWorkerUpdateReady }
