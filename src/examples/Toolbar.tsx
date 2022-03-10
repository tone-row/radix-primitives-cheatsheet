export * from "@radix-ui/react-toolbar";

import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Toolbar from "@radix-ui/react-toolbar";

export default function App() {
  return (
    <Toolbar.Root style={{display: "flex"}}>
          <Toolbar.Button>Toolbar Button</Toolbar.Button>
          <Toolbar.Separator />
          <Toolbar.Link>Some Link</Toolbar.Link>
          <Toolbar.ToggleGroup type="single">
            <Toolbar.ToggleItem value="a">Item A</Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="b">Item B</Toolbar.ToggleItem>
            <Toolbar.ToggleItem value="c">Item C</Toolbar.ToggleItem>
          </Toolbar.ToggleGroup>
        </Toolbar.Root>
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
        "@radix-ui/react-toolbar": "latest",
      },
    }}
  />
);
export default Example;
