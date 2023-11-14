var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// empty-module:~/client/DateDisplay.client
var require_DateDisplay = __commonJS({
  "empty-module:~/client/DateDisplay.client"(exports, module2) {
    module2.exports = {};
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 98,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-BG2SSGE7.css";

// app/root.tsx
var import_react13 = require("@remix-run/react");

// app/components/layouts/Layout.tsx
var React3 = __toESM(require("react")), import_react11 = require("react"), import_styles3 = require("@mui/material/styles"), import_Box = __toESM(require("@mui/material/Box")), import_CssBaseline = __toESM(require("@mui/material/CssBaseline")), import_Divider2 = __toESM(require("@mui/material/Divider"));

// app/components/layouts/LayoutComponents.tsx
var import_styles = require("@mui/material/styles"), import_Drawer = __toESM(require("@mui/material/Drawer")), import_AppBar = __toESM(require("@mui/material/AppBar")), drawerWidth = 190, drawerHeaderPadding = "0px 10px 0px 22px", openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
}), closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
}), DrawerHeader = (0, import_styles.styled)("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: drawerHeaderPadding,
  ...theme.mixins.toolbar
})), AppBar = (0, import_styles.styled)(import_AppBar.default, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
})), Drawer = (0, import_styles.styled)(import_Drawer.default, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme)
    },
    ...!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme)
    }
  })
);

// app/components/layouts/Layout.tsx
var import_useMediaQuery = __toESM(require("@mui/material/useMediaQuery")), import_styles4 = require("@mui/material/styles");

// app/theme/components.ts
var MyComponents = {
  MuiButton: {
    defaultProps: {
      disableRipple: !0
    }
  },
  MuiListItemButton: {
    defaultProps: {
      disableRipple: !0
    }
  },
  MuiListItemText: {
    styleOverrides: {
      primary: {}
    },
    defaultProps: {
      primaryTypographyProps: {
        style: {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      },
      secondaryTypographyProps: {
        style: {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }
    }
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        color: "#888"
      }
    }
  },
  MuiAutocomplete: {
    defaultProps: {
      size: "small"
    }
  },
  MuiTextField: {
    defaultProps: {
      size: "small"
    }
  },
  MuiInput: {
    defaultProps: {
      spellCheck: !1
    }
  }
};

// app/theme/palette.ts
var MyPaletteOptions = {
  primary: {
    main: "#092250"
  }
}, GREY = {
  0: "#FFFFFF",
  50: "#f2f2f2",
  100: "#f5f5f5",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24"
};

// app/theme/typography.ts
var MyTypography = {
  fontFamily: "Roboto",
  subtitle1: {
    fontWeight: 300
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: "12.5px",
    textTransform: "capitalize"
  },
  body1: {
    fontSize: "14px"
  },
  body2: {
    fontSize: "16px"
  },
  h4: {
    fontSize: "21px"
  },
  h5: {
    fontSize: "18px"
  },
  h6: {
    fontSize: "15px"
  }
};

// app/theme/AppTheme.ts
var getMyTheme = (mode2) => ({
  palette: {
    mode: mode2,
    ...mode2 === "light" ? {
      // palette values for light mode
      ...MyPaletteOptions
    } : {
      // palette values for dark mode
    }
  },
  typography: MyTypography,
  components: {
    ...MyComponents,
    ...mode2 === "light" ? {
      // palette values for light mode
    } : {
      // palette values for dark mode
    }
  }
});

// app/theme/ThemeContext.tsx
var import_react2 = require("react");
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), ThemeContext = (0, import_react2.createContext)({
  toggleTheme: () => {
  },
  setTheme: (theme) => {
  },
  currentTheme: "light"
});
var ThemeContext_default = ThemeContext;

// app/components/layouts/Layout.tsx
var import_Unstable_Grid2 = __toESM(require("@mui/material/Unstable_Grid2"));
var import_react_hot_toast = require("react-hot-toast"), import_react_tooltip = require("react-tooltip");

// app/components/left-nav/LeftNavHeader.tsx
var import_react3 = require("react"), import_Typography = __toESM(require("@mui/material/Typography")), import_IconButton = __toESM(require("@mui/material/IconButton")), import_ChevronLeft = __toESM(require("@mui/icons-material/ChevronLeft")), import_ChevronRight = __toESM(require("@mui/icons-material/ChevronRight"));

// public/images/dollar.png
var dollar_default = "/build/_assets/dollar-RSV3N6SZ.png";

// public/images/logo.png
var logo_default = "/build/_assets/logo-KUBGD7T6.png";

// public/images/money.png
var money_default = "/build/_assets/money-CREY6DUA.png";

// app/components/left-nav/LeftNavHeader.tsx
var import_styles2 = require("@mui/material/styles"), import_react4 = require("react"), import_react_router_dom = require("react-router-dom"), import_Stack = __toESM(require("@mui/material/Stack"));

// app/shared/utils/css.utils.ts
var flexCenter = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex"
}, ellipsis = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%"
}, ellipsisBlock = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "block"
};
var stickyDataCellClass = {
  position: "sticky",
  left: 0,
  minWidth: "18rem",
  // initial for no table scrollbar
  maxWidth: "18rem",
  backgroundColor: "#fff"
};

// app/shared/utils/number.utils.ts
var getRandomArbitrary = (min, max) => {
  let minn = Math.ceil(min), maxx = Math.floor(max);
  return Math.floor(Math.random() * (maxx - minn + 1)) + minn;
};
var numberFormatter = Intl.NumberFormat("en", { notation: "compact" }), splitNumberByDot = (num) => {
  let arr = (Math.round((num ?? 0) * 100) / 100).toString().split("."), integer = +arr[0], decimal = arr[1] ? arr[1] : "00";
  return [integer, decimal];
};

// app/constants/title.ts
var APP_TITLE = "Ledger";

