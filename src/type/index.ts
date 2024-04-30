interface Chat {
    name: string
    content: string
    timestamp: Date
    owner: boolean
}

interface ChatRequest {
    content: string
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
