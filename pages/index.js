import Head from "next/head";
import Header from "@/components/Header";
import SummaryPoints from "@/components/SummaryPoints";

export default function Home() {
  return (
    <>
      <Head>
        <title>Results Summary Component</title>
      </Head>
      <main className="h-screen bg-purple-900 ">
        <Header />
        <h1>Summary</h1>
        <SummaryPoints />
        <SummaryPoints />
        <SummaryPoints />
        <SummaryPoints />
        <button>Continue</button>
      </main>
    </>
  );
}
