export default function Home() {
	return (
		<div>
			<nav className="flex sm:justify-center space-x-24">
				<h2 className="initials">M.A.A</h2>
				{[
					["About", "/"],
					["Projects", "/"],
					["Contact", "/"],
				].map(([title, url]) => (
					<a
						href={url}
						className="myNav rounded-lg pt-5 px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900"
					>
						{title}
					</a>
				))}
			</nav>

			<div className="grid grid-cols-6 gap-4 items-center pt-20">
				<h1 className="col-start-1 col-end-5 text-center helloTitle">
					Hello, I am {"\n"}
				</h1>
				<h1 className="col-start-3 col-end-7 name">Majed Althonayan</h1>
				<h3 className="col-start-1 col-end-7 text-center myDescription">
					A Computer Science student based out of London, England
				</h3>
				<button className="col-start-3 col-end-5 contactMe rounded-lg ">
					Contact Me
				</button>
			</div>
		</div>
	);
}
