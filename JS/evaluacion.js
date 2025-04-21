document.addEventListener("DOMContentLoaded", () => {
    const btnEvaluacion = document.getElementById("btnEvaluacion");
    const quizSection = document.getElementById("quiz");
    const btnEnviar = document.getElementById("btnEnviar");
  
    if (btnEvaluacion && quizSection) {
      btnEvaluacion.addEventListener("click", () => {
        quizSection.style.display = "block";
        quizSection.scrollIntoView({ behavior: "smooth" });
      });
    }
  
    if (btnEnviar) {
      btnEnviar.addEventListener("click", () => {
        const respuestasCorrectas = {
          q1: "b",
          q2: "a",
          q3: "b"
        };
  
        let aciertos = 0;
  
        for (let key in respuestasCorrectas) {
          const seleccionada = document.querySelector(`input[name="${key}"]:checked`);
          if (seleccionada && seleccionada.value === respuestasCorrectas[key]) {
            aciertos++;
          }
        }
  
        const resultado = document.getElementById("resultado");
        resultado.textContent = `Obtuviste ${aciertos} de 3 respuestas correctas.`;
        resultado.style.color = aciertos === 3 ? "lightgreen" : "orange";
      });
    }
  });
  
  
  const btnEvaluacion = document.getElementById("btnEvaluacion");

btnEvaluacion.addEventListener("click", () => {
  document.getElementById("quiz").style.display = "block";
});
