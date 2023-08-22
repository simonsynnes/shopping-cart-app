import React from 'react';

interface IProps {
  totalUniqueItems: number;
  totalItems: number;
}
const NavigationBar: React.FC<IProps> = (props) => {
  return (
    <div className="justify-center flex items-center">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
      <div>
        <span className="text-2xl mb-4 mr-2 ml-2">
          {props.totalUniqueItems ? props.totalUniqueItems : 0}
        </span>
        unike varer
      </div>
      <div>
        <span className="text-2xl mb-4 mr-2 ml-2 w-[60px]">
          {props.totalItems}
        </span>
        totale varer
      </div>
    </div>
  );
};

export default NavigationBar;
