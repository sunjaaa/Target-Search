import NoInfos from "./NoInfos";
import TargetInfos from "./TargetInfos";

export interface cardInfosItem {
  content: string;
  _id: number;
}

export interface Props {
  targetInfo?: {
    name: string;
    img: string;
    card_infos: Array<cardInfosItem>;
  };
  isLoading?: boolean;
}

const ShowTargetInfo = ({ targetInfo }: Props) => {
  if (targetInfo) {
    return <TargetInfos targetInfo={targetInfo} />;
  }
  if (!targetInfo) {
    return <NoInfos />;
  } else {
    return <div />;
  }
};

export default ShowTargetInfo;
