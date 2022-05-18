import Head from 'next/head'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
const SpeechToText = dynamic(() => import('components/SpeechToText'), {
  ssr: false
})
import useDivinity from 'hooks/useDivinity'

export default function Home() {
  const {
    isLoading,
    data,
    question,
    setQuestion,
    prompt,
    setPrompt,
    askDivinity
  } = useDivinity()

  return (
    <div className="min-h-screen p-4 w-screen flex flex-col justify-center items-center">
      <Head>
        <title>GPT-3 App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-5xl">
        <h1>Monira&#39;s Oracle</h1>

        <p className="my-2">
          GPT-3 needs an initial prompt that will be completed. <br />
          Here you would describe the &lsquo;personality&rsquo; and desired output. <br />
          More info in the{' '}
          <a
            href="https://beta.openai.com/docs/introduction"
            target="_blank"
            rel="noopener noreferrer"
          >
            documentation
          </a>
        </p>

        <label className="text-sm" htmlFor="prompt">
          Prompt
        </label>
        <textarea
          id="prompt"
          className="resize-none p-2 border border-stone-300 accent-purple-500 rounded-md max-w-md w-full font-mono"
          rows={5}
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />

        <div className="flex justify-center">
          <div className="mt-4 w-full">
            <h3 className="my-4">What is your question?</h3>
            <div className="flex flex-wrap">
              <input
                className="p-2 w-full border border-stone-300 font-mono"
                type="text"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
              />
              <button
                className="btn"
                type="button"
                onClick={() => askDivinity(prompt, question)}
              >
                Generate
              </button>
              <SpeechToText question={question} setQuestion={setQuestion} prompt={prompt} askDivinity={askDivinity} />
            </div>

            <h3 className="mt-8">Answer</h3>
            {isLoading ? (
              <div>Loading ...</div>
            ) : (
              <p
                className="font-mono"
                dangerouslySetInnerHTML={{
                  __html: data.text.replaceAll('\n', '<br/>')
                }}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
