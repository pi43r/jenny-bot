const createMemory = (obj, lastnum) => {
	const txtlog = []

	for (const key in obj) {
		const name = obj[key].type == 'bot' ? 'Jenny: ' : 'A: '
		const text = obj[key].text.replaceAll('\n', '').trimStart()
		txtlog.push(name + text)
	}

	let out
	if (lastnum) {
		out = txtlog.slice(-lastnum).join('\n')
	} else {
		out = txtlog.join('\n')
	}

	return out
}

export default createMemory
