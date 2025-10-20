import { Node, mergeAttributes } from "@tiptap/core"
import { Plugin, PluginKey } from "@tiptap/pm/state"

export interface AttachmentMeta {
	name: string
	size?: number | null
	mime?: string | null
	isImage?: boolean
	url?: string | null
}

export interface AttachmentOptions {
    HTMLAttributes: Record<string, any>
    attachments: Record<string, AttachmentMeta>
}

function mergeClassNames(...classes: Array<string | null | undefined>): string | undefined {
	const filtered = classes.filter(Boolean) as string[]

	if (filtered.length === 0) {
		return undefined
	}

	return filtered.join(" ")
}

function formatBytes(bytes?: number | null): string | null {
	if (bytes === undefined || bytes === null || Number.isNaN(Number(bytes))) {
		return null
	}

	const value = Number(bytes)

	if (value === 0) {
		return "0 B"
	}

	const units = ["B", "KB", "MB", "GB", "TB"]
	const exponent = Math.min(Math.floor(Math.log(value) / Math.log(1024)), units.length - 1)
	const result = value / Math.pow(1024, exponent)

	return `${result.toFixed(result >= 10 || exponent === 0 ? 0 : 1)} ${units[exponent]}`
}

declare module "@tiptap/core" {
	interface Commands<ReturnType> {
		attachment: {
			setAttachment: (options: { src: string; alt?: string }) => ReturnType
		}
	}
}

