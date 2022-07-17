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
        margin: 20px 0px 0px 20px ;
        font-weight: 600;
    }

    ul {
        list-style: none;
        margin: 20px 20px;
        padding: 10px;

        li {
            display: flex;
            justify-content: space-between;
            padding: 10px 0px;

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
        }
    }

    .icon {
        width: 50px;
        height: 50px;
        align-self: center;
        margin: 0px auto 40px auto;
    }

    @media (min-width: 360px) and (max-width: 768px) {
        width: 85%;
        background: var(--box-body);
        border-radius: 10px;
        margin: 10px;

        ul{
            margin: 10px;
        }
          
    }

    @media (min-width: 640px) and (max-width: 940px) {
        width: 50%;

    }
`;