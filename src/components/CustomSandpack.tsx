import {
  Sandpack,
  SandpackProps,
  githubLightTheme,
} from "@codesandbox/sandpack-react";

export const CustomSandpack = ({
  files = {},
  options = {},
  customSetup = {},
}: SandpackProps) => (
  <Sandpack
    theme={{
      ...githubLightTheme,
      typography: {
        fontSize: "14px",
        bodyFont: "Space Mono",
      },
    }}
    template="react"
    files={{
      "/styles.css": `html,body,#root {
      height: 100%;
    } body {margin: 0;}`,
      ...files,
    }}
    options={{
      editorHeight: 620,
      editorWidthPercentage: 60,
      showTabs: false,
      ...options,
    }}
    customSetup={customSetup}
  />
);
