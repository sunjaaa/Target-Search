import NoInfos from "./NoInfos";
import TargetInfos from "./TargetInfos";

export interface Item {
  content: string;
  _id: number;
}

export interface Props {
  targetInfo?: {
    name: string;
    img: string;
    card_infos: Array<Item>;
  };
}

const ShowTargetInfo = ({ targetInfo }: Props) => {
  if (targetInfo) {
    return <TargetInfos targetInfo={targetInfo} />;
  }
  if (!targetInfo) {
    return <NoInfos />;
  } else {
    return <NoInfos />;
  }
};

export default ShowTargetInfo;
