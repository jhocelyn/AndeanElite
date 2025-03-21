import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BookingFormComponent} from '../../../../../shared/components/general/booking-form/booking-form.component';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
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
  destinations_ica=[
    {
      id: 1,
      name: 'Ica y Huacachina',
      description: 'Ica es una ciudad del centro sur del Perú, capital del departamento de Ica, situada en el estrecho valle que forma el río Ica, entre el Gran Tablazo de Ica y las laderas occidentales de la cordillera de los Andes.\n' +
        '\n' +
        'Huacachina es un oasis desértico y una pequeña villa justo al oeste de la ciudad de Ica, en el suroeste de Perú. En su centro están las aguas verdes de la laguna de Huacachina, la cual se cree que tiene propiedades terapéuticas y está rodeada de palmas. Las orillas de la laguna tienen bares y clubes. Los buggies recorren las altas dunas onduladas que rodean la villa.',
      itinerary: [
        { day: 'DIA 01: ICA CITY TOUR – HUACACHINA', description: '07:15hrs Partida rumbo a Ica con transporte (CRUZ DEL SUR). 10:50hrs Arribo en Ica. Recepción en el terminal, Traslado al hotel elegido. 13:00hrs Visitará la plaza de armas, casonas coloniales, El Santuario del Señor de Luren, museo Regional de Ica, bodegas vitivinícolas para conocer el proceso y la degustación de vinos y piscos peruanos. También, tendrá una visita por la Laguna de la Huacachina considerado como el oasis de América, lugar en donde se practica deportes de aventura como Buggies y Sandboard (no incluye). Alojamiento en Ica.'},
        { day: 'DIA 02: ICA', description: 'Desayuno en el hotel. Dia libre para realizar actividades. Puede realizar el tour Ruta del Pisco o Cañon de los Perdidos. Alojamiento en Ica.'},
        { day: 'DIA 03: ICA – LIMA', description: 'Desayuno y día libre para realizar actividades. 14:00hrs traslado a la estación del bus. 15:00hrs salida a la ciudad de Lima. 20:00hrs Llegada a la estación Cruz del Sur Javier Prado.'}
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      conditions_to_childs:'Infantes no pagan, comparten servicios completos con los padres. Niños a partir de 02 años pagan servicios completos se acomodan en habitación triple. Máximo un niño por habitación.',
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
        'Transporte Lima – Ica – Lima en bus semicama 2do piso, Transporte Cruz del Sur',
        'Traslados en Ica estación de bus – hotel – estación de bus',
        '02 noche de alojamiento en hotel elegido + desayuno',
        'Tour Ciudad de Ica + Huacachina',
        'Guiado Bilingüe (Español – Inglés)',
        'Asistencia permanente'
      ],
      not_includes:[
        'Ticketes aereos',
        'Seguro de viaje',
        'Propinas',
      ],
      imageLinks:[
        'assets/img/destinations/ica/panoramic-view-of-huacachina-oasis-ica-peru-2023-11-27-05-23-54-utc_11zon.webp',
        'assets/img/destinations/ica/person-on-sand-dune-in-desert-sunset-of-huacachina-2023-11-27-05-00-47-utc_11zon.webp',
        'assets/img/destinations/ica/small-boat-at-huacachina-oasis-lake-ica-peru-2023-11-27-05-34-45-utc_11zon.webp',
        'assets/img/destinations/ica/huacachina-surrounded-by-sand-dunes-at-sunset-ic-2024-09-12-02-37-48-utc (1)_11zon.webp'
      ]
    },

  ]
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idOrName = this.route.snapshot.paramMap.get('id')!;
    this.packageInfo = this.destinations_ica.find(
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
