module.exports = (baseUrl) => (req, res) => {
   const parsedURl = new URL(req.url, baseUrl)
   const params = {}
   parsedURl.searchParams.forEach((value, key) => params[key] = value )
   
   req.pathname = parsedURl.pathname
   req.params = params
}