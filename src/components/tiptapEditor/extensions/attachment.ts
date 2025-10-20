import { Node, mergeAttributes } from '@tiptap/core'
import { Plugin, PluginKey } from '@tiptap/pm/state'

export interface AttachmentOptions {
  HTMLAttributes: Record<string, any>
}

function mergeClassNames(...classes: Array<string | null | undefined>): string | undefined {
  const filtered = classes.filter(Boolean) as string[]
  if (filtered.length === 0) {
    return undefined
  }

  return filtered.join(' ')
}

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    attachment: {
      /**
       * Add an attachment
       */
      setAttachment: (options: { src: string, alt?: string }) => ReturnType
    }
  }
}

export const Attachment = Node.create<AttachmentOptions>({
  name: 'attachment',

  addOptions() {
    return {
      HTMLAttributes: {},
    }
  },

  inline: true,

  group: 'inline',

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
      },
      attachmentSrc: {
        default: null,
        parseHTML: element => element.getAttribute('data-attachment-src'),
        renderHTML: attributes => {
          if (!attributes.attachmentSrc) {
            return {}
          }

          return {
            'data-attachment-src': attributes.attachmentSrc,
          }
        },
      },
      label: {
        default: null,
        parseHTML: element => element.getAttribute('data-attachment-label'),
        renderHTML: attributes => {
          if (!attributes.label) {
            return {}
          }

          return {
            'data-attachment-label': attributes.label,
          }
        },
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'span[data-attachment-src]',
      },
      {
        tag: 'img[src*="attachment:"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    const rawSrc = HTMLAttributes['data-attachment-src'] ?? HTMLAttributes.attachmentSrc ?? HTMLAttributes.src

    if (rawSrc && rawSrc.startsWith('attachment:')) {
      const label =
        HTMLAttributes['data-attachment-label'] ??
        HTMLAttributes.label ??
        HTMLAttributes.alt ??
        'Attachment'

      const baseAttributes = { ...HTMLAttributes }
      const className = baseAttributes.class as string | undefined

      delete baseAttributes.src
      delete baseAttributes.alt
      delete baseAttributes.title
      delete baseAttributes.attachmentSrc
      delete baseAttributes['data-attachment-src']
      delete baseAttributes['data-attachment-label']
      delete baseAttributes.class

      return [
        'span',
        mergeAttributes(
          this.options.HTMLAttributes,
          {
            ...baseAttributes,
            'data-attachment-src': rawSrc,
            'data-attachment-label': label,
            class: mergeClassNames(
              this.options.HTMLAttributes?.class,
              className,
              'note-attachment-chip'
            ),
          }
        ),
        `📎 ${label}`,
      ]
    }

    return ['img', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)]
  },

  addCommands() {
    return {
      setAttachment: options => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        })
      },
    }
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey('attachmentPlugin'),
        props: {
          handleDOMEvents: {
            // Handle attachment URL updates
            load: () => false,
          }
        }
      })
    ]
  }
})
