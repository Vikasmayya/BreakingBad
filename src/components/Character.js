import React from 'react';
import CItem from './CItem';
import Spinner from "./Spinner";

 const Character = ({items, isLoading}) => {
    return isLoading ? <Spinner /> : (<><section className="cards"> 
      {items.map(item =>(
          <CItem key={item.char_id} item={item} />
      ))}
    </section></>)
}

export default Character;