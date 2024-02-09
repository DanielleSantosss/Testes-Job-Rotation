const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
  };
  function calcularTotalFaturamento(faturamentoPorEstado) {
    let total = 0;
    for (let estado in faturamentoPorEstado) {
      total += faturamentoPorEstado[estado];
    }
    return total;
  }
  const totalFaturamento = calcularTotalFaturamento(faturamentoPorEstado);
  
  function calcularPercentualRepresentacao(faturamentoPorEstado, totalFaturamento) {
    const percentuais = {};
    for (let estado in faturamentoPorEstado) {
      const percentual = (faturamentoPorEstado[estado] / totalFaturamento) * 100;
      percentuais[estado] = percentual.toFixed(2) + "%";
    }
    return percentuais;
  }
  const percentuais = calcularPercentualRepresentacao(faturamentoPorEstado, totalFaturamento);

  alert("Percentual de representação de cada estado:");
  for (let estado in percentuais) {
    alert(`${estado}: ${percentuais[estado]}`);
  }