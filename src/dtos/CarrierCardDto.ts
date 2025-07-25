export interface CarrierCardDto {
    id: number,
    name: string,
    description: string,
    yearsDuration: number,
    type: string,
    category: {
        id: number,
        name: string
    }
    instituition: {
        id: number,
        name: string
    }
    favorite: boolean,
}