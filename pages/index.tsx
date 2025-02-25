import MetaHead from '@/components/MetaHead';

export default function Home() {
  return (
    <>
      <MetaHead />
      <div>
        <h1 className="text-center text-4xl font-bold m-5">Home Page</h1>
        <p className="text-center m-2">
          <i>Synapzi</i> basic template &rarr; Edit to get started!
        </p>
      </div>
    </>
  );
}
