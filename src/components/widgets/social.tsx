"use client"

import Link from "next/link"
import { Icons } from "@/icons"
import { siteConfig } from "@/config"

export function Social() {
	return (
		<Link
			href={siteConfig.links.github}
			rel="noopener noreferrer"
			target="_blank"
		>
			<div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground h-10 w-10">
				<Icons.github className="h-5 w-5" aria-label="GitHub" />
			</div>
		</Link>
	)
}
