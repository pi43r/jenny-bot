import { useState, useEffect } from 'react'
import useStore from 'helpers/store'

const Settings = () => {
	const [modal, setModal] = useState(false)
	const prompt = useStore((s) => s.prompt)

	useEffect(() => {
		console.log(prompt)
	}, [prompt])

	return (
		<>
			{modal && (
				<div className="absolute top-0 left-0 w-full p-4">
					<div className="bg-slate-100 rounded-md shadow-lg p-2">
						<div className="my-4">
							<p>
								Hier beschreibt ihr euren Charakter. Dieser <i>prompt</i> gibt
								die Persönlichkeit und die Antworten/Fragen eueres chatbots vor.{' '}
								<br />
								Folgendes Format ist zur Zeit aktiv:
							</p>
							<pre>
								{`
							[prompt]
							Ich: [user input]
							Bot: [output]
							}
							`}
							</pre>
							<p>
								Mehr informationen hier:{' '}
								<a
									href="https://beta.openai.com/docs/quickstart"
									target="_blank"
									rel="noopener noreferrer"
								>
									Quickstart
								</a>
							</p>
						</div>
						<textarea
							id="prompt"
							className="resize-none p-2 border border-stone-300 accent-purple-500 rounded-md w-full font-mono"
							rows={9}
							value={prompt}
							onChange={(event) =>
								useStore.setState({ prompt: event.target.value })
							}
						/>
						<button
							onClick={() => setModal(!modal)}
							className="border border-slate-400 hover:bg-slate-400 hover:text-slate-100 p-2 rounded-lg"
						>
							schließen
						</button>
					</div>
				</div>
			)}
			<button
				onClick={() => setModal(!modal)}
				className="border border-slate-400 hover:bg-slate-400 hover:text-slate-100 p-2 rounded-lg"
			>
				Settings
			</button>
		</>
	)
}

export default Settings
