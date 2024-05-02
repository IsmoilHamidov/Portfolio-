import React, { useState, useEffect } from 'react';



function Activity() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const jsonData = await response.json();
        setData(jsonData.slice(0, 12)); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="card_class">
      {data.map(item => (
        <div key={item.id} className="createtag_class">
          <img src={item.url} alt={item.title} />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus porro officia amet.</p>
        </div>
      ))}
    </div>
  );
}

export default Activity;
