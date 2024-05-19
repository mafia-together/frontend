type PropsType = {
    lastTime: number
}

export const TimeOnlySeconds = ({ lastTime }: PropsType) => {
    const lastSecond = `${Math.ceil(lastTime % 60)}`
    return <div>{lastSecond}</div>
}
