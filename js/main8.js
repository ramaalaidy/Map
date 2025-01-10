function filterWords(inputWords) {
    return inputWords.filter(word => word.length > 7);
  }
  
  const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
  
  const result = filterWords(inputWords);
  console.log(result);  
  