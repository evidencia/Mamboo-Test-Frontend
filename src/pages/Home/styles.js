import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: row column;
    width: 100%;
    padding: 20px 15px;

    @media (min-width: 360px) and (max-width: 640px) {
          flex-direction: column;
          align-items: center;
    }

    @media (min-width: 640px) and (max-width: 940px) {
        flex-direction: column;
        align-items: center;
    }
`;