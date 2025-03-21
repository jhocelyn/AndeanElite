import { Component } from '@angular/core';
import {BookingFormComponent} from '../../../../../shared/components/general/booking-form/booking-form.component';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ImageCarouselComponent} from '../../../../../shared/components/general/image-carousel/image-carousel.component';

@Component({
  selector: 'app-info-packages',
  standalone: true,
  imports: [
    BookingFormComponent,
    NgForOf,
    NgIf,
    ImageCarouselComponent
  ],
  templateUrl: './info-packages.component.html',
  styleUrl: './info-packages.component.css'
})
export class InfoPackagesComponent {
  packageInfo: any;
  destinations_lima=[
    {
      id: 1,
      name: 'Lima Cultural',
      description: 'Lima es la capital de Perú ubicada en la árida costa del Pacífico del país. Pese a que su centro colonial se conserva, es una desbordante metrópolis y una de las ciudades más grandes de Sudamérica.',
      itinerary: [
        { day: 'DIA 01: LIMA', description: 'Recepción en el aeropuerto y traslado al hotel. Acomodación y descanso.\n' +
            '\n' +
            'Alojamiento en Lima.'},
        { day: 'DIA 02: LIMA CITY TOUR COLONIAL Y MODERNA', description: 'Desayuno. Iniciará el tour con una vista panorámica de la “Huaca Pucllana”, magnífico centro ceremonial y arqueológico edificado en el siglo IV d.c. y considerado “Pueblo Sagrado” por los Incas. El virreinato del Perú fue el más importante del Imperio Español y Lima fue su capital.\n' +
            '\n' +
            'LIMA COLONIAL: Visitará el Centro Histórico de Lima, donde apreciará más de cincuenta monumentos y edificios coloniales, destacando el Paseo de la República, la Plaza San Martín, la Plaza Mayor, el Palacio de Gobierno, el Palacio Arzobispal, la Basílica Catedral, el Palacio Municipal entre otros. Visitará el MUSEO DEL BANCO CENTRAL DE RESERVA*, aquí apreciará la colección “Tesoros del Perú”, una selecta exposición de objetos de oro, cerámica y textiles de diversas culturas pre-colombinas. Visitará el CONJUNTO MONUMENTAL DE SAN FRANCISCO, que constituye la mayor muestra de arte religioso colonial de América. Destaca la visita a sus criptas subterráneas conocidas como “Catacumbas”.\n' +
            '\n' +
            'LIMA CONTEMPORÁNEA: Visitará las zonas residenciales más tradicionales de Lima, El Olivar de San Isidro, Miraflores y Larcomar. Retorno al hotel. Alojamiento en Lima.'},
        { day: 'DIA 03: SALIDA DE LIMA', description: 'Desayuno. Día libre para actividades personales. Hora oportuna, traslado al aeropuerto.'}
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      conditions_to_childs:'Infantes y menores de 04 años no pagan y comparten habitación con los padres. Niños a partir de 04 años pagan tarifa CHD según corresponda. Máximo un niño por habitación, mínimo 2 adultos pagantes en base doble.\n' +
        '\n' +
        'Excepto los siguientes hoteles que consideran niños hasta los 11 años cumplidos, comparten cama con los padres y tienen derecho a desayuno:',
      list_conditions:[
        'Htl Innside by Melia',
        'Htl Casa Andina Estándar (1 niño por habitación). Categoria Select & Premium (2 niños por habitación).',
        'Htl Dazzler',
        'Htl Costa del Sol',
        'Htl Hilton Garden Inn / Hilton Lima (1 niño por habitación)',
        'Htl Aloft / AC Miraflores (1 niño por habitación)',
        'Htl Westin (2 niños por habitación)',
        'Htl B – No admite niños.',
        'Htl Iberostar Selection Lima Miraflores'
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
        'Traslado Aeropuerto – Hotel – Aeropuerto (Privado)',
        '02 Noches de alojamiento + Desayunos',
        'City Tour Lima Colonial y Moderna (Semi-Privado)',
        'Tickets de ingresos turísticos',
        'Guía Profesional Bilingüe (español – Inglés)',
        'Asistencia durante todo el viaje.'
      ],
      not_includes:[
        'Tickets aéreos nacionales',
        'Tickets aéreos internacionales',
        'Alimentación no especificada',
        'Seguro de viaje',
        'Propinas',
      ],
      imageLinks:[
        'assets/img/destinations/lima/scenery-by-the-ocean-in-peru-2023-11-27-05-23-56-utc_11zon.webp',
        'assets/img/destinations/lima/the-basilica-cathedral-of-lima-at-plaza-mayor-li-2023-11-27-05-22-01-utc_11zon.webp',
        'assets/img/destinations/lima/traditional-dishes-of-peruvian-cuisine-from-above-2023-11-27-05-09-08-utc_11zon.webp',
        'assets/img/destinations/lima/scenery-by-the-ocean-in-peru-2023-11-27-05-23-56-utc_11zon.webp',
      ]
    },

  ]
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idOrName = this.route.snapshot.paramMap.get('id')!;
    this.packageInfo = this.destinations_lima.find(
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
