import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Interceptor } from "./components/interceptor/interceptor.tsx";
import { ErrorBoundary } from "./components/errorBoundary/ErrorBoundary.tsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  // <NextUIProvider>
  <Interceptor>
    <ErrorBoundary>
      <>
        <App />
        <Toaster position="top-right" />
      </>
    </ErrorBoundary>
  </Interceptor>
  // </NextUIProvider>
  // </React.StrictMode>
);
