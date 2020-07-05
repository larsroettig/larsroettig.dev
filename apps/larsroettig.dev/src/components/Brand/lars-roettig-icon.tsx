/** @jsx jsx */
import { jsx } from 'theme-ui';

interface iSvg {
  color: string;
}

const FavIcon = ({ color }: iSvg) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 46 46"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M30.8662 28.796L32.7281 25.0922L29.853 19.3308H35.6159L39.3016 11.9674L41.4167 7.73449L45.1151 0.385742H13.0076L16.6933 7.73449H34.0707L31.9555 11.9674H18.8212L22.5069 19.3308L25.382 25.0922L26.9525 28.2081L24.0901 33.9548L21.9496 29.6925L17.0733 19.9481L16.7694 19.3308L13.071 11.9674L10.9558 7.73449L7.27009 0.385742H0.0253252H0L3.68571 7.73449L5.75021 11.9674H5.73755L9.42325 19.3308L18.2766 37.0266L20.4297 41.3035L22.5576 45.654L22.5829 45.5952L26.2053 38.2612L30.8662 28.796Z"
    />
  </svg>
);

export default FavIcon;