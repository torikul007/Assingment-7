import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Players from './components/Players';
import Newsletter from './components/Newsletter'; // Corrected case
import Footer from './components/Footer';

const playerData = [
  // ... (same player data as before)
];

function App() {
  const [showAvailable, setShowAvailable] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [coins, setCoins] = useState(600000);

  const addCoins = () => {
    setCoins(coins + 600000);
  };

  const handleSelectPlayer = (player) => {
    if (coins < player.price) {
      alert('Not enough coins!'); 
      return;
    }
    
    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.price);
  };

  const handleRemovePlayer = (id) => {
    const playerToRemove = selectedPlayers.find(player => player.id === id);
    if (playerToRemove) {
      setSelectedPlayers(selectedPlayers.filter(player => player.id !== id));
      setCoins(coins + playerToRemove.price);
    }
  };

  return (
    <>
      <Navbar coins={coins} />
      <Banner addCoins={addCoins} />

      <div className="container mx-auto p-6">
        <div className="flex justify-end space-x-4 mb-4">
          <button
            onClick={() => setShowAvailable(true)}
            className={`py-2 px-4 rounded-full ${
              showAvailable ? 'bg-orange-600 text-white font-mono font-extrabold' : 'bg-gray-200'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setShowAvailable(false)}
            className={`py-2 px-4 rounded ${
              !showAvailable ? 'bg-orange-500 text-white font-mono font-semibold' : 'bg-gray-200'
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>

        {showAvailable ? (
          <Players players={playerData} onSelectPlayer={handleSelectPlayer} />
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Selected Players</h2>
            <ul>
              {selectedPlayers.map((player) => (
                <li key={player.id} className="flex justify-between items-center">
                  <span>{player.name}</span>
                  <button 
                    onClick={() => handleRemovePlayer(player.id)}
                    className="bg-red-500 text-white py-1 px-2 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
