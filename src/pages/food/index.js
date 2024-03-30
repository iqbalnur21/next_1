import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function FoodList() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const resp = await axios.get(
        "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
        {
          headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
        }
      );
      setFoods(resp?.data?.data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      <p
        tabindex="0"
        className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800 my-12"
      >
        Dibimbing Food List
      </p>
      <div className="py-4 flex justify-evenly gap-4">
        <Link
          href={`/`}
          className="flex-1 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold rounded-lg leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 text-center"
        >
          <p className="text-base font-medium ml-4">Home</p>
        </Link>
        <Link
          href={`/food/create`}
          className="flex-1 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 text-sm font-semibold rounded-lg leading-none text-white focus:outline-none bg-green-700 border rounded hover:bg-green-600 py-4 text-center"
        >
          <p className="text-base font-medium ml-4">Create Food</p>
        </Link>
      </div>

      <ul className="mx-auto grid justify-center">
        {foods.map((food) => (
          <li className="mb-8">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={food.imageUrl}
                className="w-full h-auto"
                alt={food.name}
              ></img>
              <div className="px-6 py-4">
                <h5 className="text-xl font-bold mb-2 text-gray-900">
                  {food.name}
                </h5>
                <p className="text-gray-700 text-base">{food.description}</p>
                <div className="py-4 flex">
                  <Link
                    href={`/food/${food.id}`}
                    className="flex-1 focus:ring-2 focus:ring-offset-2 focus:ring-green-700 text-sm font-semibold rounded-lg leading-none text-white focus:outline-none bg-green-700 border rounded hover:bg-green-600 py-4 mr-2 text-center"
                  >
                    <p className="text-base font-medium ml-4">Detail</p>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
