const stackSnippet = `
  class Stack:
    def __init__(self):
      self.storage = [];

    def push(self, item):
      return self.storage.append(item);

    def pop(self):
      return self.storage.pop()

    def peek(self):
      return self.storage[-1]

    def is_empty(self):
      return len(self.storage) == 0
`
export default stackSnippet;
