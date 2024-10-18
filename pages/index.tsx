'use client'

import Layout from '@/app/layout/Layout'
import { MainIndexContextProvider } from '@/context/MainIndexContext'
import IndexView from '@/views/IndexView/IndexView'

export default function App() {
  return (
    <Layout>
      <MainIndexContextProvider>
        <IndexView />
      </MainIndexContextProvider>
    </Layout>
  )
}
