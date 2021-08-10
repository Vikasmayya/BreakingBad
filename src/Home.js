import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Character from "./components/Character";
import Search from "./components/Search";

const  Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      setItems(result.data);
      setIsLoading(false);
      console.log(result.data);
    }

    fetchItems()
  }, [query]);
  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q) => setQuery(q)} />
      <Character isLoading={isLoading} items={items}/>
    </div>
  );
}

export default Home;
