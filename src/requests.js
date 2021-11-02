
import { baseURL } from "./globals"

export const generateProblem = async (cityCount) => {

    console.log(cityCount)

    const method = "GET"
    const headers = { "Content-Type": "application/json" }
    const response = await fetch(`${baseURL}/generate?city_count=${cityCount}`, { method: method, headers: headers })
    const data = await response.json()
    return data
}
