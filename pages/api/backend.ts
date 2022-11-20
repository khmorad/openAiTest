// Next.js API route support: https://nextjs.org/docs/api-routes/introductions
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey:process.env.OPENAI_API_KEY//

});
const openai = new OpenAIApi(configuration);

export default async function handler(
  req:any,
  res:any
) {
  console.log("clicked")
  try{
  const promp_request = `write an essay about turtles`;
  
  
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: promp_request,
    temperature: 0.6,
    max_tokens: 1000,
  });
  console.log(completion)
  const respons = completion.data.choices[0].text;
  res.status(200).json({ data: respons })
}catch(error){
  res.status(500)
  console.log(error)
}
 

}
