import { useState, useEffect } from 'react'

function UseEffect () {
//   const [resourceType, setResourceType] = useState('posts');
//   const [items, setItems] = useState([]);

//   console.log('render');

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//         .then(response => response.json())
//         .then(json => setItems(json))
//     }, [resourceType]);

//     return (
//         <>
//             <div>
//                 <button onClick={() => setResourceType('posts')}>Posts</button>
//                 <button onClick={() => setResourceType('users')}>Users</button>
//                 <button onClick={() => setResourceType('comments')}>Comments</button>
//             </div>
//             <h1>{resourceType}</h1>
//             {items.map(item => {
//                 return <pre>{JSON.stringify(item)}</pre>
//             })}
//         </>
//     )
// ==========================================================
// ==========================================================

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }
  useEffect(() => { 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div>
        <div>Window width: {windowWidth}</div>
    </div>
  )
}

export default UseEffect;
