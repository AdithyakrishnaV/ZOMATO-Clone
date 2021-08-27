import React from 'react';
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

//components
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn';
import FoodList from '../../Components/restaurant/Order-Online/FoodList';
import MenuListContainer from '../../Components/restaurant/Order-Online/MenuListContainer';

const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col gap-3 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className="w-full px-3 md:w-3/4">
                    <div className="pl-3 mb-4">
                        <h2 className="text-xl font-semibold">Order Online</h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                        <AiOutlineCompass /> Live track your order | <BiTimeFive /> 45 min
                        </h4>
                    </div>
                    <section className="flex flex-col h-screen overflow-y-scroll gap-3 md:gap-5">
                        <FoodList 
                            title="Recommended"
                            items={[
                                {
                                    image:"https://b.zmtcdn.com/data/dish_photos/575/0239edbf30eabd638a98f99df1c8c575.jpg?fit=around|130:130&crop=130:130;*,*",
                                    price:"1000",
                                    rating: 3,
                                    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta repellendus sit cumque eum odio animi doloribus quo voluptatem aut ipsam, consectetur non minima rerum eligendi magnam aspernatur culpa provident?",
                                    title: "Yummy food",
                                },
                            ]}
                        />
                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;
