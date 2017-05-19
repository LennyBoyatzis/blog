const binarySearchRecusion = `
  def binary_search_recursion(sorted_list, key, low, high):
    if low > high:
        return -1

    mid = int(low + ((high - low)/2))

    if sorted_list[mid] == key:
        return mid
    elif (key < sorted_list[mid]):
        return binary_search_recursion(sorted_list, key, low, mid - 1)
    elif (key > sorted_list[mid]):
        return binary_search_recursion(sorted_list, key, mid + 1, high)
`
export default binarySearchRecusion;
