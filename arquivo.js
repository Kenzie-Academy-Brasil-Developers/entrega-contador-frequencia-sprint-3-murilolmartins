const button = document.getElementById("countButton");
button.addEventListener("click", function() { 
let typedText = document.getElementById("textInput").value;
typedText = typedText.toLowerCase();
typedText = typedText.replace(/[^a-z'\s]+/g, "");
let newword = typedText.split("")
newword.sort() 

const letterCounts = {};
for (let i = 0; i < newword.length; i++) {
    currentLetter = newword[i];
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1; 
     } else { 
        letterCounts[currentLetter]++; 
     }
  
 }

 for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span); 
 }
 words = typedText.split(/\s/);
 words.sort()
 const wordCounts = {};
for (let i = 0; i < words.length; i++) {
    currentWord = words[i];
    if (wordCounts[currentWord] === undefined) {
        wordCounts[currentWord] = 1; 
     } else { 
        wordCounts[currentWord]++; 
     }
     
 }
 for (let word in wordCounts) { 
    const span = document.createElement("span"); 
    const wordContent = `"${word}": ${wordCounts[word]}, `;
    span.innerText = wordContent; 
    const palavras = document.getElementById("wordsDiv");
    palavras.appendChild(span); 
 }

   
});

 