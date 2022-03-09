import { CustomSandpack } from "../components/CustomSandpack";
import babel from "prettier/parser-babel";
import prettier from "prettier/standalone";

const code = `import * as Toast from "@radix-ui/react-toast";
import {useState} from 'react';

function Example() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
    <button onClick={() => setShowToast(true)}>Show Toast</button>
        <Toast.Root open={showToast} onOpenChange={setShowToast}>
          <Toast.Title>Title</Toast.Title>
          <Toast.Description>Description</Toast.Description>
          <Toast.Action altText="This is the meaning of this toast" />
          <Toast.Close>Close</Toast.Close>
        </Toast.Root>
    </div>
  );
}

export default function App() {
  return (
    <Toast.Provider swipeDirection="right">
    <Example />
<Toast.Viewport />
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
      editorHeight: 620,
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
