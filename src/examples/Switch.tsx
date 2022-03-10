import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Switch from "@radix-ui/react-switch";
import { styled } from "@stitches/react";

const SwitchThumb = styled(Switch.Thumb, {
  width: "50%",
  background: "darkgrey",
  height: "100%",
  display: "block",
  position: "absolute",
  top: 0,
  left: 0,
  "&[data-state=checked]": {
    left: "50%",
  }
});

export default function App() {
  return (
    <Switch.Root style={{ width: 60, height: 30, position: "relative" }}>
      <SwitchThumb />
    </Switch.Root>
  );
}
`;

const Example = () => (
  <CustomSandpack
    files={{
      "/App.js": prettier.format(code.trim(), {
        parser: "babel",
        plugins: [babel],
      }),
    }}
    options={{
      editorHeight: 400,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-switch": "latest",
        "@stitches/react": "latest",
      },
    }}
  />
);
export default Example;
