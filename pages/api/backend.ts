// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from "openai";
console.log(process.env.OPENAI_API_KEY)
const configuration = new Configuration({
  apiKey:"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"

});
const openai = new OpenAIApi(configuration);

export default async function handler(
  reqL:any,
  res:any
) {
  console.log("clicked")
  const promp_request = `write an essay about turtles`;
  
  
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: promp_request,
    temperature: 0.6,
    max_tokens: 1000,
  });
  const respons = await completion.data.choices[0].text;
  
  
 
  res.status(200).json({ data: respons })
}
