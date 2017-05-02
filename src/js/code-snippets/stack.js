const stackSnippet = `
  class Stack:
    def __init__(self):
      self.storage = [];
      self.storage_limit = 100;

    def push(self, item):
      if len(self.storage) > self.storage_limit:
        raise Exception("Stack overflow")
      else:
        return self.storage.append(item);

    def pop(self):
      if self.is_empty():
        raise Exception("Stack underflow")
      else:
        return self.storage.pop()

    def peek(self):
      return self.storage[-1]

    def is_empty(self):
      return len(self.storage) == 0
`
export default stackSnippet;
