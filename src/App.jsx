import { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Players from './components/Players';
import Newsletter from './components/newstlater';
import Footer from './components/footer';



// player data 
const playerData = [
  {
    id: 1,
    name: 'Rohit sharma',
    country: 'india',
    role: 'Batsman ',
    type: 'right-handed Batsman / Left-arm Orthodox',
    price: 500000,
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ7stGLtmEKOsAyJ3v5j6e5VSaVGALuXO1PR7h0-b9lH5tcSOb4',
  },
  {
    id: 2,
    name: 'Tamim Iqbal',
    country: 'Bangladesh',
    role: 'Batsman',
    type: 'Left-handed Batsman',
    price: 300000,
    image: 'https://media.gettyimages.com/id/1471687477/photo/bangladesh-v-england-3rd-one-day-international.jpg?s=612x612&w=gi&k=20&c=r2eGJYkr8Qw0XdEy_lCQthYCDvybPyB9-IpFyricWfA=',
  },
  {
    id: 3,
    name: 'Mashrafe Mortaza',
    country: 'Bangladesh',
    role: 'Bowler',
    type: 'Right-arm Medium Fast',
    price: 400000,
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRwWQ6bulHJlVIiXI1kxoYNq6IPjpsWsGcDUD2HrhUN0fJaKsTi',
  },
  {
    id: 4,
    name: 'Babar azam',
    country: 'Pakistan',
    role: 'Batsman',
    type: 'opener',
    price: 400000,
    image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQWO7VEJ_VMahnhz3N_5vJ7FHkhVv6QiUvlLrqzDQF3WbXY23igCy6PVkadh0VsOrKGXLti489BFP8q4ZM',
  },
  {
    id: 5,
    name: 'Steve smith',
    country: 'Austrilia',
    role: 'Batsman',
    type: 'one down',
    price: 400000,
    image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPtnyekaZ7Uy-Tq7e82NkUmUCJmb7XyavSYZgHwk-l_b2UAWNA',
  },
  {
    id: 6,
    name: 'Ben Stokes',
    country: 'England',
    role: 'batsman',
    type: 'all-rounder',
    price: 400000,
    image: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTZz-LMjJQqLKktDFQx_spwH-_9dvE6Dpc_oyz3Jb2rnGlRKjM2ik7Zmr8V2DEf-UnCJEnAp5YK5KLHJDI',
  },

];

function App() {
  const [showAvailable, setShowAvailable] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [coins, setCoins] = useState(600000); // 

  // coin
  const addCoins = () => {
    setCoins(coins + 600000);
  };

  // select player
  const handleSelectPlayer = (player) => {
    if (coins < player.price) {
      alert('Not enough coins!'); 
      return;
    }
    
    setSelectedPlayers([...selectedPlayers, player]);
    setCoins(coins - player.price);
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
              showAvailable
                ? 'bg-orange-600 text-white font-mono font-extrabold'
                : 'bg-gray-200'
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setShowAvailable(false)}
            className={`py-2 px-4 rounded ${
              !showAvailable
                ? 'bg-orange-500 text-white font-mono font-semibold'
                : 'bg-gray-200'
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
                <li key={player.id}>{player.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Newsletter/>
      <Footer/>
    
      
    </>
    
  );
}

export default App;
