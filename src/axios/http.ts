import { useSuspenseQuery } from '@tanstack/react-query'
import { http } from './instances'

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
