import { Img } from "@chakra-ui/react";

import InnerCircleSvg from "../../../../../assets/images/innerCirvle.svg";

const InnerCircle = ({ height, width }: { height: number; width: number }) => {
  return <Img src={InnerCircleSvg} height={height} width={width} />;
};

export default InnerCircle;
