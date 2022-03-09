import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as AlertDialog from '@radix-ui/react-alert-dialog';

export default function App() {
  return (<AlertDialog.Root>
  <AlertDialog.Trigger>Click Me</AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Overlay
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.5)",
      }}
    />
    <AlertDialog.Content
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
      }}
    >
      <AlertDialog.Title>Hello World</AlertDialog.Title>
      <AlertDialog.Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
        exercitationem animi qui laudantium cum accusamus nulla nostrum.
        Quisquam natus voluptatibus rem laudantium accusamus, magnam
        atque quasi sunt officia quaerat ullam!
      </AlertDialog.Description>
      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
      <AlertDialog.Action>OK</AlertDialog.Action>
    </AlertDialog.Content>
  </AlertDialog.Portal>
  </AlertDialog.Root>)
}`;

const Example = () => (
  <CustomSandpack
    files={{
      "/App.js": prettier.format(code.trim(), {
        parser: "babel",
        plugins: [babel],
      }),
    }}
    options={{
      editorHeight: 420,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-alert-dialog": "latest",
      },
    }}
  />
);
export default Example;
