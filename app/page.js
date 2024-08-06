"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import {paises, listado} from './src/components/Flags/page.js'
import Paises from './src/components/Flags/page.js'

export default function Home() {
  const [pais, setPaises] = useState(null);
  const {paises} = Paises();
  console.log('Paises ses: ',paises)
  return (
    <div>
      <h1>Home Page</h1>
      <Paises />
    </div>
  );
}