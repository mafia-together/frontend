export interface RoomsStatus {
    statusType: string
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

export type RoomStatus = 'WAIT' | 'DAY' | 'VOTE' | 'VOTERESULT' | 'NIGHT' | 'END'

export interface RoomStatusRequest {
    status: RoomStatus
}

export type Job = 'CITIZEN' | 'MAFIA' | 'DOCTOR' | 'POLICE' | null

export interface Player {
    name: string
    isAlive: boolean
    job: Job
}

export interface RoomInfo {
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

export type Color = 'day' | 'night' | 'dark' | 'light' | 'kill' | 'safe' | 'dead'
export interface RoomCodeExistsResponse {
    exists: boolean
}
