const DATA_ES = {
    ui: { title1:'Mantenimiento técnico', title2:'Cámara frigorífica', lead:'Mantener la cámara en buen estado garantiza la eficiencia, la seguridad y la vida útil del equipo.', index:'Índice', openAll:'Abrir todo', closeAll:'Cerrar todo', tapHint:'Tocá un número para ubicar el componente.', print:'Imprimir', back:'Volver arriba', section:'Sección' },
    s1: { t:'Objetivo', p:'Garantizar el correcto funcionamiento del sistema, prevenir fallas, prolongar la vida útil de los componentes y conservar adecuadamente los productos almacenados.' },
    s2: { t:'Seguridad y EPP', checks:['Desconectar la alimentación eléctrica.','Usar elementos de protección personal (EPP).','Trabajar en un área ventilada.','No manipular el refrigerante.','Mantener el área limpia y ordenada.'], epp:['Casco','Lentes de seguridad','Guantes','Calzado de seguridad','Ropa de trabajo (antidesgarro)'] },
    s3: { t:'Componentes principales', alt:'Foto de la cámara frigorífica con los componentes numerados', items:['Tablero de control','Tablero eléctrico','Panel de luces testigo','Presostato','Filtro deshidratador','Condensador','Moto compresor','Grupo de válvulas (líquido y control de vacío)'] },
    s4: { t:'Plan de mantenimiento preventivo', cols:['Frecuencia','Tareas principales'], rows:[
      ['Diario',['Verificar temperatura.','Revisar ruidos y vibraciones.','Observar fugas.','Controlar el estado general del equipo.']],
      ['Semanal',['Limpiar rejillas y filtros.','Revisar drenaje de condensados.','Comprobar funcionamiento de ventiladores.']],
      ['Mensual',['Limpiar condensador y evaporador.','Revisar presión de trabajo.','Verificar estado de burletes y puertas.']],
      ['Semestral / Anual',['Revisar conexiones eléctricas.','Controlar el estado de refrigerante.','Revisar presostatos, válvulas y termostato.','Limpiar el sistema.']]] },
    s5: { t:'Limpieza del evaporador y condensador', groups:[
      ['Evaporador',['Desconectar la alimentación eléctrica.','Retirar el hielo o escarcha.','Limpiar con cepillo suave y agua tibia.','Verificar que los desagües estén libres.','Secar y volver a poner en funcionamiento.']],
      ['Condensador',['Desconectar la alimentación eléctrica.','Retirar polvo y suciedad.','Limpiar con aire comprimido o cepillo suave.','Verificar que los ventiladores funcionen correctamente.','Comprobar que no haya obstrucciones en el flujo de aire.']]] },
    s6: { t:'Revisión eléctrica', checks:['Verificar el estado de cables y conexiones.','Comprobar el funcionamiento del tablero de control y contactores.','Revisar el estado de los ventiladores.','Confirmar el correcto funcionamiento del termostato.','Revisar presostatos de alta y baja.','Asegurar la correcta puesta a tierra.'] },
    s7: { t:'Control de presiones y temperaturas', cols:['Parámetro','Rango típico','Observaciones'], rows:[
      ['Alta (condensación)','150 - 250 psi','Varía según el refrigerante y la temperatura ambiente.'],
      ['Baja (evaporación)','20 - 45 psi','Varía según la temperatura de la cámara y el refrigerante.'],
      ['Temperatura de cámara','-18 °C a 0 °C','Según el tipo de producto.'],
      ['Temperatura de descarga','70 - 90 °C','No debe superar los límites del fabricante.']] },
    s8: { t:'Detección de fugas de refrigerante', checks:['Inspeccionar uniones, soldaduras y válvulas.','Revisar presiones y temperaturas del sistema.','Aplicar agua jabonosa en uniones (método complementario).','Utilizar detector electrónico de fugas.'] },
    s9: { t:'Revisión de deshielo', checks:['Verificar que el ciclo funcione correctamente.','Comprobar el estado de resistencias.','Asegurar que el agua de deshielo drene bien.','Revisar el temporizador o control de deshielo.'] },
    s10: { t:'Puertas, burletes y aislamiento', checks:['Verificar que los burletes cierren bien.','Revisar bisagras y cerraduras.','Comprobar que no haya filtraciones de aire.','Inspeccionar el estado del aislamiento de paneles.'] },
    s11: { t:'Fallas frecuentes y posibles causas', cols:['Problema','Posibles causas'], rows:[
      ['No enfría','Falta de refrigerante, compresor dañado, termostato.'],
      ['Temperatura inestable','Sensor o termostato defectuoso.'],
      ['Ruidos anormales','Ventiladores, compresor, soportes.'],
      ['Exceso de escarcha','Falla en deshielo, puerta mal cerrada.'],
      ['Alto consumo eléctrico','Condensador sucio, fuga de aire, mal aislamiento.'],
      ['Fuga de agua','Desagüe obstruido, deshielo.']] },
    s12: { t:'Planilla de mantenimiento', sub:'(registro)', cols:['Fecha','Tarea','Realizado (✓)','Observaciones'], resp:'Responsable', firma:'Firma' },
    s13: { t:'Procedimiento ante una falla', steps:['Detener el equipo (si es necesario).','Verificar temperatura y presiones.','Revisar componentes básicos (tablero, ventiladores, compresor, válvulas).','Buscar fugas o bloqueos.','Registrar la falla y la acción realizada.'] },
    s14: { t:'Recomendaciones finales', checks:['Realizar el mantenimiento en los tiempos indicados.','Mantener un registro de todas las intervenciones.','Usar repuestos originales o de calidad equivalente.','No sobrecargar la cámara.','Mantener el área limpia y ordenada.','Cuidar el equipo para prolongar su vida útil.'] }
  };
