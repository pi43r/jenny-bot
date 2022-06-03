# Jenny Bot

This is a little chatbot doing interviews for [Jenny](https://sprachkunst.uni-ak.ac.at/jenny/ausgaben) from the institute of Sprachkunst in Vienna.
It uses [GPT3](https://beta.openai.com) with some prompt engineering to simulate a newspaper interview. The prompt consists of a 'setting' and 'personality' and plugs a little 'memory' in between the next answer. 


It is built with [Next.js](https://nextjs.org/) using the [openai-api](https://github.com/Njerschow/openai-api) and [react-conversations](https://github.com/Chroma91/react-conversation)



## Getting Started

Add your `OPENAI_API_KEY` to `env.local`

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Deployed on [vercel](https://vercel.com)
