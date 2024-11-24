const apiKey = "fxf_iAOQzg6QiyiQl01CPrqb"
const base = "USD"
const currencies = "EUR,GBP,JPY"
const date = "2023-12-31"

fetch(
  `https://api.fxfeed.io/historical?api_key=${apiKey}&base=${base}&currencies=${currencies}&date=${date}`,
)
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      console.log(`Exchange rates for ${data.date}:`)
      Object.entries(data.rates).forEach(([currency, rate]) => {
        console.log(`${currency}: ${rate}`)
      })
    } else {
      console.error("Error:", data.error.info)
    }
  })
  .catch((error) => console.error("Fetch error:", error))