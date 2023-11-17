import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface CustomLabelProps {
  title: string;
  children: React.ReactNode;
}

const CustomAccordion = ({ title, children }: CustomLabelProps) => {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1" defaultValue="item-1">
        <AccordionTrigger
          className="text-primary-110 text-opacity-50 cursor-pointer"
          defaultValue="item-1"
        >
          {title}
        </AccordionTrigger>
        <AccordionContent className="cursor-pointer">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CustomAccordion;
