import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ContactDetailPage from "./pages/ContactDetailPage";
import CreateEditPage from "./pages/CreateEditPage";
import NotFoundPage from "./pages/NotFoundPage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// 🔥 Central Query Client (production optimized)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5, // 5 min cache (important for UX)
      gcTime: 1000 * 60 * 10, // garbage collection
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Theme system */}
      <ThemeProvider>
        {/* Router */}
        <Router>
          {/* Global Toast System */}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                borderRadius: "12px",
                fontSize: "14px",
              },
            }}
          />

          {/* App Routes */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/contact/:id" element={<ContactDetailPage />} />
              <Route path="/create" element={<CreateEditPage />} />
              <Route path="/edit/:id" element={<CreateEditPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Router>

        {/* Devtools (ONLY development use) */}
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
