const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const botao = document.querySelector("button");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", function () {
    const valorPeso = parseFloat(peso.value);
    const valorAltura = parseFloat(altura.value);

    if (valorPeso > 0 && valorAltura > 0) {
        const imc = valorPeso / (valorAltura * valorAltura);
        resultado.innerHTML = `Seu IMC é <strong>${imc.toFixed(2)}</strong>`;
    } else {
        resultado.innerHTML = "Preencha peso e altura corretamente.";
    }
});
