const analyzeData = async data => fetch(`http://localhost:8081/sentiment-analysis`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

export { analyzeData }
