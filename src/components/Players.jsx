

const Players = ({ players, onSelectPlayer }) => {
    return (
      <div className="grid grid-rows-2 sm:grid-cols-1 grid-cols-6 md:grid-cols-3 gap-6 p-6">
        {players.map((player) => (
          <div
            key={player.id}
            className="border rounded-lg p-4 shadow-lg bg-white"
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-bold mb-2">{player.name}</h3>
            <p className="text-gray-600">Country: {player.country}</p>
            <p className="">Role: {player.role}</p>
            <p>Type: {player.type}</p>
            <p>Bidding Price: {player.price} Coins</p>
  
            <button
              onClick={() => onSelectPlayer(player)}
              className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              Choose Player
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default Players;
  