import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { styled } from "@stitches/react";

const ToggleGroupItem = styled(ToggleGroup.Item, {
  '&[aria-pressed=true]': {
    fontWeight: "bold",
    fontSize: "1.2em",
  }
});

export default function App() {
  return (
    <ToggleGroup.Root type="multiple" defaultValue={["a", "c"]}>
          <ToggleGroupItem value="a">Item A</ToggleGroupItem>
          <ToggleGroupItem value="b">Item B</ToggleGroupItem>
          <ToggleGroupItem value="c">Item C</ToggleGroupItem>
        </ToggleGroup.Root>
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
        "@radix-ui/react-toggle-group": "latest",
        "@stitches/react": "latest",
      },
    }}
  />
);
export default Example;
