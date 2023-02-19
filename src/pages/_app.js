import '@/styles/globals.css'
import Layout from '@/components/layout'

function MyApp({ Component, pageProps }) {
 
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </>
  )
}
export default MyApp
