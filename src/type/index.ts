export type SpecialJob = 'MAFIA' | 'DOCTOR' | 'POLICE'
export type Job = SpecialJob | 'CITIZEN' | null
export type Status = 'WAIT' | 'DAY' | 'NIGHT' | 'END' | 'VOTE' | 'VOTE_RESULT'
export type Color = 'day' | 'night' | 'dark' | 'light' | 'kill' | 'safe' | 'dead'

export interface RoomsStatus {
    statusType: string
}

export interface Chat {
    name: string
    contents: string
    timestamp: Date
    isOwner: boolean
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
    status: Status
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

export interface Player {
    name: string
    isAlive: boolean
    job: Job | null
}

export interface RoomCodeExistsResponse {
    exists: boolean
}

export interface SkillRequest {
    target: string | null
}

export interface SkillResponse {
    job: Job
    result: Job
}

export interface MafiaVoteResult {
    target: string
}

export interface VoteRequest {
    name: string
}
