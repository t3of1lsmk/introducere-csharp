document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  const codeInput = document.getElementById('codeInput');
  const outputArea = document.getElementById('outputArea');
  const runCodeBtn = document.getElementById('runCodeBtn');
  const resetCodeBtn = document.getElementById('resetCodeBtn');

  const starterCode = `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("Hello World!");
    }
}`;

  if (codeInput && outputArea) {
    codeInput.value = starterCode;

    const renderOutput = (message) => {
      outputArea.textContent = message;
    };

    const runCode = () => {
      const code = codeInput.value.trim();

      if (!code) {
        renderOutput('Introdu un cod înainte de a apăsa „Rulează”.');
        return;
      }

      const matches = [...code.matchAll(/Console\.WriteLine\s*\(\s*"([^"]*)"\s*\)/g)];

      if (matches.length > 0) {
        const result = matches.map((match) => match[1]).join('\n');
        renderOutput(result);
        return;
      }

      if (code.includes('Console.WriteLine')) {
        renderOutput('A aparut o eroare!.\nExemplu: Console.WriteLine("Hello World!");');
        return;
      }

      renderOutput('A aparut o eroare!.\nExemplu: Console.WriteLine("Hello World!");');
    };

    runCodeBtn.addEventListener('click', runCode);

    resetCodeBtn.addEventListener('click', () => {
      codeInput.value = starterCode;
      renderOutput('Apasă pe „Rulează” pentru a vedea rezultatul.');
    });
  }
});
