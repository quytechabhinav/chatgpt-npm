const axios = require('axios');
//using opeiai
const openai = require('openai');
const apiKey = process.env.OPENAI_API_KEY;
const engine = 'curie-instruct-beta';

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
      'Authorization': `Bearer ${apiKey}`
    }
  });

  return response.data.choices[0].text.trim();
}

/**
 * Using OpenAI
 * @param {*} message 
 * @returns 
 */
async function generateChatGPTOpenAIResponse(message) {
  const chatLog = [];
  const context = chatLog.map((turn) => turn.response).join('\n');
  const completions = await openai.complete({
    apiKey,
    engine,
    prompt: message,
    maxTokens: 150,
    n: 1,
    context,
  });
  const { choices } = completions.data;
  const response = choices[0].text.trim();
  chatLog.push({ message, response });
  return response;
}


module.exports = {
    generateChatGPTResponse,
    generateChatGPTOpenAIResponse,
};
