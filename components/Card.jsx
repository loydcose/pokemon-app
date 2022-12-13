/* eslint-disable @next/next/no-img-element */
import Link from "next/link"

const Card = ({ pokemon }) => {
  return (
    <Link href={`/pokemon/${pokemon.id}`} className="bg-white p-4">
      <div className="aspect-square">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-center mt-2">{pokemon.name}</p>
    </Link>
  )
}

export default Card
