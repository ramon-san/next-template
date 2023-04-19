import MetaHead from '@/components/meta-head'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <MetaHead title="Home Page" />
      <main>
        <div>
          <h1>Home Page</h1>
          <p><i>Synapzi</i> basic template &rarr; Edit to get started!</p>
        </div>
      </main>
    </>
  )
}
