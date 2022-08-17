// @ts-check
const { parseEpub } = require('../../lib')

parseEpub('../../fixtures/wells.epub').then(result => {
  console.log('result object has keys: ', JSON.stringify(Object.keys(result)))
  // console.log('book info', result.info)
  // console.log('book structure', result.structure[0])
  // console.log('the book has', result.sections[1], 'sections')
  // console.log('here is first section')
  // console.log(result);

  const showSection = idx => {
    console.log(`-------- section index ${idx} --------`)
    // console.log(result.sections[idx])
    // console.log('toMarkdown')
    console.log(result.sections[idx].toMarkdown().slice())
    // console.log('toHtmlObjects')
    // const htmlObjects = result.sections[idx].toHtmlObjects()
    // console.log(htmlObjects[0].children[0].children[0].children[0].text)
  }

  showSection(4)

  // this section contains images which are converted to base64
  // showSection(4)
})
// 