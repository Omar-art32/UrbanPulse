import { Location } from "./location.types";
import { Polygon } from "./polygon.types";
import { ZonaStatus } from "./zona-status.types";

/**
 * Entidad principal del dominio.
 * Representa una zona geográfica analizada por UrbanPulse.
 */
export interface Zona {
    id: string;
    codigo: string;

    nombre: string;
    location: Location;

    poblacion: number;

    geometry: Polygon;

    status: ZonaStatus;

    createdAt: string;
    updatedAt: string;
    deletedAt?: string;
}