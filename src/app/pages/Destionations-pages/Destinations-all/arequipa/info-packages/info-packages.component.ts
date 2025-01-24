import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {BookingFormComponent} from '../../../../../shared/components/booking-form/booking-form.component';
import {ImageCarouselComponent} from '../../../../../shared/components/image-carousel/image-carousel.component';

@Component({
  selector: 'app-info-packages',
  standalone: true,
  imports: [NgIf, NgStyle, BookingFormComponent, NgForOf, ImageCarouselComponent],
  templateUrl: './info-packages.component.html',
  styleUrls: ['./info-packages.component.css'],
})
export class InfoPackagesComponent implements OnInit {
  packageInfo: any;
  destinations_arequipa = [
    {
      id: 1,
      name: 'Arequipa Majestuosa',
      description: 'Arequipa es la capital de la época colonial de la región de Arequipa en Perú. La rodean 3 volcanes y cuenta con edificios barrocos construidos de sillar, una piedra volcánica blanca.',
      itinerary: [
        { day: 'DIA 01 AREQUIPA IN – CITY TOUR + MONASTERIO DE SANTA CATALINA', description: 'A hora oportuna, recojo del hotel para realizar el City Tour. 14:00hrs Iniciará la visita por la ciudad Blanca de Arequipa, visitando la Plaza de Armas, la cual presenta una hermosa fuente de bronce de tres platos coronados con la figura de un soldado del siglo XVI. Aquí, apreciará la Catedral y los Claustros de la Compañía de Jesús. A continuación, visitará el Monasterio de Santa Catalina, este fue un centro de clausura absoluta el cual se mantuvo cerrado por siglos al público, hoy, armoniosamente restaurado y abierto, permite apreciar lo que fue la ciudad de Arequipa en el siglo XVII. Verá sus calles, jardines, claustros, rústicos lavaderos de Piedra, murallas de sillar y su pinacoteca, en seguida se trasladará a las hermosas y verdes campiñas de Carmen Alto y al Mirador de Yanahuara donde tendrá una vista privilegiada de la ciudad y de los volcanes como el Misti, Pichu Pichu y Chachani. Alojamiento en Arequipa.'},
        { day: 'DIA 02 FULL DAY CAÑON DEL COLCA', description: 'Salida muy temprano alrededor de las 3:00 a 3:30 horas con destino directo hacia Chivay para desayunar y luego continuar hacia La Cruz Del Cóndor; en la ruta hay paradas como en el Pueblo de Yanque, algunos miradores, en el Pueblo de Maca, las paradas serán coordinadas, estas pueden ser a la ida o al retorno. Llegada al mirador Cruz Del Cóndor, desde donde se puede apreciar parte de la profundidad del cañón, y esperar el majestuoso vuelo del cóndor, permanencia aproximada de una hora. Retorno a Chivay, almuerzo (por cuenta del pasajero) y retorno a Arequipa haciendo paradas en lugares estratégicos dentro de la reserva nacional de salinas y aguada blanca como en Patapampa o mirador de los volcanes, en los bofedales de Tocra y en Pampa Cañahuas para apreciar vicuñas y finalmente arribo a Arequipa.'},
        { day: 'DIA 03 TOUR DEL SILLAR', description: 'Desayuno en el hotel. 08:00hrs Iniciaremos nuestro recorrido con mucha historia y cultura viva, en donde se visita canteras y zonas en donde se originó el sillar. Haremos una breve parada turística en la plaza principal del Distrito de Cayma y apreciar la Plaza y su Iglesia. Continuaremos nuestro tour donde realizaremos otra pequeña parada en un mirador donde tendremos una vista de los tres volcanes que tenemos en Arequipa: Misti, Chachani y Pichupichu. Luego llegaremos a la Cantera de Añashuayco donde podemos apreciar la Cantera en explotación, conocer el proceso de la extracción del Sillar, labrado y mega tallado a cargo de los maestros canteros, continuaremos con la ruta dirigiéndonos a la Quebrada de Culebrillas en este lugar  haremos una  caminata de  20 minutos  dentro del pequeño  cañón que se formó por  el paso del agua, que tiene paredes de 15 a 20 metros, mientras  seguimos caminando las paredes van aumentando de altura  llegando al final podremos observar Petrolíferos hechos por la Cultura Wasi y llegando al final de nuestro tour podremos observar  las Apachetas que son formaciones de piedras puestas una encima de otra que son un símbolo de agradecimiento  hacia la naturaleza  y también atracción  de buena suerte las cuales  causan una sensación  totalmente mística. Retorno al hotel'},
        { day: 'DIA 04 AREQUIPA', description: 'Desayuno. A hora oportuna traslado a la estación/aeropuerto para retorno a ciudad de origen o continuar con el viaje.' },
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      conditions_to_childs:'Tarifa CHD aplica a niños menores de 05 años y comparten servicios hoteleros con los padres. Máximo un niño por habitación, mínimo 2 adultos pagantes en base doble. Excepto en los siguientes hoteles, No se considera cama para niños. Incluye solo el desayuno: (Si desean cama adicional, consultar tarifa)',
      list_conditions:[
        'Vita Arequipa – Vita Colca',
        'Tierra Viva Arequipa',
        'Xima Crismar',
        'Casa Andina Estandar',
        'Select, Premium – Maximo 02 niños.',
        'Sonesta',
        'Costa del Sol'
      ],
      conditions1_to_childs:'Tarifa JR, aplica de 05 hasta 16 años de edad, incluye todos los servicios, Máximo un JR por habitación, Mínimo 2 Adultos pagantes en base doble.',
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
        'Traslado aeropuerto – hotel –aeropuerto en movilidad privada',
        '3 noches de alojamiento en Arequipa + desayunos.',
        'City Tour + Monasterio de Santa Catalina.',
        'Full Day Colca',
        'Tour Ruta del Sillar',
        'Entradas turísticas.',
        'Guía Profesional en Español.',
        'Asistencia durante todo el viaje.',
      ],
      not_includes:[
        'Ticketes Aereos',
        'Seguro de viaje',
        'Ingreso Catedral de Arequipa',
        'Alimentación no especificada',
        'Propinas',
        'Bebidas alcohólicas'
      ],
      imageLinks : [
        'assets/img/destinations/arequipa/arequipa-church-iglesia-de-la-compania-de-jesus-2024-09-12-02-46-11-utc.jpg',
        'assets/img/destinations/arequipa/arequipa-city-with-misti-volcano-on-background-a-2023-11-27-05-10-01-utc.jpg',
        'assets/img/destinations/arequipa/flying-andean-condor-2024-08-06-01-13-41-utc.jpg',
        'assets/img/destinations/arequipa/inside-the-santa-catalina-monastery-of-arequipa-p-2023-11-27-04-56-52-utc.jpg',
      ],
    },
    {
      id: 2,
      name: 'Arequipa Tradicional',
      description: 'Arequipa es la capital de la época colonial de la región de Arequipa en Perú. La rodean 3 volcanes y cuenta con edificios barrocos construidos de sillar, una piedra volcánica blanca.',
      itinerary: [
        { day: 'DIA 01 AREQUIPA IN – CITY TOUR + MONASTERIO DE SANTA CATALINA', description: 'Recepción y traslado al hotel elegido. A hora oportuna, recojo del hotel para realizar el City Tour. 14:00hrs Iniciará la visita por la ciudad Blanca de Arequipa, visitando la Plaza de Armas, la cual presenta una hermosa fuente de bronce de tres platos coronados con la figura de un soldado del siglo XVI. Aquí, apreciará la Catedral y los Claustros de la Compañía de Jesús. A continuación, visitará el Monasterio de Santa Catalina, este fue un centro de clausura absoluta el cual se mantuvo cerrado por siglos al público, hoy, armoniosamente restaurado y abierto, permite apreciar lo que fue la ciudad de Arequipa en el siglo XVII. Verá sus calles, jardines, claustros, rústicos lavaderos de Piedra, murallas de sillar y su pinacoteca, en seguida se trasladará a las hermosas y verdes campiñas de Carmen Alto y al Mirador de Yanahuara donde tendrá una vista privilegiada de la ciudad y de los volcanes como el Misti, Pichu Pichu y Chachani. Alojamiento en Arequipa.' },
        { day: 'DIA 02 AREQUIPA – CHIVAY', description: 'Desayuno. Recojo del hotel y salida hacia el valle del Colca por la vía Yura – Puno – Cuzco, atravesando parte de la reserva nacional de Salinas y Aguada Blanca visitando Pampa Cañahuas donde se puede apreciar vicuñas, la parte posterior de los Volcanes de Arequipa; luego se continua a Patahuasi, parada de adaptación a la altitud, donde se recomienda tomar el mate de coca. Seguimos hasta Tocra para apreciar flora y fauna propia de la región, posteriormente se continua a Patapampa o mirador de los volcanes, donde se alcanza una altitud máxima de aproximadamente de 4800 m.s.n.m. Arribo a Chivay Almuerzo (por cuenta del pasajero) e instalación en el Hotel indicado; por la tarde visita a los baños termales La Calera; por la noche cena (por cuenta del pasajero) con show folklórico, música y danza en vivo. Alojamiento en Chivay (Vita Colca, Tradición Colca o Colca Inn).'},
        { day: 'DIA 03 COLCA – CRUZ DEL CONDOR – AREQUIPA', description: 'Desayuno. Muy temprano, se dirigirá hacia la Cruz del Cóndor (41 Km de Chivay); en la ruta hay paradas como en el Pueblo de Yanque, algunos miradores, en el Pueblo de Maca, las paradas serán coordinadas, estas pueden ser a la ida o al retorno. Llegada al mirador Cruz Del Cóndor, desde donde se puede apreciar parte de la profundidad del cañón, y esperar el majestuoso vuelo del cóndor, permanencia aproximada de una hora. Retorno a Chivay, almuerzo (por cuenta del pasajero) y retorno directo a Arequipa. Traslado al hotel. Alojamiento en Arequipa.'},
        { day: 'DIA 04 AREQUIPA OUT', description: 'Desayuno. A hora oportuna traslado a la estación/aeropuerto para retorno a ciudad de origen o continuar con el viaje.' },
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      conditions_to_childs:'Tarifa CHD aplica a niños menores de 05 años y comparten servicios hoteleros con los padres. Máximo un niño por habitación, mínimo 2 adultos pagantes en base doble. Excepto en los siguientes hoteles, No se considera cama para niños. Incluye solo el desayuno: (Si desean cama adicional, consultar tarifa)',
      list_conditions:[
        'Vita Arequipa – Vita Colca',
        'Tierra Viva Arequipa',
        'Xima Crismar',
        'Casa Andina Estandar',
        'Select, Premium – Maximo 02 niños.',
        'Sonesta',
        'Costa del Sol'
      ],
      conditions1_to_childs:'Tarifa JR, aplica de 05 hasta 16 años de edad, incluye todos los servicios, Máximo un JR por habitación, Mínimo 2 Adultos pagantes en base doble.',
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
      imageLinks : [
        'assets/img/destinations/arequipa/inside-the-santa-catalina-monastery-of-arequipa-p-2023-11-27-04-56-52-utc.jpg',
        'assets/img/destinations/arequipa/santa-catalina-monastery-arequipa-peru-2023-11-27-05-04-22-utc.jpg',
        'assets/img/destinations/arequipa/santa-catalina-monastery-arequipa-peru-2023-11-27-05-33-59-utc.jpg',
        'assets/img/destinations/arequipa/santa-catalina-monastery-convento-de-santa-catali-2024-09-22-17-08-47-utc.jpg'
      ],
    },
  ];


  columnas: string[] = [
    'Nombre',
    'Categoría',
    'Desayuno',
    'Simple',
    'Doble',
    'Triple',
    'Niño (8 a 16 años)',
    'Niño (3 a 8 años)',
  ];

  hoteles = [
    {
      nombre: 'Htl Meliana ♥',
      categoria: '3* Tur',
      desayuno: 'Americano',
      simple: 306,
      doble: 274,
      triple: 263,
      nino8a16: 259,
      nino3a8: 225,
    },
    {
      nombre: 'Htl Selina Arequipa – Compartido (Ene-Mar22)',
      categoria: '3* Tur',
      desayuno: 'Continental',
      simple: 249,
      doble: 249,
      triple: 249,
      nino8a16: null,
      nino3a8: null,
    },
    {
      nombre: 'Htl Selina Arequipa – Micro Baño compartido (Ene-Mar22)',
      categoria: '3* Tur',
      desayuno: 'Continental',
      simple: 335,
      doble: 266,
      triple: null,
      nino8a16: null,
      nino3a8: 177,
    },
  ]


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idOrName = this.route.snapshot.paramMap.get('id')!;
    this.packageInfo = this.destinations_arequipa.find(
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
