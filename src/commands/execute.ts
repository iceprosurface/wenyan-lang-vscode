import { window } from 'vscode'
import { Exec } from '../exec'
import { showOutputAsDocument } from './output'

export async function execute () {
  const document = window.activeTextEditor?.document
  if (document?.languageId === 'wenyan') {
    try {
      let result = await Exec(document.uri.fsPath, { exec: true }) || ''

      // remove first line or compiled code
      result = result.split('\n').slice(1).join('\n')

      showOutputAsDocument(result)
    }
    catch (e) {
      console.error(e)
    }
  }
}