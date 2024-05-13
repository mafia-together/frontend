import { useSuspenseQuery } from '@tanstack/react-query'
import { http } from './instances'
import {
    Chat,
    ChatRequest,
    Job,
    ParticipateRequest,
    ParticipateResponse,
    RoomCodeExistsResponse,
    RoomInfo,
    RoomRequest,
    RoomResponse,
    RoomStatusRequest,
    RoomsStatus,
    MyJobResponse,
    RoomInfoResponse,
} from '../type'

export const useChatsQuery = () => {
    const { data: chats, ...rest } = useSuspenseQuery({
        queryKey: ['chats', localStorage.getItem('auth')],
        queryFn: () => getChats(),
        refetchInterval: 1000,
        staleTime: 1000,
    })
    return {
        chats,
        ...rest,
    }
}

export const useRoomsStatusQuery = () => {
    const { data: roomsStatus, ...rest } = useSuspenseQuery({
        queryKey: ['rooms', 'status', localStorage.getItem('auth')],
        queryFn: () => getRoomsStatus(),
        refetchInterval: 1000,
        staleTime: 1000,
    })

    return {
        roomsStatus,
        ...rest,
    }
}

export const getRoomsStatus = () => {
    return http.get<RoomsStatus>('/rooms/status')
}

export const useRoomsInfoQuery = () => {
    const { data: roomInfo, ...rest } = useSuspenseQuery({
        queryKey: ['rooms', 'info', localStorage.getItem('auth')],
        queryFn: () => getRoomsInfo(),
        refetchInterval: 1000,
        staleTime: 1000,
    })
    return {
        roomInfo,
        ...rest,
    }
}

export const getRoomsInfo = () => {
    return http.get<RoomInfo>(`/rooms/info`)
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

export const getMyJob = () => {
    return http.get<MyJobResponse>('/players/my/job')
}

export const getValidRoomCode = async (code: string | null) => {
    return http.get<RoomCodeExistsResponse>(`/rooms/code/exist?code=${code}`)
}
