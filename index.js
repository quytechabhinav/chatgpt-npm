const axios = require('axios');

const path = require('path');

require('dotenv-safe').load({
  path: path.join(__dirname, '../.env'),
  sample: path.join(__dirname, '../.env.example')
});

async function generateChatGPTResponse(prompt) {
  const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
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
