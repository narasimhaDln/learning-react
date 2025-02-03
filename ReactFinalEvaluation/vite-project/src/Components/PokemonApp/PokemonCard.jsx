import"../../Styles/pokemon.css"
function PokemonCard({pokemon}) {
  return (
    <div className="pokemon-card">
        <h3>{pokemon.name.toUpperCase()}</h3>
        <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        <p>ID:{pokemon.id}</p>
        <p>Types:{pokemon.types.map(t=>t.type.name).join(", ")}</p>
        <p>Abilities:{pokemon.abilities.map(a=>a.ability.name).join(", ")}</p>
    </div>
  )
}

export default PokemonCard