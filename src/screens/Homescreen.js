import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Homescreen() {

  const [rooms, setrooms] = useState([])
  const [loading, setLoading] = useState()
  const [error, seterror] = useState()
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const data = (await axios.get('/api/rooms/getallrooms')).data;
        console.log(data);
        setLoading(false)
      } catch (error) {
        seterror(true)
        console.log(error);
        setLoading(false)
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
        <h1>Loading...</h1>
        ) : error ? (
        <h1>Error</h1>
        ) : (
          rooms.map((room) => {
          return <div className="col-md-9">
            <Room room={room}/>
            </div>
        })
        )}
      </div>
    </div>
  );
}

export default Homescreen;
