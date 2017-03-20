const rlCodeSnippet = `
def vaccuum_cleaner_policy(state):
  if state == 'dirty':
    return 'Suck'
  elif state == 'clean':
    return 'Move'
`

export default rlCodeSnippet;