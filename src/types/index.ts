import { z } from "zod"
import { CurrencySchema, CryptoCurrencyResponseSchema, PairSchema, CryptoPriceSchema } from "../schema/crypto-schema"

export type TCurrency = z.infer<typeof CurrencySchema>
export type TCryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type TPair = z.infer<typeof PairSchema>
export type TCryptoPrice = z.infer<typeof CryptoPriceSchema>