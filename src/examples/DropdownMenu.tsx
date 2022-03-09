import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function App() {
  return (
    <DropdownMenu.Root>
          <DropdownMenu.Trigger>Open Dropdown Menu</DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Item 1</DropdownMenu.Item>
            <DropdownMenu.Item>Item 2</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
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
        "@radix-ui/react-dropdown-menu": "latest",
      },
    }}
  />
);
export default Example;
