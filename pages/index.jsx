/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useState } from "react"
import Card from "../components/Card"
import HeadDoc from "../components/Head"
import { homeProps } from "../props/homeProps"
import style from "../styles/Home.module.css"
import useSearch from "../hooks/useSearch"

export async function getServerSideProps() {
  // external file SSR
  return homeProps()
}

export default function Home({ data }) {
  const [pokemons, setPokemons] = useState(data)
  const [search, setSearch] = useState("")
  // custom hook for searching pokemon
  const { loading, notFound } = useSearch(search, setPokemons)

  return (
    <>
      <HeadDoc />
      <section className="mx-auto w-[90%] max-w-[726px] py-8 md:py-16">
        <a
          href="/"
          className="block mx-auto w-fit text-3xl md:text-4xl mb-2 md:mb-6 font-bold"
        >
          Pokemon
        </a>
        <input
          type="text"
          placeholder="Search pokemon (ex. 256)"
          className="p-2 rounded w-full max-w-[500px] mx-auto block mb-4 md:mb-8 outline-none focus:ring-2 focus:ring-violet-600"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {notFound && <p className="text-center">Not Found!</p>}
        {loading && <div className={style.spinner + " mx-auto my-16"}></div>}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pokemons.map((pokemon) => {
            return <Card key={pokemon.id} pokemon={pokemon} />
          })}
        </div>
      </section>
    </>
  )
}
