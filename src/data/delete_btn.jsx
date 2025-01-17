import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1px 1px;
  font-size: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export function DeleteBTN({ onClick }) {
  return (
    <StyledWrapper>
      <StyledButton className="button" type="button" onClick={onClick}>
        <span className="button__text">Delete</span>
        <span className="button__icon"><svg className="svg" height={512} viewBox="0 0 512 512" width={512} xmlns="http://www.w3.org/2000/svg"><title /><path d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320" style={{fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 32}} /><line style={{stroke: '#fff', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: 32}} x1={80} x2={432} y1={112} y2={112} /><path d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40" style={{fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 32}} /><line style={{fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 32}} x1={256} x2={256} y1={176} y2={400} /><line style={{fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 32}} x1={184} x2={192} y1={176} y2={400} /><line style={{fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 32}} x1={328} x2={320} y1={176} y2={400} /></svg></span>
      </StyledButton>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    position: relative;
    width: 150px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: 1px solid #cc0000;
    background-color: #e50000;
    overflow: hidden;
  }

  .button, .button__icon, .button__text {
    transition: all 0.3s;
  }

  .button .button__text {
    transform: translateX(35px);
    color: #fff;
    font-weight: 600;
  }

  .button .button__icon {
    position: absolute;
    transform: translateX(109px);
    height: 100%;
    width: 39px;
    background-color: #cc0000;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button .svg {
    width: 20px;
  }

  .button:hover {
    background: #cc0000;
  }

  .button:hover .button__text {
    color: transparent;
  }

  .button:hover .button__icon {
    width: 148px;
    transform: translateX(0);
  }

  .button:active .button__icon {
    background-color: #b20000;
  }

  .button:active {
    border: 1px solid #b20000;
  }`;

export default DeleteBTN;
