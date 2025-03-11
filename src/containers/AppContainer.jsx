import { useEffect, useState } from "react";
import SwipeableViews from "react-swipeable-views";

import { Typography, useMediaQuery, useTheme } from "@mui/material";

import MainLayout from "../layouts/MainLayout";
import { Sidebar } from "../components/sidebar";
import PagesContainer from "./PagesContainer";
import Page from "../pages/components/Page";
import SidebarContainer from "./SidebarContainer";
import MainContext from "../context";
import { tabData } from "../components/data/tabsData.sidebar";
import { DrawerActionButton } from "../components/drawer";

function AppContainer() {
  const [pageNumber, setPageNumber] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mode, setMode] = useState("light");
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    setMode("dark");
  }, []);
  useEffect(() => {
    if (isMdUp) {
      setDrawerOpen(false);
    }
  }, [isMdUp]);
  const handlePageNumber = (event, newPage) => {
    setPageNumber(newPage);
  };
  const handleThemeChange = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <MainContext.Provider
      value={{
        pageNumber,
        handlePageNumber,
        handleThemeChange,
        drawerOpen,
        setDrawerOpen,
      }}
    >
      <MainLayout mode={mode}>
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <DrawerActionButton />
        <PagesContainer>
          <SwipeableViews
            axis="x"
            index={pageNumber}
            onChangeIndex={(index) => setPageNumber(index)}
          >
            {tabData.map((tab) => (
              <div key={tab.index}>
                <Page pageNumber={pageNumber} index={tab.index}>
                  {/* <Box
                    sx={{
                      backgroundImage: `url(${require(`../assets/${tab.img}`)})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "100vh",
                    }}
                  > */}
                  <Typography variant="h5" sx={{ textAlign: "center" }}>
                    {tab.component}
                  </Typography>
                  {/* </Box> */}
                </Page>
              </div>
            ))}
          </SwipeableViews>
        </PagesContainer>
      </MainLayout>
    </MainContext.Provider>
  );
}

export default AppContainer;
