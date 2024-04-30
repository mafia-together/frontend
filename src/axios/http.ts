import { useSuspenseQuery } from '@tanstack/react-query'
import { http } from './instances'

export const useChatsQuery = () => {
    const { data: chats, ...rest } = useSuspenseQuery({
        queryKey: ['chat'], // cookie에 들어있는 값으로 캐싱하는 것이 좋을 것 같은데, 이 부분 같이 상의해봐야 할 것 같아요
        queryFn: () => getChats(),
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

export const getRooms = (payload: ParticipateRequest) => {
    return http.get<ParticipateResponse>(`/rooms?code=${payload.code}&name=${payload.name}`)
}
