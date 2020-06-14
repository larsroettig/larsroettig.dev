/** @jsx jsx */
import {jsx} from 'theme-ui';
import {SupporterNode} from "../../types";
import SupporterItem from "./item";

type SupporterListProps = {
  supporterList: SupporterNode[]
}

const SupporterList = ({supporterList}: SupporterListProps) => {
  const items = supporterList.map((supporter) => (
    <SupporterItem key={supporter.node.name} supporter={supporter.node}/>)
  );

  return (
    <div>
      {items}
    </div>
  )
}

export default SupporterList;
