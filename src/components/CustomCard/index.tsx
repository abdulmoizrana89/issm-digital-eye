import { Card, CardBody, CardFooter, Divider } from "@chakra-ui/react";
import { ReactNode } from "react";

type CustomCardProps = {
  content: ReactNode;
  cardMedia?: ReactNode;
  footer?: ReactNode;
};

const CustomCard = ({ content, cardMedia, footer }: CustomCardProps) => {
  return (
    <Card maxW="sm" bg="#F1F4F7" borderColor="#E8E8E8" color="#696969">
      <CardBody>
        {cardMedia ? cardMedia : null}
        {content}
      </CardBody>
      {footer ? (
        <>
          <Divider color="#E8E8E8" />
          <CardFooter>{footer}</CardFooter>
        </>
      ) : null}
    </Card>
  );
};

export default CustomCard;
