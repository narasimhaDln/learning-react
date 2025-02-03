import { useEffect, useState } from "react"
import useDebounce from "./Hooks/useDebounce";
import"../../Styles/pokemon.css"
import axios from "axios"
import SearchBar from "./SearchBar";
import PokemonCard from "./PokemonCard";
import Pagination from "./Pagination";
function PokemanMain() {
    const[pokemons,setPokemons]=useState([]);
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("")
    const [currentPage,setCurrentPage]=useState(1);
    const[searchTerm,setSearchTerm]=useState("")
    const debounceSEarchTerm=useDebounce(searchTerm,500)
    const itemsPerpage=10;
    const totalPages=Math.ceil(1281/itemsPerpage)
    useEffect(()=>{
    fetchPokemons()
    },[currentPage,debounceSEarchTerm])
    const fetchPokemons=async()=>{
        setLoading(true);
        setError("")
        try{
            if(debounceSEarchTerm){
                const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${debounceSEarchTerm.toLowerCase()}`)
                setPokemons([res.data])
            }
            else{
                const offset=(currentPage-1)*itemsPerpage;
                const res=await axios.get(` https://pokeapi.co/api/v2/pokemon/?limit=${itemsPerpage}&offset=${offset}`);
                const pokemonsDetails=await Promise.all(
                    res.data.results.map(async(pokemon)=>{
                        const details=await axios.get(pokemon.url)
                        return details.data
                    })
                )
                setPokemons(pokemonsDetails)
            }

        }
        catch(err){
            setError("failed to fetch the pokemons data",err)
        }
        finally{
            setLoading(false)
        }
    }
    if(loading)return <div>...Loading....</div>
    if(error)return <p>{error}</p>
  return (
    <div className="app">
        <h1><b>Pokemoon Explore</b></h1>
        <SearchBar onSearch={setSearchTerm}/>
        <div className="pokemon-container">
            {pokemons.map((pokemon)=>(
                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            ))}
        </div>
        {!debounceSEarchTerm&&(
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(page)=>setCurrentPage(page)}/>
        )}
    </div>
  )
}

export default PokemanMain