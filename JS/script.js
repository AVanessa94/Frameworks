function checkAnswer(option) {
  const feedback = document.getElementById('feedback');
  if (option === 'A') {
    feedback.textContent = "✅ ¡Correcto! Tailwind usa clases utilitarias.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Incorrecto. Bootstrap es el de componentes.";
    feedback.style.color = "red";
  }
}

