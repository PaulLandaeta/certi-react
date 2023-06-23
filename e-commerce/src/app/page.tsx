"use client";
import {useEffect,useState} from 'react';
import { getDecks } from './services/deckService';
import { Card } from './components/Card';
export default function Home() {
  const [response, setResponse] = useState();
  const getData = async () => {
    const dataDecks = await  getDecks();
    setResponse(dataDecks);
  }

  useEffect(()=>{
    getData();
  }, []);
  return <>
  {
    response && response.data.map((deck => {
      return <Card description={deck.attributes.descripcion} price={deck.attributes.price}></Card>
    }))
  }
  </>;
}
