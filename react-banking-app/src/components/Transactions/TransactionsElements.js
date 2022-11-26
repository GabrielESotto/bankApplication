import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(180deg, black, #131313)
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: calc(100vh - 80px); 
`

export const Title = styled.h1`
  color: black;
  font-size: 31px;
  text-align: center;
  margin-top: 30px;
`

export const ContentWrapper = styled.div`
  background-color: whitesmoke;
  width: 70vw;
  height: 80vh;
  margin: 150px auto 0 auto;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`

export const ContentBox = styled.div`
  margin: 10px;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`

export const TableOne = styled.div`
  width: 100%;
  height: 70vh;
  overflow-y: auto;
`

export const TitleOne = styled.h1`
  color: black;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid black;

  @media screen and (max-width: 768px) {
      font-size: 15px;
  }

  @media screen and (max-width: 500px) {
      font-size: 10px;
  }

  @media screen and (max-width: 400px) {
    font-size: 7px;
  }
`

export const CreditedContent = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;

  li {
    list-style: none;
    border-bottom: 1px dashed black;
  }
`

export const DebitedContent = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;

  li {
    list-style: none;
    border-bottom: 1px dashed black;
  }
`

export const ValueContent = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;

  li {
    list-style: none;
    border-bottom: 1px dashed black;
  }
`

export const DateContent = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;

  li {
    list-style: none;
    border-bottom: 1px dashed black;
  }
`

export const Filtro = styled.p`
  margin-right: 10px;
  text-align: center;

  @media screen and (max-width: 1024px) {
    margin-right: 2px;
  }
`

export const ContentFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
      font-size: 14px;
  }

  @media screen and (max-width: 768px) {
      font-size: 10px;
  }
`

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const FilterContent = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  align-items: center;
`

export const FiltroBtn = styled.button`
  padding: 3px;
  margin-left: 10px;
  border: 1px solid black;
  font-size: 13px;
  cursor: pointer;
  background-color: #cfccc0;

  &:active{
    background-color: #b0afab;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    margin-left: 2px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 9px;
  }
`

export const FilterInitialDate = styled.input`
  width: 100px;
  height: 30px;
  margin: 0 auto;
`

export const FilterActualDate = styled.p`
  margin-left: 3px;
`

export const FilterUntil = styled.p`
  margin-left: 10px;
`
