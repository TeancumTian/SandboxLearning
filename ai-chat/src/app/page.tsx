import Image from "next/image";

import { lusitana } from './ui/fonts';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
        <div className="bg-orange-300 rounded-md p-6 mb-8 inline-flex">
          <h1 className={`${lusitana.className} text-4xl border-4 border-solid rounded-full font-bold p-4 mx-auto bg-gray-200`}>
            Welcome to our AI Chatbot
          </h1>
        </div>

      <Link 
        href="/aichat"
        className="flex items-center mx-auto justify-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base mb-10"
        >
        <span>Let's Chat</span>
      </Link>

      <p className="flex border-2 rounded-sm">
        We are a team of developers who are passionate about AI and chatbots.
        Please, click on the button above to start chatting with our AI chatbot!
        We know that you will love it!
      </p>
    </main>
  );
}
