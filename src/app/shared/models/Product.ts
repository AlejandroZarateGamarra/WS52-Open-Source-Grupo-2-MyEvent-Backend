export class Product {
  id!: number;
  name!: string;
  description!: string;
  category!: string;
  startDate!: Date;
  endDate!: Date;
  //location!: Location; // Asegúrate de tener una clase Location definida
  //organizer!: Organizer; // Asegúrate de tener una clase Organizer definida
  totalTickets!: number;
  priceTicket!: number;
  color?: string;
  discount?: number;
  photo!: string;
  detail?: string;
}
