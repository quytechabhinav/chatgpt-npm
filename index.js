const axios = require('axios');


async function generateChatGPTResponse(prompt) {
  const response = await axios.post('https://api.openai.com/v1/engines/curie/completions', {
    prompt,
    max_tokens: 50,
    n: 1,
    stop: '\n',
    temperature: 0.7,
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    }
  });

  return response.data.choices[0].text.trim();
}


module.exports = {
    generateChatGPTResponse,
};
