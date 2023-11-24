// "use client";

import React from "react";
import ReactMarkdown from "react-markdown";

let markdown = ``;

function About() {
  return (
    <div className="flex flex-col sm:gap-4 gap-6 max-w-3xl w-full pt-10 pb-24 px-4">
      <h1 className="text-3xl font-bold">About Ripeti</h1>
      <ReactMarkdown className="text-lg sm:text-base flex flex-col sm:gap-4 gap-6">
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default About;

markdown = `
Welcome to **Ripeti**, the innovative Italian language learning app designed to enhance your linguistic skills one phrase at a time. Immerse yourself in the essence of the Italian language with our daily phrases and leverage the power of repetition to embed them into your memory.

In Italian, the word *ripeti* means to repeat, which is precisely what we encourage you to do. Our challenge for you is to repeat each phrase until it becomes a natural part of your vocabulary, ensuring you not only learn it but truly internalize it.

**How Does Ripeti Work?**

**Step 1: Familiarize Yourself**: Start by getting to know our specially selected phrase of the day. Listen to its authentic pronunciation with our easy-to-use audio controls. Gain a deeper understanding by tapping on the Info button for a detailed linguistic explanation.

**Step 2: Embrace Repetition**: Proceed by repeating the phrase, with each iteration deepening your understanding and enhancing your pronunciation. It's important to not just repeat, but to absorb the essence of each word.

**Step 3: Commit to the Challenge**: We challenge you to repeat the phrase at least 50 times in a row. This might seem intense, but this level of repetition embeds the phrase in your memory, making recall natural and effortless. Use our in-app counter to keep track of your repetitions and maintain your motivation.

**Why Repetition?**

Repetition is more than a simple exercise; it's a scientifically backed method for effective learning. Research consistently demonstrates that repetition is crucial in moving information from short-term to long-term memory, known as the 'spacing effect'. Revisiting and repeating information strengthens neural pathways in the brain, leading to improved retention and recall. *Ripeti* utilizes this cognitive principle to ensure that you not only learn a phrase but truly internalize it.

**Support Ripeti**

Our passion is to provide a transformative learning experience. If Ripeti has been valuable to you, please consider supporting our mission. Donations can be made to our PayPal at oliverwolfson@gmail.com. Every contribution helps us in enhancing and broadening our services, ensuring we continue to offer the best in language learning.

*Buon apprendimento!* 🇮🇹
`;
