import {
    HomeRounded,
    FaceRounded,
    TextSnippetRounded,
    TerminalRounded,
    MessageRounded,
    ConnectWithoutContactRounded,
} from "@mui/icons-material";
import { AboutMe, Home, Resume } from "../../pages";
export const tabProps = (index) => {
    return {
        id: `sidebar-tab-${index}`,
        "aria-controls": `tabpanel-${index}`,
    };
};
export const tabs = [
    {
        label: "صفحه اصلی",
        icon: <HomeRounded />,
        ...tabProps(0),
    },
    {
        label: "درباره من",
        icon: <FaceRounded />,
        ...tabProps(1),
    },
    {
        label: "رزومه من",
        icon: <TextSnippetRounded />,
        ...tabProps(2),
    },
    {
        label: "نمونه کارها",
        icon: <TerminalRounded />,
        ...tabProps(3),
    },
    {
        label: "نظرات دانشجویان",
        icon: <MessageRounded />,
        ...tabProps(4),
    },
    {
        label: "ارتباط با من",
        icon: <ConnectWithoutContactRounded />,
        ...tabProps(5),
    },
];

export const tabData = [
    { index: 0, title: "صفحه اصلی", img: "bg01.jpeg", component: <Home /> },
    { index: 1, title: "درباره من", img: "bg02.jpeg", component: <AboutMe /> },
    { index: 2, title: "رزومه من", img: "bg03.jpeg", component: <Resume /> },
    { index: 3, title: "نمونه کارها", img: "bg01.jpeg", component: <Home /> },
    { index: 4, title: "نظرات دانشجویان", img: "bg02.jpeg", component: <Home /> },
    { index: 5, title: "ارتباط با من", img: "bg03.jpeg", component: <Home /> },
];
