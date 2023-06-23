import axios from 'axios';
export const getDecks = async () => {
    const response = await axios.get('http://localhost:1337/api/decks');
    return response.data;
}