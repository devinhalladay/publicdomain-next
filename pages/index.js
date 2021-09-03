import Head from "next/head";
import Image from "next/image";
import { ArrowRight } from "phosphor-react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Public Domain</title>
      </Head>
      <div className="max-w-screen-2xl m-auto px-16 mb-24">
        <section className="grid grid-cols-12 gap-5">
          <div className="col-span-12 pb-6">
            <h1 className="text-5xl uppercase font-narrow font-light">
              Investigate
            </h1>
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
      <div className="max-w-screen-2xl m-auto px-16 mb-24">
        <section className="grid grid-cols-12 gap-5">
          <div className="col-span-12 pb-4 border-b border-gray-300">
            <h3 className="text-5xl uppercase font-narrow font-light">
              Explore the Library
            </h3>
          </div>
          <div className="col-span-12 pb-4 flex">
            <button
              className="flex-grow text-2xl uppercase p-2 text-center text-white mr-5"
              style={{ backgroundColor: "#19cf4c" }}
            >
              Browse the Collection
            </button>
            <input
              type="text"
              placeholder="Search by keyword, title, or author"
              className="p-2 flex-grow text-2xl text-gray-500 border border-gray-300"
            />
          </div>
          <div className="col-span-12 pb-4">
            <h4 className="uppercase text-2xl mb-4 font-thin font-narrow border-b border-black">
              Featured Collections
            </h4>
            <div className="flex">
              <button className="flex-grow text-2xl uppercase p-2 text-center border border-black mr-5">
                Gilles Deleuze
              </button>
              <button className="flex-grow text-2xl uppercase p-2 text-center border border-black mr-5">
                Expressive Computing
              </button>
              <button className="flex-grow text-2xl uppercase p-2 text-center border border-black mr-5">
                Deconstruction
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