export const Attachment = Node.create<AttachmentOptions>({
	name: "attachment",

	addOptions() {
		return {
			HTMLAttributes: {},
			attachments: {}
		}
	},

	inline: true,

	group: "inline",

	draggable: true,

	atom: true,

	addAttributes() {
		return {
			attachmentKey: {
				default: null,
				parseHTML: element => {
					const key = element.getAttribute("data-attachment-key")

					if (key) {
						return key
					}

					const src = element.getAttribute("data-attachment-src") ?? element.getAttribute("src")

					if (src && src.startsWith("attachment:")) {
						return src.replace("attachment:", "")
					}

					return null
				},
				renderHTML: attributes => {
					if (!attributes.attachmentKey) {
						return {}
					}

					return {
						"data-attachment-key": attributes.attachmentKey
					}
				}
			},
			attachmentSrc: {
				default: null,
				parseHTML: element => element.getAttribute("data-attachment-src"),
				renderHTML: attributes => {
					if (!attributes.attachmentSrc) {
						return {}
					}

					return {
						"data-attachment-src": attributes.attachmentSrc
					}
				}
			},
			attachmentDisplay: {
				default: null,
				parseHTML: element => element.getAttribute("data-attachment-display"),
				renderHTML: attributes => {
					if (!attributes.attachmentDisplay) {
						return {}
					}

					return {
						"data-attachment-display": attributes.attachmentDisplay
					}
				}
			},
			excalidrawJsonKey: {
				default: null,
				parseHTML: element => element.getAttribute("data-excalidraw-json-key"),
				renderHTML: attributes => {
					if (!attributes.excalidrawJsonKey) {
						return {}
					}

					return {
						"data-excalidraw-json-key": attributes.excalidrawJsonKey
					}
				}
			},
			attachmentName: {
				default: null,
				parseHTML: element => element.getAttribute("data-attachment-name"),
				renderHTML: attributes => {
					if (!attributes.attachmentName) {
						return {}
					}

					return {
						"data-attachment-name": attributes.attachmentName
					}
				}
			},
			attachmentSize: {
				default: null,
				parseHTML: element => element.getAttribute("data-attachment-size"),
				renderHTML: attributes => {
					if (attributes.attachmentSize === null || attributes.attachmentSize === undefined || attributes.attachmentSize === "") {
						return {}
					}

					return {
						"data-attachment-size": attributes.attachmentSize
					}
				}
			},
			attachmentMime: {
				default: null,
				parseHTML: element => element.getAttribute("data-attachment-mime"),
				renderHTML: attributes => {
					if (!attributes.attachmentMime) {
						return {}
					}

					return {
						"data-attachment-mime": attributes.attachmentMime
					}
				}
			},
			attachmentLabel: {
				default: null,
				parseHTML: element => element.getAttribute("data-attachment-label"),
				renderHTML: attributes => {
					if (!attributes.attachmentLabel) {
						return {}
					}

					return {
						"data-attachment-label": attributes.attachmentLabel
					}
				}
			}
		}
	},

	parseHTML() {
		return [
			{
				tag: "span[data-attachment-key]"
			},
			{
				tag: "span[data-attachment-src]"
			},
			{
				tag: "img[src*=\"attachment:\"]"
			}
		]
	},

		renderHTML({ HTMLAttributes }) {
		const attachmentsMap = this.options.attachments ?? {}
		const rawKey = HTMLAttributes["data-attachment-key"] ?? HTMLAttributes.attachmentKey ?? null
		const rawSrc = HTMLAttributes["data-attachment-src"] ?? HTMLAttributes.attachmentSrc ?? HTMLAttributes.src ?? null
		const rawDisplay = HTMLAttributes["data-attachment-display"] ?? HTMLAttributes.attachmentDisplay ?? null
		const rawName = HTMLAttributes["data-attachment-name"] ?? HTMLAttributes.attachmentName ?? null
		const rawSize = HTMLAttributes["data-attachment-size"] ?? HTMLAttributes.attachmentSize ?? null
		const rawMime = HTMLAttributes["data-attachment-mime"] ?? HTMLAttributes.attachmentMime ?? null
		const excalidrawJsonKey = HTMLAttributes["data-excalidraw-json-key"] ?? HTMLAttributes.excalidrawJsonKey ?? null
		const existingClass = HTMLAttributes.class as string | undefined

		const attachmentMeta = rawKey ? attachmentsMap[rawKey] : undefined

		const name =
			(typeof rawName === "string" && rawName.length > 0 ? rawName : null) ??
			attachmentMeta?.name ??
			undefined

		const sizeValue = (() => {
			if (typeof rawSize === "number") {
				return rawSize
			}

			if (typeof rawSize === "string" && rawSize.trim().length > 0) {
				const parsed = Number(rawSize)
				return Number.isNaN(parsed) ? null : parsed
			}

			return attachmentMeta?.size ?? null
		})()

		const label =
			(typeof HTMLAttributes["data-attachment-label"] === "string" && HTMLAttributes["data-attachment-label"].length > 0
				? HTMLAttributes["data-attachment-label"]
				: attachmentMeta?.name
			) ??
			(name ? `${name}${sizeValue ? ` (${formatBytes(sizeValue)})` : ""}` : "Attachment")

		const src =
			(typeof rawSrc === "string" && rawSrc.length > 0 ? rawSrc : null) ??
			(rawKey ? `attachment:${rawKey}` : null)

		const mime =
			(typeof rawMime === "string" && rawMime.length > 0 ? rawMime : null) ??
			attachmentMeta?.mime ??
			null

		const isImage = Boolean(attachmentMeta?.isImage)
		const hasPreview = Boolean(isImage && attachmentMeta?.url)

		const baseAttributes: Record<string, any> = {
			contenteditable: "false",
			"data-attachment-label": label,
			"data-attachment-type": hasPreview ? "image" : "file"
		}

		if (rawKey) {
			baseAttributes["data-attachment-key"] = rawKey
		}

		if (src) {
			baseAttributes["data-attachment-src"] = src
		}

		if (rawDisplay) {
			baseAttributes["data-attachment-display"] = rawDisplay
		}

		if (name) {
			baseAttributes["data-attachment-name"] = name
		}

		if (sizeValue !== null && sizeValue !== undefined) {
			baseAttributes["data-attachment-size"] = `${sizeValue}`
		}

		if (mime) {
			baseAttributes["data-attachment-mime"] = mime
		}

		if (excalidrawJsonKey) {
			baseAttributes["data-excalidraw-json-key"] = excalidrawJsonKey
		}

		const displayBlock = typeof rawDisplay === "string" && rawDisplay.toLowerCase() === "block"
		const className = mergeClassNames(
			this.options.HTMLAttributes?.class,
			existingClass,
			displayBlock ? "note-attachment-block" : "note-attachment-chip",
			hasPreview ? (displayBlock ? "note-attachment-block--preview" : "note-attachment-chip--preview") : undefined
		)

		if (className) {
			baseAttributes.class = className
		}

		const children: Array<[string, Record<string, any>, any?]> = []

		if (hasPreview && attachmentMeta?.url) {
			children.push([
				"span",
				{ class: displayBlock ? "note-attachment-block-media" : "note-attachment-thumb" },
				[
					"img",
					{
						src: attachmentMeta.url,
						alt: name ?? label,
						class: displayBlock ? "note-attachment-block-image" : "note-attachment-thumb-image"
					}
				]
			])
		} else {
			children.push([
				"span",
				{
					class: "note-attachment-icon",
					"aria-hidden": "true"
				},
                "??"
			])
		}

		children.push([
			"span",
			{ class: displayBlock ? "note-attachment-block-caption" : "note-attachment-text" },
			label
		])

		return [
			"span",
			mergeAttributes(baseAttributes),
			...children
		]
	},

	addCommands() {
		return {
			setAttachment: options => ({ commands }) => {
				return commands.insertContent({
					type: this.name,
					attrs: options
				})
			}
		}
	},

	addProseMirrorPlugins() {
		return [
			new Plugin({
				key: new PluginKey("attachmentPlugin"),
				props: {
					handleDOMEvents: {
						load: () => false
					}
				}
			})
		]
	}
})