// app/components/left-nav/LeftNavHeader.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), LOGO_LIST = [dollar_default, logo_default, money_default];
function LeftNavHeader({ closeDrawerHandler }) {
  let leftNavTitle = APP_TITLE, theme = (0, import_styles2.useTheme)(), location = (0, import_react_router_dom.useLocation)(), handleDrawerClose = () => {
    closeDrawerHandler(!1);
  }, [displayLogo, setDisplayLogo] = (0, import_react4.useState)(dollar_default);
  return (0, import_react3.useEffect)(() => {
    setDisplayLogo(LOGO_LIST[getRandomArbitrary(0, LOGO_LIST.length - 1)]);
  }, [location.pathname]), /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DrawerHeader, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react_router_dom.Link, { to: "/", style: { color: "#000" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_Stack.default, { direction: "row", sx: { ...flexCenter }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_Typography.default, { component: "img", src: displayLogo, sx: { height: "2rem", mr: "10px" }, alt: "logo" }, void 0, !1, {
        fileName: "app/components/left-nav/LeftNavHeader.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_Typography.default,
        {
          variant: "h6",
          fontFamily: "Poppins",
          sx: { color: (theme2) => theme2.palette.mode === "light" ? "primary.main" : "white" },
          children: leftNavTitle
        },
        void 0,
        !1,
        {
          fileName: "app/components/left-nav/LeftNavHeader.tsx",
          lineNumber: 43,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/left-nav/LeftNavHeader.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/left-nav/LeftNavHeader.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_IconButton.default, { onClick: handleDrawerClose, children: theme.direction === "rtl" ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ChevronRight.default, {}, void 0, !1, {
      fileName: "app/components/left-nav/LeftNavHeader.tsx",
      lineNumber: 49,
      columnNumber: 38
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ChevronLeft.default, {}, void 0, !1, {
      fileName: "app/components/left-nav/LeftNavHeader.tsx",
      lineNumber: 49,
      columnNumber: 61
    }, this) }, void 0, !1, {
      fileName: "app/components/left-nav/LeftNavHeader.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/left-nav/LeftNavHeader.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
var LeftNavHeader_default = LeftNavHeader;

// app/components/top-nav/TopNav.tsx
var import_react5 = __toESM(require("react")), import_Toolbar = __toESM(require("@mui/material/Toolbar")), import_Typography2 = __toESM(require("@mui/material/Typography")), import_IconButton2 = __toESM(require("@mui/material/IconButton"));
var import_Menu = __toESM(require("@mui/icons-material/Menu")), import_react_router_dom2 = require("react-router-dom"), import_react6 = require("react"), import_react7 = require("react"), import_Brightness4 = __toESM(require("@mui/icons-material/Brightness4")), import_Brightness7 = __toESM(require("@mui/icons-material/Brightness7")), import_Stack2 = __toESM(require("@mui/material/Stack")), import_startCase = __toESM(require("lodash/startCase"));

// app/shared/utils/constants.ts
var USER_ID = "Kqpro";
var TransformPageTitle = {
  "": "Dashboard",
  data: "Data",
  accounts: "Accounts",
  about: "About",
  settings: "Settings"
};

// app/components/top-nav/TopNav.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function TopNav({ open, onNavOpen }) {
  let location = (0, import_react_router_dom2.useLocation)(), [title, setTitle] = (0, import_react7.useState)(), [titleUrlPath, setTitleUrlPath] = (0, import_react7.useState)(""), themeContext = (0, import_react5.useContext)(ThemeContext_default);
  (0, import_react6.useEffect)(() => {
    let pathTitle = location.pathname.split("/")[1];
    setTitleUrlPath(pathTitle), setTitle(pathTitle);
  }, [location.pathname]);
  let handleDrawerOpen = () => {
    onNavOpen(!0);
  }, toggleThemeHandler = () => {
    let themeToSet = themeContext.currentTheme === "light" ? "dark" : "light";
    themeContext.setTheme(themeToSet);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react5.default.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AppBar, { position: "fixed", open, elevation: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Toolbar.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Stack2.default, { direction: "row", justifyContent: "space-between", alignItems: "center", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Stack2.default, { direction: "row", justifyContent: "start", alignItems: "center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_IconButton2.default,
        {
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          edge: "start",
          sx: {
            marginRight: 5,
            ...open && { display: "none" }
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Menu.default, {}, void 0, !1, {
            fileName: "app/components/top-nav/TopNav.tsx",
            lineNumber: 63,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/top-nav/TopNav.tsx",
          lineNumber: 53,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react_router_dom2.Link, { to: `/${titleUrlPath}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Typography2.default, { variant: "h5", noWrap: !0, sx: { fontWeight: 400, fontFamily: "Poppins", color: "#fff" }, children: (0, import_startCase.default)(TransformPageTitle[title + ""]) }, void 0, !1, {
        fileName: "app/components/top-nav/TopNav.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/top-nav/TopNav.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/top-nav/TopNav.tsx",
      lineNumber: 52,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_IconButton2.default, { sx: { ml: 1 }, color: "inherit", onClick: toggleThemeHandler, title: `Turn ${themeContext.currentTheme === "light" ? "off" : "on"} the lights`, children: themeContext.currentTheme ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Brightness7.default, {}, void 0, !1, {
      fileName: "app/components/top-nav/TopNav.tsx",
      lineNumber: 73,
      columnNumber: 45
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_Brightness4.default, {}, void 0, !1, {
      fileName: "app/components/top-nav/TopNav.tsx",
      lineNumber: 73,
      columnNumber: 67
    }, this) }, void 0, !1, {
      fileName: "app/components/top-nav/TopNav.tsx",
      lineNumber: 72,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/top-nav/TopNav.tsx",
    lineNumber: 51,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/top-nav/TopNav.tsx",
    lineNumber: 50,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/top-nav/TopNav.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/top-nav/TopNav.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}

// app/components/left-nav/LeftNav.tsx
var import_react8 = __toESM(require("react")), import_ListItem = __toESM(require("@mui/material/ListItem")), import_ListItemButton = __toESM(require("@mui/material/ListItemButton")), import_ListItemIcon = __toESM(require("@mui/material/ListItemIcon")), import_ListItemText = __toESM(require("@mui/material/ListItemText")), import_List = __toESM(require("@mui/material/List")), import_Divider = __toESM(require("@mui/material/Divider")), import_react_router_dom3 = require("react-router-dom");

// app/shared/utils/left-nav.utils.tsx
var import_AccountBalanceOutlined = __toESM(require("@mui/icons-material/AccountBalanceOutlined")), import_AccountBalance = __toESM(require("@mui/icons-material/AccountBalance")), import_Dashboard = __toESM(require("@mui/icons-material/Dashboard")), import_DashboardOutlined = __toESM(require("@mui/icons-material/DashboardOutlined")), import_FormatListBulleted = __toESM(require("@mui/icons-material/FormatListBulleted")), import_FormatListBulletedOutlined = __toESM(require("@mui/icons-material/FormatListBulletedOutlined")), import_InfoOutlined = __toESM(require("@mui/icons-material/InfoOutlined")), import_Info = __toESM(require("@mui/icons-material/Info")), import_Settings = __toESM(require("@mui/icons-material/Settings")), import_SettingsOutlined = __toESM(require("@mui/icons-material/SettingsOutlined"));

// app/shared/models/nav-item.model.ts
var NavigationItem = class {
  // eslint-disable-next-line no-useless-constructor
  constructor(display, id, url, icon) {
    this.display = display;
    this.id = id;
    this.url = url;
    this.icon = icon;
  }
};

// app/shared/utils/left-nav.utils.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), GET_LEFT_NAV_ITEMS = () => [
  new NavigationItem("Dashboard", "dashboard", ["/"], /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_DashboardOutlined.default, { color: "primary" }, void 0, !1, {
    fileName: "app/shared/utils/left-nav.utils.tsx",
    lineNumber: 20,
    columnNumber: 57
  }, this)),
  new NavigationItem("Expenses", "expenses", ["/", "expenses"], /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_FormatListBulletedOutlined.default, { color: "primary" }, void 0, !1, {
    fileName: "app/shared/utils/left-nav.utils.tsx",
    lineNumber: 21,
    columnNumber: 67
  }, this)),
  new NavigationItem("Accounts", "accounts", ["/", "accounts"], /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_AccountBalanceOutlined.default, { color: "primary" }, void 0, !1, {
    fileName: "app/shared/utils/left-nav.utils.tsx",
    lineNumber: 22,
    columnNumber: 67
  }, this)),
  new NavigationItem("Settings", "settings", ["/", "settings"], /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_SettingsOutlined.default, { color: "primary" }, void 0, !1, {
    fileName: "app/shared/utils/left-nav.utils.tsx",
    lineNumber: 23,
    columnNumber: 67
  }, this)),
  new NavigationItem("About", "about", ["/", "about"], /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_InfoOutlined.default, { color: "primary" }, void 0, !1, {
    fileName: "app/shared/utils/left-nav.utils.tsx",
    lineNumber: 24,
    columnNumber: 58
  }, this))
];

// app/components/left-nav/LeftNav.tsx
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function LeftNav(props) {
  let location = (0, import_react_router_dom3.useLocation)(), navLinkActiveToEnd = location.pathname === "/", [leftNavItems, setLeftNavItems] = (0, import_react8.useState)(GET_LEFT_NAV_ITEMS);
  return (0, import_react8.useEffect)(() => {
  }, [location.pathname]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.default.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_List.default, { sx: { p: 0 }, children: leftNavItems.map((navItem, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react8.default.Fragment, { children: [
    navItem.id === "settings" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_Divider.default, { sx: { my: 1 } }, void 0, !1, {
      fileName: "app/components/left-nav/LeftNav.tsx",
      lineNumber: 39,
      columnNumber: 46
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_ListItem.default, { disablePadding: !0, sx: { display: "block" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      import_ListItemButton.default,
      {
        sx: {
          height: 40,
          justifyContent: props.open ? "initial" : "center",
          px: "22px",
          py: "5px"
        },
        component: import_react9.NavLink,
        to: navItem.url.join(""),
        end: navLinkActiveToEnd,
        prefetch: "intent",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            import_ListItemIcon.default,
            {
              sx: {
                minWidth: 0,
                mr: props.open ? 3 : "auto",
                justifyContent: "center"
              },
              children: navItem.icon
            },
            void 0,
            !1,
            {
              fileName: "app/components/left-nav/LeftNav.tsx",
              lineNumber: 53,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_ListItemText.default, { primary: navItem.display, sx: { opacity: props.open ? 1 : 0 } }, void 0, !1, {
            fileName: "app/components/left-nav/LeftNav.tsx",
            lineNumber: 62,
            columnNumber: 17
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/left-nav/LeftNav.tsx",
        lineNumber: 43,
        columnNumber: 15
      },
      this
    ) }, navItem.id, !1, {
      fileName: "app/components/left-nav/LeftNav.tsx",
      lineNumber: 42,
      columnNumber: 13
    }, this)
  ] }, navItem.id, !0, {
    fileName: "app/components/left-nav/LeftNav.tsx",
    lineNumber: 37,
    columnNumber: 11
  }, this)) }, void 0, !1, {
    fileName: "app/components/left-nav/LeftNav.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/left-nav/LeftNav.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this);
}
var LeftNav_default = LeftNav;

// app/components/layouts/Layout.tsx
var import_LinearProgress = __toESM(require("@mui/material/LinearProgress"));

// app/shared/hooks/useNavigationType.ts
var import_react10 = require("@remix-run/react");
function useNavigationType() {
  let navigation = (0, import_react10.useNavigation)(), isNormalLoad = navigation.state === "loading" && navigation.formData == null, isReloading = navigation.state === "loading" && navigation.formData != null && navigation.formAction === navigation.location.pathname, isActionSubmission = navigation.state === "submitting", isActionReload = navigation.state === "loading" && navigation.formMethod !== null && navigation.formMethod !== "GET" && // We had a submission navigation and are loading the submitted location
  navigation.formAction === navigation.location.pathname, isActionRedirect = navigation.state === "loading" && navigation.formMethod != null && navigation.formMethod != "GET" && // We had a submission navigation and are now navigating to different location
  navigation.formAction !== navigation.location.pathname, isLoaderSubmission = navigation.state === "loading" && navigation.formMethod === "GET" && // We had a loader submission and are navigating to the submitted location
  navigation.formAction === navigation.location.pathname, isLoaderSubmissionRedirect = navigation.state === "loading" && navigation.formMethod === "GET" && // We had a loader submission and are navigating to a new location
  navigation.formAction !== navigation.location.pathname;
  return {
    isNormalLoad,
    isReloading,
    isActionSubmission,
    isActionReload,
    isActionRedirect,
    isLoaderSubmission,
    isLoaderSubmissionRedirect
  };
}

// app/components/layouts/Layout.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Layout({ child }) {
  let currentTheme = (0, import_styles3.useTheme)(), themeContext = (0, import_react11.useContext)(ThemeContext_default), [open, setOpen] = React3.useState(!0), isMobileScreenSize = (0, import_useMediaQuery.default)(currentTheme.breakpoints.down("sm")), { isNormalLoad, isActionReload, isActionRedirect, isReloading, isActionSubmission, isLoaderSubmission, isLoaderSubmissionRedirect } = useNavigationType(), showProgress = isNormalLoad || isActionSubmission || isLoaderSubmission || isLoaderSubmissionRedirect || isReloading || isActionReload || isActionRedirect, theme = (0, import_react11.useMemo)(() => (0, import_styles4.createTheme)(getMyTheme(themeContext.currentTheme)), [themeContext.currentTheme]), handleDrawerOpen = (openState) => {
    setOpen(openState);
  }, handleDrawerClose = (openState) => {
    setOpen(openState);
  };
  return (0, import_react11.useEffect)(() => {
    isMobileScreenSize && setOpen(!1);
  }, [isMobileScreenSize]), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_styles4.ThemeProvider, { theme, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_Box.default, { sx: { display: "flex", height: "100%" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_CssBaseline.default, {}, void 0, !1, {
      fileName: "app/components/layouts/Layout.tsx",
      lineNumber: 52,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TopNav, { open, onNavOpen: handleDrawerOpen }, void 0, !1, {
      fileName: "app/components/layouts/Layout.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Drawer, { variant: "permanent", open, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LeftNavHeader_default, { closeDrawerHandler: handleDrawerClose }, void 0, !1, {
        fileName: "app/components/layouts/Layout.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_Box.default, { width: "100%", height: "4px", marginTop: "-4px", children: showProgress && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_LinearProgress.default, { color: "info" }, void 0, !1, {
        fileName: "app/components/layouts/Layout.tsx",
        lineNumber: 61,
        columnNumber: 31
      }, this) }, void 0, !1, {
        fileName: "app/components/layouts/Layout.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_Divider2.default, {}, void 0, !1, {
        fileName: "app/components/layouts/Layout.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(LeftNav_default, { open }, void 0, !1, {
        fileName: "app/components/layouts/Layout.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layouts/Layout.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_Box.default, { component: "main", sx: { flexGrow: 1, bgcolor: (theme2) => theme2.palette.mode === "light" ? GREY[100] : null }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(DrawerHeader, {}, void 0, !1, {
        fileName: "app/components/layouts/Layout.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_Unstable_Grid2.default, { container: !0, sx: { bgcolor: (theme2) => theme2.palette.mode === "light" ? GREY[100] : null }, pb: 5, children: child }, void 0, !1, {
        fileName: "app/components/layouts/Layout.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/layouts/Layout.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_react_hot_toast.Toaster,
      {
        position: "top-center",
        containerClassName: "app-toast-container",
        containerStyle: {},
        toastOptions: {
          className: "app-toast",
          duration: 5e3,
          success: {
            duration: 8e3
          },
          error: {
            duration: 1e4
          }
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/layouts/Layout.tsx",
        lineNumber: 80,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react_tooltip.Tooltip, { id: "tooltip", variant: "dark", style: { zIndex: 1300 } }, void 0, !1, {
      fileName: "app/components/layouts/Layout.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/layouts/Layout.tsx",
    lineNumber: 51,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/layouts/Layout.tsx",
    lineNumber: 50,
    columnNumber: 5
  }, this);
}
var Layout_default = Layout;

// app/styles/index.css
var styles_default = "/build/_assets/index-BABRITVP.css";

// app/styles/mui-alert.css
var mui_alert_default = "/build/_assets/mui-alert-4Z3WU32H.css";

// app/components/error/ActionLoaderError.tsx
var import_Stack3 = __toESM(require("@mui/material/Stack")), import_Alert = __toESM(require("@mui/material/Alert")), import_Typography3 = __toESM(require("@mui/material/Typography")), import_react12 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ActionLoaderErrorDisplay({ error, backToUrl = "/" }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_Stack3.default, { direction: "column", justifyContent: "center", alignItems: "center", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_Alert.default, { severity: "error", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_Typography3.default, { variant: "h5", fontFamily: "Poppins", children: [
      "Status: ",
      error.status,
      " - ",
      error.statusText
    ] }, void 0, !0, {
      fileName: "app/components/error/ActionLoaderError.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/error/ActionLoaderError.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_Typography3.default, { children: "Error occurred!" }, void 0, !1, {
      fileName: "app/components/error/ActionLoaderError.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_Typography3.default, { children: error.data.message }, void 0, !1, {
      fileName: "app/components/error/ActionLoaderError.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react12.Link, { to: `${backToUrl}`, children: "Back to safely" }, void 0, !1, {
      fileName: "app/components/error/ActionLoaderError.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/error/ActionLoaderError.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}
var ActionLoaderError_default = ActionLoaderErrorDisplay;

// app/components/error/OtherError.tsx
var import_Stack4 = __toESM(require("@mui/material/Stack")), import_Alert2 = __toESM(require("@mui/material/Alert")), import_Typography4 = __toESM(require("@mui/material/Typography")), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function OtherErrorDisplay({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Stack4.default, { direction: "column", justifyContent: "center", alignItems: "center", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Alert2.default, { severity: "error", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Typography4.default, { variant: "h5", fontFamily: "Poppins", children: "Oops! Something went wrong!" }, void 0, !1, {
      fileName: "app/components/error/OtherError.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/error/OtherError.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Typography4.default, { children: "Error occurred!" }, void 0, !1, {
      fileName: "app/components/error/OtherError.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_Typography4.default, { children: error.message }, void 0, !1, {
      fileName: "app/components/error/OtherError.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/error/OtherError.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var OtherError_default = OtherErrorDisplay;

// app/root.tsx
var import_react14 = require("@vercel/analytics/react"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), links = () => [
  ...cssBundleHref ? [
    { rel: "stylesheet", href: cssBundleHref },
    { rel: "stylesheet", href: mui_alert_default },
    { rel: "stylesheet", href: styles_default }
  ] : []
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react13.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function Document({ title, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("head", { children: [
      title && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 57,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react13.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react13.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Layout_default, { child: children }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react13.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react13.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react13.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      !1
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  let err = (0, import_react13.useRouteError)();
  console.error("Error at root: ", err);
  let comp = /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(OtherError_default, { error }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 80,
    columnNumber: 3
  }, this);
  return (0, import_react13.isRouteErrorResponse)(error) && (comp = /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ActionLoaderError_default, { error }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this)), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Document, { children: comp }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 93,
    columnNumber: 5
  }, this);
}

// app/routes/accounts.$accountId.edit.tsx
var accounts_accountId_edit_exports = {};
__export(accounts_accountId_edit_exports, {
  action: () => action,
  default: () => accounts_accountId_edit_default
});
var import_DialogContent = __toESM(require("@mui/material/DialogContent")), import_Stack6 = __toESM(require("@mui/material/Stack")), import_DialogActions = __toESM(require("@mui/material/DialogActions")), import_Button = __toESM(require("@mui/material/Button")), import_lodash = require("lodash");

// app/shared/dialog/DialogLayout.tsx
var import_Close = __toESM(require("@mui/icons-material/Close")), import_Dialog = __toESM(require("@mui/material/Dialog")), import_DialogTitle = __toESM(require("@mui/material/DialogTitle")), import_Stack5 = __toESM(require("@mui/material/Stack")), import_IconButton3 = __toESM(require("@mui/material/IconButton")), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function DialogLayout({ open, title, maxWidth = "lg", onClose, children }) {
  let handleClose = () => {
    onClose();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    import_Dialog.default,
    {
      fullWidth: !0,
      maxWidth,
      open,
      onClose: handleClose,
      transitionDuration: 0,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_DialogTitle.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_Stack5.default, { direction: "row", justifyContent: "space-between", alignItems: "center", children: [
          title,
          /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_IconButton3.default, { "aria-label": "delete", color: "primary", onClick: handleClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_Close.default, {}, void 0, !1, {
            fileName: "app/shared/dialog/DialogLayout.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/shared/dialog/DialogLayout.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/shared/dialog/DialogLayout.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/shared/dialog/DialogLayout.tsx",
          lineNumber: 31,
          columnNumber: 7
        }, this),
        children
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/shared/dialog/DialogLayout.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}
var DialogLayout_default = DialogLayout;

// app/routes/accounts.$accountId.edit.tsx
var import_react15 = require("@remix-run/react"), import_react_hook_form3 = require("react-hook-form"), import_yup2 = require("@hookform/resolvers/yup"), import_react16 = require("react"), import_tiny_invariant = __toESM(require("tiny-invariant")), import_node3 = require("@remix-run/node");

// app/shared/hook-forms/TextField.tsx
var import_InputAdornment = __toESM(require("@mui/material/InputAdornment")), import_IconButton4 = __toESM(require("@mui/material/IconButton")), import_FormControl = __toESM(require("@mui/material/FormControl")), import_FormHelperText = __toESM(require("@mui/material/FormHelperText")), import_TextField = __toESM(require("@mui/material/TextField")), import_Typography5 = __toESM(require("@mui/material/Typography")), import_react_hook_form = require("react-hook-form"), import_colors = require("@mui/material/colors"), import_Close2 = __toESM(require("@mui/icons-material/Close")), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function HFTextField({ name, label, control, clearField, ...props }) {
  let clearValue = (e) => {
    clearField && clearField(name);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_react_hook_form.Controller,
    {
      name,
      control,
      render: ({
        field,
        fieldState: { invalid, isTouched, isDirty, error },
        formState
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_FormControl.default, { fullWidth: props.fullWidth, size: props.size ?? "medium", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          import_TextField.default,
          {
            id: name,
            label,
            ...props,
            ...field,
            error: !!error,
            helperText: void 0,
            autoComplete: "off",
            InputProps: {
              endAdornment: field.value && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_InputAdornment.default, { position: "end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_IconButton4.default, { onClick: clearValue, size: "small", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_Close2.default, {}, void 0, !1, {
                fileName: "app/shared/hook-forms/TextField.tsx",
                lineNumber: 42,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/shared/hook-forms/TextField.tsx",
                lineNumber: 41,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/shared/hook-forms/TextField.tsx",
                lineNumber: 40,
                columnNumber: 47
              }, this)
            }
          },
          void 0,
          !1,
          {
            fileName: "app/shared/hook-forms/TextField.tsx",
            lineNumber: 38,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_FormHelperText.default, { id: `${name}-helper-text`, error: !!error, sx: { ml: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_Typography5.default, { variant: "caption", color: import_colors.red, component: "span", children: [
          " ",
          error ? error.message : props.helperText,
          " "
        ] }, void 0, !0, {
          fileName: "app/shared/hook-forms/TextField.tsx",
          lineNumber: 48,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/shared/hook-forms/TextField.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/shared/hook-forms/TextField.tsx",
        lineNumber: 37,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/shared/hook-forms/TextField.tsx",
      lineNumber: 28,
      columnNumber: 5
    },
    this
  );
}
var TextField_default = HFTextField;

// app/api/utils/request.server.ts
var import_node2 = require("@remix-run/node"), badRequest = (data) => (0, import_node2.json)(data, { status: 400 });

// app/api/utils/utils.server.ts
function handleError(err) {
  return badRequest({ message: err.message, ...err });
}
function getRandomColor() {
  for (var letters = "BCDEF".split(""), color = "#", i = 0; i < 6; i++)
    color += letters[Math.floor(Math.random() * letters.length)];
  return color;
}
var getLineColorByAccountName = (accountName, index) => {
  let color = "";
  switch (accountName) {
    case "Ascensus (RC)": {
      color = "#cccc00";
      break;
    }
    case "Paychex (CSG)": {
      color = "#66ccff";
      break;
    }
    case "Ascensus (Omnyon)": {
      color = "#005ce6";
      break;
    }
    case "Empower (Praxis)": {
      color = "#e62e00";
      break;
    }
    case "Fidelity (GD)": {
      color = "#368727";
      break;
    }
    default:
      color = colorList[index] ?? getRandomColor();
  }
  return color;
}, colorList = [
  "#8080ff",
  //navy
  "#009933",
  //green
  "#996633",
  //brown
  "#0099cc",
  //blue
  "#ff9933",
  //orange
  "#800080",
  //purple
  "#663300",
  //dark brown
  "#0000FF",
  //blue
  "#008000",
  //green
  "#FFA500",
  // orange
  "#808000",
  //olive
  "#00FF00",
  //lime
  "#800000",
  //maroon
  "#00FFFF",
  //aqua
  "#008080",
  //team
  "#000080",
  //navy
  "#FF00FF",
  //fushua,
  "#808080"
  //gray
];

// app/routes/accounts.$accountId.edit.tsx
var import_Alert3 = __toESM(require("@mui/material/Alert"));
var import_Box2 = __toESM(require("@mui/material/Box")), import_LinearProgress2 = __toESM(require("@mui/material/LinearProgress"));

// app/shared/hook-forms/Switch.tsx
var import_FormControlLabel = __toESM(require("@mui/material/FormControlLabel")), import_FormControl2 = __toESM(require("@mui/material/FormControl")), import_FormHelperText2 = __toESM(require("@mui/material/FormHelperText")), import_Typography6 = __toESM(require("@mui/material/Typography")), import_react_hook_form2 = require("react-hook-form"), import_colors2 = require("@mui/material/colors"), import_Switch = __toESM(require("@mui/material/Switch")), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function HFSwitch({ name, label, control, helperText, formcontrolSize, labelProps, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_react_hook_form2.Controller,
    {
      name,
      control,
      render: ({
        field,
        fieldState: { invalid, isTouched, isDirty, error },
        formState
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_FormControl2.default, { size: formcontrolSize ?? "medium", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          import_FormControlLabel.default,
          {
            control: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
              import_Switch.default,
              {
                id: `${name}-switch`,
                ...props,
                ...field,
                name,
                checked: field.value
              },
              void 0,
              !1,
              {
                fileName: "app/shared/hook-forms/Switch.tsx",
                lineNumber: 37,
                columnNumber: 17
              },
              this
            ),
            label,
            ...labelProps
          },
          void 0,
          !1,
          {
            fileName: "app/shared/hook-forms/Switch.tsx",
            lineNumber: 35,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_FormHelperText2.default, { id: `${name}-helper-text`, error: !!error, sx: { ml: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_Typography6.default, { variant: "caption", color: import_colors2.red, component: "span", children: [
          " ",
          error ? error.message : helperText,
          " "
        ] }, void 0, !0, {
          fileName: "app/shared/hook-forms/Switch.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/shared/hook-forms/Switch.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/shared/hook-forms/Switch.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/shared/hook-forms/Switch.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}
var Switch_default = HFSwitch;

// app/shared/validation/yup-schemas.ts
var import_yup = require("yup"), accountSchema = (0, import_yup.object)({
  name: (0, import_yup.string)().trim().required("Field is required.").min(2, "Value has to be at least 2 characters.")
}), expenseSchema = (0, import_yup.object)({
  amount: (0, import_yup.number)().required("Field is required.").min(0, "Value has to be at least 2 characters."),
  date: (0, import_yup.date)().required("Field is required."),
  accountId: (0, import_yup.string)().required("Field is required.")
});

// app/api/database.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient(), console.log("DEV Created new DB connection for first time")), console.log("Assigning existing DB connection"), prisma = global.__db__, prisma.$connect();

// app/api/settings.server.ts
async function getDataSettingsByUserId(userId) {
  try {
    return await prisma.dataSettings.findFirst({
      where: {
        userId
      }
    });
  } catch (error) {
    throw console.log("Server error at getDataSettingsByUserId(): ", JSON.stringify(error)), new Error(`Data Settings could not be retrieved. Code: ${error.code}`);
  }
}
async function addDataSettings(item) {
  try {
    return await prisma.dataSettings.create({
      data: {
        addAnotherAfterSubmit: item.addAnotherAfterSubmit,
        userId: item.userId,
        defaultAccountIdToAdd: item.defaultAccountIdToAdd,
        dashboardCount: item.dashboardCount,
        showDashboardChart: item.showDashboardChart ?? !1
      }
    });
  } catch (error) {
    throw console.log("Server error at addDataSettings(): ", JSON.stringify(error)), error.code === "P2002" ? new Error(`Data Settings for user '${item.userId}' already exists.`) : new Error(`Data Settings for user ${item.userId} could not be added. Code: ${error.code}`);
  }
}
async function updateDataSettings(item) {
  try {
    return await prisma.dataSettings.update({
      where: {
        userId: USER_ID
      },
      data: {
        ...item
      }
    });
  } catch (error) {
    throw console.log("Server error at updateDataSettings(): ", JSON.stringify(error)), new Error(`Data Settings for user ${USER_ID} could not be updated. Code: ${error.code}`);
  }
}

// app/api/accounts.server.ts
var import_format = __toESM(require("date-fns/format"));
async function addAccount(item) {
  try {
    return await prisma.account.create({
      data: item
    });
  } catch (error) {
    throw console.log("Server error at addAccount(): ", JSON.stringify(error)), error.code === "P2002" ? new Error(`Account name '${item.name}' already exists.`) : new Error(`Account name ${item.name} could not be added. Code: ${error.code}`);
  }
}
async function getAccounts() {
  try {
    return await prisma.account.findMany({
      orderBy: {
        name: "asc"
      },
      include: {
        _count: {
          select: { expenses: !0 }
        }
      }
    });
  } catch (error) {
    throw console.log("Server error at getAccounts(): ", JSON.stringify(error)), new Error(`Accounts could not be retrieved. Code: ${error.code}`);
  }
}
async function getAccount(accountId) {
  try {
    return await prisma.account.findUnique({
      where: {
        id: accountId
      }
    });
  } catch (error) {
    throw console.log("Server error at getAccount(): ", JSON.stringify(error)), new Error(`Account could not be retrieved. Code: ${error.code}`);
  }
}
async function updateAccount(accountId, item) {
  try {
    return await prisma.account.update({
      where: {
        id: accountId
      },
      data: {
        name: item.name || void 0,
        shown: item.shown
      }
    });
  } catch (error) {
    throw console.log("Server error at updateAccount(): ", JSON.stringify(error)), error.code === "P2002" ? new Error(`Account name '${item.name}' already exists.`) : new Error(`Account name ${item.name} could not be updated. Code: ${error.code}`);
  }
}
async function deleteAccount(accountId) {
  try {
    return await prisma.account.delete({
      where: {
        id: accountId
      }
    });
  } catch (error) {
    throw console.log("Server error at deleteAccount(): ", JSON.stringify(error)), new Error(`Account could not be deleted. Code: ${error.code}`);
  }
}
async function getShownAccountAndExpenses() {
  let dashboardCount = (await getDataSettingsByUserId(USER_ID))?.dashboardCount || 20;
  try {
    let shownAccounts = await prisma.account.findMany({
      where: {
        shown: !0
      },
      orderBy: {
        dateAdded: "desc"
      },
      include: {
        expenses: {
          orderBy: {
            date: "desc"
          },
          take: dashboardCount
        }
      }
    }), shownAccountIds = shownAccounts.map((account) => account.id), totalExpenseCountByAccountId = await prisma.expense.groupBy({
      by: ["accountId"],
      _count: {
        accountId: !0
      },
      where: {
        accountId: {
          in: shownAccountIds
        }
      }
    });
    return shownAccounts.map((account) => {
      let expenseCount = totalExpenseCountByAccountId.find((expense) => expense.accountId === account.id);
      return {
        ...account,
        expenseCount: expenseCount?._count?.accountId || 0
      };
    });
  } catch (error) {
    throw console.log("Server error at getShownAccountAndExpenses(): ", JSON.stringify(error)), new Error(`Account expenses could not be retrieved. Code: ${error.code}`);
  }
}
async function getDashboardChartData() {
  let allAccountData = await prisma.account.findMany({
    where: {
      shown: !0
    },
    orderBy: {
      dateAdded: "desc"
    },
    include: {
      expenses: {
        orderBy: {
          date: "desc"
        }
      }
    }
  }), allAccountDataDateSet = /* @__PURE__ */ new Set();
  allAccountData.forEach((account) => {
    account.expenses.forEach((rec) => {
      allAccountDataDateSet.add((0, import_format.default)(rec.date, "MM/dd/yyyy"));
    });
  });
  let allAccountDataDateSetArray = Array.from(allAccountDataDateSet);
  return allAccountDataDateSetArray.sort((a, b) => new Date(b).getTime() < new Date(a).getTime() ? 1 : -1), allAccountDataDateSetArray.map((dateString) => {
    let data = {
      expenseDate: (0, import_format.default)(new Date(dateString), "MM/dd/yyyy"),
      color: ""
    };
    return allAccountData.forEach((account, index) => {
      let expense = account.expenses.find((rec) => (0, import_format.default)(rec.date, "MM/dd/yyyy") === dateString);
      data[account.name] = expense?.amount || null;
    }), data;
  });
}

// app/routes/accounts.$accountId.edit.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function AccountDetailEdit() {
  let [searchParams, setSearchParams] = (0, import_react15.useSearchParams)(), accountAndExpense = (0, import_react15.useRouteLoaderData)("routes/accounts.$accountId");
  (0, import_tiny_invariant.default)(accountAndExpense?.account, "Expected account details data to be defined");
  let { account } = accountAndExpense, actionData = (0, import_react15.useActionData)(), hasActionError = actionData && !!actionData.error, navigate = (0, import_react15.useNavigate)(), { control, reset, setValue, formState } = (0, import_react_hook_form3.useForm)({
    defaultValues: account,
    resolver: (0, import_yup2.yupResolver)(accountSchema),
    mode: "onChange"
  }), { isActionSubmission, isActionRedirect } = useNavigationType(), redirectUrl = searchParams.get("redirectUrl") || "../", handleClearField = (0, import_react16.useCallback)((name) => {
    name && setValue(name, "");
  }, [setValue]), handleClose = () => {
    navigate(redirectUrl);
  }, handleOnReset = () => {
    reset();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(DialogLayout_default, { open: !0, onClose: handleClose, title: `Edit: ${(0, import_lodash.startCase)(account.name)}`, maxWidth: "xs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_Box2.default, { width: "100%", children: (isActionSubmission || isActionRedirect) && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_LinearProgress2.default, { color: isActionRedirect ? "success" : "warning" }, void 0, !1, {
      fileName: "app/routes/accounts.$accountId.edit.tsx",
      lineNumber: 60,
      columnNumber: 55
    }, this) }, void 0, !1, {
      fileName: "app/routes/accounts.$accountId.edit.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react15.Form, { method: "PATCH", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_DialogContent.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_Stack6.default, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, width: "100%", children: [
      hasActionError && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_Alert3.default, { severity: "error", sx: { width: "100%" }, children: [
        " ",
        actionData.message,
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/accounts.$accountId.edit.tsx",
        lineNumber: 65,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        TextField_default,
        {
          name: "name",
          label: "Account Name",
          control,
          variant: "standard",
          type: "text",
          helperText: "Account name.",
          fullWidth: !0,
          autoFocus: !0,
          clearField: handleClearField
        },
        void 0,
        !1,
        {
          fileName: "app/routes/accounts.$accountId.edit.tsx",
          lineNumber: 67,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Switch_default, { name: "shown", label: "Show by default", control }, void 0, !1, {
        fileName: "app/routes/accounts.$accountId.edit.tsx",
        lineNumber: 70,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_DialogActions.default, { sx: { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_Button.default, { type: "reset", onClick: handleOnReset, disabled: isActionSubmission, children: "Reset" }, void 0, !1, {
          fileName: "app/routes/accounts.$accountId.edit.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_Button.default, { type: "submit", disabled: !formState.isValid || isActionSubmission, children: isActionSubmission ? "Submitting..." : "Submit" }, void 0, !1, {
          fileName: "app/routes/accounts.$accountId.edit.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/accounts.$accountId.edit.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/accounts.$accountId.edit.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/accounts.$accountId.edit.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/accounts.$accountId.edit.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/accounts.$accountId.edit.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
var accounts_accountId_edit_default = AccountDetailEdit;
async function action({ request, context, params }) {
  let body = await request.formData(), accountId = params.accountId;
  (0, import_tiny_invariant.default)(accountId, "Expected accountId in params to be defined");
  let name = body.get("name"), redirectUrl = new URL(request.url).searchParams.get("redirectUrl");
  try {
    return await updateAccount(accountId, {
      name,
      shown: body.get("shown") === "true"
    }), (0, import_node3.redirect)(redirectUrl);
  } catch (err) {
    return handleError({ message: err.message, error: !0 });
  }
}

// app/routes/expenses.$recordId.edit.tsx
var expenses_recordId_edit_exports = {};
__export(expenses_recordId_edit_exports, {
  action: () => action2,
  default: () => expenses_recordId_edit_default
});
var import_DialogContent2 = __toESM(require("@mui/material/DialogContent")), import_Stack7 = __toESM(require("@mui/material/Stack")), import_DialogActions2 = __toESM(require("@mui/material/DialogActions")), import_Button2 = __toESM(require("@mui/material/Button"));
var import_react17 = require("@remix-run/react"), import_react_hook_form5 = require("react-hook-form"), import_yup4 = require("@hookform/resolvers/yup"), import_react18 = require("react"), import_tiny_invariant2 = __toESM(require("tiny-invariant")), import_node4 = require("@remix-run/node");
var import_Alert4 = __toESM(require("@mui/material/Alert"));
var import_Box3 = __toESM(require("@mui/material/Box")), import_LinearProgress3 = __toESM(require("@mui/material/LinearProgress")), import_format3 = __toESM(require("date-fns/format"));

// app/api/utils/validations.server.ts
var import_yup3 = require("yup");
async function isValidStringCount(text, count = 1) {
  return await (0, import_yup3.string)().required("This field is required.").min(count, `This field must be at least ${count} character long.`).validate(text);
}
async function validateExpenseToAdd(expense) {
  return await (0, import_yup3.object)().shape({
    amount: (0, import_yup3.number)().required("Dollar amount field is required.").min(0, "Amount has to be greater than 0."),
    date: (0, import_yup3.date)().required("Date field is required."),
    accountId: (0, import_yup3.string)().required("Account id is required.")
  }).validate(expense);
}

// app/api/expenses.server.ts
var import_parseInt = __toESM(require("lodash/parseInt"));

// app/api/utils/date.server.ts
var import_formatDistanceToNowStrict = __toESM(require("date-fns/formatDistanceToNowStrict")), import_format2 = __toESM(require("date-fns/format")), convertDateDisplay = (date3, displayType) => {
  if (!date3)
    return {
      display: "N/A",
      tooltip: "N/A"
    };
  let fullDate = (0, import_format2.default)(new Date(date3), "MM/dd/yy HH:mm"), shortData = (0, import_format2.default)(new Date(date3), "MM/dd/yy"), fromNow = (0, import_formatDistanceToNowStrict.default)(new Date(date3), { addSuffix: !0 }), shortAndNow = `${shortData} (${fromNow})`, longAndNow = `${fullDate} (${fromNow})`;
  return {
    display: displayType === "fromNow" ? fromNow : displayType === "full" ? fullDate : displayType === "short" ? shortData : displayType === "shortAndNow" ? shortAndNow : longAndNow,
    tooltip: `${date3} - ${(0, import_format2.default)(new Date(date3), "MM/dd/yy hh:mm bbb")} - ${longAndNow}`
  };
};

// app/api/expenses.server.ts
async function getExpensesPaged(page, filterString) {
  let offset = page * 25, totalCount = await prisma.expense.count(), filter = filterString !== null ? filterString.trim() : "", filterAsNumber = (0, import_parseInt.default)(filter.replaceAll(",", "")) ? filter.includes(",") ? +filter.replaceAll(",", "") : +filter : void 0;
  try {
    let res = await prisma.expense.findMany({
      include: {
        account: !0
      },
      orderBy: {
        date: "desc"
      },
      skip: offset,
      take: 25,
      where: {
        OR: [
          {
            account: {
              name: {
                contains: filter,
                mode: "insensitive"
              }
            }
          },
          {
            amount: filterAsNumber
          }
        ]
      }
    }), currentResultSetCount = await prisma.expense.count({
      where: {
        OR: [
          {
            account: {
              name: {
                contains: filter,
                mode: "insensitive"
              }
            }
          },
          {
            amount: filterAsNumber
          }
        ]
      }
    }), totalPages = Math.ceil(currentResultSetCount / 25);
    return {
      data: res,
      totalPages,
      totalCount,
      currentResultSetCount,
      pageSize: 25
    };
  } catch (error) {
    throw console.log("Server error at getExpensesPaged(): ", JSON.stringify(error)), new Error(`Expenses could not be retrieved. Code: ${error.code}`);
  }
}
async function addExpense(expense) {
  try {
    return await prisma.expense.create({
      data: {
        amount: +expense.amount,
        date: new Date(expense.date),
        account: { connect: { id: expense.accountId } }
      }
    });
  } catch (error) {
    throw console.log("Server error at addExpense(): ", JSON.stringify(error)), error.code === "P2002" ? new Error(`Expense name '${expense.amount}' already exists.`) : new Error(`Expense name ${expense.amount} could not be added. Code: ${error.code}`);
  }
}
async function getExpensesByAccountId(accountId, page, filterString) {
  let offset = page * 25, totalCount = await prisma.expense.count({
    where: {
      accountId
    }
  }), filter = filterString !== null ? filterString.trim() : "", filterAsNumber = (0, import_parseInt.default)(filter.replaceAll(",", "")) ? filter.includes(",") ? +filter.replaceAll(",", "") : +filter : void 0;
  try {
    let res = await prisma.expense.findMany({
      where: {
        accountId
      },
      include: {
        account: !0
      },
      orderBy: {
        date: "desc"
      },
      skip: offset,
      take: 25
    }), currentResultSetCount = await prisma.expense.count({
      where: {
        accountId
      }
    }), totalPages = Math.ceil(currentResultSetCount / 25);
    return {
      data: res.map((expense) => ({
        ...expense,
        dateFromNow: convertDateDisplay(expense.date, "shortAndNow")
      })),
      totalPages,
      totalCount,
      currentResultSetCount,
      pageSize: 25
    };
  } catch (error) {
    throw console.log("Server error at getExpensesByAccountId(): ", JSON.stringify(error)), new Error(`Expenses could not be retrieved. Code: ${error.code}`);
  }
}
async function deleteExpense(expenseId) {
  try {
    return await prisma.expense.delete({
      where: {
        id: expenseId
      }
    });
  } catch (error) {
    throw console.log("Server error at deleteExpense(): ", JSON.stringify(error)), new Error(`Expense could not be deleted. Code: ${error.code}`);
  }
}
async function getExpenseById(expenseId) {
  try {
    return await prisma.expense.findUnique({
      where: {
        id: expenseId
      },
      include: {
        account: !0
      }
    });
  } catch (error) {
    throw console.log("Server error at getExpenseById(): ", JSON.stringify(error)), new Error(`Expense could not be retrieved. Code: ${error.code}`);
  }
}
async function editExpense(expense) {
  try {
    return await prisma.expense.update({
      where: {
        id: expense.id
      },
      data: {
        amount: +expense.amount,
        date: new Date(expense.date),
        accountId: expense.accountId
      }
    });
  } catch (error) {
    throw console.log("Server error at editExpense(): ", JSON.stringify(error)), new Error(`Expense could not be edited. Code: ${error.code}`);
  }
}

// app/components/expense/ExpenseEditFormFields.tsx
var import_InputAdornment2 = __toESM(require("@mui/material/InputAdornment"));

// app/shared/hook-forms/Autocomplete.tsx
var import_TextField3 = __toESM(require("@mui/material/TextField")), import_FormHelperText3 = __toESM(require("@mui/material/FormHelperText")), import_Typography7 = __toESM(require("@mui/material/Typography")), import_react_hook_form4 = require("react-hook-form"), import_Autocomplete = __toESM(require("@mui/material/Autocomplete")), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function HFAutocompleteField({ name, label, control, options, helperText, propertyIdToSelect, ...autoCompleteProps }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_react_hook_form4.Controller,
    {
      name,
      control,
      render: ({
        field,
        fieldState: { invalid, isTouched, isDirty, error },
        formState
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_Autocomplete.default,
          {
            id: name,
            options,
            ...field,
            renderInput: (params) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_TextField3.default, { ...params, label, variant: "standard" }, void 0, !1, {
              fileName: "app/shared/hook-forms/Autocomplete.tsx",
              lineNumber: 34,
              columnNumber: 39
            }, this),
            onChange: (e, data) => field.onChange(propertyIdToSelect ? data[propertyIdToSelect] : data),
            ...autoCompleteProps
          },
          void 0,
          !1,
          {
            fileName: "app/shared/hook-forms/Autocomplete.tsx",
            lineNumber: 30,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_FormHelperText3.default, { id: `${name}-helper-text`, error: !!error, sx: { ml: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_Typography7.default, { variant: "caption", component: "span", children: [
          " ",
          error ? error.message : helperText,
          " "
        ] }, void 0, !0, {
          fileName: "app/shared/hook-forms/Autocomplete.tsx",
          lineNumber: 40,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/shared/hook-forms/Autocomplete.tsx",
          lineNumber: 38,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/shared/hook-forms/Autocomplete.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/shared/hook-forms/Autocomplete.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}
var Autocomplete_default = HFAutocompleteField;

// app/components/expense/ExpenseEditFormFields.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function ExpenseEditFormFields({ accountList, control, onClearField }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      TextField_default,
      {
        name: "amount",
        label: "Amount",
        control,
        variant: "standard",
        type: "number",
        helperText: "Expense amount",
        fullWidth: !0,
        autoFocus: !0,
        InputProps: {
          startAdornment: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_InputAdornment2.default, { position: "start", children: "$" }, void 0, !1, {
            fileName: "app/components/expense/ExpenseEditFormFields.tsx",
            lineNumber: 13,
            columnNumber: 27
          }, this)
        },
        clearField: onClearField,
        onFocus: (event) => {
          event.target.select();
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/expense/ExpenseEditFormFields.tsx",
        lineNumber: 11,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(TextField_default, { name: "date", label: "", control, type: "datetime-local", variant: "standard", helperText: "Expense submission date", fullWidth: !0, clearField: onClearField }, void 0, !1, {
      fileName: "app/components/expense/ExpenseEditFormFields.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      Autocomplete_default,
      {
        name: "account",
        label: "Select an account",
        control,
        options: accountList,
        getOptionLabel: (option) => option?.name ?? "",
        fullWidth: !0,
        isOptionEqualToValue: (option, value) => option.id === value.id
      },
      void 0,
      !1,
      {
        fileName: "app/components/expense/ExpenseEditFormFields.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/expense/ExpenseEditFormFields.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var ExpenseEditFormFields_default = ExpenseEditFormFields;

// app/routes/expenses.$recordId.edit.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function ExpenseEdit() {
  let expenseData = (0, import_react17.useRouteLoaderData)("routes/expenses.$expenseId")?.expense, accountData = (0, import_react17.useRouteLoaderData)("routes/expenses.$expenseId")?.accounts;
  (0, import_tiny_invariant2.default)(expenseData, "Expected expense to be defined"), (0, import_tiny_invariant2.default)(accountData, "Expected accounts to be defined");
  let accountFromId = accountData.find((account) => account.id === expenseData.accountId), [searchParams, setSearchParams] = (0, import_react17.useSearchParams)(), redirectUrl = searchParams.get("redirectUrl") || "../", { isActionSubmission, isActionRedirect } = useNavigationType(), actionData = (0, import_react17.useActionData)(), hasActionError = actionData && !!actionData.error, isApiLoading = isActionSubmission || isActionRedirect, navigate = (0, import_react17.useNavigate)(), { control, reset, setValue, formState } = (0, import_react_hook_form5.useForm)({
    defaultValues: {
      amount: expenseData.amount,
      account: accountFromId,
      accountId: accountFromId?.id,
      date: (0, import_format3.default)(new Date(expenseData?.date ?? 0), "yyyy-MM-dd HH:mm")
    },
    resolver: (0, import_yup4.yupResolver)(expenseSchema),
    mode: "onChange"
  }), handleClearField = (0, import_react18.useCallback)((name) => {
    name && setValue(name, "");
  }, [setValue]), handleClose = () => {
    navigate(`${redirectUrl}`);
  }, handleOnReset = () => {
    reset();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(DialogLayout_default, { open: !0, onClose: handleClose, title: "Edit Expense", maxWidth: "xs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_Box3.default, { width: "100%", children: isApiLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_LinearProgress3.default, { color: isActionRedirect ? "success" : "warning" }, void 0, !1, {
      fileName: "app/routes/expenses.$recordId.edit.tsx",
      lineNumber: 72,
      columnNumber: 27
    }, this) }, void 0, !1, {
      fileName: "app/routes/expenses.$recordId.edit.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react17.Form, { method: "PATCH", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_DialogContent2.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_Stack7.default, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, width: "100%", children: [
        hasActionError && /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_Alert4.default, { severity: "error", sx: { width: "100%" }, children: actionData.message }, void 0, !1, {
          fileName: "app/routes/expenses.$recordId.edit.tsx",
          lineNumber: 77,
          columnNumber: 33
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(ExpenseEditFormFields_default, { control, onClearField: handleClearField, accountList: accountData }, void 0, !1, {
          fileName: "app/routes/expenses.$recordId.edit.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_DialogActions2.default, { sx: { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_Button2.default, { type: "reset", onClick: handleOnReset, disabled: isApiLoading, children: "Reset" }, void 0, !1, {
            fileName: "app/routes/expenses.$recordId.edit.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_Button2.default, { type: "submit", disabled: !formState.isValid || isApiLoading, children: isApiLoading ? "Submitting..." : "Submit" }, void 0, !1, {
            fileName: "app/routes/expenses.$recordId.edit.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/expenses.$recordId.edit.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/expenses.$recordId.edit.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/expenses.$recordId.edit.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
        TextField_default,
        {
          type: "hidden",
          name: "accountId",
          control,
          label: "Account",
          sx: { display: "none" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/expenses.$recordId.edit.tsx",
          lineNumber: 93,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/expenses.$recordId.edit.tsx",
      lineNumber: 74,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/expenses.$recordId.edit.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
var expenses_recordId_edit_default = ExpenseEdit;
async function action2({ request, context, params }) {
  let body = await request.formData(), expenseId = params.expenseId, redirectUrl = new URL(request.url).searchParams.get("redirectUrl");
  (0, import_tiny_invariant2.default)(expenseId, "Expected expenseId in params to be defined");
  let expense = {
    id: expenseId,
    accountId: body.get("accountId"),
    date: body.get("date"),
    amount: +body.get("amount")
  };
  try {
    await validateExpenseToAdd(expense);
  } catch (err) {
    return handleError({ message: err.message, error: !0 });
  }
  try {
    return await editExpense(expense), (0, import_node4.redirect)(`${redirectUrl}`);
  } catch (err) {
    return handleError({ message: err.message, error: !0 });
  }
}

// app/routes/accounts.$accountId.tsx
var accounts_accountId_exports = {};
__export(accounts_accountId_exports, {
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action3,
  default: () => accounts_accountId_default,
  headers: () => headers,
  links: () => links2,
  loader: () => loader,
  meta: () => meta
});
var import_node5 = require("@remix-run/node");

// app/shared/hooks/useIsMobile.ts
var import_useMediaQuery2 = __toESM(require("@mui/material/useMediaQuery")), import_styles6 = require("@mui/material/styles"), useScreenSize = () => {
  let theme = (0, import_styles6.useTheme)(), isMobileScreenSize = (0, import_useMediaQuery2.default)(theme.breakpoints.down("sm")), isMediumSize = (0, import_useMediaQuery2.default)(theme.breakpoints.between("sm", "md")), isLargeSize = (0, import_useMediaQuery2.default)(theme.breakpoints.between("md", "lg")), isXlSize = (0, import_useMediaQuery2.default)(theme.breakpoints.between("lg", "xl")), isAboveXlSize = (0, import_useMediaQuery2.default)(theme.breakpoints.up("xl"));
  return {
    isMobile: isMobileScreenSize,
    isMed: isMediumSize,
    isLg: isLargeSize,
    isXl: isXlSize,
    isAboveXl: isAboveXlSize
  };
}, useIsMobile_default = useScreenSize;

// app/routes/accounts.$accountId.tsx
var import_react23 = require("@remix-run/react"), import_Stack11 = __toESM(require("@mui/material/Stack")), import_tiny_invariant3 = __toESM(require("tiny-invariant")), import_AccountBalance2 = __toESM(require("@mui/icons-material/AccountBalance")), import_Typography12 = __toESM(require("@mui/material/Typography"));
var import_react_hook_form6 = require("react-hook-form");
var import_react24 = require("react");

// app/components/no-result/NoResult.tsx
var import_Typography8 = __toESM(require("@mui/material/Typography")), import_Stack8 = __toESM(require("@mui/material/Stack")), import_react19 = require("@remix-run/react");

// public/images/emptybox.png
var emptybox_default = "/build/_assets/emptybox-6DSULNOE.png";

// public/images/no-results.png
var no_results_default = "/build/_assets/no-results-XOHAVWLE.png";

// app/components/no-result/NoResult.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function NoResult() {
  let [searchParams, setSearchParams] = (0, import_react19.useSearchParams)(), searchParam = searchParams.get("q"), notFoundText = searchParam ? `No result found with the query: '${searchParam}'` : "No result found";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_Stack8.default, { direction: "column", justifyContent: "start", alignItems: "center", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_Typography8.default, { component: "img", src: searchParam ? no_results_default : emptybox_default, sx: { height: "5rem" }, alt: "logo" }, void 0, !1, {
      fileName: "app/components/no-result/NoResult.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_Typography8.default, { variant: "h4", fontFamily: "Poppins", children: [
      notFoundText,
      "."
    ] }, void 0, !0, {
      fileName: "app/components/no-result/NoResult.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/no-result/NoResult.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var NoResult_default = NoResult;

// app/components/title/TitleBarLayout.tsx
var import_Paper = __toESM(require("@mui/material/Paper")), import_Stack9 = __toESM(require("@mui/material/Stack")), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function TitleBarLayout({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_Paper.default, { sx: { width: "100%", p: 2 }, elevation: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_Stack9.default, { direction: "row", justifyContent: "space-between", alignItems: "center", width: "100%", children }, void 0, !1, {
    fileName: "app/components/title/TitleBarLayout.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/title/TitleBarLayout.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var TitleBarLayout_default = TitleBarLayout;

// app/routes/accounts.$accountId.tsx
var import_Box5 = __toESM(require("@mui/material/Box")), import_Pagination = __toESM(require("@mui/material/Pagination"));

// app/shared/utils/url.utils.ts
function getParamsAsObject(params) {
  let currentParams = {};
  return params.forEach((value, key) => {
    currentParams[key] = value;
  }), currentParams;
}

// app/shared/components/Title.tsx
var import_Typography9 = __toESM(require("@mui/material/Typography"));
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function TitleNameDisplay({ name }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    import_Typography9.default,
    {
      style: { ...ellipsisBlock },
      variant: "h5",
      fontFamily: "Poppins",
      "data-tooltip-id": "tooltip",
      "data-tooltip-content": `${name}`,
      children: name
    },
    void 0,
    !1,
    {
      fileName: "app/shared/components/Title.tsx",
      lineNumber: 6,
      columnNumber: 5
    },
    this
  );
}

// app/components/expense/ExpenseList.tsx
var import_List2 = __toESM(require("@mui/material/List"));

// app/components/expense/Expense.tsx
var import_ListItem2 = __toESM(require("@mui/material/ListItem")), import_ListItemText2 = __toESM(require("@mui/material/ListItemText")), import_ListItemAvatar = __toESM(require("@mui/material/ListItemAvatar")), import_Avatar2 = __toESM(require("@mui/material/Avatar")), import_IconButton6 = __toESM(require("@mui/material/IconButton")), import_Delete = __toESM(require("@mui/icons-material/Delete"));
var import_Stack10 = __toESM(require("@mui/material/Stack")), import_Edit = __toESM(require("@mui/icons-material/Edit")), import_react21 = require("@remix-run/react");

// app/shared/hooks/useFetcherType.ts
var import_react20 = require("@remix-run/react");
function useFetcherType(fetcher) {
  let navigation = (0, import_react20.useNavigation)(), isFetcherDone = fetcher.state === "idle" && fetcher.data != null, isFetcherActionSubmission = fetcher.state === "submitting", isFetcherActionReload = fetcher.state === "loading" && fetcher.formMethod != null && //fetcher.formMethod != "GET" &&
  // If we returned data, we must be reloading
  fetcher.data != null, isFetcherActionRedirect = fetcher.state === "loading" && fetcher.formMethod != null && navigation.formMethod != "GET" && // If we have no data we must have redirected
  fetcher.data == null, isFetcherLoaderSubmission = navigation.state === "loading" && navigation.formMethod === "GET", isFetcherNormalLoad = fetcher.state === "loading" && fetcher.formMethod == null && fetcher.data == null;
  return {
    isFetcherDone,
    isFetcherActionSubmission,
    isFetcherActionReload,
    isFetcherActionRedirect,
    isFetcherLoaderSubmission,
    isFetcherNormalLoad
  };
}

// app/components/expense/Expense.tsx
var import_CircularProgress = __toESM(require("@mui/material/CircularProgress")), import_Typography11 = __toESM(require("@mui/material/Typography")), import_Pageview = __toESM(require("@mui/icons-material/Pageview")), import_react22 = require("react");

// app/components/expense/ExpenseDetail.tsx
var import_Card = __toESM(require("@mui/material/Card")), import_CardContent = __toESM(require("@mui/material/CardContent")), import_Typography10 = __toESM(require("@mui/material/Typography")), import_CardHeader = __toESM(require("@mui/material/CardHeader")), import_Avatar = __toESM(require("@mui/material/Avatar")), import_IconButton5 = __toESM(require("@mui/material/IconButton")), import_MoreVert = __toESM(require("@mui/icons-material/MoreVert")), import_DateDisplay = __toESM(require_DateDisplay()), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function ExpenseDetail({ expense }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_Card.default, { elevation: 0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
      import_CardHeader.default,
      {
        avatar: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_Avatar.default, { "aria-label": "recipe", children: expense.account.name[0] }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        action: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_IconButton5.default, { "aria-label": "settings", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_MoreVert.default, {}, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        title: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_Typography10.default, { variant: "h5", fontWeight: 500, className: "montserrat", children: [
          "$",
          expense.amount.toLocaleString()
        ] }, void 0, !0, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 27,
          columnNumber: 17
        }, this),
        subheader: expense.account.name,
        titleTypographyProps: {
          className: "montserrat",
          variant: "h5"
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/expense/ExpenseDetail.tsx",
        lineNumber: 16,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_CardContent.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("table", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("tbody", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("td", { children: "Date:" }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 38,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_DateDisplay.default, { date: expense.date, displayType: "shortAndNow" }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 39,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 39,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expense/ExpenseDetail.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("td", { children: "Date added:" }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 42,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_DateDisplay.default, { date: expense.dateAdded, displayType: "shortAndNow" }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 43,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expense/ExpenseDetail.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("td", { children: "Last Updated:" }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_DateDisplay.default, { date: expense.updatedAt, displayType: "shortAndNow" }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 47,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expense/ExpenseDetail.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("td", { children: "ID:" }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("td", { children: expense.id }, void 0, !1, {
          fileName: "app/components/expense/ExpenseDetail.tsx",
          lineNumber: 51,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/expense/ExpenseDetail.tsx",
        lineNumber: 49,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expense/ExpenseDetail.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/expense/ExpenseDetail.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/expense/ExpenseDetail.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expense/ExpenseDetail.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var ExpenseDetail_default = ExpenseDetail;

// app/components/expense/Expense.tsx
var import_Box4 = __toESM(require("@mui/material/Box")), import_ReceiptLong = __toESM(require("@mui/icons-material/ReceiptLong")), import_urlcat = __toESM(require("urlcat")), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Expense({ expense }) {
  let navigate = (0, import_react21.useNavigate)(), deleteFetcher = (0, import_react21.useFetcher)(), { isFetcherActionSubmission, isFetcherActionReload, isFetcherActionRedirect } = useFetcherType(deleteFetcher), isApiLoading = isFetcherActionSubmission || isFetcherActionReload || isFetcherActionRedirect, [showExpenseDetail, setShowExpenseDetail] = (0, import_react22.useState)(!1), { pathname, search } = (0, import_react21.useLocation)(), handleCloseDetail = () => {
    setShowExpenseDetail(!1);
  }, handleActionClick = (actionId) => () => {
    if (actionId === "editExpense") {
      let url = (0, import_urlcat.default)("", "/data/:expenseId/edit", { expenseId: expense.id, redirectUrl: `${pathname}${search}` });
      navigate(url);
    } else if (actionId === "deleteExpense") {
      if (!confirm("Are you sure you want to delete this item?"))
        return;
      let url = (0, import_urlcat.default)("", "/data/:expenseId", { expenseId: expense.id, redirectUrl: `${pathname}${search}` });
      deleteFetcher.submit({ id: expense.id }, { method: "DELETE", action: url, preventScrollReset: !0 });
    } else
      actionId === "details" && setShowExpenseDetail(!0);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_jsx_dev_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      import_ListItem2.default,
      {
        sx: { pr: "100px", opacity: isApiLoading ? 0.5 : 1 },
        secondaryAction: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_Stack10.default, { direction: "row", justifyContent: "end", alignItems: "center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_IconButton6.default,
            {
              edge: "end",
              "aria-label": "details",
              size: "small",
              onClick: handleActionClick("details"),
              title: "See details",
              disabled: !!isApiLoading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_Pageview.default, {}, void 0, !1, {
                fileName: "app/components/expense/Expense.tsx",
                lineNumber: 61,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/expense/Expense.tsx",
              lineNumber: 59,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_IconButton6.default,
            {
              edge: "end",
              "aria-label": "edit",
              size: "small",
              onClick: handleActionClick("editExpense"),
              title: "Edit",
              disabled: !!isApiLoading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_Edit.default, {}, void 0, !1, {
                fileName: "app/components/expense/Expense.tsx",
                lineNumber: 65,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/expense/Expense.tsx",
              lineNumber: 63,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_IconButton6.default,
            {
              edge: "end",
              "aria-label": "delete",
              size: "small",
              onClick: handleActionClick("deleteExpense"),
              title: "Delete",
              disabled: !!isApiLoading,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_Delete.default, {}, void 0, !1, {
                fileName: "app/components/expense/Expense.tsx",
                lineNumber: 69,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/expense/Expense.tsx",
              lineNumber: 67,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/expense/Expense.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_ListItemAvatar.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_Avatar2.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_ReceiptLong.default, {}, void 0, !1, {
            fileName: "app/components/expense/Expense.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this) }, void 0, !1, {
            fileName: "app/components/expense/Expense.tsx",
            lineNumber: 75,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/expense/Expense.tsx",
            lineNumber: 74,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
            import_ListItemText2.default,
            {
              primary: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_Stack10.default, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 1, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ExpenseName, { expense, props: { fontWeight: 500 } }, void 0, !1, {
                  fileName: "app/components/expense/Expense.tsx",
                  lineNumber: 82,
                  columnNumber: 15
                }, this),
                isApiLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_CircularProgress.default, { size: "12px" }, void 0, !1, {
                  fileName: "app/components/expense/Expense.tsx",
                  lineNumber: 83,
                  columnNumber: 33
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/expense/Expense.tsx",
                lineNumber: 81,
                columnNumber: 13
              }, this),
              secondary: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ExpenseSubText, { expense }, void 0, !1, {
                fileName: "app/components/expense/Expense.tsx",
                lineNumber: 87,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/expense/Expense.tsx",
              lineNumber: 79,
              columnNumber: 9
            },
            this
          )
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/components/expense/Expense.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(DialogLayout_default, { open: showExpenseDetail, onClose: handleCloseDetail, title: "Expense Detail", maxWidth: "xs", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_Box4.default, { p: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ExpenseDetail_default, { expense }, void 0, !1, {
      fileName: "app/components/expense/Expense.tsx",
      lineNumber: 94,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/expense/Expense.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/expense/Expense.tsx",
      lineNumber: 92,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expense/Expense.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
}
var Expense_default = Expense;
function ExpenseName({ expense, props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_Typography11.default, { style: { ...ellipsisBlock }, className: "montserrat", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react21.Link, { to: `/data/${expense.id}`, children: [
    "$",
    expense.amount.toLocaleString()
  ] }, void 0, !0, {
    fileName: "app/components/expense/Expense.tsx",
    lineNumber: 106,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/expense/Expense.tsx",
    lineNumber: 105,
    columnNumber: 5
  }, this);
}
function ExpenseSubText({ expense }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("span", { style: { ...ellipsisBlock, fontSize: "13px", height: "18.5px" }, title: expense.dateFromNow?.tooltip, children: expense.dateFromNow?.display }, void 0, !1, {
    fileName: "app/components/expense/Expense.tsx",
    lineNumber: 115,
    columnNumber: 5
  }, this);
}

// app/components/expense/ExpenseList.tsx
var import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function ExpenseList({ expenses }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_List2.default, { sx: { width: "100%", bgcolor: "background.paper", borderRadius: "20px" }, children: expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(Expense_default, { expense }, expense.id, !1, {
    fileName: "app/components/expense/ExpenseList.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this)) }, void 0, !1, {
    fileName: "app/components/expense/ExpenseList.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var ExpenseList_default = ExpenseList;

// app/routes/accounts.$accountId.tsx
var import_jsx_dev_runtime24 = require("react/jsx-dev-runtime");
function links2() {
  return [{ rel: "stylesheet", href: mui_alert_default }];
}
var meta = (data) => [
  { title: "Account Detail - Ledger" },
  { name: "description", content: "Account detail" }
], headers = ({
  loaderHeaders
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "public, no-cache, max-age=0"
});
function AccountDetail() {
  let { isMobile } = useIsMobile_default(), [searchParams, setSearchParams] = (0, import_react23.useSearchParams)(), { account, expenses: { currentResultSetCount, data, pageSize, totalCount, totalPages } } = (0, import_react23.useLoaderData)(), { pathname } = (0, import_react23.useLocation)(), submit = (0, import_react23.useSubmit)();
  (0, import_tiny_invariant3.default)(account, "Expected account to be defined");
  let searchParamPage = searchParams.get("page"), currentPage = searchParamPage && parseInt(searchParamPage) ? parseInt(searchParamPage) < 0 ? 0 : parseInt(searchParamPage) : 0, { control, watch } = (0, import_react_hook_form6.useForm)({
    defaultValues: { name: account.name, shown: account.shown }
  }), toggleShowHide = watch("shown", account.shown);
  (0, import_react24.useEffect)(() => {
    toggleShowHide !== account.shown && submit({ shown: toggleShowHide }, {
      action: `/accounts/${account.id}/edit?redirectUrl=${pathname}`,
      method: "PATCH",
      replace: !0
    });
  }, [account.id, account.shown, submit, toggleShowHide, watch, pathname]);
  let handlePageUpdate = (event, value) => {
    setSearchParams((params) => ({ ...getParamsAsObject(params), page: `${value - 1}` }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_Stack11.default, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TitleBarLayout_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_Stack11.default, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_AccountBalance2.default, {}, void 0, !1, {
          fileName: "app/routes/accounts.$accountId.tsx",
          lineNumber: 85,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TitleNameDisplay, { name: account.name }, void 0, !1, {
          fileName: "app/routes/accounts.$accountId.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/accounts.$accountId.tsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_Stack11.default, { direction: "row", justifyContent: "end", alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_Box5.default, { height: "23px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(Switch_default, { name: "shown", label: `Toggle (currently ${account.shown ? "shown" : "hidden"})`, size: "small", control }, void 0, !1, {
          fileName: "app/routes/accounts.$accountId.tsx",
          lineNumber: 90,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/accounts.$accountId.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_Typography12.default, { variant: "h5", fontFamily: "Poppins", children: [
          "Total: ",
          totalCount
        ] }, void 0, !0, {
          fileName: "app/routes/accounts.$accountId.tsx",
          lineNumber: 93,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/accounts.$accountId.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/accounts.$accountId.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_Stack11.default, { direction: "row", justifyContent: "space-between", alignItems: "center", mb: 2, width: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_Stack11.default, { direction: "row", justifyContent: "flex-end", alignItems: "center", width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_Box5.default, { mr: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_Typography12.default, { variant: "body2", children: `${currentPage * pageSize + 1}-${currentPage * pageSize + data.length} of ${currentResultSetCount}` }, void 0, !1, {
        fileName: "app/routes/accounts.$accountId.tsx",
        lineNumber: 103,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/accounts.$accountId.tsx",
        lineNumber: 102,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_Pagination.default, { count: totalPages, showFirstButton: !0, showLastButton: !0, size: "small", page: currentPage + 1, onChange: handlePageUpdate, shape: "rounded" }, void 0, !1, {
        fileName: "app/routes/accounts.$accountId.tsx",
        lineNumber: 107,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/accounts.$accountId.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/accounts.$accountId.tsx",
      lineNumber: 99,
      columnNumber: 7
    }, this),
    data.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(NoResult_default, {}, void 0, !1, {
      fileName: "app/routes/accounts.$accountId.tsx",
      lineNumber: 112,
      columnNumber: 27
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ExpenseList_default, { expenses: data }, void 0, !1, {
      fileName: "app/routes/accounts.$accountId.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_react23.Outlet, {}, void 0, !1, {
      fileName: "app/routes/accounts.$accountId.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/accounts.$accountId.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}
var accounts_accountId_default = AccountDetail;
async function loader({ request, params, context }) {
  (0, import_tiny_invariant3.default)(params.accountId, "Expected params.accountId to be defined");
  let url = new URL(request.url), pageParam = url.searchParams.get("page"), filterParam = url.searchParams.get("q"), page = pageParam && parseInt(pageParam) ? parseInt(pageParam) < 0 ? 0 : parseInt(pageParam) : 0, account = await getAccount(params.accountId), expenses = await getExpensesByAccountId(params.accountId, page, filterParam);
  return (0, import_node5.json)({
    account,
    expenses
  });
}
async function action3({ request, context, params }) {
  let accountId = (await request.formData()).get("id");
  if ((0, import_tiny_invariant3.default)(accountId, "Expected account id in body to be defined"), request.method === "DELETE")
    try {
      return await deleteAccount(accountId), (0, import_node5.redirect)("/accounts");
    } catch (err) {
      return handleError({ message: err.message, error: !0, showToast: !0 });
    }
  return (0, import_node5.json)({ success: !0 });
}
function ErrorBoundary2() {
  let error = (0, import_react23.useRouteError)();
  return (0, import_react23.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(ActionLoaderError_default, { error }, void 0, !1, {
    fileName: "app/routes/accounts.$accountId.tsx",
    lineNumber: 164,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(OtherError_default, { error }, void 0, !1, {
    fileName: "app/routes/accounts.$accountId.tsx",
    lineNumber: 169,
    columnNumber: 5
  }, this);
}

// app/routes/expenses.$expenseId.tsx
var expenses_expenseId_exports = {};
__export(expenses_expenseId_exports, {
  action: () => action4,
  default: () => expenses_expenseId_default,
  headers: () => headers2,
  loader: () => loader2,
  meta: () => meta2
});
var import_node6 = require("@remix-run/node");
var import_react25 = require("@remix-run/react"), import_Stack12 = __toESM(require("@mui/material/Stack")), import_tiny_invariant4 = __toESM(require("tiny-invariant")), import_Typography13 = __toESM(require("@mui/material/Typography"));
var import_FormatListBulleted2 = __toESM(require("@mui/icons-material/FormatListBulleted"));
var import_jsx_dev_runtime25 = require("react/jsx-dev-runtime"), meta2 = (data) => [
  { title: "Expense Detail - Ledger" },
  { name: "description", content: "Expense detail" }
], headers2 = ({
  loaderHeaders
}) => ({
  "Cache-Control": "public, no-cache, max-age=0"
});
function ExpenseDetail2() {
  let { isMobile } = useIsMobile_default(), navigate = (0, import_react25.useNavigate)(), { expense } = (0, import_react25.useLoaderData)(), submit = (0, import_react25.useSubmit)();
  return expense ? /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Stack12.default, { direction: "column", justifyContent: "start", alignItems: "center", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(TitleBarLayout_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Stack12.default, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_FormatListBulleted2.default, {}, void 0, !1, {
          fileName: "app/routes/expenses.$expenseId.tsx",
          lineNumber: 50,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(TitleNameDisplay, { name: "Expense Info" }, void 0, !1, {
          fileName: "app/routes/expenses.$expenseId.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/expenses.$expenseId.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Stack12.default, { direction: "row", justifyContent: "end", alignItems: "center" }, void 0, !1, {
        fileName: "app/routes/expenses.$expenseId.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/expenses.$expenseId.tsx",
      lineNumber: 48,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Stack12.default, { border: "1px solid #ccc", width: "100%", p: 3, borderRadius: "25px", direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Typography13.default, { variant: "h5", className: "montserrat", fontWeight: "700", children: [
      "$",
      expense.amount.toLocaleString()
    ] }, void 0, !0, {
      fileName: "app/routes/expenses.$expenseId.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/expenses.$expenseId.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Stack12.default, { border: "1px solid #ccc", width: "100%", p: 3, borderRadius: "25px", direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Typography13.default, { variant: "h6", children: [
        "id: ",
        expense.id
      ] }, void 0, !0, {
        fileName: "app/routes/expenses.$expenseId.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Typography13.default, { variant: "h6", children: "Date:" }, void 0, !1, {
        fileName: "app/routes/expenses.$expenseId.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Typography13.default, { variant: "body2", title: expense.dateFromNow?.tooltip, children: expense.dateFromNow?.display }, void 0, !1, {
        fileName: "app/routes/expenses.$expenseId.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/expenses.$expenseId.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Stack12.default, { border: "1px solid #ccc", width: "100%", p: 3, borderRadius: "25px", direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Typography13.default, { variant: "h6", children: "Added:" }, void 0, !1, {
        fileName: "app/routes/expenses.$expenseId.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Typography13.default, { variant: "body2", title: expense.dateAddedFromNow?.tooltip, children: expense.dateAddedFromNow?.display }, void 0, !1, {
        fileName: "app/routes/expenses.$expenseId.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Typography13.default, { variant: "h6", children: "Last Updated:" }, void 0, !1, {
        fileName: "app/routes/expenses.$expenseId.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Typography13.default, { variant: "body2", title: expense.updatedAtFromNow?.tooltip, children: expense.updatedAtFromNow?.display }, void 0, !1, {
        fileName: "app/routes/expenses.$expenseId.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/expenses.$expenseId.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Stack12.default, { border: "1px solid #ccc", width: "100%", p: 3, borderRadius: "25px", direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_Typography13.default, { variant: "h6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react25.Link, { to: `/accounts/${expense.account.id}`, children: expense.account.name }, void 0, !1, {
      fileName: "app/routes/expenses.$expenseId.tsx",
      lineNumber: 98,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/expenses.$expenseId.tsx",
      lineNumber: 97,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/expenses.$expenseId.tsx",
      lineNumber: 96,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react25.Outlet, {}, void 0, !1, {
      fileName: "app/routes/expenses.$expenseId.tsx",
      lineNumber: 104,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/expenses.$expenseId.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(NoResult_default, {}, void 0, !1, {
    fileName: "app/routes/expenses.$expenseId.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this);
}
var expenses_expenseId_default = ExpenseDetail2;
async function loader2({ request, params, context }) {
  (0, import_tiny_invariant4.default)(params.expenseId, "Expected params.expenseId to be defined");
  let expense = await getExpenseById(params.expenseId), accounts = await getAccounts();
  return expense && (expense = {
    ...expense,
    id: expense.id,
    dateFromNow: convertDateDisplay(expense.date, "longAndNow"),
    dateAddedFromNow: convertDateDisplay(expense.dateAdded, "longAndNow"),
    updatedAtFromNow: convertDateDisplay(expense.updatedAt, "longAndNow")
  }), (0, import_node6.json)({
    expense,
    accounts
  }, {
    headers: {
      "Cache-Control": "public, max-age=60"
    }
  });
}
async function action4({ request, context, params }) {
  let expenseId = (await request.formData()).get("id"), redirectUrl = new URL(request.url).searchParams.get("redirectUrl");
  if ((0, import_tiny_invariant4.default)(expenseId, "Expected expense id in body to be defined"), request.method === "DELETE")
    try {
      return await deleteExpense(expenseId), (0, import_node6.redirect)(`${redirectUrl}`);
    } catch (err) {
      return handleError({ message: err.message, error: !0, showToast: !0 });
    }
  return (0, import_node6.json)({ success: !0 });
}

// app/routes/_public.settings.tsx
var public_settings_exports = {};
__export(public_settings_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  action: () => action5,
  default: () => public_settings_default,
  loader: () => loader3,
  meta: () => meta3
});
var import_node7 = require("@remix-run/node");

// app/shared/layouts/LayoutWithGutter.tsx
var import_Unstable_Grid22 = __toESM(require("@mui/material/Unstable_Grid2")), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function LayoutWithGutter({ size = "med", children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    import_Unstable_Grid22.default,
    {
      container: !0,
      spacing: 0,
      xs: 12,
      xsOffset: 0,
      sm: size === "full" ? 12 : size === "wide" ? 10 : size === "med" ? 7 : 4,
      smOffset: size === "full" ? 0 : size === "wide" ? 1 : size === "med" ? 2.5 : 4,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/shared/layouts/LayoutWithGutter.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  );
}
var LayoutWithGutter_default = LayoutWithGutter;

// app/routes/_public.settings.tsx
var import_react29 = require("@remix-run/react"), import_Stack17 = __toESM(require("@mui/material/Stack")), import_Box9 = __toESM(require("@mui/material/Box"));

// app/components/settings/Settings.tsx
var import_Stack15 = __toESM(require("@mui/material/Stack"));

// app/components/settings/SettingsData.tsx
var import_FormGroup = __toESM(require("@mui/material/FormGroup")), import_Box6 = __toESM(require("@mui/material/Box")), import_Divider3 = __toESM(require("@mui/material/Divider")), import_Stack13 = __toESM(require("@mui/material/Stack")), import_Typography14 = __toESM(require("@mui/material/Typography")), import_react26 = require("@remix-run/react");
var import_react_hook_form7 = require("react-hook-form");
var import_Button3 = __toESM(require("@mui/material/Button")), import_Save = __toESM(require("@mui/icons-material/Save")), import_RestartAlt = __toESM(require("@mui/icons-material/RestartAlt"));
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function SettingsData({ addAnotherAfterSubmit, account, accountList }) {
  let submit = (0, import_react26.useSubmit)(), { isActionSubmission, isActionReload, isNormalLoad } = useNavigationType(), apiLoading = isActionSubmission || isActionReload, { control, reset, setValue, watch, handleSubmit, formState } = (0, import_react_hook_form7.useForm)({
    defaultValues: {
      addAnotherAfterSubmit,
      account
    }
    //resolver: yupResolver(productSchema),
    //mode: "onChange",
  }), handleReset = () => {
    reset();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Box6.default, { p: 3, borderRadius: "20px", width: "100%", bgcolor: "background.paper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Stack13.default, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 1, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Typography14.default, { variant: "h5", fontFamily: "Poppins", children: "Data Settings" }, void 0, !1, {
        fileName: "app/components/settings/SettingsData.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Typography14.default, { variant: "body1", children: "Settings related to adding and updating data." }, void 0, !1, {
        fileName: "app/components/settings/SettingsData.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/settings/SettingsData.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Divider3.default, { variant: "fullWidth", flexItem: !0, sx: { my: 2 } }, void 0, !1, {
      fileName: "app/components/settings/SettingsData.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_react26.Form, { method: "PATCH", onSubmit: handleSubmit((payload, event) => {
      let dataToSave = {
        addAnotherAfterSubmit: payload.addAnotherAfterSubmit,
        defaultAccountIdToAdd: payload.account?.id ?? ""
      };
      submit(dataToSave, {
        method: "PATCH",
        replace: !0,
        preventScrollReset: !0
      });
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Stack13.default, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 1, width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_FormGroup.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(Switch_default, { control, name: "addAnotherAfterSubmit", label: "Add another after save:", labelProps: { labelPlacement: "start", sx: { ml: 0 } } }, void 0, !1, {
        fileName: "app/components/settings/SettingsData.tsx",
        lineNumber: 61,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/settings/SettingsData.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Stack13.default, { direction: "row", justifyContent: "start", alignItems: "end", width: "100%", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Typography14.default, { variant: "body1", flexBasis: "30%", children: "Default account on add: " }, void 0, !1, {
          fileName: "app/components/settings/SettingsData.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
          Autocomplete_default,
          {
            name: "account",
            label: "Select an account",
            control,
            options: accountList,
            getOptionLabel: (option) => option?.name ?? "",
            fullWidth: !0,
            isOptionEqualToValue: (option, value) => option.id === value.id
          },
          void 0,
          !1,
          {
            fileName: "app/components/settings/SettingsData.tsx",
            lineNumber: 67,
            columnNumber: 13
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/settings/SettingsData.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Stack13.default, { direction: "row", justifyContent: "space-between", alignItems: "center", width: "100%", pt: 3, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Button3.default, { startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_RestartAlt.default, {}, void 0, !1, {
          fileName: "app/components/settings/SettingsData.tsx",
          lineNumber: 79,
          columnNumber: 33
        }, this), variant: "outlined", onClick: handleReset, disabled: apiLoading, children: "Reset" }, void 0, !1, {
          fileName: "app/components/settings/SettingsData.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Button3.default, { startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(import_Save.default, {}, void 0, !1, {
          fileName: "app/components/settings/SettingsData.tsx",
          lineNumber: 82,
          columnNumber: 33
        }, this), variant: "outlined", type: "submit", disabled: apiLoading, children: "Save" }, void 0, !1, {
          fileName: "app/components/settings/SettingsData.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/settings/SettingsData.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/settings/SettingsData.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/settings/SettingsData.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/settings/SettingsData.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this);
}
var SettingsData_default = SettingsData;

// app/components/settings/SettingsDashboard.tsx
var import_FormGroup2 = __toESM(require("@mui/material/FormGroup")), import_Box7 = __toESM(require("@mui/material/Box")), import_Divider4 = __toESM(require("@mui/material/Divider")), import_Stack14 = __toESM(require("@mui/material/Stack")), import_Typography16 = __toESM(require("@mui/material/Typography")), import_react27 = require("@remix-run/react"), import_react_hook_form9 = require("react-hook-form");
var import_Button4 = __toESM(require("@mui/material/Button")), import_Save2 = __toESM(require("@mui/icons-material/Save")), import_RestartAlt2 = __toESM(require("@mui/icons-material/RestartAlt"));

// app/shared/hook-forms/Select.tsx
var import_FormHelperText4 = __toESM(require("@mui/material/FormHelperText")), import_Typography15 = __toESM(require("@mui/material/Typography")), import_react_hook_form8 = require("react-hook-form"), import_InputLabel = __toESM(require("@mui/material/InputLabel")), import_FormControl3 = __toESM(require("@mui/material/FormControl")), import_Select = __toESM(require("@mui/material/Select")), import_colors3 = require("@mui/material/colors"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function HFSelectField({ name, label, control, children, helperText, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    import_react_hook_form8.Controller,
    {
      name,
      control,
      render: ({
        field,
        fieldState: { invalid, isTouched, isDirty, error },
        formState
      }) => /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_FormControl3.default, { variant: props.variant, fullWidth: !0, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_InputLabel.default, { id: "", children: [
          label,
          " "
        ] }, void 0, !0, {
          fileName: "app/shared/hook-forms/Select.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
          import_Select.default,
          {
            labelId: "",
            id: `${name}-select`,
            label,
            ...props,
            ...field,
            error: !!error,
            children
          },
          void 0,
          !1,
          {
            fileName: "app/shared/hook-forms/Select.tsx",
            lineNumber: 34,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_FormHelperText4.default, { id: `${name}-helper-text`, error: !!error, sx: { ml: 0 }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_Typography15.default, { variant: "caption", color: import_colors3.red, component: "span", children: [
          " ",
          error ? error.message : helperText,
          " "
        ] }, void 0, !0, {
          fileName: "app/shared/hook-forms/Select.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/shared/hook-forms/Select.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/shared/hook-forms/Select.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/shared/hook-forms/Select.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}
var Select_default = HFSelectField;

// app/components/settings/SettingsDashboard.tsx
var import_MenuItem = __toESM(require("@mui/material/MenuItem")), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function SettingsDashboard({ showDashboardChart, dashboardChartType, dashboardCount }) {
  let submit = (0, import_react27.useSubmit)(), { isActionSubmission, isActionReload, isNormalLoad } = useNavigationType(), apiLoading = isActionSubmission || isActionReload, { control, reset, setValue, watch, handleSubmit, formState } = (0, import_react_hook_form9.useForm)({
    defaultValues: {
      showDashboardChart,
      dashboardCount,
      dashboardChartType
    }
    //resolver: yupResolver(productSchema),
    //mode: "onChange",
  }), handleReset = () => {
    reset();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Box7.default, { p: 3, borderRadius: "20px", width: "100%", bgcolor: "background.paper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Stack14.default, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 1, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Typography16.default, { variant: "h5", fontFamily: "Poppins", children: "Dashboard Settings" }, void 0, !1, {
        fileName: "app/components/settings/SettingsDashboard.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Typography16.default, { variant: "body1", children: "Settings related to Dashboard." }, void 0, !1, {
        fileName: "app/components/settings/SettingsDashboard.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/settings/SettingsDashboard.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Divider4.default, { variant: "fullWidth", flexItem: !0, sx: { my: 2 } }, void 0, !1, {
      fileName: "app/components/settings/SettingsDashboard.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_react27.Form, { method: "PATCH", onSubmit: handleSubmit((payload, event) => {
      let dataToSave = {
        showDashboardChart: payload.showDashboardChart,
        dashboardCount: payload.dashboardCount,
        dashboardChartType: payload.dashboardChartType
      };
      submit(dataToSave, {
        method: "PATCH",
        replace: !0,
        preventScrollReset: !0
      });
    }), children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Stack14.default, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 1, width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_FormGroup2.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Switch_default, { control, name: "showDashboardChart", label: "Show Dashboard Chart:", labelProps: { labelPlacement: "start", sx: { ml: 0 } } }, void 0, !1, {
        fileName: "app/components/settings/SettingsDashboard.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/settings/SettingsDashboard.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Stack14.default, { direction: "row", justifyContent: "start", alignItems: "end", width: "100%", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Typography16.default, { variant: "body1", flexBasis: "30%", children: "Chart Type: " }, void 0, !1, {
          fileName: "app/components/settings/SettingsDashboard.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Select_default, { control, name: "dashboardChartType", label: "Dashboard Chart Type:", variant: "standard", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_MenuItem.default, { value: "bar", children: "Bar" }, void 0, !1, {
            fileName: "app/components/settings/SettingsDashboard.tsx",
            lineNumber: 70,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_MenuItem.default, { value: "line", children: "Line" }, void 0, !1, {
            fileName: "app/components/settings/SettingsDashboard.tsx",
            lineNumber: 71,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/settings/SettingsDashboard.tsx",
          lineNumber: 69,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/settings/SettingsDashboard.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Stack14.default, { direction: "row", justifyContent: "start", alignItems: "end", width: "100%", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Typography16.default, { variant: "body1", flexBasis: "30%", children: "Dashboard Data Count: " }, void 0, !1, {
          fileName: "app/components/settings/SettingsDashboard.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(Select_default, { control, name: "dashboardCount", label: "Dashboard Data Count:", variant: "standard", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_MenuItem.default, { value: 10, children: "10" }, void 0, !1, {
            fileName: "app/components/settings/SettingsDashboard.tsx",
            lineNumber: 80,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_MenuItem.default, { value: 20, children: "20" }, void 0, !1, {
            fileName: "app/components/settings/SettingsDashboard.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_MenuItem.default, { value: 30, children: "30" }, void 0, !1, {
            fileName: "app/components/settings/SettingsDashboard.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_MenuItem.default, { value: 50, children: "50" }, void 0, !1, {
            fileName: "app/components/settings/SettingsDashboard.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/settings/SettingsDashboard.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/settings/SettingsDashboard.tsx",
        lineNumber: 76,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Stack14.default, { direction: "row", justifyContent: "space-between", alignItems: "center", width: "100%", pt: 3, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Button4.default, { startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_RestartAlt2.default, {}, void 0, !1, {
          fileName: "app/components/settings/SettingsDashboard.tsx",
          lineNumber: 89,
          columnNumber: 33
        }, this), variant: "outlined", onClick: handleReset, disabled: apiLoading, children: "Reset" }, void 0, !1, {
          fileName: "app/components/settings/SettingsDashboard.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Button4.default, { startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(import_Save2.default, {}, void 0, !1, {
          fileName: "app/components/settings/SettingsDashboard.tsx",
          lineNumber: 92,
          columnNumber: 33
        }, this), variant: "outlined", type: "submit", disabled: apiLoading, children: "Save" }, void 0, !1, {
          fileName: "app/components/settings/SettingsDashboard.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/settings/SettingsDashboard.tsx",
        lineNumber: 88,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/settings/SettingsDashboard.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/settings/SettingsDashboard.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/settings/SettingsDashboard.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
var SettingsDashboard_default = SettingsDashboard;

// app/components/settings/Settings.tsx
var import_Box8 = __toESM(require("@mui/material/Box")), import_LinearProgress4 = __toESM(require("@mui/material/LinearProgress"));
var import_Typography17 = __toESM(require("@mui/material/Typography"));
var import_Settings2 = __toESM(require("@mui/icons-material/Settings"));
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function SettingsComponent({ settings, defaultAccount, accountList, updatedTime }) {
  let { isActionSubmission, isActionReload, isNormalLoad } = useNavigationType(), apiLoading = isActionSubmission || isActionReload;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_Stack15.default, { direction: "column", justifyContent: "start", alignItems: "center", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(TitleBarLayout_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_Stack15.default, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_Settings2.default, {}, void 0, !1, {
          fileName: "app/components/settings/Settings.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(TitleNameDisplay, { name: settings.userId }, void 0, !1, {
          fileName: "app/components/settings/Settings.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/settings/Settings.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_Typography17.default, { title: updatedTime.tooltip, children: [
        "Updated ",
        `${updatedTime.display}`
      ] }, void 0, !0, {
        fileName: "app/components/settings/Settings.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/settings/Settings.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_Box8.default, { height: "5px", width: "100%", mt: -2, children: apiLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_LinearProgress4.default, { color: "success" }, void 0, !1, {
      fileName: "app/components/settings/Settings.tsx",
      lineNumber: 34,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/components/settings/Settings.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(SettingsData_default, { addAnotherAfterSubmit: settings.addAnotherAfterSubmit, account: defaultAccount, accountList }, void 0, !1, {
      fileName: "app/components/settings/Settings.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(SettingsDashboard_default, { showDashboardChart: settings.showDashboardChart, dashboardCount: settings.dashboardCount, dashboardChartType: settings.dashboardChartType }, void 0, !1, {
      fileName: "app/components/settings/Settings.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/settings/Settings.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
var Settings_default = SettingsComponent;

// app/components/settings/NewSettings.tsx
var import_Add = __toESM(require("@mui/icons-material/Add")), import_Button5 = __toESM(require("@mui/material/Button")), import_Stack16 = __toESM(require("@mui/material/Stack")), import_Typography18 = __toESM(require("@mui/material/Typography")), import_react28 = require("@remix-run/react");
var import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function NewSettings() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_Stack16.default, { direction: "column", justifyContent: "start", alignItems: "center", spacing: 2, width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_Typography18.default, { variant: "h5", fontFamily: "Poppins", children: "No settings found, create default settings?" }, void 0, !1, {
      fileName: "app/components/settings/NewSettings.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react28.Form, { method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_Button5.default, { startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_Add.default, {}, void 0, !1, {
      fileName: "app/components/settings/NewSettings.tsx",
      lineNumber: 17,
      columnNumber: 29
    }, this), variant: "outlined", type: "submit", children: "Create Default Settings" }, void 0, !1, {
      fileName: "app/components/settings/NewSettings.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/settings/NewSettings.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/settings/NewSettings.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
var NewSettings_default = NewSettings, DEFAULT_SETTINGS_ADD = {
  userId: USER_ID,
  addAnotherAfterSubmit: !1,
  defaultAccountIdToAdd: "",
  showDashboardChart: !0,
  dashboardCount: 20,
  dashboardChartType: "bar"
};

// app/routes/_public.settings.tsx
var import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), meta3 = (data) => [
  { title: "Settings - Ledger" },
  { name: "description", content: "App Settings" }
];
function Settings() {
  let { isMobile, isAboveXl } = useIsMobile_default(), { settings: dataSettings, currentDefaultAccount, accountList, updatedAtFromNow } = (0, import_react29.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_Stack17.default, { direction: "column", width: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_Box9.default, { mt: 2, mx: isMobile ? 2 : 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(LayoutWithGutter_default, { size: "wide", children: dataSettings ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Settings_default, { settings: dataSettings, defaultAccount: currentDefaultAccount, accountList, updatedTime: updatedAtFromNow }, void 0, !1, {
    fileName: "app/routes/_public.settings.tsx",
    lineNumber: 37,
    columnNumber: 29
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(NewSettings_default, {}, void 0, !1, {
    fileName: "app/routes/_public.settings.tsx",
    lineNumber: 37,
    columnNumber: 183
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.settings.tsx",
    lineNumber: 35,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.settings.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.settings.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
var public_settings_default = Settings;
async function loader3({ request, context, params }) {
  let settings = await getDataSettingsByUserId(USER_ID), accounts = await getAccounts(), currentDefaultAccount = null;
  return settings && accounts.length > 0 && (currentDefaultAccount = accounts.find((b) => b.id === settings.defaultAccountIdToAdd)), (0, import_node7.json)({
    settings,
    currentDefaultAccount: currentDefaultAccount ?? null,
    // value need to be null if it's not found (undefined) for MUI to make it a controlled component
    accountList: accounts,
    updatedAtFromNow: convertDateDisplay(settings?.updatedAt ?? "", "fromNow")
  });
}
async function action5({ request, context, params }) {
  if (request.method === "POST")
    try {
      let res = await addDataSettings(DEFAULT_SETTINGS_ADD);
      return (0, import_node7.json)(res);
    } catch (err) {
      return handleError({ message: err.message, error: !0, showToast: !0 });
    }
  else if (request.method === "PATCH") {
    let body = await request.formData(), addAnotherAfterSubmit = body.get("addAnotherAfterSubmit"), defaultAccountIdToAdd = body.get("defaultAccountIdToAdd"), showDashboardChart = body.get("showDashboardChart"), dashboardCount = body.get("dashboardCount"), dashboardChartType = body.get("dashboardChartType"), data = {
      addAnotherAfterSubmit: addAnotherAfterSubmit ? addAnotherAfterSubmit === "true" : void 0,
      defaultAccountIdToAdd: defaultAccountIdToAdd === null ? void 0 : defaultAccountIdToAdd || "",
      // this is null when Autocomplete is not selected
      showDashboardChart: showDashboardChart ? showDashboardChart === "true" : void 0,
      dashboardCount: dashboardCount ? parseInt(dashboardCount) ? parseInt(dashboardCount) : 20 : void 0,
      dashboardChartType: dashboardChartType || "bar"
    };
    try {
      let res = await updateDataSettings(data);
      return (0, import_node7.json)(res);
    } catch (err) {
      return handleError({ message: err.message, error: !0, showToast: !0 });
    }
  }
  return (0, import_node7.json)({ success: !0 });
}
function ErrorBoundary3() {
  let error = (0, import_react29.useRouteError)();
  return (0, import_react29.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ActionLoaderError_default, { error }, void 0, !1, {
    fileName: "app/routes/_public.settings.tsx",
    lineNumber: 103,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(OtherError_default, { error }, void 0, !1, {
    fileName: "app/routes/_public.settings.tsx",
    lineNumber: 108,
    columnNumber: 5
  }, this);
}

// app/routes/accounts._index.tsx
var accounts_index_exports = {};
__export(accounts_index_exports, {
  default: () => accounts_index_default,
  headers: () => headers3,
  meta: () => meta4
});
var import_react31 = require("@remix-run/react"), import_Stack19 = __toESM(require("@mui/material/Stack")), import_Typography20 = __toESM(require("@mui/material/Typography"));
var import_AccountBalance4 = __toESM(require("@mui/icons-material/AccountBalance"));

// app/components/account/AccountList.tsx
var import_List3 = __toESM(require("@mui/material/List"));

// app/components/account/Account.tsx
var import_ListItem3 = __toESM(require("@mui/material/ListItem")), import_ListItemText3 = __toESM(require("@mui/material/ListItemText")), import_ListItemAvatar2 = __toESM(require("@mui/material/ListItemAvatar")), import_Avatar3 = __toESM(require("@mui/material/Avatar")), import_AccountBalance3 = __toESM(require("@mui/icons-material/AccountBalance")), import_IconButton7 = __toESM(require("@mui/material/IconButton")), import_Delete2 = __toESM(require("@mui/icons-material/Delete"));
var import_Stack18 = __toESM(require("@mui/material/Stack")), import_Edit2 = __toESM(require("@mui/icons-material/Edit")), import_react30 = require("@remix-run/react");
var import_CircularProgress2 = __toESM(require("@mui/material/CircularProgress")), import_Chip = __toESM(require("@mui/material/Chip")), import_Typography19 = __toESM(require("@mui/material/Typography")), import_urlcat2 = __toESM(require("urlcat")), import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function Account({ account }) {
  let navigate = (0, import_react30.useNavigate)(), deleteFetcher = (0, import_react30.useFetcher)(), { pathname, search } = (0, import_react30.useLocation)(), newlyAddedAccountId = new URLSearchParams(search).get("addedAccountId"), { isFetcherActionSubmission, isFetcherActionReload, isFetcherActionRedirect } = useFetcherType(deleteFetcher), isApiLoading = isFetcherActionReload || isFetcherActionSubmission || isFetcherActionRedirect, handleActionClick = (actionId) => () => {
    if (actionId === "edit") {
      let url = (0, import_urlcat2.default)("", "/accounts/:accountId/edit", { accountId: account.id, redirectUrl: pathname });
      navigate(url);
    } else if (actionId === "delete") {
      if (!confirm("Are you sure you want to delete this item?"))
        return;
      deleteFetcher.submit({ id: account.id }, { method: "DELETE", action: `/accounts/${account.id}`, preventScrollReset: !0 });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
    import_ListItem3.default,
    {
      sx: { pr: "100px", opacity: isApiLoading ? 0.5 : 1 },
      secondaryAction: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Stack18.default, { direction: "row", justifyContent: "end", alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          import_IconButton7.default,
          {
            edge: "end",
            "aria-label": "delete",
            size: "small",
            onClick: handleActionClick("edit"),
            disabled: !!isApiLoading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Edit2.default, {}, void 0, !1, {
              fileName: "app/components/account/Account.tsx",
              lineNumber: 50,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/account/Account.tsx",
            lineNumber: 48,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          import_IconButton7.default,
          {
            edge: "end",
            "aria-label": "delete",
            size: "small",
            onClick: handleActionClick("delete"),
            disabled: !!isApiLoading,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Delete2.default, {}, void 0, !1, {
              fileName: "app/components/account/Account.tsx",
              lineNumber: 54,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/account/Account.tsx",
            lineNumber: 52,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/account/Account.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_ListItemAvatar2.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Avatar3.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_AccountBalance3.default, {}, void 0, !1, {
          fileName: "app/components/account/Account.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/account/Account.tsx",
          lineNumber: 60,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/account/Account.tsx",
          lineNumber: 59,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          import_ListItemText3.default,
          {
            primary: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Stack18.default, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 1, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(AccountNameDisplay, { account }, void 0, !1, {
                fileName: "app/components/account/Account.tsx",
                lineNumber: 67,
                columnNumber: 13
              }, this),
              newlyAddedAccountId === account.id && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Chip.default, { label: "New", color: "success", size: "small", sx: { height: "19px" } }, void 0, !1, {
                fileName: "app/components/account/Account.tsx",
                lineNumber: 68,
                columnNumber: 53
              }, this),
              account.shown && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Chip.default, { label: "Shown", color: "secondary", size: "small", sx: { height: "19px" } }, void 0, !1, {
                fileName: "app/components/account/Account.tsx",
                lineNumber: 69,
                columnNumber: 32
              }, this),
              !!(account._count?.expenses && account._count.expenses > 0) && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Chip.default, { label: `${account._count.expenses}`, color: "info", size: "small", sx: { height: "19px" } }, void 0, !1, {
                fileName: "app/components/account/Account.tsx",
                lineNumber: 70,
                columnNumber: 78
              }, this),
              isApiLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_CircularProgress2.default, { size: "12px" }, void 0, !1, {
                fileName: "app/components/account/Account.tsx",
                lineNumber: 71,
                columnNumber: 31
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/account/Account.tsx",
              lineNumber: 66,
              columnNumber: 11
            }, this),
            secondary: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(AccountSubText, { account }, void 0, !1, {
              fileName: "app/components/account/Account.tsx",
              lineNumber: 75,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/account/Account.tsx",
            lineNumber: 64,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/account/Account.tsx",
      lineNumber: 44,
      columnNumber: 5
    },
    this
  );
}
var Account_default = Account;
function AccountNameDisplay({ account }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_Typography19.default, { style: { ...ellipsisBlock }, variant: "body2", fontWeight: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react30.Link, { to: `${account.id}`, children: account.name }, void 0, !1, {
    fileName: "app/components/account/Account.tsx",
    lineNumber: 87,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/account/Account.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, this);
}
function AccountSubText({ account }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { style: { ...ellipsisBlock, fontSize: "13px" }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { title: account.dateAddedFromNow?.tooltip, children: [
      "created: ",
      account.dateAddedFromNow?.display
    ] }, void 0, !0, {
      fileName: "app/components/account/Account.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    account.updatedAt && account.updatedAt !== account.dateAdded && /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)("span", { title: account.updatedAtFromNow?.tooltip, children: [
      " (updated: ",
      account.updatedAtFromNow?.display,
      ")"
    ] }, void 0, !0, {
      fileName: "app/components/account/Account.tsx",
      lineNumber: 99,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/account/Account.tsx",
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

// app/components/account/AccountList.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function AccountList({ accounts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_List3.default, { sx: { width: "100%", bgcolor: "background.paper", borderRadius: "20px" }, children: accounts.map((account) => /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(Account_default, { account }, account.id, !1, {
    fileName: "app/components/account/AccountList.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this)) }, void 0, !1, {
    fileName: "app/components/account/AccountList.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var AccountList_default = AccountList;

// app/routes/accounts._index.tsx
var import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), meta4 = (data) => [
  { title: "Accounts - Ledger" },
  { name: "description", content: "Summary of all accounts." }
], headers3 = ({
  loaderHeaders
}) => ({
  "Cache-Control": loaderHeaders.get("Cache-Control") ?? "public, no-cache, max-age=0"
});
function Accounts() {
  let accounts = (0, import_react31.useRouteLoaderData)("routes/accounts");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_Stack19.default, { direction: "column", justifyContent: "center", alignItems: "center", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TitleBarLayout_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_Stack19.default, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_AccountBalance4.default, {}, void 0, !1, {
          fileName: "app/routes/accounts._index.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TitleNameDisplay, { name: "Accounts" }, void 0, !1, {
          fileName: "app/routes/accounts._index.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/accounts._index.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_Typography20.default, { variant: "h5", fontFamily: "Poppins", children: [
        "Total: ",
        accounts.length
      ] }, void 0, !0, {
        fileName: "app/routes/accounts._index.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/accounts._index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(AccountList_default, { accounts }, void 0, !1, {
      fileName: "app/routes/accounts._index.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/accounts._index.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
var accounts_index_default = Accounts;

// app/routes/expenses._index.tsx
var expenses_index_exports = {};
__export(expenses_index_exports, {
  default: () => expenses_index_default,
  headers: () => headers4,
  meta: () => meta5
});
var import_react36 = require("@remix-run/react"), import_Stack23 = __toESM(require("@mui/material/Stack")), import_Typography21 = __toESM(require("@mui/material/Typography"));
var import_Box12 = __toESM(require("@mui/material/Box")), import_Pagination2 = __toESM(require("@mui/material/Pagination")), import_react_router_dom4 = require("react-router-dom");

// app/components/data/SearchInput.tsx
var import_Search = __toESM(require("@mui/icons-material/Search")), import_Close3 = __toESM(require("@mui/icons-material/Close")), import_Box10 = __toESM(require("@mui/material/Box")), import_Stack20 = __toESM(require("@mui/material/Stack")), import_FormControl4 = __toESM(require("@mui/material/FormControl")), import_Input = __toESM(require("@mui/material/Input")), import_InputAdornment3 = __toESM(require("@mui/material/InputAdornment")), import_IconButton8 = __toESM(require("@mui/material/IconButton")), import_react32 = require("react"), import_react33 = require("@remix-run/react"), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function SearchInput() {
  let [searchParams, setSearchParams] = (0, import_react33.useSearchParams)(), nav = (0, import_react33.useNavigate)(), searchParam = searchParams.get("q"), [searchInput, setSearchInput] = (0, import_react32.useState)(searchParam ?? "");
  return (0, import_react32.useEffect)(() => {
    (searchParam ?? "") === "" && setSearchInput("");
  }, [searchParam]), /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_Box10.default, { flexBasis: "50%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_Stack20.default, { direction: "row", justifyContent: "start", alignItems: "center", width: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react33.Form, { onSubmit: (e) => {
    e.preventDefault(), setSearchParams({ q: searchInput });
  }, style: { width: "100%" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_FormControl4.default, { variant: "standard", fullWidth: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
    import_Input.default,
    {
      id: "search",
      startAdornment: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_InputAdornment3.default, { position: "start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_Search.default, {}, void 0, !1, {
        fileName: "app/components/data/SearchInput.tsx",
        lineNumber: 47,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/data/SearchInput.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      endAdornment: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_InputAdornment3.default, { position: "end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_IconButton8.default, { onClick: () => {
        nav("/expenses");
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_Close3.default, {}, void 0, !1, {
        fileName: "app/components/data/SearchInput.tsx",
        lineNumber: 53,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/data/SearchInput.tsx",
        lineNumber: 52,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/data/SearchInput.tsx",
        lineNumber: 51,
        columnNumber: 17
      }, this),
      value: searchInput,
      onChange: (event) => {
        setSearchInput(event.target.value);
      },
      type: "text"
    },
    void 0,
    !1,
    {
      fileName: "app/components/data/SearchInput.tsx",
      lineNumber: 43,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/data/SearchInput.tsx",
    lineNumber: 42,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/data/SearchInput.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/data/SearchInput.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/data/SearchInput.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this);
}
var SearchInput_default = SearchInput;

// app/routes/expenses._index.tsx
var import_FormatListBulleted3 = __toESM(require("@mui/icons-material/FormatListBulleted"));

// app/components/expense/ExpenseTable.tsx
var import_Box11 = __toESM(require("@mui/material/Box")), import_Stack22 = __toESM(require("@mui/material/Stack")), import_LinearProgress5 = __toESM(require("@mui/material/LinearProgress")), import_TableContainer = __toESM(require("@mui/material/TableContainer")), import_Paper2 = __toESM(require("@mui/material/Paper")), import_Table = __toESM(require("@mui/material/Table")), import_TableHead = __toESM(require("@mui/material/TableHead")), import_TableRow = __toESM(require("@mui/material/TableRow")), import_TableSortLabel = __toESM(require("@mui/material/TableSortLabel")), import_TableBody = __toESM(require("@mui/material/TableBody"));

// app/shared/utils/table.ts
var import_startCase2 = __toESM(require("lodash/startCase")), TABLE_COLUMNS = ["account", "amount", "date", "dateAdded", "updatedAt", "actions"], transformColumnName = (colId) => {
  let result = colId;
  switch (colId) {
    case "account": {
      result = "Account";
      break;
    }
    case "amount": {
      result = "Amount";
      break;
    }
    default:
      result = (0, import_startCase2.default)(colId);
  }
  return result;
};

// app/components/table/TableComponents.tsx
var import_TableCell = __toESM(require("@mui/material/TableCell")), import_styles7 = require("@mui/material/styles");
var import_Stack21 = __toESM(require("@mui/material/Stack")), import_IconButton9 = __toESM(require("@mui/material/IconButton")), import_Delete3 = __toESM(require("@mui/icons-material/Delete")), import_Edit3 = __toESM(require("@mui/icons-material/Edit")), import_jsx_dev_runtime37 = require("react/jsx-dev-runtime"), StyledHeaderCell = (0, import_styles7.styled)(import_TableCell.default)(() => ({
  ...ellipsis,
  paddingTop: "10px",
  paddingBottom: "10px",
  fontSize: "15px",
  // borderRight: `1px solid ${GREY[400]}`,
  borderColor: GREY[400],
  backgroundColor: GREY[200]
})), StyledDataCell = (0, import_styles7.styled)(import_TableCell.default)(() => ({
  ...ellipsis,
  paddingTop: "10px",
  paddingBottom: "10px",
  fontSize: "14px",
  borderRight: `1px solid ${GREY[300]}`,
  borderBottom: "none",
  maxWidth: "22rem"
  // the max width data cells can have
}));
function transformTableData(expense, columnId, onMenuClick) {
  let handleTitleCellMenuAction = (actionId) => () => {
    onMenuClick(actionId);
  };
  switch (columnId) {
    case "account":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
        "span",
        {
          title: `${expense.account.name}`,
          children: [
            " ",
            expense.account.name,
            " "
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/table/TableComponents.tsx",
          lineNumber: 41,
          columnNumber: 14
        },
        this
      );
    case "amount":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(ExpenseName, { expense }, void 0, !1, {
        fileName: "app/components/table/TableComponents.tsx",
        lineNumber: 46,
        columnNumber: 9
      }, this);
    case "date":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { title: expense.dateFromNow?.tooltip, children: [
        " ",
        expense.dateFromNow?.display,
        " "
      ] }, void 0, !0, {
        fileName: "app/components/table/TableComponents.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this);
    case "dateAdded":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { title: expense.dateAddedFromNow?.tooltip, children: [
        " ",
        expense.dateAddedFromNow?.display,
        " "
      ] }, void 0, !0, {
        fileName: "app/components/table/TableComponents.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this);
    case "updatedAt":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { title: expense.updatedAtFromNow?.tooltip, children: [
        " ",
        expense.updatedAtFromNow?.display,
        " "
      ] }, void 0, !0, {
        fileName: "app/components/table/TableComponents.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this);
    case "actions":
      return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_Stack21.default, { direction: "row", justifyContent: "center", alignItems: "center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          import_IconButton9.default,
          {
            edge: "end",
            "aria-label": "edit",
            size: "small",
            onClick: handleTitleCellMenuAction("editExpense"),
            title: "Edit",
            disabled: !1,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_Edit3.default, { fontSize: "small" }, void 0, !1, {
              fileName: "app/components/table/TableComponents.tsx",
              lineNumber: 69,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/table/TableComponents.tsx",
            lineNumber: 67,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
          import_IconButton9.default,
          {
            edge: "end",
            "aria-label": "delete",
            size: "small",
            onClick: handleTitleCellMenuAction("deleteExpense"),
            title: "Delete",
            disabled: !1,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_Delete3.default, { fontSize: "small" }, void 0, !1, {
              fileName: "app/components/table/TableComponents.tsx",
              lineNumber: 73,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/table/TableComponents.tsx",
            lineNumber: 71,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/table/TableComponents.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this);
    default:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { children: " TBD " }, void 0, !1, {
        fileName: "app/components/table/TableComponents.tsx",
        lineNumber: 79,
        columnNumber: 14
      }, this);
  }
}

// app/components/expense/ExpenseTable.tsx
var import_react34 = require("@remix-run/react"), import_react35 = require("@remix-run/react"), import_urlcat3 = __toESM(require("urlcat"));
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function ExpenseTable({ expenses }) {
  let { isAboveXl } = useIsMobile_default(), { pathname, search } = (0, import_react34.useLocation)(), navigate = (0, import_react34.useNavigate)(), deleteFetcher = (0, import_react35.useFetcher)(), { isFetcherActionSubmission, isFetcherActionReload, isFetcherActionRedirect } = useFetcherType(deleteFetcher), { isNormalLoad, isActionReload, isActionRedirect, isReloading, isActionSubmission, isLoaderSubmission, isLoaderSubmissionRedirect } = useNavigationType(), isApiLoading = isFetcherActionSubmission || isFetcherActionReload || isFetcherActionRedirect || isReloading || isActionSubmission || isActionReload || isActionRedirect || isLoaderSubmission || isLoaderSubmissionRedirect || isNormalLoad, handleCellMenuAction = (expense) => (action7) => {
    switch (action7) {
      case "editExpense": {
        let url = (0, import_urlcat3.default)("", "/data/:expenseId/edit", { expenseId: expense.id, redirectUrl: `${pathname}${search}` });
        navigate(url);
        break;
      }
      case "deleteExpense": {
        if (!confirm("Are you sure you want to delete this item?"))
          return;
        let url = (0, import_urlcat3.default)("", "/data/:expenseId", { expenseId: expense.id, redirectUrl: `${pathname}${search}` });
        deleteFetcher.submit({ id: expense.id }, { method: "DELETE", action: url, preventScrollReset: !0 });
        break;
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_Box11.default, { width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_Box11.default, { height: "5px", width: "100%", children: isApiLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_LinearProgress5.default, { color: isFetcherActionSubmission ? "warning" : "info" }, void 0, !1, {
      fileName: "app/components/expense/ExpenseTable.tsx",
      lineNumber: 60,
      columnNumber: 27
    }, this) }, void 0, !1, {
      fileName: "app/components/expense/ExpenseTable.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_TableContainer.default, { component: import_Paper2.default, elevation: 0, sx: { overflowX: "hidden", "&:hover": { overflowX: "auto" } }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_Table.default, { size: "medium", "aria-label": "table", stickyHeader: !0, style: { width: "100%", tableLayout: "fixed" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_TableHead.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_TableRow.default, { children: TABLE_COLUMNS.map((col, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        StyledHeaderCell,
        {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_Stack22.default, { direction: "row", justifyContent: "space-between", alignItems: "center", overflow: "hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_TableSortLabel.default, { active: !1, direction: "asc", style: { width: "calc(100%)" }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_Box11.default, { style: { ...ellipsis }, title: `${transformColumnName(col)}`, children: transformColumnName(col) }, void 0, !1, {
            fileName: "app/components/expense/ExpenseTable.tsx",
            lineNumber: 74,
            columnNumber: 27
          }, this) }, void 0, !1, {
            fileName: "app/components/expense/ExpenseTable.tsx",
            lineNumber: 73,
            columnNumber: 25
          }, this) }, void 0, !1, {
            fileName: "app/components/expense/ExpenseTable.tsx",
            lineNumber: 72,
            columnNumber: 23
          }, this)
        },
        col,
        !1,
        {
          fileName: "app/components/expense/ExpenseTable.tsx",
          lineNumber: 69,
          columnNumber: 21
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/expense/ExpenseTable.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/expense/ExpenseTable.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_TableBody.default, { children: expenses.map((expense, rindex) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        import_TableRow.default,
        {
          sx: { "&:hover": { backgroundColor: GREY[300] }, opacity: 1 },
          id: `expense-${expense.id}-${rindex}`,
          children: TABLE_COLUMNS.map((col, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
            StyledDataCell,
            {
              style: col === "account" ? { ...stickyDataCellClass } : {},
              children: transformTableData(expense, col, handleCellMenuAction(expense))
            },
            `${expense.id}${index}`,
            !1,
            {
              fileName: "app/components/expense/ExpenseTable.tsx",
              lineNumber: 97,
              columnNumber: 25
            },
            this
          ))
        },
        expense.id,
        !1,
        {
          fileName: "app/components/expense/ExpenseTable.tsx",
          lineNumber: 89,
          columnNumber: 17
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/expense/ExpenseTable.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/expense/ExpenseTable.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/expense/ExpenseTable.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/expense/ExpenseTable.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
var ExpenseTable_default = ExpenseTable;

// app/routes/expenses._index.tsx
var import_jsx_dev_runtime39 = require("react/jsx-dev-runtime"), meta5 = (data) => [
  { title: "Expenses - Ledger" },
  { name: "description", content: "Summary of all expenses." }
], headers4 = ({
  loaderHeaders
}) => ({
  "Cache-Control": "public, no-cache, max-age=0"
});
function ExpensesLanding() {
  let [searchParams, setSearchParams] = (0, import_react_router_dom4.useSearchParams)(), { data: expenses, totalCount, totalPages, pageSize, currentResultSetCount } = (0, import_react36.useRouteLoaderData)("routes/expenses"), searchParamPage = searchParams.get("page"), currentPage = searchParamPage && parseInt(searchParamPage) ? parseInt(searchParamPage) < 0 ? 0 : parseInt(searchParamPage) : 0, handlePageUpdate = (event, value) => {
    setSearchParams((params) => ({ ...getParamsAsObject(params), page: `${value - 1}` }));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_Stack23.default, { direction: "column", justifyContent: "center", alignItems: "center", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(TitleBarLayout_default, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_Stack23.default, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_FormatListBulleted3.default, {}, void 0, !1, {
          fileName: "app/routes/expenses._index.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(TitleNameDisplay, { name: "Expenses" }, void 0, !1, {
          fileName: "app/routes/expenses._index.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/expenses._index.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_Typography21.default, { variant: "h5", fontFamily: "Poppins", children: [
        "Total: ",
        totalCount
      ] }, void 0, !0, {
        fileName: "app/routes/expenses._index.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/expenses._index.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_Stack23.default, { direction: "row", justifyContent: "space-between", alignItems: "center", mb: 2, width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(SearchInput_default, {}, void 0, !1, {
        fileName: "app/routes/expenses._index.tsx",
        lineNumber: 61,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_Stack23.default, { direction: "row", justifyContent: "flex-end", alignItems: "center", width: "100%", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_Box12.default, { mr: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_Typography21.default, { variant: "body2", children: `${currentPage * pageSize + 1}-${currentPage * pageSize + expenses.length} of ${currentResultSetCount}` }, void 0, !1, {
          fileName: "app/routes/expenses._index.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/expenses._index.tsx",
          lineNumber: 63,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(import_Pagination2.default, { count: totalPages, showFirstButton: !0, showLastButton: !0, size: "small", page: currentPage + 1, onChange: handlePageUpdate, color: "standard", shape: "rounded" }, void 0, !1, {
          fileName: "app/routes/expenses._index.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/expenses._index.tsx",
        lineNumber: 62,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/expenses._index.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    expenses.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(NoResult_default, {}, void 0, !1, {
      fileName: "app/routes/expenses._index.tsx",
      lineNumber: 74,
      columnNumber: 34
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(ExpenseTable_default, { expenses }, void 0, !1, {
      fileName: "app/routes/expenses._index.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/expenses._index.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}
var expenses_index_default = ExpensesLanding;

// app/routes/_public._index.tsx
var public_index_exports = {};
__export(public_index_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  default: () => Index,
  headers: () => headers5,
  links: () => links3,
  loader: () => loader4,
  meta: () => meta6,
  shouldRevalidate: () => shouldRevalidate
});
var import_Box14 = __toESM(require("@mui/material/Box")), import_Stack30 = __toESM(require("@mui/material/Stack")), import_node8 = require("@remix-run/node");

// app/shared/toolbar/Toolbar.tsx
var import_AppBar2 = __toESM(require("@mui/material/AppBar")), import_Toolbar2 = __toESM(require("@mui/material/Toolbar"));
var import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function AppToolbar({ toolbarProps, children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_AppBar2.default, { elevation: 0, ...toolbarProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
    import_Toolbar2.default,
    {
      variant: "regular",
      sx: {
        bgcolor: (theme) => theme.palette.mode === "light" ? GREY[50] : null,
        color: (theme) => theme.palette.mode === "light" ? "#000" : null,
        pr: 0
      },
      children
    },
    void 0,
    !1,
    {
      fileName: "app/shared/toolbar/Toolbar.tsx",
      lineNumber: 14,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/shared/toolbar/Toolbar.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/_public._index.tsx
var import_react41 = require("@remix-run/react");

// app/components/dashboard/Dashboard.tsx
var import_Unstable_Grid23 = __toESM(require("@mui/material/Unstable_Grid2"));

// app/components/dashboard/AccountColumn.tsx
var import_Stack27 = __toESM(require("@mui/material/Stack"));

// app/components/dashboard/AccountHeader.tsx
var import_Stack25 = __toESM(require("@mui/material/Stack")), import_Typography23 = __toESM(require("@mui/material/Typography")), import_react37 = require("@remix-run/react");

// app/shared/components/Currency.tsx
var import_Box13 = __toESM(require("@mui/material/Box")), import_Stack24 = __toESM(require("@mui/material/Stack")), import_Typography22 = __toESM(require("@mui/material/Typography")), import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function Currency({ integer, decimal, extraStyles }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_Stack24.default, { direction: "row", justifyContent: "start", alignItems: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_Box13.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_Typography22.default, { fontFamily: "Montserrat", letterSpacing: "0.5px", component: "div", className: "integer", ...extraStyles, children: integer.toLocaleString() }, void 0, !1, {
      fileName: "app/shared/components/Currency.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/shared/components/Currency.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_Box13.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(import_Typography22.default, { fontFamily: "Montserrat", className: "decimal", letterSpacing: "0px", component: "div", ...extraStyles, children: decimal }, void 0, !1, {
      fileName: "app/shared/components/Currency.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/shared/components/Currency.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/shared/components/Currency.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var Currency_default = Currency;

// app/components/dashboard/AccountHeader.tsx
var import_jsx_dev_runtime42 = require("react/jsx-dev-runtime");
function AccountHeader({ name, total, count, accountId, totalInt, totalDecimal }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_Stack25.default, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", spacing: 1, p: 2, pb: 0, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_Typography23.default, { variant: "h5", fontFamily: "Poppins", title: `${name}`, sx: { ...ellipsis }, color: "primary.main", fontWeight: 500, children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_react37.Link, { to: `/accounts/${accountId}`, children: name }, void 0, !1, {
      fileName: "app/components/dashboard/AccountHeader.tsx",
      lineNumber: 12,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/AccountHeader.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_Stack25.default, { direction: "row", justifyContent: "space-between", alignItems: "center", width: "100%", sx: { ...ellipsis }, className: "account-header-total", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_Typography23.default, { variant: "h5", fontFamily: "Montserrat", sx: { ...ellipsis }, title: `${total}`, fontWeight: 500, className: total > 0 ? "positive" : total === 0 ? "no-change" : "negative", letterSpacing: "0.5px", component: "div", children: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(Currency_default, { integer: totalInt, decimal: totalDecimal }, void 0, !1, {
        fileName: "app/components/dashboard/AccountHeader.tsx",
        lineNumber: 16,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/AccountHeader.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_Typography23.default, { variant: "body2", fontFamily: "Roboto", title: `${count} entries`, color: "text.primary", children: [
        "(",
        count,
        ")"
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/AccountHeader.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/AccountHeader.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/AccountHeader.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}
var AccountHeader_default = AccountHeader;

// app/components/dashboard/AccountColumn.tsx
var import_Divider5 = __toESM(require("@mui/material/Divider"));

// app/components/dashboard/ExpenseDisplay.tsx
var import_Stack26 = __toESM(require("@mui/material/Stack")), import_Typography24 = __toESM(require("@mui/material/Typography")), import_colors4 = require("@mui/material/colors"), import_react38 = require("@remix-run/react");
var import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function ExpenseDisplay({ expense }) {
  let isLargeScreen = useIsMobile_default().isAboveXl;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_Stack26.default, { direction: "row", justifyContent: "space-between", alignItems: "start", width: "100%", mb: 1, py: 1, px: 2, className: `${expense.bgColorClassName} expense-box`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_Stack26.default, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 0.5, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_Typography24.default, { title: `${expense.dateFromNowDisplay?.tooltip}`, color: import_colors4.grey[600], children: expense.dateFromNowDisplay?.display }, void 0, !1, {
        fileName: "app/components/dashboard/ExpenseDisplay.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_Typography24.default, { fontFamily: "Montserrat", title: `${expense.amount}`, letterSpacing: "0.5px", component: "div", children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_react38.Link, { to: `/expenses/${expense.id}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Currency_default, { integer: expense.amountOfInteger, decimal: expense.amountOfDecimal, extraStyles: { fontWeight: 400, fontSize: "17px" } }, void 0, !1, {
        fileName: "app/components/dashboard/ExpenseDisplay.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/ExpenseDisplay.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/dashboard/ExpenseDisplay.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
        import_Typography24.default,
        {
          fontFamily: "Montserrat",
          fontWeight: "300",
          letterSpacing: "0.5px",
          title: `${expense.gainAmount}`,
          component: "div",
          display: "flex",
          color: import_colors4.grey[600],
          children: [
            expense.gainAmount > 0 ? "+" : expense.gainAmount === 0 ? "" : "-",
            "$",
            expense.gainAmount === 0 ? "0" : /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(Currency_default, { integer: expense.gainAmountOfInteger, decimal: expense.gainAmountOfDecimal }, void 0, !1, {
              fileName: "app/components/dashboard/ExpenseDisplay.tsx",
              lineNumber: 28,
              columnNumber: 14
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/dashboard/ExpenseDisplay.tsx",
          lineNumber: 24,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/ExpenseDisplay.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_Stack26.default, { direction: "column", justifyContent: "start", alignItems: "end", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_Typography24.default, { title: `${expense.dateFullDisplay?.tooltip}`, color: import_colors4.grey[600], children: expense.dateFullDisplay?.display }, void 0, !1, {
        fileName: "app/components/dashboard/ExpenseDisplay.tsx",
        lineNumber: 34,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(import_Typography24.default, { className: expense.textColorClassName, fontSize: "17px", fontWeight: 500, children: [
        expense.gainPercentage > 0 ? "+" : expense.gainPercentage === 0 ? "" : "-",
        `${(Math.round(Math.abs(expense.gainPercentage) * 10) / 10).toLocaleString()}`,
        "%"
      ] }, void 0, !0, {
        fileName: "app/components/dashboard/ExpenseDisplay.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/ExpenseDisplay.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/ExpenseDisplay.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var ExpenseDisplay_default = ExpenseDisplay;

// app/components/dashboard/AccountColumn.tsx
var import_Typography25 = __toESM(require("@mui/material/Typography")), import_react39 = require("@remix-run/react"), import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function AccountColumn({ account }) {
  let nameWithoutParentheses = account.name.replace(/\(.*\)/, "").trim();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_Stack27.default, { direction: "column", justifyContent: "start", alignItems: "center", width: "100%", sx: { bgcolor: "background.paper", borderRadius: "20px", p: 1 }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
      AccountHeader_default,
      {
        name: account.name,
        total: account.totalAmount,
        count: account.expenseCount,
        accountId: account.id,
        totalInt: account.totalAmountOfInteger,
        totalDecimal: account.totalAmountOfDecimal
      },
      void 0,
      !1,
      {
        fileName: "app/components/dashboard/AccountColumn.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_Divider5.default, { variant: "fullWidth", flexItem: !0, sx: { my: 2 } }, void 0, !1, {
      fileName: "app/components/dashboard/AccountColumn.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    account.expenses.map((expense) => /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(ExpenseDisplay_default, { expense }, expense.id, !1, {
      fileName: "app/components/dashboard/AccountColumn.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this)),
    account.dashboardDisplayHasMore && /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_Stack27.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_Typography25.default, { variant: "body1", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_react39.Link, { to: `/expenses?q=${nameWithoutParentheses}`, children: "See more" }, void 0, !1, {
        fileName: "app/components/dashboard/AccountColumn.tsx",
        lineNumber: 28,
        columnNumber: 40
      }, this),
      " "
    ] }, void 0, !0, {
      fileName: "app/components/dashboard/AccountColumn.tsx",
      lineNumber: 28,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/dashboard/AccountColumn.tsx",
      lineNumber: 27,
      columnNumber: 44
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dashboard/AccountColumn.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var AccountColumn_default = AccountColumn;

// app/components/dashboard/Dashboard.tsx
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function Dashboard({ accounts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_Unstable_Grid23.default, { container: !0, spacing: 2, xs: 12, children: accounts.map((account) => /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_Unstable_Grid23.default, { xs: 12, sm: !0, md: !0, lg: !0, xl: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(AccountColumn_default, { account }, void 0, !1, {
    fileName: "app/components/dashboard/Dashboard.tsx",
    lineNumber: 12,
    columnNumber: 15
  }, this) }, account.id, !1, {
    fileName: "app/components/dashboard/Dashboard.tsx",
    lineNumber: 11,
    columnNumber: 13
  }, this)) }, void 0, !1, {
    fileName: "app/components/dashboard/Dashboard.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var Dashboard_default = Dashboard;

// app/styles/dashboard.css
var dashboard_default = "/build/_assets/dashboard-V2JOUEYY.css";

// app/routes/_public._index.tsx
var import_Dashboard3 = __toESM(require("@mui/icons-material/Dashboard"));

// app/components/chart/DashboardChart.tsx
var import_recharts = require("recharts"), import_format4 = __toESM(require("date-fns/format")), import_Stack28 = __toESM(require("@mui/material/Stack")), import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
function DashboardChart({ chartData, shownAccountNames, chartType }) {
  let formatTickDate = (value) => (0, import_format4.default)(new Date(value), "MM/yyyy"), formatTickBalance = (value) => "$" + (+value).toLocaleString();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_Stack28.default, { direction: "column", justifyContent: "start", alignItems: "start", width: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.ResponsiveContainer, { width: "100%", height: 400, children: chartType === "bar" ? /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    import_recharts.BarChart,
    {
      data: chartData,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.CartesianGrid, { strokeDasharray: "2 2", horizontal: !0, vertical: !1 }, void 0, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 30,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.XAxis, { dataKey: "expenseDate", padding: { right: 40 }, tickFormatter: formatTickDate }, void 0, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.YAxis, { tickFormatter: formatTickBalance }, void 0, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.Tooltip, {}, void 0, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.Legend, { verticalAlign: "bottom", height: 40, wrapperStyle: { paddingTop: "20px" } }, void 0, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 34,
          columnNumber: 15
        }, this),
        shownAccountNames.map((accountName) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.Bar, { dataKey: accountName.name, fill: accountName.color, stackId: "stacked" }, accountName.name, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 37,
          columnNumber: 26
        }, this))
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/chart/DashboardChart.tsx",
      lineNumber: 27,
      columnNumber: 13
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    import_recharts.LineChart,
    {
      data: chartData,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.CartesianGrid, { strokeDasharray: "2 2", horizontal: !0, vertical: !1 }, void 0, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 46,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.XAxis, { dataKey: "expenseDate", padding: { right: 40 }, tickFormatter: formatTickDate }, void 0, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 47,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.YAxis, { tickFormatter: formatTickBalance }, void 0, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.Tooltip, {}, void 0, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 53,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.Legend, { verticalAlign: "bottom", height: 40, wrapperStyle: { paddingTop: "20px" } }, void 0, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, this),
        shownAccountNames.map((accountName) => /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(import_recharts.Line, { connectNulls: !0, type: "monotone", dataKey: accountName.name, stroke: accountName.color, fill: accountName.color }, accountName.name, !1, {
          fileName: "app/components/chart/DashboardChart.tsx",
          lineNumber: 57,
          columnNumber: 28
        }, this))
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/chart/DashboardChart.tsx",
      lineNumber: 43,
      columnNumber: 13
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/chart/DashboardChart.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/chart/DashboardChart.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}
var DashboardChart_default = DashboardChart;

// app/routes/_public._index.tsx
var import_urlcat4 = __toESM(require("urlcat"));

// app/components/navbar/AccountNavBar.tsx
var import_Stack29 = __toESM(require("@mui/material/Stack")), import_Button6 = __toESM(require("@mui/material/Button")), import_Unstable_Grid24 = __toESM(require("@mui/material/Unstable_Grid2")), import_Settings4 = __toESM(require("@mui/icons-material/Settings")), import_Add2 = __toESM(require("@mui/icons-material/Add")), import_Edit4 = __toESM(require("@mui/icons-material/Edit")), import_Divider6 = __toESM(require("@mui/material/Divider")), import_Delete4 = __toESM(require("@mui/icons-material/Delete")), import_react40 = require("@remix-run/react"), import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function AccountNavBar({ accountId, onClickAction }) {
  let params = (0, import_react40.useParams)(), { pathname } = (0, import_react40.useLocation)(), handleNavActionClick = (actionId) => () => {
    onClickAction(actionId);
  };
  return params.expenseId ? /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { container: !0, xs: 12, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Stack29.default, { direction: "row", justifyContent: "start", alignItems: "center", width: "100%", spacing: 1, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Edit4.default, {}, void 0, !1, {
        fileName: "app/components/navbar/AccountNavBar.tsx",
        lineNumber: 30,
        columnNumber: 48
      }, this), onClick: handleNavActionClick("editExpense"), children: "Edit" }, void 0, !1, {
        fileName: "app/components/navbar/AccountNavBar.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Divider6.default, { orientation: "vertical", variant: "middle", flexItem: !0 }, void 0, !1, {
        fileName: "app/components/navbar/AccountNavBar.tsx",
        lineNumber: 33,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Delete4.default, {}, void 0, !1, {
        fileName: "app/components/navbar/AccountNavBar.tsx",
        lineNumber: 34,
        columnNumber: 48
      }, this), onClick: handleNavActionClick("deleteExpense"), children: "Delete" }, void 0, !1, {
        fileName: "app/components/navbar/AccountNavBar.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { xs: 8, xsOffset: "auto", display: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Stack29.default, { direction: "row", justifyContent: "end", alignItems: "center", width: "100%", spacing: 2, "data-tooltip-id": "fetch-information", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Settings4.default, {}, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 41,
      columnNumber: 48
    }, this), onClick: handleNavActionClick("settings"), children: "Settings" }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 40,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar/AccountNavBar.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) : accountId ? /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { container: !0, xs: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { xs: 12, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Stack29.default, { direction: "row", justifyContent: "start", alignItems: "center", width: "100%", spacing: 1, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Add2.default, {}, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 55,
      columnNumber: 48
    }, this), onClick: handleNavActionClick("newExpense"), children: "Expense" }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 55,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Divider6.default, { orientation: "vertical", variant: "middle", flexItem: !0 }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Edit4.default, {}, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 59,
      columnNumber: 48
    }, this), onClick: handleNavActionClick("editAccount"), children: "Edit Account" }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Divider6.default, { orientation: "vertical", variant: "middle", flexItem: !0 }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Delete4.default, {}, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 63,
      columnNumber: 48
    }, this), onClick: handleNavActionClick("deleteAccount"), children: "Delete Account" }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar/AccountNavBar.tsx",
    lineNumber: 54,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar/AccountNavBar.tsx",
    lineNumber: 53,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar/AccountNavBar.tsx",
    lineNumber: 52,
    columnNumber: 7
  }, this) : pathname === "/" ? /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { container: !0, xs: 12, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Stack29.default, { direction: "row", justifyContent: "start", alignItems: "center", width: "100%", spacing: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Add2.default, {}, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 77,
      columnNumber: 48
    }, this), onClick: handleNavActionClick("newExpense"), children: "Expense" }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { xs: 8, xsOffset: "auto", display: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Stack29.default, { direction: "row", justifyContent: "end", alignItems: "center", width: "100%", spacing: 2, "data-tooltip-id": "fetch-information", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Settings4.default, {}, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 84,
      columnNumber: 48
    }, this), onClick: handleNavActionClick("settings"), children: "Settings" }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 84,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 82,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar/AccountNavBar.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) : pathname === "/accounts" ? /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { container: !0, xs: 12, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Stack29.default, { direction: "row", justifyContent: "start", alignItems: "center", width: "100%", spacing: 1, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Add2.default, {}, void 0, !1, {
        fileName: "app/components/navbar/AccountNavBar.tsx",
        lineNumber: 98,
        columnNumber: 48
      }, this), onClick: handleNavActionClick("addAccount"), children: "Account" }, void 0, !1, {
        fileName: "app/components/navbar/AccountNavBar.tsx",
        lineNumber: 98,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Divider6.default, { orientation: "vertical", variant: "middle", flexItem: !0 }, void 0, !1, {
        fileName: "app/components/navbar/AccountNavBar.tsx",
        lineNumber: 101,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Add2.default, {}, void 0, !1, {
        fileName: "app/components/navbar/AccountNavBar.tsx",
        lineNumber: 102,
        columnNumber: 48
      }, this), onClick: handleNavActionClick("newExpense"), children: "Expense" }, void 0, !1, {
        fileName: "app/components/navbar/AccountNavBar.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 97,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 96,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { xs: 8, xsOffset: "auto", display: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Stack29.default, { direction: "row", justifyContent: "end", alignItems: "center", width: "100%", spacing: 2, "data-tooltip-id": "fetch-information", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Settings4.default, {}, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 109,
      columnNumber: 48
    }, this), onClick: handleNavActionClick("settings"), children: "Settings" }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 109,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 108,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 107,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar/AccountNavBar.tsx",
    lineNumber: 95,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { container: !0, xs: 12, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { xs: 4, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Stack29.default, { direction: "row", justifyContent: "start", alignItems: "center", width: "100%", spacing: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Add2.default, {}, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 122,
      columnNumber: 46
    }, this), onClick: handleNavActionClick("newExpense"), children: "Expense" }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 122,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 121,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 120,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Unstable_Grid24.default, { xs: 8, xsOffset: "auto", display: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Stack29.default, { direction: "row", justifyContent: "end", alignItems: "center", width: "100%", spacing: 2, "data-tooltip-id": "fetch-information", children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Button6.default, { variant: "text", startIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_Settings4.default, {}, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 129,
      columnNumber: 46
    }, this), onClick: handleNavActionClick("settings"), children: "Settings" }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 129,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/AccountNavBar.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar/AccountNavBar.tsx",
    lineNumber: 119,
    columnNumber: 5
  }, this);
}
var AccountNavBar_default = AccountNavBar;

// app/api/utils/calculations.server.ts
function calculateGainRateForAccount(account) {
  let expensesCopy = [...account.expenses], result = [], totalAmount = expensesCopy.reduce((acc, expense) => acc + expense.amount, 0), latest = expensesCopy[0]?.amount ?? 0, [latestInteger, latestDecimal] = splitNumberByDot(latest);
  expensesCopy.reverse(), expensesCopy.forEach((expense, index) => {
    let [integer, decimal] = splitNumberByDot(expense.amount), gain = index === 0 ? 0 : expense.amount - expensesCopy[index - 1].amount, [gainInteger, gainDecimal] = splitNumberByDot(gain), percentage = index === 0 ? 0 : gain / expensesCopy[index - 1].amount * 100, bgColorClassName = "";
    percentage === 0 ? bgColorClassName = "no-change-bg" : percentage < 0 && percentage > -3 ? bgColorClassName = "neg-bg-1" : percentage <= -3 && percentage > -5 ? bgColorClassName = "neg-bg-2" : percentage <= -5 ? bgColorClassName = "neg-bg-3" : percentage > 0 ? bgColorClassName = "pos-bg" : bgColorClassName = "", result.push({
      ...expense,
      dateFromNowDisplay: convertDateDisplay(expense.date, "fromNow"),
      dateFullDisplay: convertDateDisplay(expense.date, "full"),
      amountOfInteger: integer,
      amountOfDecimal: decimal,
      gainAmount: gain,
      gainAmountOfInteger: Math.abs(gainInteger),
      gainAmountOfDecimal: gainDecimal,
      gainPercentage: percentage,
      bgColorClassName,
      textColorClassName: gain > 0 ? "positive" : gain === 0 ? "no-change" : "negative"
    });
  });
  let expenseData = result.sort((a, b) => a.date < b.date ? 1 : -1);
  return {
    ...account,
    totalAmount: latest,
    totalAmountOfInteger: latestInteger,
    totalAmountOfDecimal: latestDecimal,
    expenses: expenseData,
    dashboardDisplayHasMore: account.expenseCount > account.expenses.length
  };
}

// app/routes/_public._index.tsx
var import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function links3() {
  return [{ rel: "stylesheet", href: dashboard_default }];
}
var meta6 = (data) => [
  { title: "Dashboard - Ledger" },
  { name: "description", content: "Summary of all data." }
], headers5 = ({
  loaderHeaders
}) => ({
  "Cache-Control": "public, no-cache, max-age=0"
});
function Index() {
  let { isMobile } = useIsMobile_default(), navigate = (0, import_react41.useNavigate)(), { accountsData, chartData, isChartShown, shownAccountAndColorData, chartType, total } = (0, import_react41.useLoaderData)(), handleAddNewExpense = () => {
    let url = (0, import_urlcat4.default)("/add", "", { type: "expense", redirectUrl: "/", actionUrl: "/data" });
    navigate(url);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_Stack30.default, { direction: "column", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(AppToolbar, { toolbarProps: {
      position: "sticky",
      sx: { top: isMobile ? "56px" : "64px" }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(AccountNavBar_default, { onClickAction: (actionId) => {
      switch (actionId) {
        case "newExpense": {
          handleAddNewExpense();
          break;
        }
      }
    } }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 76,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_Box14.default, { mt: 2, mx: isMobile ? 2 : 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(LayoutWithGutter_default, { size: "wide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_Stack30.default, { direction: "column", justifyContent: "center", alignItems: "center", width: "100%", spacing: 3, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(TitleBarLayout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_Stack30.default, { direction: "row", justifyContent: "space-between", alignItems: "center", width: "100%", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_Stack30.default, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_Dashboard3.default, {}, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 87,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(TitleNameDisplay, { name: "Dashboard" }, void 0, !1, {
            fileName: "app/routes/_public._index.tsx",
            lineNumber: 88,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_Stack30.default, { direction: "row", justifyContent: "start", alignItems: "center", className: "positive", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(TitleNameDisplay, { name: `$${total.toLocaleString()}` }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 91,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public._index.tsx",
          lineNumber: 90,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 85,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 84,
        columnNumber: 13
      }, this),
      isChartShown && /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(import_Stack30.default, { width: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(DashboardChart_default, { chartData, shownAccountNames: shownAccountAndColorData, chartType }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 97,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 96,
        columnNumber: 30
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(Dashboard_default, { accounts: accountsData }, void 0, !1, {
        fileName: "app/routes/_public._index.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public._index.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
async function loader4({ request, params, context }) {
  let accountsData = await getShownAccountAndExpenses(), chartData = await getDashboardChartData(), userSettings = await getDataSettingsByUserId(USER_ID), result = [], shouldShowChart = !!userSettings?.showDashboardChart, chartType = userSettings?.dashboardChartType ?? "bar", total = 0;
  accountsData.forEach((account, index) => {
    result.push(calculateGainRateForAccount(account)), account.expenses.length > 0 && (total += account.expenses[0].amount);
  });
  let shownAccountAndColorData = result.map((account, index) => ({
    name: account.name,
    color: getLineColorByAccountName(account.name, index)
  }));
  return (0, import_node8.json)({
    accountsData: result,
    isChartShown: shouldShowChart,
    chartData,
    shownAccountAndColorData,
    chartType,
    total
  });
}
var shouldRevalidate = (payload) => payload.defaultShouldRevalidate;
function ErrorBoundary4() {
  let error = (0, import_react41.useRouteError)();
  return (0, import_react41.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(ActionLoaderError_default, { error }, void 0, !1, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 153,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(OtherError_default, { error }, void 0, !1, {
    fileName: "app/routes/_public._index.tsx",
    lineNumber: 158,
    columnNumber: 5
  }, this);
}

// app/routes/_public.about.tsx
var public_about_exports = {};
__export(public_about_exports, {
  default: () => public_about_default,
  meta: () => meta7
});
var import_Box15 = __toESM(require("@mui/material/Box")), import_Stack31 = __toESM(require("@mui/material/Stack")), import_Typography26 = __toESM(require("@mui/material/Typography"));
var import_Icon = __toESM(require("@mui/material/Icon")), import_DashboardOutlined2 = __toESM(require("@mui/icons-material/DashboardOutlined")), import_AccountBalanceOutlined2 = __toESM(require("@mui/icons-material/AccountBalanceOutlined")), import_FormatListBulletedOutlined2 = __toESM(require("@mui/icons-material/FormatListBulletedOutlined")), import_react42 = require("@remix-run/react");
var import_Info2 = __toESM(require("@mui/icons-material/Info"));
var import_jsx_dev_runtime49 = require("react/jsx-dev-runtime"), meta7 = (data) => [
  { title: "About - Ledger" },
  { name: "description", content: "What is Ledger" }
];
function About() {
  let { isMobile, isAboveXl } = useIsMobile_default();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Stack31.default, { direction: "column", width: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Box15.default, { mt: 2, mx: isMobile ? 2 : 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(LayoutWithGutter_default, { size: "wide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Stack31.default, { direction: "column", justifyContent: "start", alignItems: "center", width: "100%", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(TitleBarLayout_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Stack31.default, { direction: "row", justifyContent: "start", alignItems: "center", spacing: 2, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Info2.default, {}, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 39,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(TitleNameDisplay, { name: "About" }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 40,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 38,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 37,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Box15.default, { p: 3, borderRadius: "20px", width: "100%", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Stack31.default, { direction: "row", justifyContent: "start", alignItems: "center", mb: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Typography26.default, { variant: "h5", fontFamily: "Poppins", mr: 2, children: "What is Ledger?" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 47,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Typography26.default, { component: "img", src: dollar_default, sx: { height: "2rem", mr: "10px" }, alt: "logo" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 50,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Typography26.default, { component: "img", src: logo_default, sx: { height: "2rem", mr: "10px" }, alt: "logo" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Typography26.default, { component: "img", src: money_default, sx: { height: "2rem", mr: "10px" }, alt: "logo" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 46,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Typography26.default, { variant: "body1", fontFamily: "Poppins", mb: 2, children: "Ledger is a simple web app that helps you to keep track of your expenses." }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 56,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Box15.default, { p: 3, borderRadius: "20px", width: "100%", bgcolor: "background.paper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Stack31.default, { direction: "row", justifyContent: "start", alignItems: "start", mb: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Icon.default, { fontSize: "small", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_AccountBalanceOutlined2.default, { color: "primary", fontSize: "small" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 65,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 64,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Typography26.default, { variant: "h5", fontFamily: "Poppins", ml: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react42.Link, { to: "/accounts", children: "Accounts" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 68,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 63,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Typography26.default, { variant: "body1", fontFamily: "Poppins", mb: 2, children: "Accounts holds the expenses of the user. Users can add their accounts to the ledger." }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 62,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Box15.default, { p: 3, borderRadius: "20px", width: "100%", bgcolor: "background.paper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Stack31.default, { direction: "row", justifyContent: "start", alignItems: "start", mb: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Icon.default, { fontSize: "small", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_FormatListBulletedOutlined2.default, { color: "primary", fontSize: "medium" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 80,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 79,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Typography26.default, { variant: "h5", fontFamily: "Poppins", ml: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react42.Link, { to: "/data", children: "Expenses" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 83,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 78,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Typography26.default, { variant: "body1", fontFamily: "Poppins", mb: 2, children: "Expenses are account's balances at a date of time. Users can add their expenses to a ledger. This will help them to keep track of their expenses." }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 87,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 77,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Box15.default, { p: 3, borderRadius: "20px", width: "100%", bgcolor: "background.paper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Stack31.default, { direction: "row", justifyContent: "start", alignItems: "start", mb: 2, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Icon.default, { fontSize: "small", children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_DashboardOutlined2.default, { color: "primary", fontSize: "small" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 95,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 94,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Typography26.default, { variant: "h5", fontFamily: "Poppins", ml: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react42.Link, { to: "/", children: "Analysis" }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 98,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/_public.about.tsx",
          lineNumber: 97,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 93,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_Typography26.default, { variant: "body1", fontFamily: "Poppins", mb: 2, children: "Dashboard will show the analysis of the user's expenses." }, void 0, !1, {
        fileName: "app/routes/_public.about.tsx",
        lineNumber: 102,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.about.tsx",
      lineNumber: 92,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.about.tsx",
    lineNumber: 35,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.about.tsx",
    lineNumber: 33,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.about.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.about.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}
var public_about_default = About;

// app/routes/_public.add.tsx
var public_add_exports = {};
__export(public_add_exports, {
  ErrorBoundary: () => ErrorBoundary5,
  action: () => action6,
  default: () => public_add_default,
  loader: () => loader5,
  meta: () => meta8
});
var import_react44 = require("@remix-run/react");
var import_react_router_dom5 = require("react-router-dom"), import_react_hook_form10 = require("react-hook-form");

// app/components/add/NewExpenseFormFields.tsx
var import_InputAdornment4 = __toESM(require("@mui/material/InputAdornment")), import_react43 = require("@remix-run/react");
var import_jsx_dev_runtime50 = require("react/jsx-dev-runtime");
function NewExpenseFormFields({ control, onClearField }) {
  let { accounts: accountList } = (0, import_react43.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_jsx_dev_runtime50.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
      TextField_default,
      {
        name: "amount",
        label: "Amount",
        control,
        variant: "standard",
        type: "number",
        helperText: "Expense amount",
        fullWidth: !0,
        autoFocus: !0,
        InputProps: {
          startAdornment: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_InputAdornment4.default, { position: "start", children: "$" }, void 0, !1, {
            fileName: "app/components/add/NewExpenseFormFields.tsx",
            lineNumber: 20,
            columnNumber: 27
          }, this)
        },
        clearField: onClearField,
        onFocus: (event) => {
          event.target.select();
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/add/NewExpenseFormFields.tsx",
        lineNumber: 18,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(TextField_default, { name: "date", label: "", control, type: "datetime-local", variant: "standard", helperText: "Expense submission date", fullWidth: !0, clearField: onClearField }, void 0, !1, {
      fileName: "app/components/add/NewExpenseFormFields.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
      Autocomplete_default,
      {
        name: "account",
        label: "Select an Account",
        control,
        options: accountList,
        getOptionLabel: (option) => option?.name ?? "",
        fullWidth: !0,
        isOptionEqualToValue: (option, value) => option.id === value.id
      },
      void 0,
      !1,
      {
        fileName: "app/components/add/NewExpenseFormFields.tsx",
        lineNumber: 32,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/add/NewExpenseFormFields.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
var NewExpenseFormFields_default = NewExpenseFormFields;

// app/components/add/NewFormFields.tsx
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function NewFormFields({ type, control, onClearField }) {
  return type === "expense" ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(NewExpenseFormFields_default, { control, onClearField }, void 0, !1, {
    fileName: "app/components/add/NewFormFields.tsx",
    lineNumber: 10,
    columnNumber: 7
  }, this) : type === "account" ? /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(import_jsx_dev_runtime51.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
      TextField_default,
      {
        name: "name",
        label: "Account Name",
        control,
        variant: "standard",
        type: "text",
        helperText: "Account name.",
        fullWidth: !0,
        autoFocus: !0,
        clearField: onClearField
      },
      void 0,
      !1,
      {
        fileName: "app/components/add/NewFormFields.tsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(Switch_default, { name: "shown", label: "Show by default", control }, void 0, !1, {
      fileName: "app/components/add/NewFormFields.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/add/NewFormFields.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) : null;
}
var NewFormFields_default = NewFormFields;

// app/routes/_public.add.tsx
var import_startCase3 = __toESM(require("lodash/startCase")), import_node9 = require("@remix-run/node"), import_react45 = require("@remix-run/react"), import_DialogContent3 = __toESM(require("@mui/material/DialogContent")), import_Stack32 = __toESM(require("@mui/material/Stack")), import_DialogActions3 = __toESM(require("@mui/material/DialogActions")), import_Button7 = __toESM(require("@mui/material/Button")), import_Alert5 = __toESM(require("@mui/material/Alert"));
var import_react46 = require("react");
var import_Box16 = __toESM(require("@mui/material/Box")), import_LinearProgress6 = __toESM(require("@mui/material/LinearProgress"));

// app/shared/utils/time.ts
var import_format5 = __toESM(require("date-fns/format"));
function getDefaultValue(type, initData) {
  let initAccountData = {
    name: "Test",
    ...initData?.account
  }, initExpenseData = {
    amount: 100,
    date: (0, import_format5.default)(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH:mm"),
    accountId: "",
    ...initData?.expense
  };
  switch (type) {
    case "account":
      return initAccountData;
    case "expense":
      return initExpenseData;
    default:
      return {};
  }
}
var getInitAddableData = (account) => ({
  expense: {
    amount: 1e3,
    date: (0, import_format5.default)(/* @__PURE__ */ new Date(), "yyyy-MM-dd HH:mm"),
    accountId: "",
    account: account || null
  },
  account: {
    name: "My Boba Account",
    shown: !0
  }
});

// app/routes/_public.add.tsx
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime"), meta8 = (data) => [
  { title: "Add New Expense - Ledger" },
  { name: "description", content: "Add a new expense." }
];
function AddNewExpense() {
  let navigate = (0, import_react44.useNavigate)(), submit = (0, import_react44.useSubmit)(), { isActionSubmission, isActionRedirect } = useNavigationType(), [searchParams, setSearchParams] = (0, import_react_router_dom5.useSearchParams)(), actionData = (0, import_react45.useActionData)(), { accounts: accountList, currentAccountFromUrl, dataSettings: { addAnotherAfterSubmit } } = (0, import_react44.useLoaderData)(), hasActionError = actionData && !!actionData.error, redirectUrl = searchParams.get("redirectUrl") || "/", entityType = searchParams.get("type"), isApiLoading = isActionSubmission || isActionRedirect, { control, reset, setValue, watch, handleSubmit } = (0, import_react_hook_form10.useForm)({
    defaultValues: getDefaultValue(entityType, getInitAddableData(currentAccountFromUrl)),
    shouldFocusError: !0
    //resolver: yupResolver(productSchema),
    //mode: "onChange",
  }), handleFormSubmit = (payload, event) => {
    let dataToSave = {};
    entityType === "expense" ? dataToSave = {
      ...payload,
      accountId: payload.account?.id ?? "",
      addAnotherAfterSubmit
    } : entityType === "account" && (dataToSave = {
      ...payload
    }), submit(dataToSave, {
      method: "post"
    });
  }, handleClose = (0, import_react46.useCallback)(() => {
    navigate(redirectUrl);
  }, [navigate, redirectUrl]), handleOnReset = () => {
    reset();
  }, handleClearField = (0, import_react46.useCallback)((name) => {
    name && setValue(name, "");
  }, [setValue]);
  return entityType ? /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_jsx_dev_runtime52.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(DialogLayout_default, { open: !0, onClose: handleClose, title: `Add New ${(0, import_startCase3.default)(entityType)}`, maxWidth: "xs", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_Box16.default, { width: "100%", children: (isActionSubmission || isActionRedirect) && /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_LinearProgress6.default, { color: isActionRedirect ? "success" : "warning" }, void 0, !1, {
      fileName: "app/routes/_public.add.tsx",
      lineNumber: 102,
      columnNumber: 57
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.add.tsx",
      lineNumber: 101,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_react44.Form, { method: "post", onSubmit: handleSubmit(handleFormSubmit), children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_DialogContent3.default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_Stack32.default, { direction: "column", justifyContent: "start", alignItems: "start", spacing: 2, width: "100%", children: [
      hasActionError && /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_Alert5.default, { severity: "error", sx: { width: "100%" }, children: actionData.message }, void 0, !1, {
        fileName: "app/routes/_public.add.tsx",
        lineNumber: 107,
        columnNumber: 35
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(NewFormFields_default, { type: entityType, control, onClearField: handleClearField }, void 0, !1, {
        fileName: "app/routes/_public.add.tsx",
        lineNumber: 109,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_DialogActions3.default, { sx: { width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_Button7.default, { type: "reset", onClick: handleOnReset, disabled: isApiLoading, children: "Reset" }, void 0, !1, {
          fileName: "app/routes/_public.add.tsx",
          lineNumber: 112,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(import_Button7.default, { type: "submit", disabled: isApiLoading, children: isApiLoading ? "Submitting..." : "Submit" }, void 0, !1, {
          fileName: "app/routes/_public.add.tsx",
          lineNumber: 115,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_public.add.tsx",
        lineNumber: 111,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_public.add.tsx",
      lineNumber: 106,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.add.tsx",
      lineNumber: 105,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/_public.add.tsx",
      lineNumber: 104,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_public.add.tsx",
    lineNumber: 100,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_public.add.tsx",
    lineNumber: 99,
    columnNumber: 5
  }, this) : null;
}
var public_add_default = AddNewExpense;
async function loader5({ params, request }) {
  let url = new URL(request.url), entityType = url.searchParams.get("type"), accountId = url.searchParams.get("accountId") || "";
  if (!entityType)
    throw badRequest({ error: "Entity being added is missing." });
  let accounts = await getAccounts(), dataSettings = await getDataSettingsByUserId(USER_ID), account = accounts.find((account2) => account2.id === accountId), defaultAccount = accounts.find((account2) => account2.id === dataSettings?.defaultAccountIdToAdd);
  return (0, import_node9.json)({
    accounts,
    currentAccountFromUrl: account || defaultAccount,
    // use the default account from Settings if no accountId from search params is not found
    dataSettings: dataSettings ?? DEFAULT_SETTINGS_ADD
  }, {
    headers: {
      "Cache-Control": "public, no-cache"
    }
  });
}
async function action6({ request, context, params }) {
  let url = new URL(request.url), body = await request.formData(), entityType = url.searchParams.get("type"), redirectUrl = url.searchParams.get("redirectUrl") || "/";
  if (entityType === "account") {
    let accountName = body.get("name"), accountShown = body.get("shown");
    try {
      await isValidStringCount(accountName, 5);
    } catch (err) {
      return handleError({ message: err.message, error: !0 });
    }
    try {
      let result = await addAccount({
        name: accountName,
        shown: accountShown === "true"
      });
      return (0, import_node9.redirect)(`${redirectUrl}?addedAccountId=${result.id}`);
    } catch (err) {
      return handleError({ message: err.message, error: !0 });
    }
  }
  if (entityType === "expense") {
    let shouldRedirect = body.get("addAnotherAfterSubmit") === "false", expense = {
      accountId: body.get("accountId"),
      date: body.get("date"),
      amount: +body.get("amount")
    };
    try {
      await validateExpenseToAdd(expense);
    } catch (err) {
      return handleError({ message: err.message, error: !0 });
    }
    try {
      let result = await addExpense(expense);
      return shouldRedirect ? (0, import_node9.redirect)(redirectUrl) : (0, import_node9.json)(result);
    } catch (err) {
      return handleError({ message: err.message, error: !0 });
    }
  }
}
function ErrorBoundary5() {
  let error = (0, import_react44.useRouteError)();
  return (0, import_react44.isRouteErrorResponse)(error) ? /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(ActionLoaderError_default, { error }, void 0, !1, {
    fileName: "app/routes/_public.add.tsx",
    lineNumber: 208,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(OtherError_default, { error }, void 0, !1, {
    fileName: "app/routes/_public.add.tsx",
    lineNumber: 213,
    columnNumber: 5
  }, this);
}

// app/routes/accounts.tsx
var accounts_exports = {};
__export(accounts_exports, {
  default: () => accounts_default,
  headers: () => headers6,
  loader: () => loader6,
  shouldRevalidate: () => shouldRevalidate2
});
var import_node10 = require("@remix-run/node");
var import_react47 = require("@remix-run/react"), import_urlcat5 = __toESM(require("urlcat")), import_Stack33 = __toESM(require("@mui/material/Stack")), import_Box17 = __toESM(require("@mui/material/Box"));
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime"), headers6 = ({
  loaderHeaders
}) => ({
  "Cache-Control": "public, no-cache, max-age=0"
});
function Accounts2() {
  let { isMobile, isAboveXl } = useIsMobile_default(), navigate = (0, import_react47.useNavigate)(), { accountId } = (0, import_react47.useParams)(), submit = (0, import_react47.useSubmit)(), { pathname } = (0, import_react47.useLocation)(), handleAddNewAccount = () => {
    let url = (0, import_urlcat5.default)("/add", "", { type: "account", redirectUrl: "/accounts" });
    navigate(url);
  }, handleAddNewExpense = () => {
    let url = (0, import_urlcat5.default)("/add", "", { type: "expense", redirectUrl: `/accounts/${accountId ?? ""}`, accountId: `${accountId ?? ""}` });
    navigate(url);
  }, handleDeleteAccount = () => {
    confirm("Are you sure you want to delete this item?") && submit({ id: accountId }, {
      action: `/accounts/${accountId}`,
      method: "DELETE",
      replace: !0
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_Stack33.default, { direction: "column", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(AppToolbar, { toolbarProps: {
      position: "sticky",
      sx: { top: isMobile ? "56px" : "64px" }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(AccountNavBar_default, { accountId, onClickAction: (actionId) => {
      switch (actionId) {
        case "addAccount": {
          handleAddNewAccount();
          break;
        }
        case "editAccount": {
          let url = (0, import_urlcat5.default)("", "/accounts/:accountId/edit", { accountId, redirectUrl: pathname });
          navigate(url);
          break;
        }
        case "newExpense": {
          handleAddNewExpense();
          break;
        }
        case "deleteAccount": {
          handleDeleteAccount();
          break;
        }
      }
    } }, void 0, !1, {
      fileName: "app/routes/accounts.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/accounts.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_Box17.default, { mt: 2, mx: isMobile ? 2 : 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(LayoutWithGutter_default, { size: "wide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(import_react47.Outlet, {}, void 0, !1, {
      fileName: "app/routes/accounts.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/accounts.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/accounts.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/accounts.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
var accounts_default = Accounts2;
async function loader6() {
  let result2 = (await getAccounts()).map((account) => ({
    ...account,
    dateAddedFromNow: convertDateDisplay(account.dateAdded, "fromNow"),
    updatedAtFromNow: convertDateDisplay(account.updatedAt, "fromNow")
  }));
  return (0, import_node10.json)(result2);
}
var shouldRevalidate2 = (payload) => payload.defaultShouldRevalidate;

// app/routes/expenses.tsx
var expenses_exports = {};
__export(expenses_exports, {
  default: () => expenses_default,
  loader: () => loader7,
  shouldRevalidate: () => shouldRevalidate3
});
var import_node11 = require("@remix-run/node");
var import_react48 = require("@remix-run/react"), import_Stack34 = __toESM(require("@mui/material/Stack")), import_Box18 = __toESM(require("@mui/material/Box")), import_urlcat6 = __toESM(require("urlcat")), import_tiny_invariant5 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime54 = require("react/jsx-dev-runtime");
function Expenses() {
  let { isMobile, isAboveXl } = useIsMobile_default(), navigate = (0, import_react48.useNavigate)(), { expenseId } = (0, import_react48.useParams)(), deleteFetcher = (0, import_react48.useFetcher)(), { pathname } = (0, import_react48.useLocation)(), handleAddNewAccount = () => {
    let url = (0, import_urlcat6.default)("/add", "", { type: "account", redirectUrl: "/expenses" });
    navigate(url);
  }, handleAddNewExpense = () => {
    let url = (0, import_urlcat6.default)("/add", "", { type: "expense", redirectUrl: "/expenses", accountId: "" });
    navigate(url);
  }, handleEditExpense = (expenseId2) => {
    (0, import_tiny_invariant5.default)(expenseId2, "Expected expense id to be defined");
    let url = (0, import_urlcat6.default)("", "/data/:expenseId/edit", { expenseId: expenseId2, redirectUrl: pathname });
    navigate(url);
  }, handleDeleteExpense = (expenseId2) => {
    if ((0, import_tiny_invariant5.default)(expenseId2, "Expected expense id to be defined"), !confirm("Are you sure you want to delete this expense?"))
      return;
    let url = (0, import_urlcat6.default)("", "/data/:expenseId", { expenseId: expenseId2, redirectUrl: "/data" });
    deleteFetcher.submit({ id: expenseId2 }, { method: "DELETE", action: url });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_Stack34.default, { direction: "column", width: "100%", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(AppToolbar, { toolbarProps: {
      position: "sticky",
      sx: { top: isMobile ? "56px" : "64px" }
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(AccountNavBar_default, { onClickAction: (actionId) => {
      switch (actionId) {
        case "addAccount": {
          handleAddNewAccount();
          break;
        }
        case "newExpense": {
          handleAddNewExpense();
          break;
        }
        case "editExpense": {
          handleEditExpense(expenseId);
          break;
        }
        case "deleteExpense": {
          handleDeleteExpense(expenseId);
          break;
        }
        case "settings":
          break;
      }
    } }, void 0, !1, {
      fileName: "app/routes/expenses.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/expenses.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_Box18.default, { mt: 2, mx: isMobile ? 2 : 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(LayoutWithGutter_default, { size: "wide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_react48.Outlet, {}, void 0, !1, {
      fileName: "app/routes/expenses.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/expenses.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/expenses.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/expenses.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
}
var expenses_default = Expenses;
async function loader7({ request, params, context }) {
  let url = new URL(request.url), pageParam = url.searchParams.get("page"), filterParam = url.searchParams.get("q"), page = pageParam && parseInt(pageParam) ? parseInt(pageParam) < 0 ? 0 : parseInt(pageParam) : 0, response = await getExpensesPaged(page, filterParam), expenses = response.data.map((rec) => ({
    ...rec,
    dateFromNow: convertDateDisplay(rec.date, "longAndNow"),
    dateAddedFromNow: convertDateDisplay(rec.dateAdded, "fromNow"),
    updatedAtFromNow: convertDateDisplay(rec.updatedAt, "fromNow")
  }));
  return (0, import_node11.json)({
    ...response,
    expenses
  });
}
var shouldRevalidate3 = (payload) => payload.defaultShouldRevalidate;

// app/routes/$.tsx
var __exports = {};
__export(__exports, {
  default: () => __default,
  meta: () => meta9
});
var import_Box19 = __toESM(require("@mui/material/Box")), import_Stack35 = __toESM(require("@mui/material/Stack")), import_Typography27 = __toESM(require("@mui/material/Typography")), import_react49 = require("@remix-run/react");

// public/images/no-money.png
var no_money_default = "/build/_assets/no-money-CRH4CW7K.png";

// app/routes/$.tsx
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime"), meta9 = (data) => [
  { title: "404 Not Found - Ledger" },
  { name: "description", content: "Page not found." }
];
function NotFound404() {
  let { isMobile } = useIsMobile_default();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_Stack35.default, { direction: "column", width: "100%", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_Box19.default, { mt: 2, mx: isMobile ? 2 : 0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(LayoutWithGutter_default, { size: "wide", children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_Stack35.default, { direction: "column", width: "100%", justifyContent: "center", alignItems: "center", spacing: 3, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_Typography27.default, { variant: "h3", children: "404" }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_Typography27.default, { variant: "h4", children: "Page not found." }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 29,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_Typography27.default, { component: "img", src: no_money_default, sx: { height: "8rem" }, alt: "logo" }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(import_react49.Link, { to: "/", children: "Go Home" }, void 0, !1, {
      fileName: "app/routes/$.tsx",
      lineNumber: 35,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/$.tsx",
    lineNumber: 24,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/$.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/$.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/$.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
var __default = NotFound404;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-SLLA5ORF.js", imports: ["/build/_shared/chunk-OAPPX4FA.js", "/build/_shared/chunk-WEAPBHQG.js", "/build/_shared/chunk-WBTFGKWV.js", "/build/_shared/chunk-2HZEM55C.js", "/build/_shared/chunk-JR22VO6P.js", "/build/_shared/chunk-7PHB3BFD.js", "/build/_shared/chunk-CJ4MY3PQ.js", "/build/_shared/chunk-PZDJHGND.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NELWTNRB.js", imports: ["/build/_shared/chunk-PT4JTIND.js", "/build/_shared/chunk-MNFGAN3J.js", "/build/_shared/chunk-44KAGOAT.js", "/build/_shared/chunk-ZSHJHWBA.js", "/build/_shared/chunk-TUVVXOXZ.js", "/build/_shared/chunk-6XHRHTPQ.js", "/build/_shared/chunk-6YFK7TV2.js", "/build/_shared/chunk-PZTRJKHI.js", "/build/_shared/chunk-TML6CR3E.js", "/build/_shared/chunk-ABZBJVWJ.js", "/build/_shared/chunk-3OYWPTGG.js", "/build/_shared/chunk-NZBWU3RW.js", "/build/_shared/chunk-D7T4WDWH.js", "/build/_shared/chunk-RTYPYAMI.js", "/build/_shared/chunk-WAVDVHB7.js", "/build/_shared/chunk-CKQBY6RX.js", "/build/_shared/chunk-ZQDPRILP.js", "/build/_shared/chunk-634DHCA5.js", "/build/_shared/chunk-ZU3HNIKJ.js", "/build/_shared/chunk-JSXH3V6J.js", "/build/_shared/chunk-VLEVX4Y5.js", "/build/_shared/chunk-J65H5UO2.js", "/build/_shared/chunk-U62CVF4L.js", "/build/_shared/chunk-HIHGJ7MR.js", "/build/_shared/chunk-WRP3ACQR.js", "/build/_shared/chunk-LUSYK3CZ.js", "/build/_shared/chunk-ASAHQIIY.js", "/build/_shared/chunk-MUHQKUBK.js", "/build/_shared/chunk-VCOQBVSQ.js", "/build/_shared/chunk-POSAGPIB.js", "/build/_shared/chunk-2QJY4JOV.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !0 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/$-XRQQZVZU.js", imports: ["/build/_shared/chunk-BLOZYDH4.js", "/build/_shared/chunk-G5KWBQPG.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_public._index": { id: "routes/_public._index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_public._index-7MNYIJXR.js", imports: ["/build/_shared/chunk-TXFUGOBK.js", "/build/_shared/chunk-QLXINJXL.js", "/build/_shared/chunk-JPFHLLC3.js", "/build/_shared/chunk-C4LIXTPQ.js", "/build/_shared/chunk-BLOZYDH4.js", "/build/_shared/chunk-V5RGLYX7.js", "/build/_shared/chunk-GPEVNQ22.js", "/build/_shared/chunk-G5KWBQPG.js", "/build/_shared/chunk-F2NGIU4H.js", "/build/_shared/chunk-4VBW7RUH.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-F5RTRROM.js", "/build/_shared/chunk-2TIMM6ZT.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !0 }, "routes/_public.about": { id: "routes/_public.about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.about-GXVVWFGG.js", imports: ["/build/_shared/chunk-BLOZYDH4.js", "/build/_shared/chunk-G5KWBQPG.js", "/build/_shared/chunk-2TIMM6ZT.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_public.add": { id: "routes/_public.add", parentId: "root", path: "add", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.add-YXTFC7HK.js", imports: ["/build/_shared/chunk-ECMSJ5AQ.js", "/build/_shared/chunk-VWRE5EJQ.js", "/build/_shared/chunk-HZ5QNSU5.js", "/build/_shared/chunk-QLXINJXL.js", "/build/_shared/chunk-RIK4FZ5R.js", "/build/_shared/chunk-KDWGJYNQ.js", "/build/_shared/chunk-CJDAII7V.js", "/build/_shared/chunk-JPFHLLC3.js", "/build/_shared/chunk-C4LIXTPQ.js", "/build/_shared/chunk-BZHC32Q5.js", "/build/_shared/chunk-ZGVGMZVS.js", "/build/_shared/chunk-OP444OWH.js", "/build/_shared/chunk-V5RGLYX7.js", "/build/_shared/chunk-LVZM4ZQW.js", "/build/_shared/chunk-GBGPGZJO.js", "/build/_shared/chunk-MKK2RYDX.js", "/build/_shared/chunk-GPEVNQ22.js", "/build/_shared/chunk-F2NGIU4H.js", "/build/_shared/chunk-4VBW7RUH.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-5MUSH6I2.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !0 }, "routes/_public.settings": { id: "routes/_public.settings", parentId: "root", path: "settings", index: void 0, caseSensitive: void 0, module: "/build/routes/_public.settings-FG3BQQQA.js", imports: ["/build/_shared/chunk-CJDAII7V.js", "/build/_shared/chunk-JPFHLLC3.js", "/build/_shared/chunk-C4LIXTPQ.js", "/build/_shared/chunk-BLOZYDH4.js", "/build/_shared/chunk-BZHC32Q5.js", "/build/_shared/chunk-ZGVGMZVS.js", "/build/_shared/chunk-OP444OWH.js", "/build/_shared/chunk-V5RGLYX7.js", "/build/_shared/chunk-LVZM4ZQW.js", "/build/_shared/chunk-GBGPGZJO.js", "/build/_shared/chunk-MKK2RYDX.js", "/build/_shared/chunk-GPEVNQ22.js", "/build/_shared/chunk-T37F3WEY.js", "/build/_shared/chunk-G5KWBQPG.js", "/build/_shared/chunk-F2NGIU4H.js", "/build/_shared/chunk-4VBW7RUH.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-5MUSH6I2.js", "/build/_shared/chunk-2TIMM6ZT.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !0 }, "routes/accounts": { id: "routes/accounts", parentId: "root", path: "accounts", index: void 0, caseSensitive: void 0, module: "/build/routes/accounts-6V3QXEDZ.js", imports: ["/build/_shared/chunk-TXFUGOBK.js", "/build/_shared/chunk-C4LIXTPQ.js", "/build/_shared/chunk-BLOZYDH4.js", "/build/_shared/chunk-V5RGLYX7.js", "/build/_shared/chunk-T37F3WEY.js", "/build/_shared/chunk-G5KWBQPG.js", "/build/_shared/chunk-F2NGIU4H.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-F5RTRROM.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/accounts.$accountId": { id: "routes/accounts.$accountId", parentId: "routes/accounts", path: ":accountId", index: void 0, caseSensitive: void 0, module: "/build/routes/accounts.$accountId-OHH3YHUR.js", imports: ["/build/_shared/chunk-5HG7HSMO.js", "/build/_shared/chunk-6YFK7TV2.js", "/build/_shared/chunk-QLXINJXL.js", "/build/_shared/chunk-RIK4FZ5R.js", "/build/_shared/chunk-P7BKKBOF.js", "/build/_shared/chunk-KDWGJYNQ.js", "/build/_shared/chunk-IYD4CINF.js", "/build/_shared/chunk-RTYPYAMI.js", "/build/_shared/chunk-LVZM4ZQW.js", "/build/_shared/chunk-GBGPGZJO.js", "/build/_shared/chunk-MKK2RYDX.js", "/build/_shared/chunk-GPEVNQ22.js", "/build/_shared/chunk-WAVDVHB7.js", "/build/_shared/chunk-CKQBY6RX.js", "/build/_shared/chunk-ZQDPRILP.js", "/build/_shared/chunk-634DHCA5.js", "/build/_shared/chunk-4VBW7RUH.js", "/build/_shared/chunk-ZU3HNIKJ.js", "/build/_shared/chunk-QV3X5EA4.js", "/build/_shared/chunk-JSXH3V6J.js", "/build/_shared/chunk-VLEVX4Y5.js", "/build/_shared/chunk-J65H5UO2.js", "/build/_shared/chunk-U62CVF4L.js", "/build/_shared/chunk-HIHGJ7MR.js", "/build/_shared/chunk-WRP3ACQR.js", "/build/_shared/chunk-LUSYK3CZ.js", "/build/_shared/chunk-2TIMM6ZT.js", "/build/_shared/chunk-ASAHQIIY.js", "/build/_shared/chunk-MUHQKUBK.js", "/build/_shared/chunk-VCOQBVSQ.js", "/build/_shared/chunk-POSAGPIB.js", "/build/_shared/chunk-2QJY4JOV.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !0 }, "routes/accounts.$accountId.edit": { id: "routes/accounts.$accountId.edit", parentId: "routes/accounts.$accountId", path: "edit", index: void 0, caseSensitive: void 0, module: "/build/routes/accounts.$accountId.edit-M5V5H32E.js", imports: ["/build/_shared/chunk-BQL5LPQN.js", "/build/_shared/chunk-VWRE5EJQ.js", "/build/_shared/chunk-HZ5QNSU5.js", "/build/_shared/chunk-ZGVGMZVS.js", "/build/_shared/chunk-OP444OWH.js", "/build/_shared/chunk-V5RGLYX7.js", "/build/_shared/chunk-D7T4WDWH.js", "/build/_shared/chunk-F2NGIU4H.js", "/build/_shared/chunk-NBEH4DGX.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/accounts._index": { id: "routes/accounts._index", parentId: "routes/accounts", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/accounts._index-IO25IYLU.js", imports: ["/build/_shared/chunk-QV3X5EA4.js", "/build/_shared/chunk-JSXH3V6J.js", "/build/_shared/chunk-VLEVX4Y5.js", "/build/_shared/chunk-5MUSH6I2.js", "/build/_shared/chunk-J65H5UO2.js", "/build/_shared/chunk-U62CVF4L.js", "/build/_shared/chunk-HIHGJ7MR.js", "/build/_shared/chunk-WRP3ACQR.js", "/build/_shared/chunk-LUSYK3CZ.js", "/build/_shared/chunk-2TIMM6ZT.js", "/build/_shared/chunk-ASAHQIIY.js", "/build/_shared/chunk-MUHQKUBK.js", "/build/_shared/chunk-VCOQBVSQ.js", "/build/_shared/chunk-POSAGPIB.js", "/build/_shared/chunk-2QJY4JOV.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/expenses": { id: "routes/expenses", parentId: "root", path: "expenses", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses-5YU6SO4M.js", imports: ["/build/_shared/chunk-TXFUGOBK.js", "/build/_shared/chunk-KDWGJYNQ.js", "/build/_shared/chunk-IYD4CINF.js", "/build/_shared/chunk-C4LIXTPQ.js", "/build/_shared/chunk-BLOZYDH4.js", "/build/_shared/chunk-V5RGLYX7.js", "/build/_shared/chunk-T37F3WEY.js", "/build/_shared/chunk-G5KWBQPG.js", "/build/_shared/chunk-NBEH4DGX.js", "/build/_shared/chunk-F5RTRROM.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/expenses.$expenseId": { id: "routes/expenses.$expenseId", parentId: "routes/expenses", path: ":expenseId", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses.$expenseId-V7CEMYYB.js", imports: ["/build/_shared/chunk-PZTRJKHI.js", "/build/_shared/chunk-P7BKKBOF.js", "/build/_shared/chunk-634DHCA5.js", "/build/_shared/chunk-F2NGIU4H.js", "/build/_shared/chunk-4VBW7RUH.js", "/build/_shared/chunk-ZU3HNIKJ.js", "/build/_shared/chunk-2TIMM6ZT.js", "/build/_shared/chunk-ASAHQIIY.js", "/build/_shared/chunk-MUHQKUBK.js", "/build/_shared/chunk-VCOQBVSQ.js", "/build/_shared/chunk-POSAGPIB.js", "/build/_shared/chunk-2QJY4JOV.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/expenses.$recordId.edit": { id: "routes/expenses.$recordId.edit", parentId: "routes/expenses", path: ":recordId/edit", index: void 0, caseSensitive: void 0, module: "/build/routes/expenses.$recordId.edit-CYWTCZZW.js", imports: ["/build/_shared/chunk-ECMSJ5AQ.js", "/build/_shared/chunk-BQL5LPQN.js", "/build/_shared/chunk-VWRE5EJQ.js", "/build/_shared/chunk-HZ5QNSU5.js", "/build/_shared/chunk-QLXINJXL.js", "/build/_shared/chunk-RIK4FZ5R.js", "/build/_shared/chunk-BZHC32Q5.js", "/build/_shared/chunk-ZGVGMZVS.js", "/build/_shared/chunk-OP444OWH.js", "/build/_shared/chunk-D7T4WDWH.js", "/build/_shared/chunk-GBGPGZJO.js", "/build/_shared/chunk-MKK2RYDX.js", "/build/_shared/chunk-GPEVNQ22.js", "/build/_shared/chunk-WAVDVHB7.js", "/build/_shared/chunk-CKQBY6RX.js", "/build/_shared/chunk-ZQDPRILP.js", "/build/_shared/chunk-4VBW7RUH.js", "/build/_shared/chunk-ZU3HNIKJ.js", "/build/_shared/chunk-5MUSH6I2.js", "/build/_shared/chunk-U62CVF4L.js", "/build/_shared/chunk-HIHGJ7MR.js", "/build/_shared/chunk-WRP3ACQR.js", "/build/_shared/chunk-LUSYK3CZ.js", "/build/_shared/chunk-MUHQKUBK.js", "/build/_shared/chunk-VCOQBVSQ.js", "/build/_shared/chunk-POSAGPIB.js", "/build/_shared/chunk-2QJY4JOV.js"], hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 }, "routes/expenses._index": { id: "routes/expenses._index", parentId: "routes/expenses", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/expenses._index-WRFEEXNC.js", imports: ["/build/_shared/chunk-44KAGOAT.js", "/build/_shared/chunk-ZSHJHWBA.js", "/build/_shared/chunk-6XHRHTPQ.js", "/build/_shared/chunk-HZ5QNSU5.js", "/build/_shared/chunk-5HG7HSMO.js", "/build/_shared/chunk-QLXINJXL.js", "/build/_shared/chunk-RIK4FZ5R.js", "/build/_shared/chunk-PZTRJKHI.js", "/build/_shared/chunk-P7BKKBOF.js", "/build/_shared/chunk-OP444OWH.js", "/build/_shared/chunk-D7T4WDWH.js", "/build/_shared/chunk-MKK2RYDX.js", "/build/_shared/chunk-WAVDVHB7.js", "/build/_shared/chunk-ZQDPRILP.js", "/build/_shared/chunk-634DHCA5.js", "/build/_shared/chunk-ZU3HNIKJ.js", "/build/_shared/chunk-QV3X5EA4.js", "/build/_shared/chunk-VLEVX4Y5.js", "/build/_shared/chunk-J65H5UO2.js", "/build/_shared/chunk-HIHGJ7MR.js", "/build/_shared/chunk-WRP3ACQR.js", "/build/_shared/chunk-LUSYK3CZ.js", "/build/_shared/chunk-2TIMM6ZT.js", "/build/_shared/chunk-ASAHQIIY.js", "/build/_shared/chunk-MUHQKUBK.js", "/build/_shared/chunk-VCOQBVSQ.js", "/build/_shared/chunk-POSAGPIB.js", "/build/_shared/chunk-2QJY4JOV.js"], hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "7e7d7dc8", hmr: { runtime: "/build/_shared\\chunk-2HZEM55C.js", timestamp: 1699931397542 }, url: "/build/manifest-7E7D7DC8.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public\\build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/accounts.$accountId.edit": {
    id: "routes/accounts.$accountId.edit",
    parentId: "routes/accounts.$accountId",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: accounts_accountId_edit_exports
  },
  "routes/expenses.$recordId.edit": {
    id: "routes/expenses.$recordId.edit",
    parentId: "routes/expenses",
    path: ":recordId/edit",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_recordId_edit_exports
  },
  "routes/accounts.$accountId": {
    id: "routes/accounts.$accountId",
    parentId: "routes/accounts",
    path: ":accountId",
    index: void 0,
    caseSensitive: void 0,
    module: accounts_accountId_exports
  },
  "routes/expenses.$expenseId": {
    id: "routes/expenses.$expenseId",
    parentId: "routes/expenses",
    path: ":expenseId",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_expenseId_exports
  },
  "routes/_public.settings": {
    id: "routes/_public.settings",
    parentId: "root",
    path: "settings",
    index: void 0,
    caseSensitive: void 0,
    module: public_settings_exports
  },
  "routes/accounts._index": {
    id: "routes/accounts._index",
    parentId: "routes/accounts",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: accounts_index_exports
  },
  "routes/expenses._index": {
    id: "routes/expenses._index",
    parentId: "routes/expenses",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: expenses_index_exports
  },
  "routes/_public._index": {
    id: "routes/_public._index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: public_index_exports
  },
  "routes/_public.about": {
    id: "routes/_public.about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: public_about_exports
  },
  "routes/_public.add": {
    id: "routes/_public.add",
    parentId: "root",
    path: "add",
    index: void 0,
    caseSensitive: void 0,
    module: public_add_exports
  },
  "routes/accounts": {
    id: "routes/accounts",
    parentId: "root",
    path: "accounts",
    index: void 0,
    caseSensitive: void 0,
    module: accounts_exports
  },
  "routes/expenses": {
    id: "routes/expenses",
    parentId: "root",
    path: "expenses",
    index: void 0,
    caseSensitive: void 0,
    module: expenses_exports
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
