const lcVsGeSnippet = `
  # List Comprehension [...]
  list_comp = [i for i in range(1000)]

  # Generator Expressions (...)
  gen_exp = (i for i in range(1000))
`

const memoryDifference = `
  from sys import getsizeof

  list_comp = [x * 5 for x in range(1000)]
  getsizeof(list_comp) # 9024 bytes

  gen_exp = (i for i in range(1000))
  getsizeof(gen_exp) # 88 bytes
`
export { lcVsGeSnippet, memoryDifference };
