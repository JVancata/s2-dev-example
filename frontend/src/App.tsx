import { useEffect, useState } from 'react';
import './App.css'

const getCurrentCount = async (): Promise<number> => {
  const response = await fetch("https://prosek.shop/vancata/3000/");
  const data = await response.text();

  return Number(data);
}

const addToCount = async (toAdd: number): Promise<number> => {
  const response = await fetch("https://prosek.shop/vancata/3000/add",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ toAdd: toAdd })
    }
  );

  const data = await response.text();

  return Number(data);
}

function App() {
  const [currentCount, setCurrentCount] = useState(0);


  const loadCount = async () => {
    const count = await getCurrentCount();
    setCurrentCount(count);

  }

  const handleClick = async () => {
    const result = await addToCount(1);
    setCurrentCount(result);
  }

  useEffect(() => {
    loadCount();
  }, [])

  return (
    <>
      <h1>Čus</h1>
      <button onClick={handleClick}>Přidej</button>
      <p>{currentCount}</p>
    </>
  )
}

export default App
