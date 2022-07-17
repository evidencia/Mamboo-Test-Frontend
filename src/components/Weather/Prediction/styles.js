import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .infoForecasts{
            width: 85%;
            overflow: auto;
            border-radius: 10px;
            box-shadow: 0 0 45px rgba(0, 0, 0, .08);
            background: var(--body-prediction);
            margin: 15px auto;

            h1{
                font-size: 1.3rem;
                color: var(--text-body);
                margin: 20px 20px;
                font-weight: 600;
             }

            .forecasts{
                width: 100%;
                height: 200px;
                margin: 15px auto;

                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 10px;

                span{
                    width: 100px;
                    margin: 10px auto;
                    text-align: center;

                    h1{
                        color: var(--text-title);
                    }

                    img{
                        width: 80px;
                        height: 70px;
                    }

                    strong{
                        color: var(--text-title);
                    }

                    p{
                        color: var(--text-body);
                    }
                }
            }

            
        }

        @media (min-width: 360px) and (max-width: 640px) {
            .infoForecasts{
                margin-top: 20px;
            }
        }


`;