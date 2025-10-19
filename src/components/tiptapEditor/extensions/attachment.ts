import { Node, mergeAttributes } from '@tiptap/core'
import { Plugin, PluginKey } from '@tiptap/pm/state'

export interface AttachmentOptions {
  HTMLAttributes: Record<string, any>
  attachmentUrls: Record<string, { url: string; mime: string }>
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
      attachmentUrls: {},
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
        tag: 'img[src*="attachment:"]',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    const { src } = HTMLAttributes
    
    // Check if this is an attachment URL
    if (src && src.startsWith('attachment:')) {
      const attachmentKey = src.replace('attachment:', '')
      const attachmentData = this.options.attachmentUrls[attachmentKey]
      
      if (attachmentData) {
        // Replace with actual blob URL
        return ['img', mergeAttributes(this.options.HTMLAttributes, {
          ...HTMLAttributes,
          src: attachmentData.url,
          class: 'max-w-full h-auto rounded-lg attachment-image'
        })]
      } else {
        // Show placeholder for unavailable attachment
        return ['div', { 
          class: 'attachment-placeholder text-muted-foreground text-sm italic p-2 border border-dashed rounded'
        }, `Attachment unavailable: ${HTMLAttributes.alt || 'Unknown'}`]
      }
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
            load: (view) => {
              // Re-render when attachment URLs change
              const { attachmentUrls } = this.options
              if (Object.keys(attachmentUrls).length > 0) {
                view.dispatch(view.state.tr)
              }
              return false
            }
          }
        }
      })
    ]
  }
})