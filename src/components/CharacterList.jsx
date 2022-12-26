import React from "react";
import Character from "./Character.jsx";
import { useEffect, useState } from "react";
import Search from './Search/Search.jsx'

const Navpage = (props) => {
  return (
    <header className="d-flex justify-content-between align-items-center">
      <button  className="btn btn-primary btn-sm" onClick={()=>props.setPage(props.page-1)}>Page {props.page - 1} </button>
      <p className="btn-light">Page {props.page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => props.setPage(props.page + 1)}
      >
        Page {props.page + 1}
      </button>
    </header>
  );
};

const CharacterList = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("morty")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`
      );
      const data = await response.json();
      setCharacter(data.results);
    }
    console.log(character);
    fetchData();
    setLoading(false);
  }, [search,page]);

  return (
    <div className="container">
           <Search setSearch={setSearch} />
      <Navpage page={page} setPage={setPage} />
      {loading ? (
        <h1>loading</h1>
      ) : (
        <div className="row">
          {character.map((character) => (
            <div className="col-md-4" key={character.id}>
              <Character character={character} />
            </div>
          ))}
        </div>
      )}
      <Navpage page={page} setPage={setPage} />
    </div>
  );
};

export default CharacterList;
