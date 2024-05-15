

import React from 'react';
import CharacterCard from './CharacterCard';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

interface ColumnProps {
  characters: Character[];
}

const Column: React.FC<ColumnProps> = ({ characters }) => {
  return (
    <div className="w-1/3 px-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Column;
