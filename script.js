
document.getElementById('search').addEventListener('click', event => {
  event.preventDefault()
  axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC`)
    .then(res => {
      const gif = res.data.data
      let random = Math.floor(Math.random() * gif.length)

      console.log(gif)
      console.log(random)
      document.getElementById('gifspot').innerHTML = `

      <img src="${gif[random].images.original.url}">
      `
      console.log(gif[random].images.original.url)
    })
    .catch(err => console.log(err))
})