import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Toggle from "@radix-ui/react-toggle";
import { styled } from "@stitches/react";

const ToggleRoot = styled(Toggle.Root, {
  '&[aria-pressed=true]': {
    fontWeight: "bold",
    fontSize: "1.2em",
  }
});

export default function App() {
  return (
    <ToggleRoot>This is a toggle</ToggleRoot>
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
      editorHeight: 620,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-toggle": "latest",
        "@stitches/react": "latest",
      },
    }}
  />
);
export default Example;
