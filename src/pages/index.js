import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Homepage() {
  return (
    <div>
      <p
        tabindex="0"
        className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
      >
        Welcome to Dibimbing Food
      </p>
      <p
        tabindex="0"
        className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
      >
        This is a Simple CRUD App with Next.js
      </p>
      <div className="mt-20 mb-10">
        <Link href={`/food`}>
          <button
            role="button"
            className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold rounded-lg leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
          >
            <p className="text-base font-medium ml-4">
              Explore Dibimbing Food List
            </p>
          </button>
        </Link>
      </div>
    </div>
  );
}
