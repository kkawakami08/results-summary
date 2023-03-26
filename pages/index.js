import Head from "next/head";
import Header from "@/components/Header";
import SummaryPoints from "@/components/SummaryPoints";
import testResults from "../data.js";

export default function Home() {
  function findResults() {
    let sum = 0;
    testResults.map((item) => (sum += item.score));
    return Math.round((sum / 400) * 100);
  }

  let results = findResults(testResults);

  return (
    <>
      <Head>
        <title>Results Summary Component</title>
      </Head>
      <main className="h-screen bg-white flex flex-col items-center">
        <Header testResults={results} />

        <div className="w-5/6 flex flex-col gap-4 py-5">
          <h1 className="font-extrabold text-2xl text-darkGrayBlue">Summary</h1>
          <SummaryPoints data={testResults[0]} />
          <SummaryPoints data={testResults[1]} />
          <SummaryPoints data={testResults[2]} />
          <SummaryPoints data={testResults[3]} />
          <button className="bg-darkGrayBlue hover:bg-gradient-to-b hover:from-headerLight hover:to-headerDark text-white py-5 rounded-full font-medium text-lg">
            Continue
          </button>
        </div>
      </main>
    </>
  );
}
