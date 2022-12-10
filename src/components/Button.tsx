import React from 'react'

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button ( props: ButtonProps ) {
  return (
    <button onClick={ props.onClick } className={ props.className }>
        { props.children }
    </button>
  );
};