/** @jsx jsx */
import {jsx} from 'theme-ui';
import {SupporterNode} from '../../types';
import SupporterItem from './item';
import {useMobileScreen} from "../../hooks/useMobileScreen";

type SupporterListProps = {
  supporterList: SupporterNode[];
};

const SupporterList = ({supporterList}: SupporterListProps) => {
  const mobileScreen = useMobileScreen();

  const getRandomSupporter = (supporterList: SupporterNode[]) => {
    const random = Math.floor(Math.random() * supporterList.length);
    const supporter = supporterList[random];
    return <SupporterItem key={supporter.node.name} supporter={supporter.node}/>
  };

  const getSupporterList = (supporterList: SupporterNode[]) => {
    return supporterList.map((supporter) => (
      <SupporterItem key={supporter.node.name} supporter={supporter.node}/>
    ))
  };

  return <div>{ mobileScreen ? getSupporterList(supporterList): getRandomSupporter(supporterList)}</div>;
};

export default SupporterList;
