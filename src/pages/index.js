import axios from "axios";
import { useEffect, useState } from "react";
export default function Homepage() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const resp = await axios.get(
        "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
        {
          headers: { apiKey: "w®5KkI9AWhKxzvPFtXotUva-" },
        }
      );
      setFoods(resp?.data?.data);
      setLoading(false);
    };
    getData();
  }, []);
  if (loading) return <div>Loading...</div>;
  return (
    <ul className="mx-auto grid justify-center">
      {foods.map((food) => (
        <li className="mb-8">
          <img src={food.imageUrl} className="w-96 object-cover aspect-video" />
        </li>
      ))}
    </ul>
  );
}
