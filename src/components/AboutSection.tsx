import questionData from "@/lib/questionData";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="flex w-screen h-screen">
      <div className="text-center">
        <div className="m-20">
          <h1 className="font-extrabold text-6xl mt-10 mb-4">
            Devil&apos;s Advocate
          </h1>
          <p className="w-1/2 mx-auto">
            As Americans we are a very diverse set of people, not only in
            external factors, but internal factors as well. We have many
            differing opinions, often those of which can cause divide amongst us
            in society. This web application is called Devil&apos;s Advocate,
            and we would like to provide those who want to learn more about
            others an opportunity to do so.
          </p>
          <h1 className="text-3xl mt-8 mb-3">How it works?</h1>
          <p className="w-1/2 mx-auto">
            We will provide you with a series of questions &amp; after you will
            be allowed to guess what percentage of people picked each answer.
            But please don&apos;t be surprised if the questions are a little
            controversatial, because that is the point. There would be no fun if
            we were here to ask the most mundane questions. If you would like to
            start, please pick a topic that you would like to start with.
          </p>
        </div>
        <div className="flex flex-wrap">
          {questionData.map((questionSet, index) => (
            <div
              key={index}
              className="border rounded-xl mx-auto p-5 transition duration-300 hover:bg-red-600"
            >
              <Link href={`/${questionSet.topic}/`}>
                <h1>{questionSet.topic}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
