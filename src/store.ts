import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { TCryptoCurrency, TCryptoPrice, TPair } from "./types"
import { getCryptos, fetchCurrentCryptoPrice } from "./services/CryptoService"

type TCryptoStore = {
    cryptocurrencies : TCryptoCurrency[]
    result : TCryptoPrice
    loading : boolean
    fetchCryptos : () => Promise<void>
    fetchData : (pair : TPair) => Promise<void>
}

export const useCryptoStore = create<TCryptoStore>()(devtools((set) => ({
    cryptocurrencies: [],
    result: {
        IMAGEURL: "",
        PRICE: "",
        HIGHDAY: "",
        LOWDAY: "",
        CHANGEPCT24HOUR: "",
        LASTUPDATE: ""
    },
    loading: false,
    fetchCryptos: async () => {
        const cryptocurrencies = await getCryptos()
        set(() => ({
            cryptocurrencies
        }))
    },
    fetchData: async (pair) => {
        set(() => ({
            loading: true
        }))
        const result = await fetchCurrentCryptoPrice(pair)
        set(() => ({
            result,
            loading: false
        }))
    }
})))