import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 37.5rem;
  min-width: 30rem;

  text-align: center;

  h1 {
    font-size: 2.625rem;
  }

  h2, img, input {
    margin-bottom: 1rem;
  }

  form {
    display: grid;
  }

  input {
    height: 3.5rem;
    padding: 0.5rem 1rem;

    border: 1px solid var(--gray);
    border-radius: 0.375rem;
    font-size: 1.5rem;
    color: var(--text-body);

    &:active, &:focus, &:focus-within {
      border-color: var(--orange-1);
      outline-color: var(--orange-1);
    }
  }

  button[type="submit"], a {
    height: 2.5rem;
    margin-bottom: 2rem;

    border: 1px solid var(--orange-1);
    border-radius: 0.375rem;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.25rem;
  }

  button {
    color: var(--white);
    background-color: var(--orange-1);
  }

  a {
    padding: 0.5rem;

    color: var(--orange-1);
    background-color: var(--white);
  }
`;