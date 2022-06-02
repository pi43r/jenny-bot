import { useState, useEffect } from 'react'
import useStore from 'helpers/store'
import createMemory from 'helpers/createMemory'

const Download = () => {
	const chatlog = useStore((s) => s.chatLog)

	const saveTemplateAsFile = (filename, dataObjToWrite) => {

		const txtlog = createMemory(dataObjToWrite)
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
