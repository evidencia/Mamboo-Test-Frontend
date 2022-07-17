import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

  form{
    width: 85%;
    height: 40px;
    background: var(--box-body);
    padding: 20px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    overflow: hidden;
    box-shadow: 0 0 45px rgba(0, 0, 0, .08);

    svg{
      color: var(--text-body);
      font-weight: 500;
    }
    
    .searchIcon {
      cursor: pointer;
    }

    input {
        background: var(--box-body);
        border: none;
        border-radius: 6px;
        outline: none;
        line-height: 30px;
        padding: 0 15px;
        flex: 1;
        color: var(--text-body);
    }

    button {
      cursor: pointer;
      border: none;
      padding: 10px;
      font-size: 30px;
      background: transparent;
      color: var(--text-body);

      &:hover{
        filter: brightness(0.9);
      }
    }
  }
`;