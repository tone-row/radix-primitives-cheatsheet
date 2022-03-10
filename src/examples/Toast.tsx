import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

export default function App() {
  const [showToast, setShowToast] = useState(false);

  return (
    <Toast.Provider swipeDirection="right">
      <button onClick={() => setShowToast(true)}>Show 5 Second Toast</button>
      <Toast.Root open={showToast} onOpenChange={setShowToast}>
        <Toast.Title>Toast Title</Toast.Title>
        <Toast.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe porro eius harum, rem eos voluptatem? Labore ipsum sed cumque fuga, veniam perferendis quo accusamus esse ab illo sint reiciendis!</Toast.Description>
        <Toast.Action>Action</Toast.Action>
        <Toast.Close>Close</Toast.Close>
      </Toast.Root>
      <Toast.Viewport style={{ position: "fixed", bottom: 20, right: 20 }} />
    </Toast.Provider>
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
      editorHeight: 480,
      editorWidthPercentage: 60,
    }}
    customSetup={{
      dependencies: {
        "@radix-ui/react-toast": "latest",
      },
    }}
  />
);
export default Example;
