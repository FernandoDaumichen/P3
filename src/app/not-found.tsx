import Image from "next/image";

export default function NotFound() {
  return (
    <main className="text-center mt-20 h-screen w-screen">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
        404 - Not Found
      </h1>
      <div className="flex items-center justify-center">
        <h2 className="text-6xl font-bold mr-1  text-black dark:text-white ">
          4
        </h2>
        <div className="relative w-64 h-64">
          <Image
            src="/images/404.gif"
            alt="404 - Not Found"
            layout="fill"
            objectFit="contain"
            className="mx-auto"
          />
        </div>
        <h2 className="text-6xl font-bold ml-1  text-black dark:text-white ">
          4
        </h2>
      </div>
      <p className="text-lg mt-4 font-serif  text-black dark:text-white ">
        Sorry, we couldn&apos;t find this page.
      </p>
    </main>
  );
}
