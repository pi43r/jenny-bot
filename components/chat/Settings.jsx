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
					<div className="bg-yellow-300 border-2 border-black rounded-md shadow-xl p-2">
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
							className="resize-none p-2 border border-stone-300 accent-purple-600 rounded-md w-full font-mono"
							rows={9}
							value={prompt}
							onChange={(event) =>
								useStore.setState({ prompt: event.target.value })
							}
						/>
						<button
							onClick={() => setModal(!modal)}
							className="btn my-4"
						>
							schließen
						</button>
					</div>
				</div>
			)}
			<button
				onClick={() => setModal(!modal)}
				className="mr-2 btn"
			>
				Settings
			</button>
		</>
	)
}

export default Settings
