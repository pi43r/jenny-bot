const OpenAI = require('openai-api')
const openai = new OpenAI(process.env.OPENAI_API_KEY)

const response = async (req, res) => {
	let prompt = `${req.body.prompt}\n\nIch:${req.body.search}\nJENNY:`
  console.log('prompt: ' + prompt)
	const gptResponse = await openai.complete({
    engine: 'text-davinci-002',
		prompt: prompt,
		maxTokens: 200,
		temperature: 0.8,
		topP: 1,
		presencePenalty: 0,
		frequencyPenalty: 0.5,
		bestOf: 1,
		n: 1,
		stop: ['Ich:', 'Jenny:', '<|endoftext|>', ':']
	})
  
  // this doesn't work...
  if(res.statusCode !== 200) return {text: 'Ich kann gerade nicht denken...'}

  res.status(200).json({ text: `${gptResponse.data.choices[0].text}` })

}

export default response
