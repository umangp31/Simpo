import React from 'react'

const getNFTMetadata = async(network_id:string,contract_addr:string,token_id:string) => {
    const CHAINBASE_API_KEY = "2XJJnX3sFlWEFn1n5zKZw49hT8L";
    if(!network_id || !contract_addr || !token_id){
        throw new Error('parameters are missing or undefined');
    }
    try {
        const response=await fetch(`https://api.chainbase.online/v1/nft/metadata?chain_id=${network_id}&contract_address=${contract_addr}&token_id=${token_id}`,{
            method:'GET',
            headers:{
                'x-api-key':CHAINBASE_API_KEY,
                'accept':'application/json',
            },
        })
        const res= await response.json();
        console.log(res);
        return res;
        
    } catch (error) {
        console.log('error',error);
        throw error;
    }
}

export default getNFTMetadata