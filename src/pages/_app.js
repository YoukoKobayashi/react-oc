import '@/styles/globals.css'
import Layout from '@/components/layout'
import ScrollCatch from '@/components/scrollCatch'

function MyApp({ Component, pageProps }) {
 
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </>
  )
}
export default MyApp
