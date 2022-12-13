export async function homeProps() {
  // amount of pokemons/cards to be fetch at the start
  const quantity = 25
  const urls = []

  // push generated url
  for (let i = 0; i < quantity; i++) {
    urls.push(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
  }

  // fetch them one by one
  const pokemons = await Promise.all(
    urls.map(async (url) => {
      const response = await fetch(url)
      const data = await response.json()
      return data
    })
  )

  return {
    props: { data: pokemons },
  }
}
