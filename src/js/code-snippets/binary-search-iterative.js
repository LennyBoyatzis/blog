const binarySearchIteration = `
  def binary_search(search_list, val):
    low = 0
    high = len(search_list) - 1

    while low <= high:
        mid = int(low + ((high - low)/2))
        if val == search_list[mid]:
            return mid

        if val < search_list[mid]:
            high = mid - 1
        else:
            low = mid + 1
    return -1
`
export default binarySearchIteration;
