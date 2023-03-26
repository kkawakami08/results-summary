import Head from "next/head";
import Header from "@/components/Header";
import SummaryPoints from "@/components/SummaryPoints";

export default function Home() {
  return (
    <>
      <Head>
        <title>Results Summary Component</title>
      </Head>
      <main className="h-screen bg-white flex flex-col items-center">
        <Header />

        <div className="w-5/6 flex flex-col gap-4 py-5">
          <h1 className="font-extrabold text-2xl text-darkGrayBlue">Summary</h1>
          <SummaryPoints />
          <SummaryPoints />
          <SummaryPoints />
          <SummaryPoints />
          <button className="bg-darkGrayBlue text-white py-5 rounded-full font-medium text-lg">
            Continue
          </button>
        </div>
      </main>
    </>
  );
}
