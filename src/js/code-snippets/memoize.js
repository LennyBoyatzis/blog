const memoizeSnippet = `
  def memoize(f):
    cache = {}
        
    def inner(n):
      if n not in cache
        return cache[n] = f(n)
      return cache[n]
`
export default memoizeSnippet;
