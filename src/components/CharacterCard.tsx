

import React, { useState } from 'react';
import { fetchCharacterById } from '../services/api';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const [showModal, setShowModal] = useState(false);
  const [fullCharacterInfo, setFullCharacterInfo] = useState<any>(null);

  const fetchFullCharacterInfo = async () => {
    try {
      const data = await fetchCharacterById(character.id);
      setFullCharacterInfo(data);
      setShowModal(true);
    } catch (error) {
      console.error('Error fetching full character info:', error);
    }
  };

  return (
    <div className="border border-gray-200 p-4 rounded-md mb-4">
      <img src={character.image} alt={character.name} className="w-full h-auto mb-2 rounded-md" />
      <h2 className="text-lg font-bold">{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <button className="bg-blue-500 text-white rounded-md py-2 px-4 mt-2" onClick={fetchFullCharacterInfo}>
        View Details
      </button>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
           
          </div>
        </div>
      )}
    </div>
  );
};

export default CharacterCard;
