import { EDITOR_JS_TOOLS } from '@/core/data/editor'
import { createReactEditorJS } from 'react-editor-js'

const DEFAULT_DATA = {
  time: 1635603431943,
  blocks: [
    {
      type: 'paragraph',
      data: { text: 'Escribe algo aquí...' }
    }
  ]
}
const ReactEditorJS = createReactEditorJS()
const DesignerPage = () => {
  return (
    <div className='h-full w-full flex-1'>
      <ReactEditorJS holder='container' defaultValue={DEFAULT_DATA} tools={EDITOR_JS_TOOLS}>
        <div id='container' className='h-full w-full rounded-sm bg-white/90 p-4 text-black/90' />
      </ReactEditorJS>
    </div>
  )
}

DesignerPage.displayName = 'DesignerPage'
export default DesignerPage
