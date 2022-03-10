import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export default function App() {
  return (
    <NavigationMenu.Root>
          <NavigationMenu.List>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger>Trigger</NavigationMenu.Trigger>
              <NavigationMenu.Content>
                  <NavigationMenu.List>
                    <NavigationMenu.Item>
                      <NavigationMenu.Link>Item 1</NavigationMenu.Link>
                    </NavigationMenu.Item>
                  </NavigationMenu.List>
              </NavigationMenu.Content>
            </NavigationMenu.Item>
            <NavigationMenu.Indicator />
          </NavigationMenu.List>
          <NavigationMenu.Viewport />
        </NavigationMenu.Root>
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
        "@radix-ui/react-navigation-menu": "latest",
      },
    }}
  />
);
export default Example;
