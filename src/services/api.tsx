export async function fetchCharacters(): Promise<any> {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      return data.results; 
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  }
  
  
  export async function fetchCharacterById(id: number): Promise<any> {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching character with ID ${id}:`, error);
      throw error;
    }
  }