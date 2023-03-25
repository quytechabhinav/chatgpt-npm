# **ChatGPT API NPM Package**

A Node.js package for generating responses using the OpenAI ChatGPT API.

# **Installation**
You can install this package using npm:<br/>

```javascript
npm i chatgpt-npm
```

# **How to Use**
To use the generateChatGPTResponse function in your JavaScript code, you need to import it like this:

```javascript
const { generateChatGPTResponse } = require('chatgpt-npm');
```
Once you've imported the function, you can use it to generate responses like this:

```javascript
let searchData = req.body.search;
const searchResult = await generateChatGPTResponse(searchData);
console.log(searchResult)

```
In this example, we are passing the searchData object from the request body to the generateChatGPTResponse function, which will use the OpenAI GPT-3 model to generate a response. The response is then logged to the console using console.log(searchResult).

Note that generateChatGPTResponse is an asynchronous function, so you need to use the await keyword when calling it. Also, make sure that you have properly configured the OpenAI API credentials in order to use the function.


The generateChatGPTResponse function takes a string prompt as input and returns a string response generated by the ChatGPT API. Note that you will need to set the OPENAI_API_KEY environment variable with your actual OpenAI API key before using this package.

# License
This package is licensed under the MIT license. See the LICENSE file for more details.

# Acknowledgements
This package uses the axios library for making HTTP requests to the ChatGPT API.



## **How to reach me?**

<p align="left">
    <a href="https://github.com/quytechabhinav/MVC_Node_API/discussions" alt="github">
        <img src="https://img.shields.io/badge/github-%F0%9F%91%A8%F0%9F%92%BB-yellowgreen" /></a>
    <a href="https://www.linkedin.com/in/brainbenchabhinav/" alt="linkedin">
        <img src="https://img.shields.io/badge/linked-%F0%9F%91%A8%F0%9F%92%BB-orange" /></a>
    <a href="https://www.npmjs.com/package/chatgpt-npm" alt="npmjs.com">
        <img src="https://img.shields.io/badge/npm-%F0%9F%91%A8%F0%9F%92%BB-yellowgreen" /></a>
</p>



>Made with Love™ ❤️ <br>
>by Abhinav kashyap 
