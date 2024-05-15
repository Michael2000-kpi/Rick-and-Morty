import React, { useState, useEffect } from "react";
import { fetchCharacters } from "./services/api";
import Card from "./components/Card";
import "./App.css";
import Filter from "./components/Filter";
import Sorter from "./components/Sorter";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  created: string;
  url: string;
}

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [filterOption, setFilterOption] = useState<string | null>(null);
  const [sortOption, setSortOption] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCharacters();
        setCharacters(data);
        setFilteredCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let filtered = characters;
    if (filterOption) {
      filtered = characters.filter(
        (character) => character.status === filterOption
      );
    }
    if (sortOption) {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    setFilteredCharacters(filtered);
  }, [characters, filterOption, sortOption]);

  return (
    <div className="main">
      <div className="header ">
        <header>
          <h1>Rick and Morty Characters</h1>

          <div className="filter">
            <label htmlFor="filter">Filter by:</label>
            <select
              className="select"
              id="filter"
              value={filterOption || "all"}
              onChange={(e) => setFilterOption(e.target.value)}
            >
              <option value="all">All</option>
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>

          <Sorter
            options={["Name", "Species", "Gender"]}
            selectedOption={sortOption}
            onSelectOption={setSortOption}
          />
        </header>
      </div>
      <div className="container">
        <div className="column">
          {filteredCharacters.slice(0, 5).map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
        <div className="column">
          {filteredCharacters.slice(5, 10).map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
        <div className="column">
          {filteredCharacters.slice(10, 15).map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
        <div className="column">
          {filteredCharacters.slice(15, 20).map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
