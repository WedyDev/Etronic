import { Pregunta } from "./pregunta"

export interface Jugador{
  id:number
  nombre:string
  preguntas:Pregunta[]
}
