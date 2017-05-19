const queueSnippet = `
  class Queue:
      def __init__(self):
          self.storage = [1,2,3,4,5,6,7]

      def enqueue(self, item):
          return self.storage.insert(0, item)

      def dequeue(self):
          return self.storage.pop()

      def peek(self):
          return self.storage[0]

      def isEmpty(self):
          return self.storage == []

      def size(self):
          return len(self.storage)
`
export default queueSnippet;
