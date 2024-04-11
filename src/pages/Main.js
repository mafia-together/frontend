import React from "react";

export default function Main() {
    return (
        <div>
            <div>
                <h1>마피아 투게더</h1>
                <div>
                    <p>마피아는 시민들 사이에 숨어</p>
                    <p>끝까지 살아남으세요.</p>
                    <p>시민들은 대화를 통해</p>
                    <p>숨어있는 마피아를 찾아내세요.</p>
                </div>
                <div>
                    <button type="button">
                        <img src="/src/assets/icon/create_room.svg" alt="" draggable="false" />
                        <p>방만들기</p>
                    </button>
                    <button type="button">
                        <img src="/src/assets/icon/participate.svg" alt="" />
                        <p>참가하기</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
