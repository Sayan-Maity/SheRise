export const arrayItems = [
    {
      name: "Question & Answer",
      id: "q&a",
      description: "Answer questions based on existing knowledge.",
      option: {
        model: "text-davinci-003",
        temperature: 0.9,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    },
    {
      name: "Email Correction",
      id: "grammerCorrection",
      description: "Corrects sentences into error free standard English.",
      option: {
        model: "text-davinci-003",
        temperature: 0.9,
        max_tokens: 1000,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
    }
  ];