import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Avatar from "@radix-ui/react-avatar";

export default function App() {
  return (
    <Avatar.Root>
    <Avatar.Image src="http://placekitten.com/100/100" style={{borderRadius: "50%"}} />
    <Avatar.Fallback>Kitten</Avatar.Fallback>
  </Avatar.Root>
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
      editorHeight: 320,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-avatar": "latest",
      },
    }}
  />
);
export default Example;
