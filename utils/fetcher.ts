export default (url: string) => fetch(url).then((res) => res.json())
