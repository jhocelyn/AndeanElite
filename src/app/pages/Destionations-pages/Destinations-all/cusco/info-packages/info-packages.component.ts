import { Component } from '@angular/core';
import {BookingFormComponent} from '../../../../../shared/components/general/booking-form/booking-form.component';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ImageCarouselComponent} from '../../../../../shared/components/general/image-carousel/image-carousel.component';

@Component({
  selector: 'app-info-packages',
  standalone: true,
  imports: [
    BookingFormComponent,
    NgForOf,
    ImageCarouselComponent,
    NgIf
  ],
  templateUrl: './info-packages.component.html',
  styleUrl: './info-packages.component.css'
})
export class InfoPackagesComponent {
  packageInfo: any;
  destinations_cusco = [
    {
      id: 1,
      name: 'Cusco Especial 5d/4n',
      description: 'Viva la magia completa de Cusco en una viaje de 5 días y 4 noches que incluye estadía en Cusco, tour de la ciudad, visita arqueológica, tour al Valle Sagrado, tren Expedition o Vistadome, visita a Machu Picchu y visita a la Montaña de 7 Colores.',
      itinerary: [
        { day: 'DIA 01: CUSCO IN – VISITANDO LA CIUDAD DEL CUSCO Y SUS ALREDEDORES.', description: 'Recepción y traslado al hotel elegido. A las 13:00 horas iniciaremos nuestra visita por la ciudad del Cusco y alrededores.\n' +
            '\n' +
            'Primeramente, nos dirigiremos hasta el Parque Arqueológico para ingresar a Sacsayhuaman considerada como una de las edificaciones más hermosas del Mundo y el observatorio astronómico de Qenqo, continuaremos con la visita a la Plaza Mayor donde la mayoría de las construcciones conservan el estilo colonial, visitaremos la Catedral y finalmente el Templo de Qoricancha, la máxima expresión de la arquitectura Inca, actualmente Convento de Santo Domingo. Retorno a su hotel.'},
        { day: 'DIA 02: VALLE SAGRADO DE LOS INCAS', description: 'En este tour más extenso realizamos un paseo por todo lo mejor del Valle Sagrado de los Incas. Empezando de su hotel entre 6:30 a 7:00 am, viajamos a Chinchero, pueblo ancestral de los Incas, donde vamos a apreciar la hacienda real del Inca Tupac Yupanqui, y la plaza y templo colonial. Seguimos a Moray para visitar el centro incaico de pesquisas agrícolas, con sus impresionantes andenes en forma circular. De allí a la antigua salinera de Maras, lugar visualmente único e ideal para practicar la fotografía. Bajando al hermoso Valle Sagrado, almorzaremos en un restaurante estilo buffet en el pueblo de Urubamba. Bordeando el río del mismo nombre, llegamos a la antigua ciudadela de Ollantaytambo, con su imponente fortaleza y sus incomparables canales, grandes muros y templos, maravillosos ejemplos de la arquitectura de los Incas.\n' +
            '\n' +
            'Hacia el final del tour estaremos en Pisac, un complejo arquitectónico de enormes terrazas y templos de piedra de fino acabado, otra joya de la civilización incaica. En el mercado de Pisac podrá admirar lo mejor de la artesanía cusqueña. Retornamos a su hotel en Cusco al final de un día de maravillosas experiencias.\n' +
            '\n' +
            'Retorno a su hotel en Cusco.\n' +
            '\n'},
        { day: 'DIA 03: MACHU PICCHU', description: 'Muy temprano nos trasladaremos a la estación de trenes para dirigirnos a Aguas Calientes, poblado donde inicia el ascenso a Machu Picchu. Subiremos en buses hasta la sima para realizar una visita guiada a la ciudadela por un espacio de 2 horas. Observaremos la zona agrícola, el sector urbano, el templo del sol, las canteras de piedra, el jardín botánico, la Plaza de los Templos, las tres ventanas, el reloj solar o intihuatana, la roca sagrada, entre otros. También tendremos tiempo libre para apreciar el majestuoso lugar y tomar fotografías. Terminado el recorrido tomaremos el bus de retorno a Aguas Calientes, allí disfrutaremos de un delicioso Almuerzo Buffet para luego abordar nuestro tren de vuelta a la ciudad. Retorno a su hotel en Cusco.'},
        { day: 'DIA 04: MONTAÑA DE 7 COLORES – VINICUNCA', description: 'A las 4:00 horas recojo de pasajeros y traslado a las faldas del Nevado Ausangate para iniciar la caminata hacia Vinicunca, Montaña 7 Colores. Haremos una parada en el pueblo de Cusipata para tomar desayuno. Después de una breve charla iniciaremos la caminata de 3 horas con un guía profesional. En el camino aprenderemos de las diferentes costumbres y el misticismo que oculta la cordillera andina. De regreso volveremos al pueblo de Cusipata para el almuerzo respectivo. Retorno a su hotel en Cusco a las 16:30 horas. Noche libre en la ciudad.'},
        { day:'DÍA 05: LAGUNA HUAMANTAY',description: '4:00hrs a 4:30 hrs Inicio de tour y recojo de su respectivo hotel. Con el guía, continuará hasta llegar al poblado de Mollepata, donde disfrutará del desayuno. En el transcurso llegará hasta Soraypampa, donde tendrá un pequeño descanso y luego, continuará con la caminata a la Laguna Humantay el cual se encuentra a una altitud de 4250 m.s.n.m. Este ascenso tiene una duración de 1hr30min aproximadamente, al llegar a la laguna Humantay tendrá tiempo suficiente para apreciar la majestuosa laguna que nos ofrece la naturaleza. También, se realizará una breve demostración del pago a la tierra a los Apus sagrados. A hora oportuna, retornará a Soraypampa y a continuación, al poblado de Mollepata para disfrutar del almuerzo. Retorno a la ciudad de Cusco, aproximadamente a las 18:30hrs o 19:00hrs. A la hora coordinada traslado hacia el aeropuerto / estación.'}
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      conditions_to_childs:'Tarifa CHD aplica a niños menores de 08 años y comparten servicios hoteleros con los padres. Si desean cama adicional, consultar tarifa. Máximo un niño por habitación, mínimo 2 adultos pagantes en base doble.\n' +
        '\n' +
        'Tarifa JR, aplica de 08 hasta 16 años de edad, incluye todos los servicios, Máximo un JR por habitación, Mínimo 2 Adultos pagantes en base doble.\n' +
        '\n' +
        'Excepto en hotel Casa Cartagena, niños son considerados menores de 6 años. Comparten cama con los padres.',
      conditions:[
        'Tarifas sujetas a confirmación de la reserva.',
        'Todos los precios están expresados en Dólares Americanos por persona.',
        'Los precios deben ser confirmados una vez solicitada la reserva.',
        'Programas No permiten cambios, son no reembolsables, no endosables ni transferibles.',
        'Pago con tarjeta de crédito Visa _ se puede pagar mediante safety pay o visa link con recargo de 3.5 %',
        'Considerar horarios de check in y check out de los hoteles en destino',
        '“El hotel” se reserva el derecho de asignar la ubicación de las habitaciones solicitadas, de acuerdo con la disponibilidad y a la llegada del huésped.',
        'Arma tu viaje y el operador elegido sólo actúa como intermediario entre los proveedores locales e internacionales y es responsable únicamente por la organización de los tours adquiridos. Por lo tanto, el usuario no puede imputarnos responsabilidad alguna por causas que estén fuera de nuestro alcance.',
        'No somos responsables de perjuicio o retraso alguno derivado de circunstancias ajenas a nuestro control (ya sean causas fortuitas, de fuerza mayor y a cualquier pérdida, daño, accidente o alguna otra irregularidad que pudiera ocurrirle al usuario final).',
        'No nos responsabilizamos por documentos, permisos de viajes, visas, vacunas,pruebas médicas etc. Los documentos de viaje son responsabilidad completa de cada pasajero.'
      ],
      includes:[
        'Traslado en Cusco aeropuerto – hotel – estación',
        '4 noches de alojamiento en Cusco + desayunos',
        'Cusco City Tour + parque arqueológico',
        'Full Day Super Valle + almuerzo buffet (Maras Moray + Valle Sagrado)',
        'Full Day Machu Picchu + almuerzo buffet en Aguas Calientes',
        'Tren Expedition ida y vuelta',
        'Full Day Vinicunca Montaña 7 Colores + desayuno y almuerzo',
        'Full Day Laguna Humantay',
        'Entradas turísticas',
        'Guía profesional (Español o Inglés)',
        'Asistencia durante todo el viaje'
      ],
      not_includes:[
        'Tickets aéreos nacionales',
        'Tickets aéreos internacionales',
        'Alimentación no especificada',
        'Seguro de viaje',
        'Propinas',
      ],
      category:'Tren PeruRail Vistadome en RT                           US$42.00\n' +
        'Almuerzo Café Inkaterra (sin bebidas)                  US$6.00',
      note:'',
      imageLinks:[
        'assets/img/destinations/cusco/brown-and-white-lama-resting-on-green-meadow-at-ma-2024-07-03-02-43-58-utc_11zon.webp',
        'assets/img/destinations/cusco/cusco-2023-11-27-05-29-33-utc_11zon.webp',
        'assets/img/destinations/cusco/hike-in-peru-2023-11-27-05-01-51-utc_11zon.webp',
        'assets/img/destinations/cusco/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp'
      ]
    },
    {
      id: 2,
      name: 'Cusco Exótico 4d/3n',
      description: 'No aplica para temporadas altas (Semana Santa, Inti Raymi, Fiestas Patrias, Año Nuevo).\n' +
        'Descubre la belleza de Machu Picchu y la Montaña de 7 Colores',
      itinerary: [
        { day: 'DIA 01: CUSCO IN', description: 'Recepción y traslado al hotel elegido. Tarde libre para aclimatación.'},
        { day: 'DIA 02: MACHU PICCHU', description: 'Muy temprano nos trasladaremos a la estación de trenes para dirigirnos a Aguas Calientes, poblado donde inicia el accenso a Machu Picchu. Subiremos en buses hasta la sima para realizar una visita guiada a la ciudadela por un espacio de 2 horas. Terminado el recorrido tomarenos el bus de retorno a Aguas Calientes, allí disfrutaremos de un delicioso Almuerzo Buffet para luego abordar nuestro tren de vuelta a la ciudad. Finalmente abordaremos nuestro tren de vuelta a Cusco. Retorno a su hotel.'},
        { day: 'DIA 03: MONTAÑA 7 COLORES – VINICUNCA', description: 'A las 6:00 horas recojo de pasajeros y traslado a las faldas del Nevado Ausangate para iniciar el tour a la Montaña 7 Colores. Haremos una parada en el pueblo de Cusipata para tomar desayuno. Después de una breve charla iniciaremos la caminata de 3 horas con un guía profesional. En el camino aprenderemos de las diferentes costumbres y el misticismo que oculta la cordillera andina. De regreso volveremos al pueblo de Cusipata para el almuerzo respectivo. Retorno a su hotel en Cusco a las 16:30 horas.'},
        { day: 'DIA 04: CUSCO OUT', description: 'Desayuno en el hotel y mañana libre para explorar la ciudad. A una hora coordinada traslado hacia el aeropuerto para abordar su vuelo.' },
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      conditions_to_childs:'Tarifa CHD aplica a niños menores de 05 años y comparten servicios hoteleros con los padres. Máximo un niño por habitación, mínimo 2 adultos pagantes en base doble. Excepto en los siguientes hoteles, No se considera cama para niños. Incluye solo el desayuno: (Si desean cama adicional, consultar tarifa)',
      conditions:[
        'Tarifas sujetas a confirmación de la reserva.',
        'Todos los precios están expresados en Dólares Americanos por persona.',
        'Los precios deben ser confirmados una vez solicitada la reserva.',
        'Programas No permiten cambios, son no reembolsables, no endosables ni transferibles.',
        'Pago con tarjeta de crédito Visa _ se puede pagar mediante safety pay o visa link con recargo de 3.5 %',
        'Considerar horarios de check in y check out de los hoteles en destino',
        '“El hotel” se reserva el derecho de asignar la ubicación de las habitaciones solicitadas, de acuerdo con la disponibilidad y a la llegada del huésped.',
        'Arma tu viaje y el operador elegido sólo actúa como intermediario entre los proveedores locales e internacionales y es responsable únicamente por la organización de los tours adquiridos. Por lo tanto, el usuario no puede imputarnos responsabilidad alguna por causas que estén fuera de nuestro alcance.',
        'No somos responsables de perjuicio o retraso alguno derivado de circunstancias ajenas a nuestro control (ya sean causas fortuitas, de fuerza mayor y a cualquier pérdida, daño, accidente o alguna otra irregularidad que pudiera ocurrirle al usuario final).',
        'No nos responsabilizamos por documentos, permisos de viajes, visas, vacunas,pruebas médicas etc. Los documentos de viaje son responsabilidad completa de cada pasajero.'
      ],
      includes:[
        'Traslado aeropuerto – hotel – aeropuerto en movilidad privada.',
        '2 noches de alojamiento en Arequipa + desayunos.',
        '1 noche de Alojamiento en Chivay HTL VITA Colca o similar + desayuno.',
        'City Tour + Monasterio Santa Catalina.',
        'Cañon del Colca.',
        'Entradas turísticas.',
        'Guía Profesional Bilingüe (Español).',
        'Asistencia durante todo el viaje.',
      ],
      not_includes:[
        'Ticketes Aereos',
        'Seguro de viaje',
        'Propinas',
        'Bebidas alcohólicas'
      ],
      category:'Tren PeruRail Vistadome round trip US$30.00 - \n' +
        'Almuerzo Café Inkaterra (sin bebidas) US$6.00\n',
      note:'NOTA: Min. 2 personas. Consultar tarifas por suplemento si el servicio es para 1 Pax.\n' +
        'Aplica solo pasajeros Peruanos o Residentes.\n',
      imageLinks:[
        'assets/img/destinations/cusco/brown-and-white-lama-resting-on-green-meadow-at-ma-2024-07-03-02-43-58-utc_11zon.webp',
        'assets/img/destinations/cusco/cusco-2023-11-27-05-29-33-utc_11zon.webp',
        'assets/img/destinations/cusco/hike-in-peru-2023-11-27-05-01-51-utc_11zon.webp',
        'assets/img/destinations/cusco/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp'
      ]
    },
    {
      id: 3,
      name: 'Cusco Inolvidable 4D/3N',
      description: 'PROMOCION DE COMPRA HASTA DICIEMBRE 2021\n' +
        'No aplica para temporadas altas (Semana Santa, Inti Raymi, Fiestas Patrias, Año Nuevo).\n' +
        'Visita ciudad del Cusco, Valle Sagrado y Machu Picchu',
      itinerary: [
        { day: 'DIA 01: CUSCO IN – VISITANDO LA CIUDAD DEL CUSCO Y SUS ALRREDEDORES.', description: 'Recepción y traslado al hotel elegido. A las 13:00 horas iniciaremos nuestra visita por ciudad del Cusco y alrrededores.\n' +
            '\n' +
            'Primeramente nos dirigiremos hasta el Parque Arqueologico para ingresar a Sacsayhuaman considerarada como una de las edificaciones mas hermosas del Mundo y el observatorio astronómico de Qenqo, continuaremos con la visita a la Plaza Mayor donde la mayoría de las construcciones conservan el estilo colonial, visitaremos la Catedral y finalmente el Templo de Qoricancha, la máxima expresión de la arquitectura Inca, actualmente Convento de Santo Domingo. Retorno a su hotel.'},
        { day: 'DIA 02: VALLE SAGRADO DE LOS INCAS', description: 'Desayuno en el hotel. A las 08:30 horas recojo de pasajeros para realizar el tour Valle Sagrado. Visitaremos Pisaq, donde apreciaremos el complejo arqueológico así como el mercado típico artesanal, allí podemos comprar hermosas artesanías. Continuaremos con el trayecto por el margen del Río Vilcanota hacia el Valle Urubamba donde disfrutaremos de un exquisito almuerzo buffet. Después del almuerzo continuaremos nuestro tour hacia Ollantaytambo y exploraremos el maravilloso complejo arqueológico ahí localizado. Retorno a su hotel en Cusco.'},
        { day: 'DIA 03: MACHU PICCHU', description: 'Muy temprano nos trasladaremos a la estación de trenes para dirigirnos a Aguas Calientes, poblado donde inicia el accenso a Machu Picchu. Subiremos en buses hasta la sima para realizar una visita guiada a la ciudadela por un espacio de 2 horas. Terminado el recorrido tomarenos el bus de retorno a Aguas Calientes, allí disfrutaremos de un delicioso almuerzo buffet para luego abordar nuestro tren de vuelta a la ciudad. Retorno a su hotel.'},
        { day: 'DIA 04: CUSCO OUT', description: 'Desayuno en el hotel y mañana libre para explorar la ciudad. Traslado al aeropuerto a la hora coordinada.'},
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      conditions_to_childs:'Tarifa CHD aplica a niños menores de 08 años y comparten servicios hoteleros con los padres. Si desean cama adicional, consultar tarifa. Máximo un niño por habitación, mínimo 2 adultos pagantes en base doble.\n' +
        '\n' +
        'Tarifa JR, aplica de 08 hasta 16 años de edad, incluye todos los servicios, Máximo un JR por habitación, Mínimo 2 Adultos pagantes en base doble.\n' +
        '\n',
      conditions:[
        'Tarifas sujetas a confirmación de la reserva.',
        'Todos los precios están expresados en Dólares Americanos por persona.',
        'Los precios deben ser confirmados una vez solicitada la reserva.',
        'Programas No permiten cambios, son no reembolsables, no endosables ni transferibles.',
        'Pago con tarjeta de crédito Visa _ se puede pagar mediante safety pay o visa link con recargo de 3.5 %',
        'Considerar horarios de check in y check out de los hoteles en destino',
        '“El hotel” se reserva el derecho de asignar la ubicación de las habitaciones solicitadas, de acuerdo con la disponibilidad y a la llegada del huésped.',
        'Arma tu viaje y el operador elegido sólo actúa como intermediario entre los proveedores locales e internacionales y es responsable únicamente por la organización de los tours adquiridos. Por lo tanto, el usuario no puede imputarnos responsabilidad alguna por causas que estén fuera de nuestro alcance.',
        'No somos responsables de perjuicio o retraso alguno derivado de circunstancias ajenas a nuestro control (ya sean causas fortuitas, de fuerza mayor y a cualquier pérdida, daño, accidente, alguna otra irregularidad que pudiera ocurrirle al usuario final u otros servicios relacionados, ni por fenómenos naturales, enfermedades, guerra, cuarentena, huelgas, o por intervenciones de la Policía, aduanas o reglamentos de sanidad u otros factores más allá de su control. La agencia se reserva el derecho de cambiar cualquier tour o excursión si lo considera necesario para poder otorgar una mejor experiencia en el viaje. Arma tu viaje no es responsable de los trámites de visado ni vacunación requeridos',
      ],
      includes:[
        'Traslado Aeropuerto de Cusco – hotel- Aeropuerto de Cusco',
        '03 noches de alojamiento en hotel de Cusco (desayuno incluido)',
        'Tour por la ciudad de cusco con Parque Arqueologico.',
        'Tour Valle Sagrado (almuerzo buffet incluido)',
        'Excursión día completo Machu Picchu (almuerzo en aguas calientes incluido)',
        'Ticket de tren Categoría Expedition (ida y vuelta)',
        'Entradas turísticas',
        'Guía profesional (Español)',
        'Asistencia durante todo el viaje.'
      ],
      not_includes:[
        'Tickets aéreos nacionales',
        'Tickets aéreos internacionales',
        'Alimentación no especificada',
        'Seguro de viaje.',
        'Propinas'
      ],
      category:'Tren PeruRail Vistadome round trip US$30.00\n' +
        'Almuerzo Café Inkaterra (sin bebidas) US$6.00\n',
      note:'NOTA: Min. 2 personas. Consultar tarifas por suplemento si el servicio es para 1 Pax.\n' +
        'Aplica solo pasajeros Peruanos o Residentes.\n',
      imageLinks:[
        'assets/img/destinations/cusco/brown-and-white-lama-resting-on-green-meadow-at-ma-2024-07-03-02-43-58-utc_11zon.webp',
        'assets/img/destinations/cusco/cusco-2023-11-27-05-29-33-utc_11zon.webp',
        'assets/img/destinations/cusco/hike-in-peru-2023-11-27-05-01-51-utc_11zon.webp',
        'assets/img/destinations/cusco/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp'
      ]
    },
    {
      id: 4,
      name: 'Cusco Majestuoso 5D/4N',
      description: 'PROMOCION DE COMPRA HASTA DICIEMBRE 2021\n' +
        'No aplica para temporadas altas (Semana Santa, Inti Raymi, Fiestas Patrias, Año Nuevo).\n' +
        'Visita ciudad del Cusco, Valle Sagrado y Machu Picchu',
      itinerary: [
        { day: 'DIA 01: CUSCO IN – VISITANDO LA CIUDAD DEL CUSCO Y SUS ALRREDEDORES', description: 'Recepción y traslado al hotel elegido. A las 13:00 horas iniciaremos nuestra visita por ciudad del Cusco y alrrededores.\n' +
            '\n' +
            'Primeramente nos dirigiremos hasta el Parque Arqueologico para ingresar a Sacsayhuaman considerarada como una de las edificaciones mas hermosas del Mundo y el observatorio astronómico de Qenqo, continuaremos con la visita a la Plaza Mayor donde la mayoría de las construcciones conservan el estilo colonial, visitaremos la Catedral y finalmente el Templo de Qoricancha, la máxima expresión de la arquitectura Inca, actualmente Convento de Santo Domingo. Retorno a su hotel.'},
        { day: 'DIA 02: VALLE SAGRADO DE LOS INCAS', description: 'Desayuno en el hotel. A las 08:30 horas recojo de pasajeros para realizar el tour Valle Sagrado. Visitaremos Pisaq, donde apreciaremos el complejo arqueológico así como también el mercado típico artesanal, allí podemos comprar hermosas artesanías. Continuaremos con el trayecto por el margen del Río Vilcanota hacia el Valle de Urubamba donde disfrutaremos de un exquisito almuerzo buffet en el restaurante Tunupa. Después del almuerzo continuaremos nuestro tour hacia Ollantaytambo, uno de los últimos pueblos Incas vivientes. Recorreremos calles que mantienen el mismo trazo de la época Inca y exploraremos el maravilloso complejo arqueológico ahí localizado. Retorno a su hotel en Cusco.'},
        { day: 'DIA 03: MACHU PICCHU', description: 'Muy temprano nos trasladaremos a la estación de trenes para dirigirnos a Aguas Calientes, poblado donde inicia el accenso a Machu Picchu. Subiremos en buses hasta la cima para realizar una visita guiada a la ciudadela por un espacio de 2 horas. Observaremos la zona agrícola, el sector urbano, el templo del sol, las canteras de piedra, el jardín botánico, la Plaza de los Templos, las tres ventanas, el reloj solar o intihuatana, la roca sagrada, entre otros. También tendremos tiempo libre para apreciar el majestuoso lugar y tomar fotografías. Terminado el recorrido tomarenos el bus de retorno a Aguas Calientes, allí disfrutaremos de un delicioso almuerzo buffet para luego abordar nuestro tren de vuelta a la ciudad. Retorno a su hotel en cuzco.'},
        { day: 'DIA 04: MARAS + MORAY', description: 'Desayuno en el hotel. A las 08:30 horas recojo de pasajeros para realizar el tour Maras y Moray. Iniciaremos con la visita a Maras ubicado en la provincia de Urubamba , allí se encuentra las minas de sal más importantes de la región del Cusco. Posteriormente visitaremos el formidable complejo arqueológico de Moray, conformado por admirables sistemas de andenerías que se superponen concéntricamente como un gigantesco anfiteatro. A las 15:00 horas retornaremos a su hotel en su cusco para disfrutar de la tarde.'},
        { day: 'DIA 05: CUSCO OUT', description: 'Desayuno en el hotel y mañana libre para explorar la ciudad del Cusco. A la hora coordinada traslado hacia el aeropuerto para abordar su vuelo.'}
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      conditions_to_childs:'Tarifa CHD aplica a niños menores de 08 años y comparten servicios hoteleros con los padres. Si desean cama adicional, consultar tarifa. Máximo un niño por habitación, mínimo 2 adultos pagantes en base doble.\n' +
        '\n' +
        'Tarifa JR, aplica de 08 hasta 16 años de edad, incluye todos los servicios, Máximo un JR por habitación, Mínimo 2 Adultos pagantes en base doble.\n' +
        '\n',
      conditions:[
        'Tarifas sujetas a confirmación de la reserva.',
        'Todos los precios están expresados en Dólares Americanos por persona.',
        'Los precios deben ser confirmados una vez solicitada la reserva.',
        'Programas No permiten cambios, son no reembolsables, no endosables ni transferibles.',
        'Pago con tarjeta de crédito Visa _ se puede pagar mediante safety pay o visa link con recargo de 3.5 %',
        'Considerar horarios de check in y check out de los hoteles en destino',
        '“El hotel” se reserva el derecho de asignar la ubicación de las habitaciones solicitadas, de acuerdo con la disponibilidad y a la llegada del huésped.',
        'Arma tu viaje y el operador elegido sólo actúa como intermediario entre los proveedores locales e internacionales y es responsable únicamente por la organización de los tours adquiridos. Por lo tanto, el usuario no puede imputarnos responsabilidad alguna por causas que estén fuera de nuestro alcance.',
        'No somos responsables de perjuicio o retraso alguno derivado de circunstancias ajenas a nuestro control (ya sean causas fortuitas, de fuerza mayor y a cualquier pérdida, daño, accidente, alguna otra irregularidad que pudiera ocurrirle al usuario final u otros servicios relacionados, ni por fenómenos naturales, enfermedades, guerra, cuarentena, huelgas, o por intervenciones de la Policía, aduanas o reglamentos de sanidad u otros factores más allá de su control. La agencia se reserva el derecho de cambiar cualquier tour o excursión si lo considera necesario para poder otorgar una mejor experiencia en el viaje. Arma tu viaje no es responsable de los trámites de visado ni vacunación requeridos',
      ],
      includes:[
        'Traslado Aeropuerto de Cusco – hotel- Aeropuerto de Cusco',
        '04 noches de alojamiento en hotel de Cusco (desayuno incluido)',
        'Tour por la ciudad de cusco con Parque Arqueológico.',
        'Tour Valle Sagrado (almuerzo buffet incluido)',
        'Excursión día completo Machu Picchu (almuerzo en aguas calientes incluido)',
        'Ticket de tren Categoría Expedition (ida y vuelta)',
        'Salineras de Maras y Andenes de Moray',
        'Entradas turísticas',
        'Guía profesional (Español)',
        'Asistencia durante todo el viaje.'
      ],
      not_includes:[
        'Tickets aéreos nacionales',
        'Tickets aéreos internacionales',
        'Alimentación no especificada',
        'Seguro de viaje.',
        'Propinas'
      ],
      category:'Tren PeruRail Vistadome round trip US$30.00\n' +
        'Almuerzo Café Inkaterra (sin bebidas) US$6.00\n',
      note:'NOTA: Min. 2 personas. Consultar tarifas por suplemento si el servicio es para 1 Pax.\n' +
        'Aplica solo pasajeros Peruanos o Residentes.\n',
      imageLinks:[
        'assets/img/destinations/cusco/brown-and-white-lama-resting-on-green-meadow-at-ma-2024-07-03-02-43-58-utc_11zon.webp',
        'assets/img/destinations/cusco/cusco-2023-11-27-05-29-33-utc_11zon.webp',
        'assets/img/destinations/cusco/hike-in-peru-2023-11-27-05-01-51-utc_11zon.webp',
        'assets/img/destinations/cusco/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp'
      ]
    },
    {
      id: 5,
      name: 'Cusco Maravilloso 5D/4N',
      description: 'PROMOCION DE COMPRA HASTA DICIEMBRE 2021\n' +
        'No aplica para temporadas altas (Semana Santa, Inti Raymi, Fiestas Patrias, Año Nuevo).\n' +
        'Machu Picchu y Vinicunca Montaña de 7 Colores\n',
      itinerary: [
        { day: 'DIA 01: CUSCO IN', description: 'Recepción y traslado al hotel elegido, aclimatación, recomendamos visitar la ciudad imperial de cusco de manera peatonal acompañados de nuestros guias, donde conocerás las calles mas famosas de esta ciudad. (consultar tarifas)\n' +
            '\n' +
            'Alojamiento en Cusco\n'},
        { day: 'DIA 02: MACHU PICCHU', description: 'Muy temprano nos trasladaremos a la estación de trenes para dirigirnos a Aguas Calientes, poblado donde inicia el accenso a Machu Picchu. Subiremos en buses hasta la sima para realizar una visita guiada a la ciudadela por un espacio de 2 horas. Observaremos la zona agrícola, el sector urbano, el templo del sol, las canteras de piedra, el jardín botánico, la Plaza de los Templos, las tres ventanas, el reloj solar o intihuatana, la roca sagrada, entre otros. También tendremos tiempo libre para apreciar el majestuoso lugar y tomar fotografías. Terminado el recorrido tomarenos el bus de retorno a Aguas Calientes, allí disfrutaremos de un delicioso Almuerzo Buffet para luego abordar nuestro tren de vuelta a la ciudad. Retorno a su hotel en Cusco.'},
        { day: 'DIA 03: MONTAÑA DE 7 COLORES – VINICUNCA', description: 'A las 4:00 horas recojo de pasajeros y traslado a las faldas del Nevado Ausangate para iniciar la caminata hacia  Vinicunca, Montaña 7 Colores. Haremos una parada en el pueblo de Cusipata para tomar desayuno. Después de una breve charla iniciaremos la caminata de 3 horas con un guía profesional. En el camino aprenderemos de las diferentes costumbres y el misticismo que oculta la cordillera andina. De regreso volveremos al pueblo de Cusipata para el almuerzo respectivo. Retorno a su hotel en Cusco a las 16:30 horas. Noche libre en la ciudad.'},
        { day: 'DIA 04: DIA LIBRE', description: 'Desayuno en el hotel. Sugerimos realizar actividades turisticas por la ciuda del cusco.\n' +
            '\n' +
            'Alojamiento en cusco.'},
        { day: 'DIA 05: CUSCO OUT', description: 'Desayuno en el hotel y mañana libre para explorar la ciudad del Cusco. A la hora coordinada traslado hacia el aeropuerto para abordar su vuelo.'}
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      conditions_to_childs:'Tarifa CHD aplica a niños menores de 08 años y comparten servicios hoteleros con los padres. Si desean cama adicional, consultar tarifa. Máximo un niño por habitación, mínimo 2 adultos pagantes en base doble.\n' +
        '\n' +
        'Tarifa JR, aplica de 08 hasta 16 años de edad, incluye todos los servicios, Máximo un JR por habitación, Mínimo 2 Adultos pagantes en base doble.\n' +
        '\n',
      conditions:[
        'Tarifas sujetas a confirmación de la reserva.',
        'Todos los precios están expresados en Dólares Americanos por persona.',
        'Los precios deben ser confirmados una vez solicitada la reserva.',
        'Programas No permiten cambios, son no reembolsables, no endosables ni transferibles.',
        'Pago con tarjeta de crédito Visa _ se puede pagar mediante safety pay o visa link con recargo de 3.5 %',
        'Considerar horarios de check in y check out de los hoteles en destino',
        '“El hotel” se reserva el derecho de asignar la ubicación de las habitaciones solicitadas, de acuerdo con la disponibilidad y a la llegada del huésped.',
        'Arma tu viaje y el operador elegido sólo actúa como intermediario entre los proveedores locales e internacionales y es responsable únicamente por la organización de los tours adquiridos. Por lo tanto, el usuario no puede imputarnos responsabilidad alguna por causas que estén fuera de nuestro alcance.',
        'No somos responsables de perjuicio o retraso alguno derivado de circunstancias ajenas a nuestro control (ya sean causas fortuitas, de fuerza mayor y a cualquier pérdida, daño, accidente, alguna otra irregularidad que pudiera ocurrirle al usuario final u otros servicios relacionados, ni por fenómenos naturales, enfermedades, guerra, cuarentena, huelgas, o por intervenciones de la Policía, aduanas o reglamentos de sanidad u otros factores más allá de su control. La agencia se reserva el derecho de cambiar cualquier tour o excursión si lo considera necesario para poder otorgar una mejor experiencia en el viaje. Arma tu viaje no es responsable de los trámites de visado ni vacunación requeridos',
      ],
      includes:[
        'Traslado Aeropuerto de Cusco – hotel- Aeropuerto de Cusco',
        '04 noches de alojamiento en hotel de Cusco (desayuno incluido)',
        'Excursión día completo Machu Picchu (almuerzo en aguas calientes incluido)',
        'Ticket de tren Categoría Expedition (ida y vuelta)',
        'Excursión día completo Montaña 7 Colores (desayuno y almuerzo incluido)',
        'Entradas turísticas',
        'Guía profesional (Español)',
        'Asistencia durante todo el viaje.'
      ],
      not_includes:[
        'Tickets aéreos nacionales',
        'Tickets aéreos internacionales',
        'Alimentación no especificada',
        'Seguro de viaje.',
        'Propinas'
      ],
      category:'Tren PeruRail Vistadome round trip US$30.00\n' +
        'Almuerzo Café Inkaterra (sin bebidas) US$6.00\n',
      note:'NOTA: Min. 2 personas. Consultar tarifas por suplemento si el servicio es para 1 Pax.\n' +
        'Aplica solo pasajeros Peruanos o Residentes.\n',
      imageLinks:[
        'assets/img/destinations/cusco/brown-and-white-lama-resting-on-green-meadow-at-ma-2024-07-03-02-43-58-utc_11zon.webp',
        'assets/img/destinations/cusco/cusco-2023-11-27-05-29-33-utc_11zon.webp',
        'assets/img/destinations/cusco/hike-in-peru-2023-11-27-05-01-51-utc_11zon.webp',
        'assets/img/destinations/cusco/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp'
      ]
    },
    {
      id: 6,
      name: 'Cusco Multicolor 5d/4n',
      description: 'Viva la magia completa de Cusco en una viaje de 5 días y 4 noches que incluye estadía en Cusco, tour de la ciudad, visita arqueológica, tour al Valle Sagrado, tren Expedition o Vistadome, visita a Machu Picchu y visita a la Montaña de 7 Colores.',
      itinerary: [
        { day: 'DIA 01: CUSCO IN – VISITANDO LA CIUDAD DEL CUSCO Y SUS ALRREDEDORES.', description: 'Recepción y traslado al hotel elegido. A las 13:00 horas iniciaremos nuestra visita por Cusco y alrrededores.\n' +
            '\n' +
            'Primeramente nos dirigiremos hasta el Parque Arqueológico para ingresar a Sacsayhuaman considerada como una de las edificaciones mas hermosas del Mundo y el observatorio astronómico de Qenqo, continuaremos con la visita a la Plaza Mayor donde la mayoría de las construcciones conservan el estilo colonial, visitaremos la Catedral y finalmente el Templo de Qoricancha, la máxima expresión de la arquitectura Inca, actualmente Convento de Santo Domingo. Retorno a su hotel.'},
        { day: 'DIA 02: VALLE SAGRADO DE LOS INCAS', description: 'Desayuno en el hotel. A las 08:30 horas recojo de pasajeros para realizar el tour Valle Sagrado. Visitaremos Pisaq, donde apreciaremos el complejo arqueológico así como el mercado típico artesanal, allí podemos comprar hermosas artesanías. Continuaremos con el trayecto por el margen del Río Vilcanota hacia el Valle Urubamba donde disfrutaremos de un exquisito almuerzo buffet. Después del almuerzo continuaremos nuestro tour hacia Ollantaytambo y exploraremos el maravilloso complejo arqueológico ahí localizado. Retorno a su hotel en Cusco.'},
        { day: 'DIA 03: MACHU PICCHU', description: 'Muy temprano nos trasladaremos a la estación de trenes para dirigirnos a Aguas Calientes, poblado donde inicia el accenso a Machu Picchu. Subiremos en buses hasta la cima para realizar una visita guiada a la ciudadela por un espacio de 2 horas. Observaremos la zona agrícola, el sector urbano, el templo del sol, las canteras de piedra, el jardín botánico, la Plaza de los Templos, las tres ventanas, el reloj solar o intihuatana, la roca sagrada, entre otros. También tendremos tiempo libre para apreciar el majestuoso lugar y tomar fotografías. Terminado el recorrido tomarenos el bus de retorno a Aguas Calientes, allí disfrutaremos de un delicioso Almuerzo Buffet para luego abordar nuestro tren de vuelta a la ciudad. Retorno a su hotel en Cusco.'},
        { day: 'DIA 04: MONTAÑA DE 7 COLORES – VINICUNCA', description: 'A las 4:00 horas recojo de pasajeros y traslado a las faldas del Nevado Ausangate para iniciar la caminata hacia  Vinicunca, Montaña 7 Colores. Haremos una parada en el pueblo de Cusipata para tomar desayuno. Después de una breve charla iniciaremos la caminata de 3 horas con un guía profesional. En el camino aprenderemos de las diferentes costumbres y el misticismo que oculta la cordillera andina. De regreso volveremos al pueblo de Cusipata para el almuerzo respectivo. Retorno a su hotel en Cusco a las 16:30 horas. Noche libre en la ciudad.'},
        { day: 'DIA 05: CUSCO OUT', description: 'Desayuno en el hotel y mañana libre para explorar la ciudad del Cusco. A la hora coordinada traslado hacia el aeropuerto para abordar su vuelo.'}
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      conditions_to_childs:'Tarifa CHD aplica a niños menores de 08 años y comparten servicios hoteleros con los padres. Si desean cama adicional, consultar tarifa. Máximo un niño por habitación, mínimo 2 adultos pagantes en base doble.\n' +
        '\n' +
        'Tarifa JR, aplica de 08 hasta 16 años de edad, incluye todos los servicios, Máximo un JR por habitación, Mínimo 2 Adultos pagantes en base doble.\n' +
        '\n',
      conditions:[
        'Tarifas sujetas a confirmación de la reserva.',
        'Todos los precios están expresados en Dólares Americanos por persona.',
        'Los precios deben ser confirmados una vez solicitada la reserva.',
        'Programas No permiten cambios, son no reembolsables, no endosables ni transferibles.',
        'Pago con tarjeta de crédito Visa _ se puede pagar mediante safety pay o visa link con recargo de 3.5 %',
        'Considerar horarios de check in y check out de los hoteles en destino',
        '“El hotel” se reserva el derecho de asignar la ubicación de las habitaciones solicitadas, de acuerdo con la disponibilidad y a la llegada del huésped.',
        'Arma tu viaje y el operador elegido sólo actúa como intermediario entre los proveedores locales e internacionales y es responsable únicamente por la organización de los tours adquiridos. Por lo tanto, el usuario no puede imputarnos responsabilidad alguna por causas que estén fuera de nuestro alcance.',
        'No somos responsables de perjuicio o retraso alguno derivado de circunstancias ajenas a nuestro control (ya sean causas fortuitas, de fuerza mayor y a cualquier pérdida, daño, accidente, alguna otra irregularidad que pudiera ocurrirle al usuario final u otros servicios relacionados, ni por fenómenos naturales, enfermedades, guerra, cuarentena, huelgas, o por intervenciones de la Policía, aduanas o reglamentos de sanidad u otros factores más allá de su control. La agencia se reserva el derecho de cambiar cualquier tour o excursión si lo considera necesario para poder otorgar una mejor experiencia en el viaje. Arma tu viaje no es responsable de los trámites de visado ni vacunación requeridos',
      ],
      includes:[
        'Traslado en Cusco aeropuerto – hotel – aeropuerto',
        '4 noches de alojamiento en Cusco + desayunos',
        'Cusco City Tour + parque arqueológico',
        'Full Day Valle Sagrado + almuerzo buffet',
        'Full Day Machu Picchu + almuerzo buffet en Aguas Calientes',
        'Tren Expedition ida y vuelta',
        'Full Day Vinicunca Montaña 7 Colores + desayuno y almuerzo',
        'Entradas turísticas',
        'Guía profesional (Español o Inglés)',
        'Asistencia durante todo el viaje.'
      ],
      not_includes:[
        'Tickets aéreos nacionales',
        'Tickets aéreos internacionales',
        'Alimentación no especificada',
        'Seguro de viaje.',
        'Propinas'
      ],
      category:'Tren PeruRail Vistadome round trip US$30.00\n' +
        'Almuerzo Café Inkaterra (sin bebidas) US$6.00\n',
      note:'NOTA: Min. 2 personas. Consultar tarifas por suplemento si el servicio es para 1 Pax.\n' +
        'Aplica solo pasajeros Peruanos o Residentes.\n',
      imageLinks:[
        'assets/img/destinations/cusco/brown-and-white-lama-resting-on-green-meadow-at-ma-2024-07-03-02-43-58-utc_11zon.webp',
        'assets/img/destinations/cusco/cusco-2023-11-27-05-29-33-utc_11zon.webp',
        'assets/img/destinations/cusco/hike-in-peru-2023-11-27-05-01-51-utc_11zon.webp',
        'assets/img/destinations/cusco/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp'
      ]
    },
    {
      id: 7,
      name: 'Cusco Soñador 4D/3N',
      description: 'No aplica para temporadas altas (Semana Santa, Inti Raymi, Fiestas Patrias, Año Nuevo).\n' +
        'Visita Machu Picchu, maravilla del mundo',
      itinerary: [
        { day: 'DIA 01: CUSCO IN', description: 'Recepción y traslado al hotel elegido, aclimatación, recomendamos visitar la ciudad imperial de cusco de manera peatonal acompañados de nuestros guias, donde conocerás las calles mas famosas de esta ciudad. (consultar tarifas)\n' +
            'Alojamiento en Cusco.'},
        { day: 'DIA 02: MACHU PICCHU', description: 'Muy temprano nos trasladaremos a la estación de trenes para dirigirnos a Aguas Calientes, poblado donde inicia el accenso a Machu Picchu. Subiremos en buses hasta la cima para realizar una visita guiada a la ciudadela por un espacio de 2 horas. Terminado el recorrido tomarenos el bus de retorno a Aguas Calientes, allí disfrutaremos de un delicioso almuerzo para luego abordar nuestro tren de vuelta a la ciudad. Retorno a su hotel.'},
        { day: 'DIA 03: DIA LIBRE', description: 'Desayuno en el hotel. Sugerimos realizar actividades turisticas por la ciuda del Cusco.\n' +
            'Alojamiento en Cusco.'},
        { day: 'DIA 04: CUSCO OUT', description: 'Desayuno en el hotel. Ultimo dia en la ciudad imperial, si el tiempo le permite podra visitar los mercados artesanales para realziar compras. Traslado al aeropuerto a la hora coordinada.'}
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      conditions_to_childs:'Tarifa CHD aplica a niños menores de 08 años y comparten servicios hoteleros con los padres. Si desean cama adicional, consultar tarifa. Máximo un niño por habitación, mínimo 2 adultos pagantes en base doble.\n' +
        '\n' +
        'Tarifa JR, aplica de 08 hasta 16 años de edad, incluye todos los servicios, Máximo un JR por habitación, Mínimo 2 Adultos pagantes en base doble.\n' +
        '\n',
      conditions:[
        'Tarifas sujetas a confirmación de la reserva.',
        'Todos los precios están expresados en Dólares Americanos por persona.',
        'Los precios deben ser confirmados una vez solicitada la reserva.',
        'Programas No permiten cambios, son no reembolsables, no endosables ni transferibles.',
        'Pago con tarjeta de crédito Visa _ se puede pagar mediante safety pay o visa link con recargo de 3.5 %',
        'Considerar horarios de check in y check out de los hoteles en destino',
        '“El hotel” se reserva el derecho de asignar la ubicación de las habitaciones solicitadas, de acuerdo con la disponibilidad y a la llegada del huésped.',
        'Arma tu viaje y el operador elegido sólo actúa como intermediario entre los proveedores locales e internacionales y es responsable únicamente por la organización de los tours adquiridos. Por lo tanto, el usuario no puede imputarnos responsabilidad alguna por causas que estén fuera de nuestro alcance.',
        'No somos responsables de perjuicio o retraso alguno derivado de circunstancias ajenas a nuestro control (ya sean causas fortuitas, de fuerza mayor y a cualquier pérdida, daño, accidente, alguna otra irregularidad que pudiera ocurrirle al usuario final u otros servicios relacionados, ni por fenómenos naturales, enfermedades, guerra, cuarentena, huelgas, o por intervenciones de la Policía, aduanas o reglamentos de sanidad u otros factores más allá de su control. La agencia se reserva el derecho de cambiar cualquier tour o excursión si lo considera necesario para poder otorgar una mejor experiencia en el viaje. Arma tu viaje no es responsable de los trámites de visado ni vacunación requeridos',
      ],
      includes:[
        'Traslado Aeropuerto de Cusco – hotel- Aeropuerto de Cusco',
        '03 noches de alojamiento en hotel de Cusco (desayuno incluido)',
        'Excursión día completo Machu Picchu (almuerzo en aguas calientes incluido)',
        'Ticket de tren Categoría Expedition (ida y vuelta)',
        'Entradas turísticas',
        'Guía profesional (Español)',
        'asistencia durante todo el viaje.',
      ],
      not_includes:[
        'Tickets aéreos nacionales',
        'Tickets aéreos internacionales',
        'Alimentación no especificada',
        'Seguro de viaje.',
        'Propinas'
      ],
      category:'Tren PeruRail Vistadome round trip US$30.00\n' +
        'Almuerzo Café Inkaterra (sin bebidas) US$6.00\n',
      note:'NOTA: Min. 2 personas. Consultar tarifas por suplemento si el servicio es para 1 Pax.\n' +
        'Aplica solo pasajeros Peruanos o Residentes.\n',
      imageLinks:[
        'assets/img/destinations/cusco/brown-and-white-lama-resting-on-green-meadow-at-ma-2024-07-03-02-43-58-utc_11zon.webp',
        'assets/img/destinations/cusco/cusco-2023-11-27-05-29-33-utc_11zon.webp',
        'assets/img/destinations/cusco/hike-in-peru-2023-11-27-05-01-51-utc_11zon.webp',
        'assets/img/destinations/cusco/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp'
      ]
    },
    {
      id: 8,
      name: 'Cusco Soñador 4D/3N',
      description: 'Viva la magia completa de Cusco y el Valle Sagrado en una viaje de 5 días y 4 noches que incluye estadía en Cusco, tour de la ciudad, visita arqueológica, tour al Valle Sagrado, estadía en Aguas Calientes, visita a Machu Picchu, visita a las salineras de Maras y visita a los andenes de Moray.',
      itinerary: [],
      recommendations: '',
      conditions_to_childs:'Tarifa CHD aplica a niños menores de 08 años y comparten servicios hoteleros con los padres. Si desean cama adicional, consultar tarifa. Máximo un niño por habitación, mínimo 2 adultos pagantes en base doble.\n' +
        '\n' +
        'Tarifa JR, aplica de 08 hasta 16 años de edad, incluye todos los servicios, Máximo un JR por habitación, Mínimo 2 Adultos pagantes en base doble.\n' +
        '\n',
      conditions:[
        'Tarifas sujetas a confirmación de la reserva.',
        'Todos los precios están expresados en Dólares Americanos por persona.',
        'Los precios deben ser confirmados una vez solicitada la reserva.',
        'Programas No permiten cambios, son no reembolsables, no endosables ni transferibles.',
        'Pago con tarjeta de crédito Visa _ se puede pagar mediante safety pay o visa link con recargo de 3.5 %',
        'Considerar horarios de check in y check out de los hoteles en destino',
        '“El hotel” se reserva el derecho de asignar la ubicación de las habitaciones solicitadas, de acuerdo con la disponibilidad y a la llegada del huésped.',
        'Arma tu viaje y el operador elegido sólo actúa como intermediario entre los proveedores locales e internacionales y es responsable únicamente por la organización de los tours adquiridos. Por lo tanto, el usuario no puede imputarnos responsabilidad alguna por causas que estén fuera de nuestro alcance.',
        'No somos responsables de perjuicio o retraso alguno derivado de circunstancias ajenas a nuestro control (ya sean causas fortuitas, de fuerza mayor y a cualquier pérdida, daño, accidente, alguna otra irregularidad que pudiera ocurrirle al usuario final u otros servicios relacionados, ni por fenómenos naturales, enfermedades, guerra, cuarentena, huelgas, o por intervenciones de la Policía, aduanas o reglamentos de sanidad u otros factores más allá de su control. La agencia se reserva el derecho de cambiar cualquier tour o excursión si lo considera necesario para poder otorgar una mejor experiencia en el viaje. Arma tu viaje no es responsable de los trámites de visado ni vacunación requeridos',
      ],
      includes:[
        'Traslado en Cusco aeropuerto – hotel – aeropuerto',
        '3 noches de alojamiento en Cusco + desayunos',
        '1 noche de alojamiento en Aguas Calientes, Hotel Remata Machu Picchu o similar 3 estrellas + desayuno',
        'Cusco City Tour + parque arqueológico',
        'Full Day Valle Sagrado + almuerzo buffet',
        'Tren Expedition ida y vuelta',
        'Full Day Machu Picchu + almuerzo en Aguas Calientes',
        'Tour Salineras de Maras y Andenería de Moray',
        'Entradas turísticas',
        'Guía profesional (Español o Inglés)',
        'Asistencia durante todo el viaje'
      ],
      not_includes:[
        'Tickets aéreos nacionales',
        'Alimentación no especificada',
        'Seguro de viaje.',
        'Propinas'
      ],
      category:'Tren PeruRail Vistadome round trip US$30.00\n' +
        'Almuerzo Café Inkaterra (sin bebidas) US$6.00\n',
      note:'NOTA: Min. 2 personas. Consultar tarifas por suplemento si el servicio es para 1 Pax.\n' +
        'Aplica solo pasajeros Peruanos o Residentes.\n',
      imageLinks:[
        'assets/img/destinations/cusco/brown-and-white-lama-resting-on-green-meadow-at-ma-2024-07-03-02-43-58-utc_11zon.webp',
        'assets/img/destinations/cusco/cusco-2023-11-27-05-29-33-utc_11zon.webp',
        'assets/img/destinations/cusco/hike-in-peru-2023-11-27-05-01-51-utc_11zon.webp',
        'assets/img/destinations/cusco/traveling-in-peru-2024-09-21-23-33-22-utc_11zon.webp'
      ]
    },
  ];


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idOrName = this.route.snapshot.paramMap.get('id')!;
    this.packageInfo = this.destinations_cusco.find(
      (dest) =>
        dest.id === +idOrName || dest.name.toLowerCase().replace(/ /g, '-') === idOrName
    );
  }
  calculateDays(itinerary: any[]) {
    return itinerary.reduce((acc: number, curr: any) => {
      return acc + (curr.day && typeof curr.day === 'string' && curr.day.includes('DIA') ? 1 : 0);
    }, 0);
  }

}
