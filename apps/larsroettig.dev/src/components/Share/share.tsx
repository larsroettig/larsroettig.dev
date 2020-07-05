/** @jsx jsx */
import { jsx } from 'theme-ui';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

type ShareProps = {
  url: string;
  title: string;
};

const Share = ({ url, title }: ShareProps) => (
  <div
    sx={{
      paddingBottom: '1.5rem',
      textAlign: 'center',
      ul: {
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      li: {
        listStyle: 'none',
        mb: 3,
        marginBottom: '8px',
        marginRight: '8px',
      },
    }}
  >
    <p
      sx={{
        fontFamily:
          'Menlo,Monaco,Consolas,Liberation Mono,Courier New, monospace',
        borderBottom: '1px solid #e2e8f0;',
      }}
    >
      Useful? Share it!
    </p>
    <ul>
      <li>
        <FacebookShareButton
          url={url}
          quote={title}
          className={'opacity-75 hover:opacity-100'}
        >
          <FaFacebook size={29} />
        </FacebookShareButton>
      </li>
      <li className="pl-2">
        <TwitterShareButton
          url={url}
          title={title}
          className={'opacity-75 hover:opacity-100'}
        >
          <FaTwitter size={29} />
        </TwitterShareButton>
      </li>

      <li className="pl-2">
        <EmailShareButton
          url={url}
          title={title}
          className={'opacity-75 hover:opacity-100'}
        >
          <FaEnvelope size={29} />
        </EmailShareButton>
      </li>
      <li className="pl-2">
        <LinkedinShareButton
          url={url}
          title={title}
          className={'opacity-75 hover:opacity-100'}
        >
          <FaLinkedin size={29} />
        </LinkedinShareButton>
      </li>
    </ul>
  </div>
);

export default Share;
