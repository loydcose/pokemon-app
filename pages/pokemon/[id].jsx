/* eslint-disable @next/next/no-img-element */
import HeadDoc from "../../components/Head"
import typeColor from "../../utils/typeColor"

export async function getServerSideProps({ params }) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  const data = await response.json()

  return {
    props: { pokemon: data },
  }
}

export default function Details({ pokemon }) {
  return (
    <>
      <HeadDoc title={`Pokemon App | ${pokemon.name}`} />

      <div className="bg-white p-4 md:p-8 m-auto max-w-[300px] mx-auto w-[90%]">
        <div className="w-full">
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt=""
            className="mx-auto"
          />
        </div>
        <div>
          <h2 className="text-center font-bold mt-6">{pokemon.name}</h2>
          <div className="flex items-center gap-2 justify-center">
            {pokemon.types.map((type, index) => {
              const textColor = typeColor(type.type.name)
              return (
                <span
                  key={index}
                  style={{ backgroundColor: textColor }}
                  className="text-white p-1"
                >
                  {type.type.name}
                </span>
              )
            })}
          </div>
          <div className="mt-8">
            <p>Id: {pokemon.id}</p>
            {pokemon.stats.map((stat, index) => {
              const name =
                stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)

              return (
                <p key={index}>
                  {name}: {stat.base_stat}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
