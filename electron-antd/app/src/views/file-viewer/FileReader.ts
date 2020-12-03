import fs from 'fs'
export const getDocFiles = (): any => {
  let files: any
  try {
    files = fs.readdirSync($tools.DOC_PATH, {
      encoding: 'utf-8',
    })
  } catch (error) {
    $tools.log.error('Failed to read doc.', error)
    return []
  }
  const res: any[] = []

  files.forEach((file: any) => {
    console.log('file:', file)
    res.push(file)
  })
  return res
}
export default {}
