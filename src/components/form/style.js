import styled from "styled-components";


export const Container = styled.section`

h1{
    text-align: center;
    color: #24252a;
    font-size: 2rem;
}
margin-top: 3rem;




    
    form{
       display: flex;
       justify-content: center;
       flex-wrap: wrap;
       gap: 10rem;
       margin-top: 2rem;

       .errors{
        color: red;
        font-size: 0.600rem;
       }
       h3{
                text-align: center;
                color: #24252a;
        }


       .form1{
        display: flex;
        flex-direction: column;
        gap: 0.200rem;
        background-color: #f9f8f8;
        border-radius: 1.50rem;
        box-shadow: 0.125rem 0.125rem 0.313rem #e0e0e0;
        width: 30rem;
        height: 30rem;
        padding: 3rem;
        input{
            height: 2rem;
            border-radius: 5px;
            border: 1px solid rgb(183, 179, 179);

        }
       }
       .form2{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: #f9f8f8;
        border-radius: 1.50rem;
        box-shadow: 0.125rem 0.125rem 0.313rem #e0e0e0;
        width: 30rem;
        height: 25rem;
        padding: 3rem;

        select{
            height: 2rem;
            border-radius: 5px;
            border: 1px solid rgb(183, 179, 179);
            background-color: white;
        }
       }
    }

.bnt1{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;


    button{
        width: 15rem;
        height: 3rem;
        border-radius: 5px;
        border: none;
        background-color: rgb(54, 220, 165);
        color: white;
        font-size: 1rem;

    }
}

`
