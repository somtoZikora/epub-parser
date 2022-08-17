import parseLink from './parseLink'

export const resolveInlineNavHref = (href: string) => {
  if (href && href.indexOf('http://') === -1) {
    const parsed = parseLink(href)

    if (parsed.hash) {
      return `#${parsed.name}$${parsed.hash}`
    }

    return `#${parsed.name}`
  }

  return href
}

export const h = {
  filter: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

  replacement: function (innerHTML: string, node: HTMLElement) {
    let hLevel = node.tagName.charAt(1) as any
    let hPrefix = ''

    for (let i = 0; i < hLevel; i++) {
      hPrefix += '#'
    }

    // return `\n${hPrefix} ${innerHTML.trim()}\n\n`
    const hTag = node.tagName.toLowerCase()
    const id = node.getAttribute('id')

    if (!id) {
      return `\n${innerHTML}\n\n`
    }

    // 块级元素若保留原标签需添加换行符，否则临近元素渲染会出现问题
    return `\n<${hTag} id="${id}">${innerHTML.trim().split('\n').join(' ')}</${hTag}>\n\n`
  },
}

export const span = {
  filter: ['span'],

  replacement: function (innerHTML: string) {
    return innerHTML
  },
}

export const a = {
  filter: ['a'],

  replacement: function (innerHTML: string, node: HTMLEmbedElement) {
    const href = node.getAttribute('href')
    return `\n[${innerHTML}](${resolveInlineNavHref(href!)})\n\n`
  },
}

export const div = {
  filter: ['div'],

  replacement: function (innerHTML: string) {
    return `\n${innerHTML}\n\n`
  },
}

export const img = {
  filter: ['img', 'map'],

  replacement: function (innerHTML: string) {
    return `\n[PIC]\n\n`
  },
}

export const others = {
  filter: ['!--...--', '!doctype', 'abbr', 'acronym', 'address', 'applet', 'area',
    'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bb', 
    'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas',
  'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command',
'datagrid', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog',
'dir', 'div', 'dl', 'dt', 'em', 'embed', 'eventsource', 'fieldset',
'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'head',
'header', 'hgroup', 'hr', 'i', 'iframe', 'input', 'ins', 'isindex', 'kbd',
'keygen', 'label', 'legend', 'li', 'link', 'mark', 'menu', 'meta',
'meter', 'noframes', 'object', 'ol', 'optgroup', 'option', 'output',
'param', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'section',
'select', 'small', 'source', 'strike', 'strong', 'sub', 'sup',
'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time',
'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'wbr'],

  replacement: function (innerHTML: string) {
    return innerHTML
  },
}