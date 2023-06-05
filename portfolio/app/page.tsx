export default function Home() {
	return (
		<div className="pt-40 flex flex-col items-center">
			<h1 className="text-center helloTitle">
				Hello, I'm {"\n"}
				<h1 className="name">Majed Althonayan</h1>
			</h1>
			<h3 className="text-center myDescription">
				A Computer Science student based out of London, England
			</h3>
			<button className="contactMe rounded-md  pl-3 pr-3 pt-2 pb-2 ...">
				Save Changes
			</button>
		</div>
	);
}
