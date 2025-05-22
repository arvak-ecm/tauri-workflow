import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import { TextAlign } from '@tiptap/extension-text-align'
import Color from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import TextStyle from '@tiptap/extension-text-style'
import { ImageExtension } from './extensions/Image'
import { ImagePlaceholder } from './extensions/ImagePlaceholder'

export const extensions = [
  StarterKit.configure({
    orderedList: {
      HTMLAttributes: {
        class: 'list-decimal'
      }
    },
    bulletList: {
      HTMLAttributes: {
        class: 'list-disc'
      }
    },
    code: {
      HTMLAttributes: {
        class: 'bg-accent rounded-md p-1'
      }
    },
    horizontalRule: {
      HTMLAttributes: {
        class: 'my-2'
      }
    },
    codeBlock: {
      HTMLAttributes: {
        class: 'bg-primary text-primary-foreground p-2 text-sm rounded-md p-1'
      }
    },
    heading: {
      levels: [1, 2, 3, 4],
      HTMLAttributes: {
        class: 'tiptap-heading'
      }
    }
  }),
  Underline,
  TextAlign.configure({ types: ['heading', 'paragraph'] }),
  TextStyle,
  Color,
  ImageExtension,
  ImagePlaceholder,
  Highlight.configure({
    multicolor: true
  })
]
