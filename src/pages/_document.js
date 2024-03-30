import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="h-full bg-gradient-to-tl from-green-400 to-indigo-900 w-full py-16 px-4">
          <div className="flex flex-col items-center justify-center pb-16 lg:pb-32">
            <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
              <div className="flex justify-center mb-8">
                <Link href={`/food`}>
                  <img
                    src="https://png.pngtree.com/png-vector/20220708/ourmid/pngtree-fast-food-logo-png-image_5763171.png"
                    alt="Logo"
                    className="w-40 h-30"
                  ></img>
                </Link>
              </div>
              <Main />
              <NextScript />
            </div>
          </div>
        </div>
      </body>
    </Html>
  );
}
