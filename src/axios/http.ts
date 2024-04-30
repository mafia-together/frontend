import { useSuspenseQuery } from '@tanstack/react-query'
import { http } from './instances'

export const useChatQuery = () => {
    const { data: chats, ...rest } = useSuspenseQuery({
        queryKey: ['chat'], // cookie에 들어있는 값으로 캐싱하는 것이 좋을 것 같은데, 이 부분 같이 상의해봐야 할 것 같아요
        queryFn: () => getChats,
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
