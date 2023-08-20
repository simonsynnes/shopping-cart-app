import React from "react";

interface IProps {
    totalUniqueItems: number;
    totalItems: number;
}
const NavigationBar: React.FC<IProps> = (props) => {
    return (
        <nav className="justify-center navbar-light">
            <div className="navbar-brand">
                <i className="fa fa-shopping-cart" />
                <span className="text-2xl mb-4 badge-pill">
                    {props.totalUniqueItems ? props.totalUniqueItems : 0}
                </span>
                unike varer
            </div>
            <div className="justify-center-brand">
                <span className="text-2xl mb-4 w-[60px] badge-pill">{props.totalItems}</span>
                totale varer
            </div>
        </nav>
    );
};

export default NavigationBar;
