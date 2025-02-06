import Balancer from "react-wrap-balancer"
import Link from "next/link"
import { Badge, Button } from "@/ui"

export default function Home() {
	return (
		<>
			<section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-40 lg:pb-20">
		
				<h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
					Harmony
				</h1>

				<p className="text-center text-lg font-light text-foreground">
					<Balancer>
						A revolutionary AI music maker, blending technology and creativity to transform your musical ideas.
					</Balancer>
				</p>

				<nav className="flex items-center gap-4 py-4">
					<Link href="/login">
						<Button size="sm" className="text-sm">
							<span>Login</span>
						</Button>
					</Link>
					<Link href="/register">
						<Button size="sm" className="text-sm">
							<span>Register</span>
						</Button>
					</Link>
				</nav>
			</section>
		</>
	)
}
