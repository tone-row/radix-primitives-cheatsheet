import "./App.css";
import "@codesandbox/sandpack-react/dist/index.css";

import { NavLink, useLocation } from "react-router-dom";
import {
  ReactElement,
  ReactNode,
  Suspense,
  lazy,
  useEffect,
  useState,
} from "react";

import ReactDOM from "react-dom";

const examples = [
  "Accordion",
  "AlertDialog",
  "AspectRatio",
  "Avatar",
  "Checkbox",
  "Collapsible",
  "ContextMenu",
  "Dialog",
  "DropdownMenu",
  "HoverCard",
  "Label",
  "NavigationMenu",
  "Popover",
  "Progress",
  "RadioGroup",
  "ScrollArea",
  "Select",
  "Separator",
  "Slider",
  "Switch",
  "Tabs",
  "Toast",
  "Toggle",
  "ToggleGroup",
  "Toolbar",
  "Tooltip",
];

const importExample = (name: string) =>
  lazy(() => import(`./examples/${name}.tsx`));

function App() {
  const [example, setExample] = useState<ReactElement>(() => <>{null}</>);
  const location = useLocation();
  const hash = location.pathname.slice(1);
  useEffect(() => {
    async function loadExample() {
      const Example = importExample(hash);
      setExample(<Example />);
    }
    if (hash) {
      loadExample();
    }
  }, [hash]);
  useEffect(() => {
    if (hash === "") {
      // push to random example
      window.location.hash =
        "/" + examples[Math.floor(Math.random() * examples.length)];
    }
  }, []);
  const documentationUrl = `https://www.radix-ui.com/docs/primitives/components/${hash
    .replaceAll(/[A-Z]/g, (c) => `-${c.toLowerCase()}`)
    .slice(1)}`;
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <h1>Radix Primitives Cheatsheet</h1>
          <a href="https://www.radix-ui.com/" className="offsite-link">
            {"https://www.radix-ui.com/"}
          </a>
        </div>
        <nav>
          <ul>
            {examples.map((example) => (
              <li key={example}>
                <NavLink to={`${example}`}>{example}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <div className="example-title">
          <h2>{hash}</h2>
          <a href={documentationUrl} className="offsite-link" target="_blank">
            {documentationUrl}
          </a>
        </div>
        <Suspense fallback={<div>Loading...</div>}>{example}</Suspense>
      </main>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${
            import.meta.env.VITE_GOOGLE_ANALYTICS_ID
          }`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${import.meta.env.VITE_GOOGLE_ANALYTICS_ID}');`,
          }}
        />
      </Head>
    </div>
  );
}

export default App;

function Head({ children }: { children: ReactNode }) {
  if (!document.head) return null;
  return ReactDOM.createPortal(children, document.head);
}
