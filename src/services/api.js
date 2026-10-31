// Serviço de dados do protótipo Fórmula IF Puma Racing
export const getCarSpecs = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "Em Construção / Manufatura",
        motor: "Honda CB 250F Twister (Monocilíndrico 4T OHC 4V)",
        cilindrada: "249,5 cm³",
        potenciaEstimada: "22,6 cv a 7.500 rpm",
        torqueEstimado: "2,28 kgf.m a 6.000 rpm",
        chassi: "Treliça Tubular Spaceframe (Tubos 4020)",
        cambio: "6 velocidades sequencial",
        sede: "IFBA Campus Jequié - BA"
      })
    }, 300)
  })
}
