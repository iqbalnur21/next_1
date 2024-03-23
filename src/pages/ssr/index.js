import axios from "axios";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const resp = await axios.get(
    "https://api-bootcamp.do.dibimbing.id/api/v1/foods",
    {
      headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
    }
  );
  return {
    props: {
      foods: resp?.data?.data,
    },
  };
}
export default function Homepage({ foods }) {
  return (
    <ul className="mx-auto grid justify-center">
      {foods.map((food) => (
        <li className="mb-8">
          <img src={food.imageUrl} className="w-96 object-cover aspect-video" />
          <h1 className="w-96 text-2xl font-bold text-center">{food.name}</h1>
          <p className="w-96 text-lg font-light text-justify">
            {food.description}
          </p>
        </li>
      ))}
    </ul>
  );
}
