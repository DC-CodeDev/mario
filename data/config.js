const CONFIG = {
  EPP: [
    'assets/epp-casco.png',
    'assets/epp-lentes.png',
    'assets/epp-guantes.png',
    'assets/epp-calzado.png',
    'assets/epp-ropa.png'
  ],
  CAL: [
    'assets/cal-diario.png',
    'assets/cal-semanal.png',
    'assets/cal-mensual.png',
    'assets/cal-anual.png'
  ],
  MARKERS: [
    [16.8, 21.9],
    [25.4, 68.2],
    [39.2, 46.9],
    [60.8, 51.3],
    [77.2, 58.3],
    [73.4, 85.7],
    [93.1, 66.7],
    [75.7, 40.1]
  ],
  ACCENT: '#f2a93b',
  SECTIONS: [
    { id: 1, type: 'para', half: true },
    { id: 2, type: 'checks', half: true, epp: true },
    { id: 3, type: 'componentes', half: false },
    { id: 4, type: 'tabla', half: false, grid: '230px minmax(0,1fr)', primary: -1, icons: true },
    { id: 5, type: 'pasos', half: false },
    { id: 6, type: 'checks', half: true },
    { id: 7, type: 'tabla', half: true, grid: 'minmax(0,1.1fr) minmax(0,.9fr) minmax(0,1.5fr)', primary: 1, icons: false },
    { id: 8, type: 'checks', half: true },
    { id: 9, type: 'checks', half: true },
    { id: 10, type: 'checks', half: true },
    { id: 11, type: 'tabla', half: true, grid: 'minmax(0,1fr) minmax(0,1.5fr)', primary: -1, icons: false },
    { id: 12, type: 'planilla', half: false },
    { id: 13, type: 'pasos', half: true },
    { id: 14, type: 'checks', half: true }
  ],
  PDF: {
    es: 'docs/guia-practica-de-mantenimiento-de-camara-frigorifica.pdf',
    en: 'docs/guia-practica-de-mantenimiento-de-camara-frigorifica.pdf',
    sizeMB: {
      es: '0,4',
      en: '0.4'
    }
  }
};
