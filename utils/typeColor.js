const types = [
  ["grass", "#78C850"],
  ["rock", "#B8A037"],
  ["ice", "#98D8D8"],
  ["dragon", "#7038F8"],
  ["dark", "#705848"],
  ["psychic", "#F85888"],
  ["bug", "#A7B81F"],
  ["flying", "#A890F0"],
  ["steel", "#B8B8D0"],
  ["fire", "#F08030"],
  ["fighting", "#C03028"],
  ["ground", "#DEC87B"],
  ["ghost", "#705898"],
  ["poison", "#A0409F"],
  ["water", "#6890F0"],
  ["fairy", "#DEA5DE"],
  ["electric", "#F7D030"],
  ["normal", "#A7A878"],
]

const typeColor = (type) => {
  let color = null

  // return color(hex) base on the pokemon type
  for (let i = 0; i < types.length; i++) {
    if (types[i][0] === type) color = types[i][1]
  }
  return color
}

export default typeColor
