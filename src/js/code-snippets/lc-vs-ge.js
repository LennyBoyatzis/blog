const lcVsGeSnippet = `
  # List Comprehension [...]
  list_comp = [i for i in range(5)] 
  # [0,1,2,3,4]

  # Generator Expressions (...)
  gen_exp = (i for i in range(5)) 
  # <generator object <genexpr> at 0x101c01e08
`

const memoryDifference = `
  from sys import getsizeof

  list_comp = [x * 5 for x in range(1000)]
  getsizeof(list_comp) # 9024 bytes

  gen_exp = (i for i in range(1000))
  getsizeof(gen_exp) # 88 bytes

  # Lets try something a little bigger!
  list_comp = [x * 5 for x in range(5000)]
  getsizeof(list_comp) # 43040 bytes

  gen_exp = (i for i in range(5000))
  getsizeof(gen_exp) # 88 bytes
`
export { lcVsGeSnippet, memoryDifference };
