import styled from 'styled-components';

export const Container = styled.div`
    width: 20%;
    background: var(--box-body);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    h2{
        font-size: 1.3rem;
        color: var(--text-body);
        margin: 20px 20px;
        font-weight: 600;
    }

    ul {
        list-style: none;
        margin: 10px 20px;

        li {
            display: flex;
            justify-content: space-between;
            padding-top: 10px;

            & + ul {
                margin: 10px 0px;
            }

            a {
                display: block;
                text-decoration: none;
                color: var(--text-alert);
                font-size: 1rem;
                font-weight: bold;
            }

            span {
                cursor: pointer;
                font-size: 1.5em;
                padding-left: 10px;
                color: var(--text-body);

            }
        }
    }

    .icon {
        width: 40px;
        height: 40px;
        align-self: center;
    }

    @media (min-width: 360px) and (max-width: 768px) {
        width: 85%;
        background: var(--box-body);
        border-radius: 10px;
        margin: 10px;
          
    }

    @media (min-width: 640px) and (max-width: 940px) {
        width: 50%;

    }
`;