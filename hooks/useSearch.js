import { useEffect, useState } from "react"

const useSearch = (search, setPokemons) => {
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    try {
      if (!search) return

      // fetch pokemon base on the value
      setLoading(true)
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      )
      const data = await response.json()
      setNotFound(false)

      // assigning newly search pokemon
      setPokemons([data])
    } catch (err) {
      console.log(err.message)
      setNotFound(true)
      setPokemons([])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // applying debounce to avoid many requests
    const milliSeconds = 1000
    const delay = setTimeout(() => {
      handleSearch()
    }, milliSeconds)
    return () => clearTimeout(delay)
  }, [search])

  return { loading, notFound }
}

export default useSearch
