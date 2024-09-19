import React, { useContext, useState } from 'react'
import {  useQuery } from 'react-query';
import { fetchCoinData } from '../../Services/fetchCoinData';
import { CurrencyContext } from '../../Context/CurrencyContext';
import { useNavigate } from 'react-router-dom';
import PageLoader from "../PageLoader/PageLoader";
function CoinTable() {

    const navigate = useNavigate();

    const {currency} = useContext(CurrencyContext);
    const [page , SetPage] =useState(1);
    const {data , isLoading , isError , error} = useQuery(['coins', page ,currency] , () => fetchCoinData(page , currency), {
        // retry:2,
        // retryDelay:1000,
        cacheTime:1000*60*2,
     });

     function handleCoinRedirect(id){
        navigate(`/details/${id}`);
    }

     if(isLoading) {
        return <PageLoader/>
     }

     if(isError){
        return <div>Error: {error.message}</div>;
     }

     

     return (

        <>
        
        <div className="my-5 flex flex-col items-center justify-center gap-5 w-[80vw] mx-auto">
            <div className="w-full bg-yellow-400 text-black flex py-4 px-3 font-semibold items-center justify-center rounded-lg">
                {/* Header of the table */}
                <div className="basis-[35%]">
                    Coin
                </div>
                <div  className="basis-[25%]">
                    Price 
                </div>
                <div  className="basis-[20%]">
                    24h change 
                </div>
                <div  className="basis-[20%]">
                    Market Cap
                </div>
            </div>

            <div className="flex flex-col w-[80vw] mx-auto ">
                {isLoading && <div>Loading...</div>}
                {data && data.map((coin) => {
                    return (
                        < div onClick = {() => handleCoinRedirect(coin.id)} key={coin.id} className="w-full bg-transparent text-white flex py-4 px-2 font-semibold items-center justify-between cursor-pointer
                         rounded-xl my-3 border-slate-400 border-2">
                            <div className="flex items-center justify-start gap-3 basis-[35%] ">

                                <div className="w-[5rem] h-[5rem]">
                                    <img src={coin.image} className="w-full h-full" loading="lazy"/>
                                </div>

                                <div className="flex flex-col"> 
                                    <div className="text-3xl">{coin.name}</div>
                                    <div className="text-xl">{coin.symbol}</div>
                                </div>


                            </div>

                            <div className="basis-[25%]">
                                {coin.current_price}
                            </div>
                            <div className="basis-[20%]">
                                {coin.price_change_24h}
                            </div>
                            <div className="basis-[20%]">
                                {coin.market_cap}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex gap-4 justify-center items-center">
                <button
                    disabled={page === 1}
                    onClick={() => SetPage(page-1)} 
                    className="btn btn-primary btn-wide text-white text-2xl"
                >
                    Prev
                </button>
                <button 
                    onClick={() => SetPage(page+1)} 
                    className="btn btn-secondary btn-wide text-white text-2xl"
                >
                    Next
                </button>
            </div>
        </div>
        </>
    )
}

export default CoinTable;
