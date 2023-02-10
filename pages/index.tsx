import Head from "next/head";


export default function Home() {
  return (
    <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">
      <Head>
        <title>Quiz App</title>
      </Head>

      <div className="flex flex-col items-start w-full">
        <h4 className="mt-10 text-xl text-white/60">Question 1 of 5</h4>
        <div className="mt-4 text-2xl text-white">
          What type of framework is Next.js?
        </div>
      </div>

      <div className="flex justify-between w-full mt-4 text-white">
        <button className="w-[49%] py-3 bg-indigo-600 rounded-lg">Previous</button>
        <button className="w-[49%] py-3 bg-indigo-600 rounded-lg">Next</button>
      </div>
      
    </div>

  )
}