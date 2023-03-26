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
      <main className="h-screen bg-white flex flex-col items-center lg:flex-row lg:w-3/5 lg:mx-auto lg:justify-center ">
        <Header testResults={results} />

        <div className="w-5/6 flex flex-col gap-4 py-5 lg:px-7 lg:rounded-r-3xl lg:shadow-md lg:w-3/4  lg:h-3/5 lg:justify-center">
          <h1 className="font-extrabold text-2xl text-darkGrayBlue">Summary</h1>
          <SummaryPoints data={testResults[0]} />
          <SummaryPoints data={testResults[1]} />
          <SummaryPoints data={testResults[2]} />
          <SummaryPoints data={testResults[3]} />
          <button className="bg-darkGrayBlue hover:bg-gradient-to-b hover:from-headerLight hover:to-headerDark text-white py-5 rounded-full font-medium text-lg lg:py-3">
            Continue
          </button>
        </div>
      </main>
    </>
  );
}
