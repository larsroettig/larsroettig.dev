import {useWindowSize} from "./useWindowSize";
import {useMemo} from "react";

export const useMobileScreen = (width: number = 1024): boolean => {
  const windowSize = useWindowSize();
  return windowSize.width < width;
}
