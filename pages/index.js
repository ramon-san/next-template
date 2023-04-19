import MetaHead from '@/components/meta-head'

export default function Home() {
  return (
    <>
      <MetaHead title="Home Page" />
      <main>
        <div>
          <h1 className="text-center text-4xl font-bold m-5">Home Page</h1>
          <p className="text-center m-2"><i>Synapzi</i> basic template &rarr; Edit to get started!</p>
        </div>
      </main>
    </>
  )
}
