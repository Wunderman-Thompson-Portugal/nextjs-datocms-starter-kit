import '../styles/index.css'
//import '@/styles/index.scss'
import MainLayout from '@/components/Templates/Main'
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>

  )
}

export default appWithTranslation(MyApp);
