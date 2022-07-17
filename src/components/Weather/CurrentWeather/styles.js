import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    main{
        width: 85%;
        height: 270px;
        border-radius: 10px;
        margin: 15px 10px 0px 10px;
        background: var(--box-body);

        h1{
            font-size: 1.3rem;
            color: var(--text-body);
            margin: 20px 20px;
            font-weight: 600;
        }

        .temperature{
            display: flex;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;

            

            div {
                width: 100%;
                margin: 0 auto;


                p{
                    font-size: 1rem;
                    margin-left: 50px;
                    color: var(--text-title);
                    font-weight: bold;
                }

                span{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-body);

                    img{
                        width: 100px;
                        height: 80px;
                    }

                    h3{
                        font-size: 6rem;
                        font-weight: 100;
                    }
                }

                h2{
                    font-size: 1rem;
                    margin-left: 50px;
                    color: var(--text-body);
                    font-weight: bold;
                }
            }

            .info-climate{

                div{
                    display: flex;
                    align-items: center;
                    padding-left: 50px;
                    margin-top: 10px;


                    i{
                        margin: 10px  30px 10px 0px;
                        color: var(--text-title);


                        svg{
                            margin-right: 10px;
                            color: var(--text-body);
                        }
                    }
                }

                ul{
                    margin-left: 50px;

                    li{
                        display: flex;
                        align-items: center;
                        list-style: none;
                        color: var(--text-body);
                        margin: 8px  15px 8px 0px;

                        & + li{
                            margin-top: 10px;
                        }

                        svg{
                            color: var(--text-body);
                            margin: 0px  8px 0px 0px;

                        }

                        strong{
                            color: var(--text-title);
                            margin: 0px  0px 0px 14px;
                        }
                    }
                }
            }
        }

    }

    @media (min-width: 360px) and (max-width: 640px) {
        width: 100%;
        main{
            height: 420px;

            
            .temperature{
                display: flex;
                flex-direction: column;
            }

            .info-climate{
                padding-top: 30px;
            }
         }
    }
           

    @media (min-width: 640px) and (max-width: 940px) {
        width: 100%;
        main{
            height: 420px;

            
            .temperature{
                display: flex;
                flex-direction: column;
            }

            .info-climate{
                padding-top: 30px;
            }
         }
          
    }
`;