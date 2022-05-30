import MainLayout from "@layout/MainLayout";
import "@styles/tailwind.css";
import LoginPage from "components/LoginPage";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
    <LoginPage></LoginPage>
      <Component {...pageProps} />;
    </MainLayout>
  );
}

export default MyApp;
