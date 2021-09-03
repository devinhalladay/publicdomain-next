import Head from "next/head";
import Image from "next/image";
import { ArrowRight } from "phosphor-react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="max-w-screen-2xl m-auto px-16 pb-16">
      <section className="grid grid-cols-12 gap-5">
        <div className="col-span-12 pb-6">
          <h1 className="text-5xl uppercase font-narrow">Investigate</h1>
        </div>
        <div className="col-span-4 border-t transition-all border-gray-400 hover:px-3 hover:bg-gray-100">
          <a href="">
            <div className="pt-2 mb-2 text-gray-500 flex items-center">
              <p className="mr-1 uppercase">Browse the Library</p>
              <ArrowRight size={16} />
            </div>
            <h2 className="pb-2 text-3xl font-light">Library</h2>
          </a>
          <a href="">
            <div className="w-full h-80 inline-block relative">
              <Image
                src="https://source.unsplash.com/random"
                layout="fill"
                objectFit="cover"
                alt=""
                className="w-full relative"
              />
            </div>
            <p className="text-2xl">Example Resource</p>
          </a>
        </div>
        <div className="col-span-4 border-t transition-all border-gray-400 hover:px-3 hover:bg-gray-100">
          <a href="">
            <div className="pt-2 mb-2 text-gray-500 flex items-center">
              <p className="mr-1 uppercase">Read Journals</p>
              <ArrowRight size={16} />
            </div>
            <h2 className="pb-2 text-3xl font-light">Journals</h2>
          </a>
          <a href="">
            <div className="w-full h-80 inline-block relative">
              <Image
                src="https://source.unsplash.com/random"
                layout="fill"
                objectFit="cover"
                alt=""
                className="w-full relative"
              />
            </div>
            <p className="text-2xl">Example Article</p>
          </a>
        </div>
        <div className="col-span-4 border-t transition-all border-gray-400 hover:px-3 hover:bg-gray-100">
          <a href="">
            <div className="pt-2 mb-2 text-gray-500 flex items-center">
              <p className="mr-1 uppercase">Browse the Works</p>
              <ArrowRight size={16} />
            </div>
            <h2 className="pb-2 text-3xl font-light">Works</h2>
          </a>
          <a href="">
            <div className="w-full h-80 inline-block relative">
              <Image
                src="https://source.unsplash.com/random"
                layout="fill"
                objectFit="cover"
                alt=""
                className="w-full relative"
              />
            </div>
            <p className="text-2xl">Example Project</p>
          </a>
        </div>
      </section>
    </div>
  );
}
