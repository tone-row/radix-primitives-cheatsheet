import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Collapsible from "@radix-ui/react-collapsible";

export default function App() {
  return (
    <Collapsible.Root>
          <Collapsible.Trigger>Collapsible Trigger</Collapsible.Trigger>
          <Collapsible.Content>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi temporibus, magni enim aspernatur repudiandae consequatur recusandae illo labore deleniti a necessitatibus aliquam ipsum. Molestias consequatur ut maiores veritatis. Voluptatum, optio.</Collapsible.Content>
        </Collapsible.Root>
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
        "@radix-ui/react-collapsible": "latest",
      },
    }}
  />
);
export default Example;
