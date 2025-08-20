export interface AcupuncturePoint {
  id: string;
  name: string;
  meridian: string;
  location: string;
  indications: string[];
  functions: string[];
}

export const acupuncturePoints: AcupuncturePoint[] = [
  {
    id: 'LI4',
    name: 'Hegu (Unión del Valle)',
    meridian: 'Intestino Grueso',
    location: 'En el dorso de la mano, entre el primer y segundo metacarpiano, en el punto más alto del músculo cuando el pulgar y el índice están juntos.',
    indications: ['Dolor de cabeza (especialmente frontal)', 'Dolor de muelas', 'Dolor facial', 'Resfriado común', 'Fiebre', 'Estreñimiento', 'Inducción del parto.'],
    functions: ['Libera el exterior y expele el viento', 'Regula el Wei Qi (Qi defensivo)', 'Alivia el dolor', 'Armoniza el ascenso y descenso del Qi', 'Beneficia los ojos, nariz, boca y oídos.'],
  },
  {
    id: 'ST36',
    name: 'Zusanli (Tres Millas del Pie)',
    meridian: 'Estómago',
    location: 'Cuatro dedos por debajo de la rótula, un dedo hacia afuera de la cresta tibial.',
    indications: ['Fatiga', 'Problemas digestivos (dolor de estómago, vómitos, diarrea)', 'Debilidad general', 'Fortalecimiento del sistema inmunológico', 'Dolor de rodilla.'],
    functions: ['Armoniza el Estómago', 'Fortalece el Bazo y resuelve la humedad', 'Tonifica el Qi y nutre la Sangre y el Yin', 'Calma el Shen (espíritu)', 'Activa el meridiano y alivia el dolor.'],
  },
  {
    id: 'SP6',
    name: 'Sanyinjiao (Cruce de los Tres Yin)',
    meridian: 'Bazo',
    location: 'Cuatro dedos por encima de la punta del maléolo medial (tobillo interno), en el borde posterior de la tibia.',
    indications: ['Trastornos ginecológicos (menstruación irregular, síndrome premenstrual, infertilidad)', 'Problemas digestivos', 'Insomnio', 'Ansiedad', 'Problemas urinarios.'],
    functions: ['Fortalece el Bazo y el Estómago', 'Resuelve la humedad', 'Armoniza el Hígado y tonifica los Riñones', 'Regula la menstruación y beneficia la micción', 'Calma el Shen.'],
  },
  {
    id: 'PC6',
    name: 'Neiguan (Barrera Interna)',
    meridian: 'Pericardio',
    location: 'Tres dedos por encima del pliegue de la muñeca, entre los tendones de los músculos palmar largo y flexor radial del carpo.',
    indications: ['Náuseas y vómitos (mareo por movimiento, embarazo)', 'Ansiedad, palpitaciones, insomnio', 'Dolor en el pecho', 'Síndrome del túnel carpiano.'],
    functions: ['Calma el Corazón y el Shen', 'Armoniza el Estómago y alivia las náuseas', 'Abre el pecho y regula el Qi', 'Despeja el calor del Corazón.'],
  },
  {
    id: 'LV3',
    name: 'Taichong (Gran Corriente)',
    meridian: 'Hígado',
    location: 'En el dorso del pie, en la depresión distal a la unión del primer y segundo metatarsiano.',
    indications: ['Estrés, irritabilidad, ira', 'Dolor de cabeza, mareos, ojos rojos', 'Calambres menstruales', 'Hipertensión', 'Insomnio.'],
    functions: ['Extiende el Qi del Hígado estancado', 'Somete el Yang del Hígado y extingue el viento', 'Nutre la Sangre y el Yin del Hígado', 'Regula la menstruación.'],
  },
  {
    id: 'GB20',
    name: 'Fengchi (Estanque del Viento)',
    meridian: 'Vesícula Biliar',
    location: 'En la nuca, en la depresión entre las inserciones superiores de los músculos esternocleidomastoideo y trapecio.',
    indications: ['Dolor de cabeza, migraña, rigidez de nuca', 'Resfriado y gripe', 'Mareos, vértigo', 'Problemas oculares (visión borrosa, ojos rojos)', 'Hipertensión.'],
    functions: ['Elimina el Viento (interno y externo)', 'Beneficia la cabeza y los ojos', 'Despeja los sentidos', 'Activa el meridiano y alivia el dolor.'],
  },
];
