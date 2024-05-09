import { useQuery, useSuspenseQuery } from '@tanstack/react-query'
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

export const useRoomsStatusQuery = () => {
    const { data: roomsStatus } = useSuspenseQuery({
        queryKey: ['rooms', 'status', localStorage.getItem('auth')],
        queryFn: () => getRoomsStatus(),
        refetchInterval: 1000,
        staleTime: 1000,
    })

    return roomsStatus?.status
}

export const getRoomsStatus = () => {
    return http.get<RoomsStatus>('/rooms/status')
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

export const getRooms = (payload: ParticipateRequest) => {
    return http.get<ParticipateResponse>(`/rooms?code=${payload.code}&name=${payload.name}`)
}
