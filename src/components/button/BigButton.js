/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { VariablesCss } from "../../styles/VariablesCss";

export default function BigButton({ type, use, ready = true }) {
    const backgroundColor = {
        emphasis: VariablesCss.light90,
        soft: VariablesCss.light30,
    };

    const color = {
        emphasis: VariablesCss.night,
        soft: VariablesCss.light,
    };

    const icon = {
        createRoom: "/img/icon/create_room.svg",
        participate: "/img/icon/participate.svg",
        gameStart: "/img/icon/play.svg",
    };

    const text = {
        createRoom: "방만들기",
        participate: "참가하기",
        gameStart: "게임시작",
    };

    const Button = styled.button`
        & > img {
            display: block;
        }

        display: flex;
        justify-content: center;
        align-items: center;
        gap: 18px;
        width: 100%;
        height: ${VariablesCss.bigbutton};
        font-size: ${VariablesCss.default};
        font-family: "Cafe24Ssurround", sans-serif;
        border: 0;
        border-radius: 15px;
        box-shadow: inset -4px -4px 4px rgba(0, 0, 0, 0.25);
        transition-property: box-shadow transform;
        transition-duration: 0.1s;
        cursor: pointer;
        background-color: ${backgroundColor[type]};
        color: ${color[type]};
        ${ready ? "opacity: 1" : "opacity: 0.2"};

        ${ready &&
        `&:active {
            box-shadow: inset -2px -2px 2px rgba(0, 0, 0, 0.25);
            transform: translate(0.5px, 1px);`}
    `;
    return (
        <Button type="button">
            <img src={icon[use]} alt="" draggable="false" />
            <p>{text[use]}</p>
        </Button>
    );
}
