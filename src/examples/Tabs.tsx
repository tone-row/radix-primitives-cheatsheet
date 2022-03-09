import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Tabs from "@radix-ui/react-tabs";

export default function App() {
  return (
    <Tabs.Root defaultValue="One">
    <Tabs.List>
      <Tabs.Trigger value="One">One</Tabs.Trigger>
      <Tabs.Trigger value="Two">Two</Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content value="One">I am "One" content</Tabs.Content>
    <Tabs.Content value="Two">I am "Two" content</Tabs.Content>
  </Tabs.Root>
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
        "@radix-ui/react-tabs": "latest",
      },
    }}
  />
);
export default Example;
