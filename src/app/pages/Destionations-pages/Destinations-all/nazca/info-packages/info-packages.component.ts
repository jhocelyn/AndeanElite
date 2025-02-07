import { Component } from '@angular/core';
import {BookingFormComponent} from '../../../../../shared/components/booking-form/booking-form.component';
import {NgForOf, NgIf, NgStyle} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ImageCarouselComponent} from '../../../../../shared/components/image-carousel/image-carousel.component';

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
  destinations_nazca=[
    {
      id: 1,
      name: 'Nasca Enigmatica',
      description: 'Las Líneas de Nazca, en el sur de Perú, son un grupo de geoglifos precolombinos que se extienden en las arenas del desierto. Abarcan un área de casi 1,000 kilómetros cuadrados y hay alrededor de 300 figuras distintas, que incluyen animales y plantas. Están compuestos por más de 10,000 líneas, algunas de estas de 30 metros de ancho y más de 9 kilómetros de largo.',
      itinerary: [
        { day: 'DIA 01: NAZCA IN', description:'Recepción y traslado al hotel. Tarde libre para actividades personales o disfrutar de las instalaciones del hotel. Alojamiento en Nazca.'},
        { day: 'DIA 02: ICA -NAZCA –  SOBREVUELO DE LÍNEAS DE NAZCA', description: 'Desayuno en el hotel. En la sala de espera podrá observar un video explicándole sobre cada una de las figuras que en dicho lugar hasta la hora de salida de su avioneta. A la hora indicada realizará el sobrevuelo por las Líneas de Nazca donde apreciará las famosas figuras como La Ballena, Triángulos, Trapezoides, Astronauta, Mono, Perro, Cóndor, Araña, Colibrí, etc. Al finalizar la actividad se le entregará un diploma de sobrevuelo. A hora oportuna traslado a la estación.'},
      ],
      recommendations: 'Respetar y cumplir con los Protocolos y Lineamientos para la Vigilancia, Prevención y control frente al COVID-19.\n' +
        '\n' +
        'Traer consigo Mascarillas, Alcohol o Gel, Guantes, Oxímetros, Oxigeno portátil de ser necesario, toalla, medicamentos e implementos de higiene personal. Llevar ropa de invierno y media estación (casaca para el viaje, poncho impermeable para temporadas de lluvias Dic- Abril). Bloqueador solar, repelente, botiquín de aseo personal. Zapatillas para caminatas.',
      note:'Tasa de embarque para sobrevuelo      $10.00 USD por persona\n' +
        '\n' +
        'Sobrevuelos sujetos a espacios y condiciones climatológicas. En caso de anulación de vuelo por clima, se reprogramará la actividad para el mismo pasajero.\n' +
        '\n' +
        'Los niños a partir de los 02 años, pagan servicio completo.\n' ,
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
        'Traslados Estación – Hotel – Estación',
        '01 Noche de alojamiento en elegido en Nasca + Desayuno.',
        'Sobrevuelo Líneas de Nazca',
        'Guiado en español',
        'Asistencia durante el viaje'
      ],
      not_includes:[
        'Movilidad Lima – Nasca – Lima',
        'Bebidas alcohólicas',
        'Seguro de viaje',
        'Propinas',
      ],
      imageLinks:[
        'assets/img/destinations/nazca/beautiful-shot-of-nazca-condor-lines-geoglyphs-in-2023-11-27-05-20-19-utc_11zon.webp',
        'assets/img/destinations/nazca/nazca-2025-01-09-02-44-58-utc_11zon.webp',
        'assets/img/destinations/nazca/nazca-lines-hummingbird-2024-08-06-01-13-40-utc_11zon.webp',
        'assets/img/destinations/nazca/nazca-lines-hummingbird-2024-08-06-01-13-40-utc_11zon.webp',
      ]
    },

  ]
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const idOrName = this.route.snapshot.paramMap.get('id')!;
    this.packageInfo = this.destinations_nazca.find(
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
