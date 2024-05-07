interface Chat {
    name: string
    contents: string
    timestamp: Date
    owner: boolean
}

interface ChatRequest {
    contents: string
}

interface RoomResponse {
    code: string
}

interface RoomRequest {
    total: number
    mafia: number
    doctor: number
    police: number
}

interface ParticipateResponse {
    auth: string
}

interface ParticipateRequest {
    code: string
    name: string
}

interface RoomStatusRequest {
    status: 'WAIT' | 'DAY' | 'NIGHT' | 'END'
}
