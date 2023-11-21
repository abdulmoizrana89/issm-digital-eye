import { GridItem, SimpleGrid } from "@chakra-ui/react";

const MainSection = ({ children, ...rest }: any) => {
  /**
   * Usage:
   *
   * Pass any items as children
   * Use Flexbox or SimpleGrid for more detailed layouts in children
   */

  return (
    <GridItem gridColumnStart={2} gridColumnEnd={12} py={8} px={8} {...rest}>
      {children}
    </GridItem>
  );
};

export default MainSection;
