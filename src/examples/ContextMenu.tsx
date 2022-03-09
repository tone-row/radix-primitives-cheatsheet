import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as ContextMenu from "@radix-ui/react-context-menu";

export default function App() {
  return (
    <ContextMenu.Root>
    <ContextMenu.Trigger>Right-click this text to open a Context Menu</ContextMenu.Trigger>
    <ContextMenu.Content style={{backgroundColor:"white"}}>
      <ContextMenu.Label>Items Label</ContextMenu.Label>
      <ContextMenu.Item>Item One</ContextMenu.Item>
      <ContextMenu.Item>Item Two</ContextMenu.Item>
      <ContextMenu.Item>Item Three</ContextMenu.Item>
      <ContextMenu.Separator style={{height: '1px', backgroundColor: 'black'}} />
      <ContextMenu.Label>Items Label</ContextMenu.Label>
      <ContextMenu.Item>Item Four</ContextMenu.Item>
      <ContextMenu.Item>Item Five</ContextMenu.Item>
      <ContextMenu.Item>Item Six</ContextMenu.Item>
    </ContextMenu.Content>
  </ContextMenu.Root>
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
      editorHeight: 450,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-context-menu": "latest",
      },
    }}
  />
);
export default Example;
