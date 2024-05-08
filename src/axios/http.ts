import { useSuspenseQuery } from '@tanstack/react-query'
import { http } from './instances'
import {
    Chat,
    ChatRequest,
    ParticipateRequest,
    ParticipateResponse,
    Player,
    RoomInfoResponse,
    RoomRequest,
    RoomResponse,
    RoomStatusRequest,
} from '../type'

export const useChatsQuery = () => {
    const { data: chats, ...rest } = useSuspenseQuery({
        queryKey: ['chats', localStorage.getItem('auth')],
        queryFn: () => getChats(),
        refetchInterval: 1000,
    })
    return {
        chats,
        ...rest,
    }
}

export const useRoomsInfoQuery = () => {
    const { data: roomInfo, ...rest } = useSuspenseQuery({
        queryKey: ['rooms', 'info', localStorage.getItem('auth')],
        queryFn: () => getRoomsInfo(),
        refetchInterval: 1000,
    })
    return {
        roomInfo,
        ...rest,
    }
}

export const getRoomsInfo = () => {
    // return http.get<RoomInfoResponse>(`/rooms/info`)
    const mockPlayer: Player = {
        name: '지윤짱짱맨',
        isAlive: true,
        role: 'mafia',
    }
    return {
        startTime: new Date(),
        endTime: new Date(),
        alive: true,
        totalPlayers: 6,
        isMaster: true,
        players: [mockPlayer],
    }
}

export const getChats = () => {
    return http.get<Chat[]>(`/chat`)
}

export const postChats = (payload: ChatRequest) => {
    return http.post(`/chat`, payload)
}

export const postRooms = (payload: RoomRequest) => {
    return http.post<RoomResponse>('/rooms', payload)
}

export const participateRooms = (payload: ParticipateRequest) => {
    return http.get<ParticipateResponse>(`/rooms?code=${payload.code}&name=${payload.name}`)
}

export const createRoom = (payload: {
    total: number
    mafia: number
    doctor: number
    police: number
}) => {
    return http.post<RoomResponse>('/rooms', payload)
}

export const getRoomsCode = () => {
    return http.get<RoomResponse>(`/rooms/code`)
}

export const patchRoomStatus = async (payload: RoomStatusRequest) => {
    http.patch(`/rooms/status`, payload)
}
