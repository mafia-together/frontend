import { VariablesCSS } from "./VariablesCSS";

export const BaseCss = `
    body,
    html,
    main,
    h1,
    p,
    button {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #eeeeee;
    }

    button,
    input {
        border: none;
        background: none;
    }
    
    // 폰트
    @font-face {
        font-family: "Cafe24Ssurround";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/Cafe24Ssurround.woff")
            format("woff");
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'LOTTERIACHAB';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/LOTTERIACHAB.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }


    @font-face{
        font-family:'DNFForgedBlade';font-style:normal;font-weight:300;
        src:url('//cdn.df.nexon.com/img/common/font/DNFForgedBlade-Light.otf')format('opentype')
    }        
    @font-face{
        font-family:'DNFForgedBlade';font-style:normal;font-weight:500;
        src:url('//cdn.df.nexon.com/img/common/font/DNFForgedBlade-Medium.otf')format('opentype')
    }        
    @font-face{
        font-family:'DNFForgedBlade';font-style:normal;font-weight:700;
        src:url('//cdn.df.nexon.com/img/common/font/DNFForgedBlade-Bold.otf')format('opentype')
    }
    

    @font-face {
        font-family: 'WAGURITTF';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2403@1.0/WAGURITTF.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'KCC-Hanbit';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2403-2@1.0/KCC-Hanbit.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }



    // 애니메이션
    @keyframes smoothshow {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }


    @keyframes smoothshowhide {
        0% {
            opacity: 0;
        }
        30% {
            opacity: 1;
        }
        85% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }

    @keyframes smoothup {
        0% {
            transform: translate(calc(-50% - ${VariablesCSS.margin}), calc(-50% + 10%));
        }
        30% {
            transform: translate(calc(-50% - ${VariablesCSS.margin}), -50%);
        }
        85% {
            transform: translate(calc(-50% - ${VariablesCSS.margin}), -50%);
        }
        100% {
            transform: translate(calc(-50% - ${VariablesCSS.margin}), calc(-50% + 10%));
        }
    }
`;
