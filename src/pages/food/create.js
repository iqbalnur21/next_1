import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

export default function CreateFood({ food }) {
  const router = useRouter();
  const handleCreate = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const imageUrl = formData.get("imageUrl");
    const description = formData.get("description");
    const ingredients = formData.get("ingredients").split(",");

    await axios.post(
      `https://api-bootcamp.do.dibimbing.id/api/v1/create-food`,
      {
        name,
        imageUrl,
        description,
        ingredients,
      },
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
    );

    await new Promise(async (resolve) => {
      await router.push("/food");
      router.reload();
      resolve();
    });
  };
  return (
    <div>
    <p
      tabindex="0"
      className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 my-12"
    >
      Create New Food
    </p>
      <Link href={`/food`}>
        <button className="mb-4 flex-1 focus:ring-2 focus:ring-offset-2 focus:ring-red-700 text-sm font-semibold rounded-lg leading-none text-white focus:outline-none bg-red-700 border rounded hover:bg-red-600 py-2 text-center">
          <p className="text-base font-medium mx-4">Back</p>
        </button>
      </Link>
      <form onSubmit={handleCreate}>
        <div className="mb-4 ">
          <label className="text-sm font-medium leading-none text-gray-800">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          />
        </div>
        <div className="mb-4 ">
          <label className="text-sm font-medium leading-none text-gray-800">
            Image URL
          </label>
          <input
            name="imageUrl"
            type="text"
            className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          />
        </div>
        <div className="mb-4 ">
          <label className="text-sm font-medium leading-none text-gray-800">
            Ingredients
          </label>
          <input
            name="ingredients"
            type="text"
            className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
          />
        </div>
        <div className="mb-4 ">
          <label className="text-sm font-medium leading-none text-gray-800">
            Description
          </label>
          <textarea
            name="description"
            type="text"
            className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            style={{ height: "100px" }}
          ></textarea>
        </div>

        <button
          type="submit"
          className="flex-1 w-full focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold rounded-lg leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 text-center"
        >
          <p className="text-base font-medium ml-4">Create</p>
        </button>
      </form>
    </div>
  );
}
