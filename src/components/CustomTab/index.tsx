import React from "react";
import {
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

interface TabData {
  label: string;
  content: React.ReactNode;
}

interface CustomTabsProps {
  variant: string;
  tabs: {
    tabListClassName: string;
    tabsData: TabData[];
  };
}

const CustomTab = ({ variant, tabs }: CustomTabsProps) => {
  return (
    <Tabs variant={variant}>
      <TabList className={tabs.tabListClassName}>
        {tabs.tabsData.map((tabData, index) => (
          <Tab
            key={index}
            _selected={{
              bg: "white",
            }}
          >
            <Text className="text-[14px] ">{tabData.label}</Text>
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tabs.tabsData.map((tabData, index) => (
          <TabPanel key={index}>
            <p>{tabData.content}</p>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default CustomTab;
