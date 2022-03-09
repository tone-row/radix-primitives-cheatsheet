import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Label from "@radix-ui/react-label";

export default function App() {
  return (
    <Label.Root htmlFor="firstName">
          First Name <input id="firstName" type="text" defaultValue="Robert" />
        </Label.Root>
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
        "@radix-ui/react-label": "latest",
      },
    }}
  />
);
export default Example;
