// import React from 'react';
// import { trendingCoin } from '../../Services/trendingCoin';
// import { useQuery } from 'react-query';

// function Carousel() {
//   const { data, isLoading, isError, error } = useQuery(['coins'], () => trendingCoin(), {
//     cacheTime: 1000 * 60 * 2,
//   });

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error: {error.message}</div>;
//   }

//   const coins = data && Array.isArray(data) ? data : data?.coins || [];

//   // Log the coin data to inspect the structure
//   console.log(coins); 

//   return (
//     <div className="w-[80vw] mx-auto">
//       <h2 className="text-center text-2xl font-bold mb-4">Trending Coins</h2>
//       {coins.map((coin) => (
//         <div  key={coin.name} className=' flex flex-row'>
//           <div className='h-32 w-14 border border-gray-800  flex flex-row'> {coin.name}</div>

//         </div>
//       ))}
//     </div>
//   );
// }

// export default Carousel;
