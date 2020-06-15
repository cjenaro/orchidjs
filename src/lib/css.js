const sheet = document.head.appendChild(document.createElement("style")).sheet

function interleave(strings, interpolations) {
  return strings.reduce((final, str, i) => {
    return (
      final + str + (interpolations[i] === undefined ? "" : interpolations[i])
    )
  }, "")
}

export function css(strings, ...interpolations) {
  const styleString = interleave(strings, interpolations)
  const index = sheet.cssRules.length
  const id = index.toString(36)
  const className = `css-${id}`
  const rule = `.${className} { ${styleString} }`

  sheet.insertRule(rule, index)
  return className
}
