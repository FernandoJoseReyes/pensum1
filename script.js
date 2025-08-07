document.addEventListener('DOMContentLoaded', () => {
  const ciclos = [
    {
      nombre: "Primer Ciclo",
      asignaturas: [
        { codigo: "AF-01", nombre: "Anatomía y fisiología", uv: 5 },
        { codigo: "MyP-02", nombre: "Microbiología y parasitología", uv: 4 },
        { codigo: "FP-03", nombre: "Fisiopatología", uv: 4 },
        { codigo: "EPyD-04", nombre: "Enfermería profesión y disciplina", uv: 2 },
        { codigo: "TAAE-05", nombre: "Teología aplicada a la atención de enfermería", uv: 2 }
      ]
    },
    {
      nombre: "Segundo Ciclo",
      asignaturas: [
        { codigo: "FE I-06", nombre: "Fundamentos de enfermería I", uv: 5 },
        { codigo: "FAE I-07", nombre: "Farmacología aplicada a enfermería I", uv: 4 },
        { codigo: "BH-08", nombre: "Bioquímica humana", uv: 4 },
        { codigo: "NSE-09", nombre: "Nutrición y salud en enfermería", uv: 3 },
        { codigo: "TyHCE-10", nombre: "Tecnología y humanización en el cuidado de enfermería", uv: 2 }
      ]
    },
    {
      nombre: "Tercer Ciclo",
      asignaturas: [
        { codigo: "FE II-11", nombre: "Fundamentos de enfermería II", uv: 7 },
        { codigo: "FAE II-12", nombre: "Farmacología aplicada a enfermería II", uv: 4 },
        { codigo: "CyEPE-13", nombre: "Comunicación y etiqueta profesional para enfermería", uv: 2 },
        { codigo: "AEDN-14", nombre: "Atención en enfermería y desastres naturales", uv: 3 },
        { codigo: "PAE-15", nombre: "Proceso de atención de enfermería", uv: 4 }
      ]
    },
    {
      nombre: "Cuarto Ciclo",
      asignaturas: [
        { codigo: "EAAEC-16", nombre: "Enfermería al adolescente y adulto en estado crítico", uv: 8 },
        { codigo: "IBS-17", nombre: "Inglés básico para la salud", uv: 2 },
        { codigo: "IIC-18", nombre: "Introducción a la investigación científica", uv: 4 },
        { codigo: "AISM-19", nombre: "Atención integral en salud mental", uv: 4 }
      ]
    },
    {
      nombre: "Quinto Ciclo",
      asignaturas: [
        { codigo: "PSEC-20", nombre: "Promoción de salud y enfermería comunitaria (práctica)", uv: 6 },
        { codigo: "EE-21", nombre: "Enfermería escolar", uv: 4 },
        { codigo: "IAE-22", nombre: "Investigación aplicada a enfermería", uv: 4 },
        { codigo: "IIS-23", nombre: "Inglés intermedio para la salud", uv: 4 }
      ]
    },
    {
      nombre: "Sexto Ciclo",
      asignaturas: [
        { codigo: "EMI I-24", nombre: "Enfermería materno infantil I", uv: 7 },
        { codigo: "IAS-25", nombre: "Inglés avanzado para la salud", uv: 5 },
        { codigo: "EQ-26", nombre: "Enfermería Quirúrgica", uv: 6 }
      ]
    },
    {
      nombre: "Séptimo Ciclo",
      asignaturas: [
        { codigo: "EMI II-27", nombre: "Enfermería materno infantil II", uv: 8 },
        { codigo: "EOCP-28", nombre: "Enfermería oncológica y cuidados paliativos", uv: 4 },
        { codigo: "ELE-29", nombre: "Ética y legislación en enfermería", uv: 4 }
      ]
    },
    {
      nombre: "Octavo Ciclo",
      asignaturas: [
        { codigo: "AGSE I-30", nombre: "Administración y gerencia de los servicios de enfermería I", uv: 8 },
        { codigo: "EGG-31", nombre: "Enfermería en gerontología y geriatría", uv: 4 },
        { codigo: "PS-32", nombre: "Psicología para enfermería", uv: 3 }
      ]
    },
    {
      nombre: "Noveno Ciclo",
      asignaturas: [
        { codigo: "AGSE II-33", nombre: "Administración y gerencia de los servicios de enfermería II", uv: 8 },
        { codigo: "FFyEE-34", nombre: "Fundamento de finanzas y emprendedurismo en enfermería", uv: 4 },
        { codigo: "DAE-35", nombre: "Docencia aplicada en enfermería", uv: 5 }
      ]
    },
    {
      nombre: "Décimo Ciclo",
      asignaturas: [
        { codigo: "EP-36", nombre: "Enfermería en psiquiatría", uv: 6 },
        { codigo: "LGCE-37", nombre: "Liderazgo y gestión del cambio en enfermería", uv: 4 }
      ]
    }
  ];

  const ciclosContainer = document.getElementById('ciclos');

  ciclos.forEach(ciclo => {
    const cicloDiv = document.createElement('div');
    cicloDiv.classList.add('ciclo');

    const cicloHeader = document.createElement('div');
    cicloHeader.classList.add('ciclo-header');
    cicloHeader.textContent = ciclo.nombre;
    cicloDiv.appendChild(cicloHeader);

    const cicloContent = document.createElement('div');
    cicloContent.classList.add('ciclo-content');

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    thead.innerHTML = `<tr><th>Código</th><th>Asignatura</th><th>UV</th></tr>`;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    ciclo.asignaturas.forEach(asignatura => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${asignatura.codigo}</td><td>${asignatura.nombre}</td><td>${asignatura.uv}</td>`;
      tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    cicloContent.appendChild(table);
    cicloDiv.appendChild(cicloContent);
    ciclosContainer.appendChild(cicloDiv);

    cicloHeader.addEventListener('click', () => {
      cicloContent.style.display = cicloContent.style.display === 'block' ? 'none' : 'block';
      cicloContent.style.transition = 'all 0.3s ease';
    });
  });
});
