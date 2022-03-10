import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Select from "@radix-ui/react-select";

export default function App() {
  return (
    <Select.Root defaultValue="Hello World">
    <Select.Trigger aria-label="Options">
      <Select.Value />
      <Select.Icon style={{fontFamily: "sans-serif" }} />
    </Select.Trigger>
    <Select.Content style={{background: "white"}}>
      <Select.ScrollUpButton />
      <Select.Viewport>
        <Select.Item value="Hello World">
          <Select.ItemText>Hello World</Select.ItemText>
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Item value="Goodbye World">
          <Select.ItemText>Goodbye World</Select.ItemText>
          <Select.ItemIndicator />
        </Select.Item>
        <Select.Separator />
      </Select.Viewport>
      <Select.ScrollDownButton />
    </Select.Content>
  </Select.Root>
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
      editorHeight: 500,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-select": "latest",
      },
    }}
  />
);
export default Example;
