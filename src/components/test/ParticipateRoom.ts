import { participateRooms, postRooms } from '../../axios/http'

export const particpateRoom = async () => {
    if (localStorage.getItem('auth')) return
    const roomResponse = await postRooms({ total: 1, mafia: 1, doctor: 0, police: 0 })
    const participateResponse = await participateRooms({
        code: roomResponse.code,
        name: '지윤짱짱맨',
    })
    console.log(participateResponse)
    localStorage.setItem('auth', participateResponse.auth)
}
