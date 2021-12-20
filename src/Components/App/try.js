import React, {Component, useState} from "react";

const DataContext = React.createContext("hi");

export default function Try ({children}) {
return(
    <DataContext.Provider value={"hi2"}>
        {children}
    </DataContext.Provider>

);


}