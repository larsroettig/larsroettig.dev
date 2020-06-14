/** @jsx jsx */
import {jsx} from 'theme-ui';
import {Flex, Text} from '@theme-ui/components';
import FavIcon from './lars-roettig-icon';

interface iSvg {
  color: string;
}

const LarsLogo = ({color = '#2D3748'}: iSvg) => (
  <Flex sx={{alignItems: 'center'}}>
    <FavIcon color={color}/>
    <Text sx={{fontSize: [2, 3], fontWeight: 'bold', color}}>
      Lars Roettig
    </Text>
  </Flex>
);

export default LarsLogo;
