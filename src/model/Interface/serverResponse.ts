import { Mitglied } from 'src/model/Interface/mitglied.class';

export interface MitgliedModelServerResponse {
    limit: number,
    skip: number,
    total: number,
    users: Mitglied[];
}