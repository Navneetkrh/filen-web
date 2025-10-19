import { memo } from "react"
import Button from "./button"
import useSDKConfig from "@/hooks/useSDKConfig"
import { IS_DESKTOP, SIDEBAR_WIDTH, IS_APPLE_DEVICE } from "@/constants"
import { cn } from "@/lib/utils"

export const SideBar = memo(() => {
	const { baseFolderUUID } = useSDKConfig()

	return (
		<div
			className={cn(
				"flex flex-col h-full gap-2.5 select-none items-center overflow-hidden dragselect-start-allowed",
				!IS_DESKTOP && "py-3",
				IS_DESKTOP && IS_APPLE_DEVICE && "pt-9",
				IS_DESKTOP && !IS_APPLE_DEVICE && "pt-1"
			)}
			style={{
				width: SIDEBAR_WIDTH
			}}
		>
			<Button id={baseFolderUUID} />
			<Button id="notes" />
		</div>
	)
})

export default SideBar
