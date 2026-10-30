// Exemplo de serviço para chamadas de API ou dados mockados
export const getCarSpecs = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        potencia: "85 cv",
        peso: "210 kg",
        aceleracao: "0-100 km/h em 3.8s",
        velocidadeMaxima: "140 km/h"
      })
    }, 500)
  })
}

