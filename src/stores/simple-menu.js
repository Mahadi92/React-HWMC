import { atom } from "recoil";

const simpleMenu = atom({
  key: "simpleMenu",
  default: {
    menu: [
      {
        icon: "Home",
        pathname: "/",
        title: "Page 1",
      }
    ],
  },
});

export { simpleMenu };
