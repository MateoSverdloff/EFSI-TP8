"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Paises() {
    const [paises, setPaises] = useState([]);
    const [listado, setListado] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/unicode');
                setPaises(response.data.data);
                setListado(response.data.results || []);
                console.log('paises antes: ',paises)
                console.log('data: ',    response.data.data)
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);
    return (paises, listado);
}
