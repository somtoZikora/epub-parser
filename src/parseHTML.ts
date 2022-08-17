// import { JSDOM } from 'jsdom'
import _ from 'lodash'
import { traverseNestedObject } from './utils'
import { HtmlNodeObject, GeneralObject } from './types'

const OMITTED_TAGS = ['head', 'input', 'textarea', 'script', 'style', 'svg']
const UNWRAP_TAGS = ['body', 'html', 'div', 'span']
const PICKED_ATTRS = ['href', 'src', 'id']

/**
 * recursivelyReadParent
 * @param node
 * @param callback invoke every time a parent node is read, return truthy value to stop the reading process
 * @param final callback when reaching the root
 */
const recursivelyReadParent = (
  node: GeneralObject,
  callback: (node: GeneralObject) => GeneralObject | null,
  final?: () => GeneralObject,
) => {
  const _read = (_node: GeneralObject): GeneralObject => {
    const parent = _node.parentNode
    if (parent) {
      const newNode = callback(parent)
      if (!newNode) {
        return _read(parent)
      }
      return newNode
    } else {
      if (final) {
        return final()
      }
      return node
    }
  }
  return _read(node)
}

export interface ParseHTMLConfig {
  resolveSrc?: (src: string) => string
  resolveHref?: (href: string) => string
}
const parseHTML = (HTMLString: string, config: ParseHTMLConfig = {}) => {
  {}
}

export default parseHTML
