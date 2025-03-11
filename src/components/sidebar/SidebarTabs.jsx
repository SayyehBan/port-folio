import { useContext } from "react";

import { Tabs, Tab, useTheme } from "@mui/material";

import { grey } from "@mui/material/colors";

import MainContext from "../../context";
import { tabs } from "../data/tabsData.sidebar";

const SidebarTabs = () => {
  const { pageNumber, handlePageNumber, setDrawerOpen } =
    useContext(MainContext);
  const theme = useTheme();
  return (
    <Tabs
      orientation="vertical"
      variant="scrollable"
      scrollButton="auto"
      allowScrollButtonsMobile
      value={pageNumber}
      indicatorColor={theme.palette.mode === "light" ? "primary" : "secondary"}
      textColor={theme.palette.mode === "light" ? "primary" : "secondary"}
      onChange={handlePageNumber}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          icon={tab.icon}
          iconPosition="start"
          sx={{
            backgroundColor:
              theme.palette.mode === "light" ? grey[500] : grey[800],
            color: "text.primary",
            borderRadius: 2,
            my: 0.5,
            mx: 1,
            "&.MuiTab-root": {
              minHeight: 50,
            },
          }}
          onClick={() => setDrawerOpen(false)}
          {...tab}
        />
      ))}
    </Tabs>
  );
};

export default SidebarTabs;
