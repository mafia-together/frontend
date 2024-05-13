export interface RoomsStatus {
    status: string
}

export interface Chat {
    name: string
    contents: string
    timestamp: Date
    owner: boolean
}

export interface ChatRequest {
    contents: string
}

export interface RoomResponse {
    code: string
}

export interface RoomRequest {
    total: number
    mafia: number
    doctor: number
    police: number
}

export interface ParticipateResponse {
    auth: string
}

export interface ParticipateRequest {
    code: string
    name: string
}

export interface RoomStatusRequest {
    status: 'WAIT' | 'DAY' | 'NIGHT' | 'END'
}

export type Job = 'CITIZEN' | 'MAFIA' | 'DOCTOR' | 'POLICE' | null

export interface Player {
    name: string
    isAlive: boolean
    job: Job
}

export interface RoomInfoResponse {
    startTime: Date
    endTime: Date
    isAlive: boolean
    totalPlayers: number
    isMaster: boolean
    players: Player[]
}

export interface MyJobResponse {
    job: Job
}
