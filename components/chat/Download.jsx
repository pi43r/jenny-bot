import { useState, useEffect } from 'react'
import useStore from 'helpers/store'

const Download = () => {
	const chatlog = useStore((s) => s.chatLog)

	useEffect(() => {
		console.log(chatlog)
	}, [chatlog])

	const createLog = () => {
		const blob = new Blob([chatlog], { type: 'text/json' })
		console.log(blob)
		window.URL.createObjectURL(blob)
	}

	const saveTemplateAsFile = (filename, dataObjToWrite) => {

		const txtlog = []

		for (const key in dataObjToWrite){
			txtlog.push(dataObjToWrite[key].type +': ' + dataObjToWrite[key].text)
		}

		txtlog = txtlog.join('\n')

		const blob = new Blob([txtlog], {
			type: 'text/txt'
		})
		const link = document.createElement('a')

		link.download = filename
		link.href = window.URL.createObjectURL(blob)
		link.dataset.downloadurl = ['text/txt', link.download, link.href].join(':')

		const evt = new MouseEvent('click', {
			view: window,
			bubbles: true,
			cancelable: true
		})

		link.dispatchEvent(evt)
		link.remove()
	}

	return (
		<>
			<button
				onClick={() => saveTemplateAsFile(Object.keys(chatlog)[0]+'-log.txt', chatlog)}
				className="btn my-2"
			>
				Download
			</button>
		</>
	)
}

export default Download
